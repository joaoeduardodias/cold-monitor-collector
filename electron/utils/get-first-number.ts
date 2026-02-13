import { convertToNumber } from "./convert-to-number"

export function getFirstNumber(value: unknown, depth = 0): number | undefined {
  if (depth > 3) return undefined
  const direct = convertToNumber(value)
  if (direct !== undefined) return direct

  if (Array.isArray(value)) {
    for (const item of value) {
      const found = getFirstNumber(item, depth + 1)
      if (found !== undefined) return found
    }
  }

  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>
    const priorityKeys = ['value', 'currentValue', 'reading', 'temperature', 'valor', 'result']

    for (const key of priorityKeys) {
      const found = getFirstNumber(obj[key], depth + 1)
      if (found !== undefined) return found
    }

    for (const [key, nested] of Object.entries(obj)) {
      if (priorityKeys.includes(key)) continue
      const found = getFirstNumber(nested, depth + 1)
      if (found !== undefined) return found
    }
  }

  return undefined
}