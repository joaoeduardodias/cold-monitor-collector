export interface ElectronAPI {
  getConfig(): Promise<any>
  getState(): Promise<boolean>
  saveConfig(cfg: any): Promise<void>
  start(): Promise<void>
  stop(): Promise<void>
  testSitrad(cfg: any): Promise<{ success: boolean; error?: string }>
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}
