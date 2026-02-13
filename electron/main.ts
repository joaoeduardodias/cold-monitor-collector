import axios from 'axios'
import { app, BrowserWindow, ipcMain, Menu, nativeImage, Tray } from 'electron'
import log from 'electron-log'
import Store from 'electron-store'
import https from 'https'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import WebSocket from 'ws'
import { getInstruments, getInstrumentsWithValues } from './functions-instrument'
import { NormalizedReading } from './types'
import { createSlug } from './utils/create-slug'
import { testWebSocketConnection } from './utils/test-websocket-connection'
import { toNormalizedReading } from './utils/to-normalized-reading'

process.on('uncaughtException', (err) => {
  log?.error?.('uncaughtException:', err)
})

process.on('unhandledRejection', (reason) => {
  log?.error?.('unhandledRejection:', reason)
})
app.disableHardwareAcceleration()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.APP_ROOT = path.join(__dirname, '..')
const VITE_DEV = process.env['VITE_DEV_SERVER_URL']
const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')
const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')

const store = new Store<{
  config?: {
    sitradUrl: string
    username: string
    password: string
    organizationId: string
  },
  isRunning: boolean
}>()

let win: BrowserWindow | null = null
let tray: Tray | null = null
let socket: WebSocket | null = null
let interval: NodeJS.Timeout | null = null
let reconnectTimeout: NodeJS.Timeout | null = null

const agent = new https.Agent({ rejectUnauthorized: false })
let instrumentMapping: Record<string, string> = {}


function setTray(running: boolean) {
  tray?.setContextMenu(Menu.buildFromTemplate([
    {
      label: 'Configuração',
      click: () => {
        if (!win) createWindow()
        else win.show()
      }
    },
    {
      label: running ? 'Parar envio' : 'Iniciar envio',
      click: () => running ? stopCollector() : startAppCollector()
    },
    { type: 'separator' },
    {
      label: 'Sair',
      click: () => app.quit()
    }
  ]))
}

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 700,
    center: true,
    minWidth: 520,
    minHeight: 560,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    roundedCorners: true,
    webPreferences: {
      preload: path.join(MAIN_DIST, 'preload.mjs'),
    }
  })

  if (VITE_DEV) win.loadURL(VITE_DEV)
  else win.loadFile(path.join(RENDERER_DIST, 'index.html'))

  win.once('ready-to-show', () => {
    win?.center()
  })

  win.on('close', (e) => {
    e.preventDefault()
    win!.hide()
  })
}


const WS_URL = "ws://localhost:3333/ws/agent"



function startAppCollector() {
  const config = store.get('config')
  if (!config) return

  store.set('isRunning', true)
  setTray(true)
  log.info('Collector started')

  if (socket) socket.close()
  if (interval) clearInterval(interval)

  socket = new WebSocket(WS_URL)

  socket.on('open', async () => {
    log.info('WS connected')

    instrumentMapping = {}
    const list = await getInstruments(config)

    for (const inst of list) {
      const name = inst.name || 'instrument missing name'
      const model = typeof inst.modelId === 'number' ? inst.modelId : 72

      socket!.send(JSON.stringify({
        type: 'INSTRUMENT_CREATE',
        payload: {
          idSitrad: inst.id,
          name,
          slug: createSlug(name),
          model,
          type: model === 67 ? 'PRESSURE' : 'TEMPERATURE',
          organizationId: config.organizationId
        }
      }))
    }
  })

  socket.on('message', raw => {
    const msg = JSON.parse(raw.toString())
    if (msg.type === 'INSTRUMENT_CREATED') {
      instrumentMapping[msg.payload.slug] = msg.payload.instrumentId
    }
  })

  socket.on('close', () => scheduleReconnect())
  socket.on('error', () => scheduleReconnect())

  interval = setInterval(async () => {
    const list = await getInstrumentsWithValues(config)
    const readings: NormalizedReading[] = []

    for (const inst of list) {
      const name = inst.name || 'instrument missing name'
      const slug = createSlug(name)
      const instrumentId = instrumentMapping[slug]
      if (!instrumentId) continue

      if (inst.error) {
        log.error(`Instrumento com erro no Sitrad (${name} / ${inst.id}): ${inst.error}`)
      }

      readings.push(toNormalizedReading(inst, instrumentId))
    }

    if (readings.length && socket?.readyState === 1) {
      log.info(readings);
      socket.send(JSON.stringify({
        type: 'TEMPERATURE_READING',
        payload: { readings }
      }))
    }

  }, 5000)
}

function scheduleReconnect() {
  if (reconnectTimeout) return
  reconnectTimeout = setTimeout(() => {
    reconnectTimeout = null
    const running = store.get('isRunning')
    if (running) startAppCollector()
  }, 3000)
}

function stopCollector() {
  store.set('isRunning', false)
  setTray(false)
  if (interval) clearInterval(interval)
  if (socket) socket.close()
  log.info('Collector stopped')
}

ipcMain.handle('get-config', () => store.get('config'))
ipcMain.handle('get-state', () => store.get('isRunning'))
ipcMain.handle('save-config', (_e, cfg) => store.set('config', cfg))
ipcMain.handle('start', () => startAppCollector())
ipcMain.handle('stop', () => stopCollector())
ipcMain.handle('window-minimize', (event) => {
  BrowserWindow.fromWebContents(event.sender)?.minimize()
})
ipcMain.handle('window-toggle-maximize', (event) => {
  const target = BrowserWindow.fromWebContents(event.sender)
  if (!target) return
  if (target.isMaximized()) target.unmaximize()
  else target.maximize()
})
ipcMain.handle('window-close', (event) => {
  const target = BrowserWindow.fromWebContents(event.sender)
  if (!target) return
  target.removeAllListeners('close')
  target.close()
})

ipcMain.handle('test-sitrad-api', async (_e, config) => {
  try {
    const base = config.sitradUrl.replace(/\/+$/, '')
    const r = await axios.get(`${base}/instruments`, {
      auth: { username: config.username, password: config.password },
      httpsAgent: agent,
      timeout: 8000,
      validateStatus: () => true,
      headers: {
        Accept: 'application/json'
      }
    })

    if (r.status !== 200) {
      return { success: false, error: 'Erro na API' }
    }

    await testWebSocketConnection(WS_URL)

    return { success: true }
  } catch (err: any) {
    return { success: false, error: err.message }
  }
})


app.setLoginItemSettings({
  openAtLogin: true,
  path: process.execPath
})

app.whenReady().then(() => {
  const trayImagePath =
    process.env.NODE_ENV === 'development'
      ? path.join(process.cwd(), 'public', 'tray.png')
      : path.join(process.resourcesPath, 'tray.png')

  const trayIcon = nativeImage.createFromPath(trayImagePath)
  tray = new Tray(trayIcon)

  createWindow()

  const config = store.get('config')
  const running = !!store.get('isRunning')

  if (running && config) startAppCollector()

  setTray(running)
})

app.on('window-all-closed', (e: Electron.Event) => e.preventDefault())
