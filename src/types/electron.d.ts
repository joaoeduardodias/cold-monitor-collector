export interface CollectorConfig {
  sitradUrl: string
  username: string
  password: string
  stopPassword: string
  organizationId: string
  token: string
  setupToken: string
}

export interface ElectronAPI {
  getConfig(): Promise<Partial<CollectorConfig> | undefined>
  getState(): Promise<boolean>
  saveConfig(cfg: Partial<CollectorConfig>): Promise<void>
  start(): Promise<void>
  stopWithAuth(password: string): Promise<{ success: boolean; error?: string }>
  onStopAuthRequested(callback: () => void): () => void
  onCollectorRuntimeEvent(
    callback: (event: {
      status: 'running' | 'stopped' | 'error'
      message: string
      code?: 'AGENT_ALREADY_RUNNING'
    }) => void,
  ): () => void
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
