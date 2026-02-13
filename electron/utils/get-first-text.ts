import { findValueByKeys } from "./find-value-by-keys"

export function getFirstText(value: unknown): string | undefined {
  const raw = findValueByKeys(value, [
    'value',
    'currentValue',
    'reading',
    'result',
    'text',
    'statusText',
    'stringValue',
    'label'
  ])

  if (typeof raw === 'string' && raw.trim()) return raw.trim()
  return undefined
}