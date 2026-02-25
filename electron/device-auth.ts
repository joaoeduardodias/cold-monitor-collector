import axios from 'axios'
import log from 'electron-log'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { DEVICE_AUTH_ENDPOINT, SYSTEM_API_BASE_URL } from './constants'
import { store } from './store'

export type ExternalDeviceConfig = {
  setupToken?: string
  organizationId?: string
  token?: string
}

export function readExternalDeviceConfig(): ExternalDeviceConfig | null {
  const candidates = [
    path.join(path.dirname(process.execPath), 'config.json'),
    path.join(process.cwd(), 'config.json'),
  ]

  for (const filePath of candidates) {
    if (!existsSync(filePath)) continue

    try {
      const parsed = JSON.parse(readFileSync(filePath, 'utf-8')) as Partial<ExternalDeviceConfig>
      const setupToken = typeof parsed.setupToken === 'string' ? parsed.setupToken.trim() : undefined
      const organizationId =
        typeof parsed.organizationId === 'string' ? parsed.organizationId.trim() : undefined
      const token = typeof parsed.token === 'string' ? parsed.token.trim() : undefined

      if (!setupToken && !token && !organizationId) {
        log.warn(`Ignoring invalid config.json at ${filePath}: expected setupToken and/or token`)
        continue
      }

      return {
        setupToken,
        organizationId,
        token,
      }
    } catch (err) {
      log.error(`Failed to read config.json at ${filePath}:`, err)
    }
  }

  return null
}

export async function loginWithSetupToken(
  payload: { setupToken: string },
): Promise<{ token: string, organizationId: string } | null> {
  const url = `${SYSTEM_API_BASE_URL}${DEVICE_AUTH_ENDPOINT}`
  try {
    const response = await axios.post(
      url,
      { setupToken: payload.setupToken },
      {
        timeout: 8000,
        validateStatus: () => true,
        headers: { Accept: 'application/json' },
      },
    )

    if (response.status < 200 || response.status >= 300) {
      log.warn('Setup token login rejected', {
        url,
        status: response.status,
        body: response.data,
      })
      return null
    }

    const data = response.data as
      | { token?: string, organizationId?: string }
      | undefined
    const token = data?.token
    const organizationId = data?.organizationId
    if (
      typeof token === 'string' &&
      token.length > 0 &&
      typeof organizationId === 'string' &&
      organizationId.length > 0
    ) {
      return { token, organizationId }
    }
  } catch {
    log.error('Setup token login request failed', { url })
  }

  return null
}

export async function hydrateAuthFromDeviceConfig() {
  const external = readExternalDeviceConfig()

  const current = store.get('config')
  const hasJwt = typeof current?.token === 'string' && current.token.length > 0
  const hasOrgId =
    typeof current?.organizationId === 'string' && current.organizationId.length > 0

  const persisted = {
    sitradUrl: current?.sitradUrl ?? '',
    username: current?.username ?? '',
    password: current?.password ?? '',
    organizationId: current?.organizationId ?? '',
    token: current?.token ?? '',
    setupToken: current?.setupToken ?? '',
  }

  const externalToken = external?.token
  const externalOrgId = external?.organizationId
  const externalSetupToken = external?.setupToken

  if (
    typeof externalToken === 'string' &&
    externalToken.length > 0 &&
    typeof externalOrgId === 'string' &&
    externalOrgId.length > 0
  ) {
    persisted.token = externalToken
    persisted.organizationId = externalOrgId
    persisted.setupToken = externalSetupToken ?? persisted.setupToken
    store.set('config', persisted)
    return
  }

  if (hasJwt && hasOrgId) {
    persisted.setupToken = externalSetupToken ?? persisted.setupToken
    store.set('config', persisted)
    return
  }

  const setupToken = (persisted.setupToken || externalSetupToken || '').trim()
  if (!setupToken) {
    store.set('config', persisted)
    return
  }

  const login = await loginWithSetupToken(
    { setupToken },
  )
  if (!login) {
    persisted.setupToken = setupToken
    store.set('config', persisted)
    log.warn('Automatic setupToken login failed. Keeping manual authentication flow.')
    return
  }

  persisted.token = login.token
  persisted.organizationId = login.organizationId
  persisted.setupToken = ''
  store.set('config', persisted)
  log.info('Automatic authentication by setupToken completed.')
}

export async function resolveCollectorConfig() {
  const current = store.get('config')
  if (
    current &&
    typeof current.organizationId === 'string' &&
    current.organizationId &&
    typeof current.token === 'string' &&
    current.token
  ) {
    return current
  }

  await hydrateAuthFromDeviceConfig()
  return store.get('config')
}
