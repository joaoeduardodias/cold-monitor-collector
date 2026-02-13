export function getSensorIdentifier(sensor: Record<string, unknown>): string | undefined {
  const candidates = ['name', 'key', 'tag', 'slug', 'label']
  for (const candidate of candidates) {
    const raw = sensor[candidate]
    if (typeof raw === 'string' && raw.trim()) return raw.trim()
  }
  return undefined
}
