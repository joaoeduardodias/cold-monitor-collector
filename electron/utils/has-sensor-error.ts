export function hasSensorError(sensors: unknown[]) {
  for (const sensor of sensors) {
    if (!sensor || typeof sensor !== 'object') continue
    const item = sensor as Record<string, unknown>

    if (item.error === true || item.hasError === true || item.isError === true) return true
    const status = String(item.status || '').toLowerCase()
    if (status.includes('erro') || status.includes('error') || status.includes('falha')) return true
  }

  return false
}