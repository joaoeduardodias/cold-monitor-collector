import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.APP_ROOT = path.join(__dirname, '..')

export const VITE_DEV = process.env['VITE_DEV_SERVER_URL']
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')

export const SYSTEM_API_BASE_URL = 'https://api-cold-monitor.onrender.com'
export const WS_URL = 'wss://api-cold-monitor.onrender.com/ws/agent'
export const DEVICE_AUTH_ENDPOINT = '/devices/auth/login'
