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
  stopPassword?: string
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
      const stopPasswordRaw =
        typeof parsed.stopPassword === 'string'
          ? parsed.stopPassword
          : undefined
      const stopPassword = typeof stopPasswordRaw === 'string' ? stopPasswordRaw.trim() : undefined

      if (!setupToken && !token && !organizationId && !stopPassword) {
        log.warn(`Ignoring invalid config.json at ${filePath}: expected setupToken, token, organizationId or stopPassword`)
        continue
      }

      return {
        setupToken,
        organizationId,
        token,
        stopPassword,
      }
    } catch (err) {
      log.error(`Failed to read config.json at ${filePath}:`, err)
    }
  }

  return null
}

export async function loginWithSetupToken(
  payload: { setupToken: string },
): Promise<{ token: string, organizationId: string, stopPassword?: string } | null> {
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
      | { token?: string, organizationId?: string, stopPassword?: string }
      | undefined
    const token = data?.token
    const organizationId = data?.organizationId
    const stopPassword = typeof data?.stopPassword === 'string' ? data.stopPassword.trim() : undefined
    if (
      typeof token === 'string' &&
      token.length > 0 &&
      typeof organizationId === 'string' &&
      organizationId.length > 0
    ) {
      return { token, organizationId, stopPassword }
    }
  } catch {
    log.error('Setup token login request failed', { url })
  }

  return null
}

export async function hydrateAuthFromDeviceConfig() {
  const external = readExternalDeviceConfig()

  const current = store.get('config')

  const persisted = {
    sitradUrl: current?.sitradUrl ?? '',
    username: current?.username ?? '',
    password: current?.password ?? '',
    stopPassword: current?.stopPassword ?? '',
    organizationId: current?.organizationId ?? '',
    token: current?.token ?? '',
    setupToken: current?.setupToken ?? '',
  }

  const externalToken = external?.token
  const externalOrgId = external?.organizationId
  const externalSetupToken = external?.setupToken
  const externalStopPassword = external?.stopPassword
  const setupToken = (externalSetupToken ?? persisted.setupToken).trim()

  persisted.setupToken = setupToken
  persisted.stopPassword = externalStopPassword ?? persisted.stopPassword

  const hasPersistedAuth =
    typeof persisted.token === 'string' &&
    persisted.token.trim().length > 0 &&
    typeof persisted.organizationId === 'string' &&
    persisted.organizationId.trim().length > 0

  const hasExternalAuth =
    typeof externalToken === 'string' &&
    externalToken.trim().length > 0 &&
    typeof externalOrgId === 'string' &&
    externalOrgId.trim().length > 0

  // Use setupToken only for first access (when auth is still empty).
  if (setupToken && !hasPersistedAuth && !hasExternalAuth) {
    const login = await loginWithSetupToken(
      { setupToken },
    )
    if (!login) {
      store.set('config', persisted)
      log.warn('Automatic setupToken login failed. Keeping previous authentication data.')
      return
    }

    persisted.token = login.token
    persisted.organizationId = login.organizationId
    persisted.stopPassword = login.stopPassword || persisted.stopPassword
    store.set('config', persisted)
    log.info('Automatic authentication by setupToken completed.')
    return
  }

  if (
    typeof externalToken === 'string' &&
    externalToken.length > 0 &&
    typeof externalOrgId === 'string' &&
    externalOrgId.length > 0
  ) {
    persisted.token = externalToken
    persisted.organizationId = externalOrgId
  }

  store.set('config', persisted)
}

export async function resolveCollectorConfig() {
  await hydrateAuthFromDeviceConfig()
  return store.get('config')
}
