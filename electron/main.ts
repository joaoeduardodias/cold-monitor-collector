import axios from 'axios'
import { app, BrowserWindow, ipcMain, Menu, nativeImage, Tray } from 'electron'
import log from 'electron-log'
import Store from 'electron-store'
import https from 'https'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import WebSocket from 'ws'


// para rodar como serviço tem q descomentar 
// const silentWrite: typeof process.stdout.write = () => true
// process.stdout.write = silentWrite
// process.stderr.write = silentWrite

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

function slugify(name: string) {
  return name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

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
      click: () => running ? stopCollector() : startCollector()
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
    height: 800,
    frame: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      height: 24,
      color: '#f5f5f5',
      symbolColor: '#1a1a1a',
    },
    trafficLightPosition: { x: 15, y: 15 },
    vibrancy: 'sidebar',
    visualEffectState: 'active',
    backgroundColor: '#00000000', // transparente
    roundedCorners: true,
    webPreferences: {
      preload: path.join(MAIN_DIST, 'preload.mjs'),
    }
  })

  if (VITE_DEV) win.loadURL(VITE_DEV)
  else win.loadFile(path.join(RENDERER_DIST, 'index.html'))

  win.on('close', (e) => {
    e.preventDefault()
    win!.hide()
  })
}

async function getInstruments(config: any) {
  const base = config.sitradUrl.replace(/\/+$/, '')
  const r = await axios.get(`${base}/instruments`, {
    auth: { username: config.username, password: config.password },
    httpsAgent: agent
  })
  return r.data.results || []
}

async function getValues(id: number, config: any) {
  const base = config.sitradUrl.replace(/\/+$/, '')
  const r = await axios.get(`${base}/instruments/${id}/values`, {
    auth: { username: config.username, password: config.password },
    httpsAgent: agent
  })


  return r.data.results || []
}

const WS_URL = "ws://localhost:3333/ws/agent"

function startCollector() {
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
      socket!.send(JSON.stringify({
        type: 'INSTRUMENT_CREATE',
        payload: {
          idSitrad: inst.id,
          name: inst.name,
          slug: slugify(inst.name),
          model: inst.modelId,
          type: inst.modelId === 67 ? 'PRESSURE' : 'TEMPERATURE',
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
    const list = await getInstruments(config)
    const readings: { instrumentId: string; data: any[] }[] = []

    for (const inst of list) {
      const slug = slugify(inst.name)
      const instrumentId = instrumentMapping[slug]
      if (!instrumentId) continue

      let sensors
      try {
        sensors = await getValues(inst.id, config)
      } catch (err) {
        log.error('Erro ao obter valores do Sitrad:', err instanceof Error ? err.message : String(err))
        continue
      }

      readings.push({
        instrumentId,
        data: sensors
      })
    }

    if (readings.length && socket?.readyState === 1) {
      log.info("Enviando")
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
    if (running) startCollector()
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
ipcMain.handle('start', () => startCollector())
ipcMain.handle('stop', () => stopCollector())

ipcMain.handle('test-sitrad-api', async (_e, config) => {
  try {
    const base = config.sitradUrl.replace(/\/+$/, '')
    const r = await axios.get(`${base}/instruments`, {
      auth: { username: config.username, password: config.password },
      httpsAgent: agent
    })

    return { success: true, data: r.data }
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

  if (running && config) startCollector()

  setTray(running)
})

app.on('window-all-closed', (e: Electron.Event) => e.preventDefault())
