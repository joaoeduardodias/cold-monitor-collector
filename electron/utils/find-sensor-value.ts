import { getFirstNumber } from "./get-first-number"
import { normalizeText } from "./normalize-text"

export function findSensorValue(sensors: unknown[], aliases: string[]) {
  const normalizedAliases = aliases.map(normalizeText)


  for (const sensor of sensors) {
    if (!sensor || typeof sensor !== 'object') continue
    const item = sensor as Record<string, unknown>

    const searchableParts: string[] = []
    for (const [key, value] of Object.entries(item)) {
      searchableParts.push(normalizeText(key))
      if (typeof value === 'string' && value.trim()) searchableParts.push(normalizeText(value))
    }

    const searchable = searchableParts.join(' ')

    const matched = normalizedAliases.some(alias => searchable.includes(alias))
    if (!matched) continue

    const byValueKeys = ['value', 'currentValue', 'reading', 'temperature', 'valor', 'result']
    for (const key of byValueKeys) {
      const found = getFirstNumber(item[key])
      if (found !== undefined) return found
    }

    const fallback = getFirstNumber(item)
    if (fallback !== undefined) return fallback
  }

  return undefined
}