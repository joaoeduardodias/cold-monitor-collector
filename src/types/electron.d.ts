export interface CollectorConfig {
  sitradUrl: string
  username: string
  password: string
  organizationId: string
  token: string
  setupToken: string
}

export interface ElectronAPI {
  getConfig(): Promise<Partial<CollectorConfig> | undefined>
  getState(): Promise<boolean>
  saveConfig(cfg: Partial<CollectorConfig>): Promise<void>
  start(): Promise<void>
  stop(): Promise<void>
  testSitrad(cfg: Partial<CollectorConfig>): Promise<{ success: boolean; error?: string }>
  minimizeWindow(): Promise<void>
  toggleMaximizeWindow(): Promise<void>
  closeWindow(): Promise<void>
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}
