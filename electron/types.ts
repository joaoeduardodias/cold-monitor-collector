export type SitradInstrument = {
  id: number
  name: string
  modelId?: number | null
}

export type SitradValuesResponse = {
  results?: any[]
  error?: string
}

export type InstrumentWithValues = SitradInstrument & {
  sensors: any[]
  error?: string
  orderDisplay?: number
  process?: string
  status?: string
  type?: string
  maxValue?: number
  minValue?: number
}

export type NormalizedReading = {
  id: string
  idSitrad: number
  name: string
  model: number
  orderDisplay: number
  type: string
  process: string
  status: string
  isSensorError: boolean
  maxValue: number
  minValue: number
  setPoint: number
  temperature: number
  createdAt: null
  differential: number
}

export type FlatInstrument = {
  id: number
  name: string
  modelId?: number | null
  slug: string
  error?: string
  [key: string]: unknown
}
