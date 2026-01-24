import { contextBridge, ipcRenderer } from 'electron'

interface Config {
  [key: string]: unknown
}

interface State {
  [key: string]: unknown
}

interface ElectronAPI {
  getConfig: () => Promise<Config>
  getState: () => Promise<State>
  saveConfig: (cfg: Config) => Promise<void>
  start: () => Promise<void>
  stop: () => Promise<void>
  testSitrad: (cfg: Config) => Promise<unknown>
}

const api: ElectronAPI = {
  getConfig: () => ipcRenderer.invoke('get-config'),
  getState: () => ipcRenderer.invoke('get-state'),
  saveConfig: (cfg) => ipcRenderer.invoke('save-config', cfg),
  start: () => ipcRenderer.invoke('start'),
  stop: () => ipcRenderer.invoke('stop'),
  testSitrad: (cfg) => ipcRenderer.invoke('test-sitrad-api', cfg),
}

contextBridge.exposeInMainWorld('electronAPI', api)
