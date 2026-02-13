import { normalizeText } from "./normalize-text"

export function convertToBoolean(value: unknown): boolean | undefined {
  if (typeof value === 'boolean') return value
  if (typeof value === 'number') return value !== 0
  if (typeof value === 'string') {
    const normalized = normalizeText(value).trim()
    if (['true', '1', 'yes', 'sim', 'on', 'ativo'].includes(normalized)) return true
    if (['false', '0', 'no', 'nao', 'off', 'inativo'].includes(normalized)) return false
  }
  return undefined
}
