import axios from 'axios'
import { app, BrowserWindow, ipcMain } from 'electron'
import log from 'electron-log'
import https from 'https'
import path from 'node:path'
import WebSocket from 'ws'
import { startAppCollector, stopCollector, type CollectorRuntimeEvent, setCollectorRuntimeEventHandler } from './collector-service'
import { WS_URL } from './constants'
import { hydrateAuthFromDeviceConfig } from './device-auth'
import { store } from './store'
import { configureTrayActions, createTray, createWindow, requestStopAuthFromRenderer, setTray } from './window-tray'

process.on('uncaughtException', (err) => {
  log?.error?.('uncaughtException:', err)
})

process.on('unhandledRejection', (reason) => {
  log?.error?.('unhandledRejection:', reason)
})

app.disableHardwareAcceleration()

const agent = new https.Agent({ rejectUnauthorized: false })

function broadcastCollectorEvent(event: CollectorRuntimeEvent) {
  const windows = BrowserWindow.getAllWindows()
  windows.forEach((window) => {
    if (!window.isDestroyed()) {
      window.webContents.send('collector-runtime-event', event)
    }
  })
}

setCollectorRuntimeEventHandler(broadcastCollectorEvent)

function testBackendWebSocketConnection(timeout = 3000): Promise<void> {
  return new Promise((resolve, reject) => {
    let ws: WebSocket | null = null
    let completed = false

    const timer = setTimeout(() => {
      if (completed) return
      completed = true
      if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
        ws.terminate()
      }
      reject(new Error('timeout'))
    }, timeout)

    const finishWithError = (err: Error) => {
      if (completed) return
      completed = true
      clearTimeout(timer)
      if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
        ws.terminate()
      }
      reject(err)
    }

    ws = new WebSocket(WS_URL)

    ws.once('open', () => {
      if (completed) return
      completed = true
      clearTimeout(timer)
      ws?.close()
      resolve()
    })

    ws.once('error', (err) => {
      finishWithError(err instanceof Error ? err : new Error(String(err)))
    })
  })
}

configureTrayActions({
  start: () => {
    void startAppCollector()
  },
  stop: () => {
    requestStopAuthFromRenderer()
  },
})

ipcMain.handle('get-config', () => store.get('config'))
ipcMain.handle('get-state', () => store.get('isRunning'))
ipcMain.handle('save-config', (_e, cfg) => {
  const prev = store.get('config')
  store.set('config', {
    sitradUrl: cfg?.sitradUrl ?? prev?.sitradUrl ?? '',
    username: cfg?.username ?? prev?.username ?? '',
    password: cfg?.password ?? prev?.password ?? '',
    stopPassword: cfg?.stopPassword ?? prev?.stopPassword ?? '',
    organizationId: cfg?.organizationId ?? prev?.organizationId ?? '',
    token: cfg?.token ?? prev?.token ?? '',
    setupToken: cfg?.setupToken ?? prev?.setupToken ?? '',
  })
})
ipcMain.handle('start', async () => startAppCollector())
ipcMain.handle('stop-with-auth', (_e, password: string) => {
  const savedPassword = store.get('config')?.stopPassword

  if (!savedPassword) {
    return { success: false, error: 'Senha de parada não configurada para validação.' }
  }

  if (password !== savedPassword) {
    log.warn('Stop denied: invalid stop authentication password')
    return { success: false, error: 'Senha inválida.' }
  }

  stopCollector()
  return { success: true }
})
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
    const previous = store.get('config')
    store.set('config', {
      sitradUrl: config?.sitradUrl ?? previous?.sitradUrl ?? '',
      username: config?.username ?? previous?.username ?? '',
      password: config?.password ?? previous?.password ?? '',
      stopPassword: config?.stopPassword ?? previous?.stopPassword ?? '',
      setupToken: config?.setupToken ?? previous?.setupToken ?? '',
      organizationId: config?.organizationId ?? previous?.organizationId ?? '',
      token: config?.token ?? previous?.token ?? '',
    })

    const base = config.sitradUrl.replace(/\/+$/, '')
    const r = await axios.get(`${base}/instruments`, {
      auth: { username: config.username, password: config.password },
      httpsAgent: agent,
      timeout: 3000,
      validateStatus: () => true,
      headers: {
        Accept: 'application/json'
      }
    })

    if (r.status !== 200) {
      return { success: false, error: 'Erro na API' }
    }

    try {
      await testBackendWebSocketConnection(3000)
    } catch (err: any) {
      return { success: false, error: `Erro ao conectar no App - ${err.message}` }
    }

    return { success: true }
  } catch (err: any) {
    return { success: false, error: `Erro ao conectar na API - ${err.message}` }
  }
})

app.setLoginItemSettings({
  openAtLogin: true,
  path: process.execPath
})

app.whenReady().then(async () => {
  const appIconPath =
    process.env.NODE_ENV === 'development'
      ? path.join(process.cwd(), 'public', 'LOGO.png')
      : path.join(process.resourcesPath, 'public', 'LOGO.png')

  if (process.platform === 'darwin') {
    app.dock.setIcon(appIconPath)
  }

  await hydrateAuthFromDeviceConfig()

  createTray()
  createWindow()

  const config = store.get('config')
  const running = !!store.get('isRunning')

  if (running && config) void startAppCollector()

  setTray(running)
})

app.on('window-all-closed', (e: Electron.Event) => e.preventDefault())
