import { convertToBoolean } from "./convert-to-boolean"
import { findValueByKeys } from "./find-value-by-keys"

export function getFirstBoolean(value: unknown): boolean | undefined {
  const raw = findValueByKeys(value, [
    'value',
    'currentValue',
    'reading',
    'result',
    'enabled',
    'active',
    'status'
  ])

  return convertToBoolean(raw)
}