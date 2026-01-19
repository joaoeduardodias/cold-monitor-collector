import axios from 'axios'
import { app, BrowserWindow, ipcMain } from 'electron'
import Store from 'electron-store'
import https from 'https'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import WebSocket from 'ws'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const agent = new https.Agent({ rejectUnauthorized: false })

process.env.APP_ROOT = path.join(__dirname, '..')

export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, 'public')
  : RENDERER_DIST

let win: BrowserWindow | null
const store = new Store()
let socket: WebSocket | null = null
let collectionInterval: NodeJS.Timeout | null = null

let instrumentMapping: Record<string, string> = {}

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
    width: 800,
    height: 700,
  })

  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }
}

ipcMain.handle('get-config', () => store.get('config'))

ipcMain.handle('save-config', async (_event, config) => {
  store.set('config', config)
  startDataCollection()
  return { success: true }
})

ipcMain.handle('test-sitrad-api', async (_event, config) => {
  try {
    const baseUrl = config.sitradUrl.trim().replace(/\/+$/, '')

    const response = await axios.get(`${baseUrl}/instruments`, {
      auth: { username: config.username, password: config.password },
      httpsAgent: agent,
      httpAgent: agent,
      timeout: 5000,
    })

    if (response.status === 200) return { success: true }
    return { success: false, error: 'Status code: ' + response.status }

  } catch (error: any) {
    console.log('[TEST] erro:', error.message)
    return { success: false, error: error.message }
  }
})

function startDataCollection() {
  const config: any = store.get('config')
  if (!config) return

  if (socket) socket.close()

  const baseUrl = config.sitradUrl.trim().replace(/\/+$/, '')

  async function fetchSitradInstruments() {
    try {
      const response = await axios.get(`${baseUrl}/instruments`, {
        auth: { username: config.username, password: config.password },
        httpsAgent: agent,
        httpAgent: agent,
        timeout: 5000,
      })
      return response.data ?? []
    } catch (err: any) {
      console.error('[AGENT] Erro ao buscar instrumentos:', err.message)
      return []
    }
  }

  async function fetchSitradReadings() {
    try {
      const response = await axios.get(`${baseUrl}/instruments`, {
        auth: { username: config.username, password: config.password },
        httpsAgent: agent,
        httpAgent: agent,
        timeout: 5000,
      })
      return response.data ?? []
    } catch (err: any) {
      console.error('[AGENT] Erro ao buscar dados:', err.message)
      return null
    }
  }

  if (collectionInterval) clearInterval(collectionInterval)

  socket = new WebSocket(`ws://localhost:3333/ws/agent`)

  socket.on('open', async () => {
    console.log('[AGENT] WS conectado ao back-end')

    const instruments = await fetchSitradInstruments()

    socket!.send(JSON.stringify({
      type: 'INSTRUMENT_SYNC',
      payload: {
        organizationId: config.organizationId,
        instruments: instruments.map((i: any) => ({
          sitradId: i.id,
          name: i.name,
          model: i.model ?? null
        }))
      },
    }))
  })

  socket.on('message', (raw) => {
    try {
      const msg = JSON.parse(raw.toString())

      switch (msg.type) {
        case 'INSTRUMENT_SYNCED':
          console.log('[AGENT] Instruments sincronizados')
          instrumentMapping = {}
          for (const m of msg.payload.mapping) {
            instrumentMapping[m.sitradId] = m.instrumentId
          }
          break

        case 'TEMPERATURE_UPDATE':
          console.log('[AGENT] Dashboard recebeu valores:', msg.payload)
          break
      }
    } catch (err) {
      console.error('[AGENT] Erro no parse do WS:', err)
    }
  })

  socket.on('close', () => {
    console.log('[AGENT] WS desconectado')
  })

  socket.on('error', (err) => {
    console.error('[AGENT] WS erro:', err.message)
  })

  collectionInterval = setInterval(async () => {
    const readings = await fetchSitradReadings()
    if (!readings) return

    const payload = readings
      .filter((r: any) => !!instrumentMapping[r.id])
      .map((r: any) => ({
        instrumentId: instrumentMapping[r.id],
        temperature: r.temperature ?? r.temp,
        timestamp: Date.now()
      }))

    if (payload.length > 0) {
      socket?.send(JSON.stringify({
        type: 'TEMPERATURE_READING',
        payload,
      }))
    }
  }, 5_000) // 5 seconds
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.whenReady().then(() => {
  createWindow()
  if (store.get('config')) startDataCollection()
})
