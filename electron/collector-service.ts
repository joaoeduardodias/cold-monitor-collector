import log from 'electron-log'
import WebSocket from 'ws'
import { WS_URL } from './constants'
import { loginWithSetupToken, resolveCollectorConfig } from './device-auth'
import { getInstrumentsWithValues } from './functions-instrument'
import { store } from './store'
import { createSlug } from './utils/create-slug'
import { getProcessStatus } from './utils/get-process-status'
import { setTray } from './window-tray'

let socket: WebSocket | null = null
let reconnectTimeout: NodeJS.Timeout | null = null
let isSocketAuthenticated = false
let collectorRunId = 0

let instrumentMapping: Record<string, string> = {}

type WsOutgoingMessage =
  | {
    type: 'AUTH'
    payload: {
      token: string
      organizationId?: string
    }
  }
  | {
    type: 'INSTRUMENT_CREATE'
    payload: {
      idSitrad: number
      name: string
      slug: string
      model: number
      type: 'PRESSURE' | 'TEMPERATURE'
      organizationId: string
    }[]
  }
  | {
    type: 'INSTRUMENT_READING'
    payload: {
      idSitrad: number;
      name: string;
      slug: string;
      model: number;
      type: "TEMPERATURE" | "PRESSURE";
      error: boolean;
      value: number | undefined;
      status: string;
      setPoint: number | undefined;
      differential: number | undefined;
      isSensorError: boolean | undefined;
      organizationId: string;
    }[]
  }

function sendWsMessage(message: WsOutgoingMessage): void {
  if (!socket || socket.readyState !== WebSocket.OPEN) return
  socket.send(JSON.stringify(message))
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function mapInstrumentsForCreate(instruments: Awaited<ReturnType<typeof getInstrumentsWithValues>>, organizationId: string) {
  return instruments.map(inst => ({
    idSitrad: inst.id,
    name: inst.name,
    slug: createSlug(inst.name),
    model: inst.modelId ?? 0,
    type: inst.modelId === 67 ? 'PRESSURE' as const : 'TEMPERATURE' as const,
    organizationId,
  }))
}

function mapInstrumentsForReading(instruments: Awaited<ReturnType<typeof getInstrumentsWithValues>>, organizationId: string) {
  function resolveInstrumentValue(inst: any) {
    switch (inst.modelId) {
      case 67:
        return inst.GasPressure ?? 0

      case 73:
      case 78:
        return inst.Temperature ?? 0

      default:
        return inst.Sensor1 ?? 0
    }
  }

  return instruments.map(inst => ({
    idSitrad: inst.id,
    name: inst.name,
    slug: createSlug(inst.name),
    model: inst.modelId ?? 0,
    type: inst.modelId === 67 ? 'PRESSURE' as const : 'TEMPERATURE' as const,
    value: resolveInstrumentValue(inst),
    status: getProcessStatus(inst),
    setPoint: Number(inst.modelId === 73 ? inst.FncSetpoint : inst.modelId === 78 ? inst.Setpoint1RelativeTemp : inst.CurrentSetpoint ?? 0),
    differential: inst.CurrentDifferential ?? 0,
    isSensorError: Boolean(inst.modelId === 67 ? inst.IsErrorPressureSensor : inst.modelId === 73 ? inst.IsSensorError : inst.IsErrorS1),
    error: Boolean(inst.error),
    organizationId,
  }))
}

async function runCollectorLoop(config: NonNullable<Awaited<ReturnType<typeof resolveCollectorConfig>>>, runId: number) {
  while (store.get('isRunning') && runId === collectorRunId) {
    const cycleStartedAt = Date.now()

    if (socket?.readyState !== WebSocket.OPEN || !isSocketAuthenticated) {
      await sleep(500)
      continue
    }

    try {
      const instruments = await getInstrumentsWithValues(config)

      if (!store.get('isRunning') || runId !== collectorRunId) {
        break
      }

      const createPayload = mapInstrumentsForCreate(instruments, config.organizationId)
      if (createPayload.length && socket?.readyState === WebSocket.OPEN && isSocketAuthenticated) {
        sendWsMessage({
          type: 'INSTRUMENT_CREATE',
          payload: createPayload,
        })
      }

      const readingPayload = mapInstrumentsForReading(instruments, config.organizationId)
      if (readingPayload.length && socket?.readyState === WebSocket.OPEN && isSocketAuthenticated) {
        sendWsMessage({
          type: 'INSTRUMENT_READING',
          payload: readingPayload,
        })
      }
    } catch (err) {
      log.error('Failed collector polling cycle:', err)
    }

    const elapsed = Date.now() - cycleStartedAt
    const waitMs = Math.max(0, 5000 - elapsed)
    await sleep(waitMs)
  }
}

function scheduleReconnect() {
  if (reconnectTimeout) return
  reconnectTimeout = setTimeout(() => {
    reconnectTimeout = null
    const running = store.get('isRunning')
    if (running) startAppCollector()
  }, 3000)
}

export async function startAppCollector() {
  collectorRunId += 1
  const runId = collectorRunId

  let config = await resolveCollectorConfig()
  if (!config) return
  if (!config.sitradUrl || !config.username || !config.password) {
    log.warn('Collector not started: missing Sitrad credentials.')
    store.set('isRunning', false)
    setTray(false)
    return
  }
  if ((!config.token || !config.organizationId) && config.setupToken?.trim()) {
    const login = await loginWithSetupToken({ setupToken: config.setupToken.trim() })
    if (login) {
      const prev = store.get('config')
      store.set('config', {
        sitradUrl: prev?.sitradUrl ?? config.sitradUrl,
        username: prev?.username ?? config.username,
        password: prev?.password ?? config.password,
        setupToken: '',
        token: login.token,
        organizationId: login.organizationId,
      })
      config = (await resolveCollectorConfig()) ?? config
    }
  }

  if (!config.token || !config.organizationId) {
    log.warn('Collector not started: missing activation token authentication.')
    store.set('isRunning', false)
    setTray(false)
    return
  }

  store.set('isRunning', true)
  setTray(true)
  log.info('Collector started')

  if (socket) socket.close()
  isSocketAuthenticated = false

  log.info(`Connecting to collector WS: ${WS_URL}`)
  socket = new WebSocket(WS_URL)

  socket.on('open', async () => {
    log.info('WS connected')

    instrumentMapping = {}
    const authPayload: { token: string, organizationId?: string } = {
      token: config.token,
    }
    if (typeof config.organizationId === 'string' && config.organizationId.trim().length > 0) {
      authPayload.organizationId = config.organizationId.trim()
    }

    sendWsMessage({
      type: 'AUTH',
      payload: authPayload,
    })
  })

  socket.on('message', raw => {
    try {
      const msg = JSON.parse(raw.toString())

      if (msg.type === 'AUTH_ERROR') {
        isSocketAuthenticated = false
        store.set('isRunning', false)
        setTray(false)
        log.error(`WS auth error: ${msg.message || 'unknown error'}`)
        socket?.close()
        return
      }

      if (msg.type === 'AUTH_OK') {
        isSocketAuthenticated = true
        void runCollectorLoop(config, runId).catch((err) => {
          log.error('Collector loop failed:', err)
        })
        return
      }

      if (msg.type === 'INSTRUMENT_CREATED') {
        (msg.payload as { id: string; slug: string }[]).forEach(inst => {
          instrumentMapping[inst.slug] = inst.id
        })
      }
    } catch (err) {
      log.error('Invalid WS message received:', err)
    }
  })

  socket.on('close', () => {
    isSocketAuthenticated = false
    scheduleReconnect()
  })
  socket.on('error', () => scheduleReconnect())
}

export function stopCollector() {
  if (reconnectTimeout) {
    clearTimeout(reconnectTimeout)
    reconnectTimeout = null
  }
  collectorRunId += 1
  store.set('isRunning', false)
  setTray(false)
  if (socket) socket.close()
  isSocketAuthenticated = false
  log.info('Collector stopped')
}
