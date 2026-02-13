export function findValueByKeys(
  value: unknown,
  keys: string[],
  depth = 0
): unknown {
  if (depth > 3 || !value || typeof value !== 'object') return undefined
  const obj = value as Record<string, unknown>

  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null) return obj[key]
  }

  for (const nested of Object.values(obj)) {
    const found = findValueByKeys(nested, keys, depth + 1)
    if (found !== undefined) return found
  }

  return undefined
}