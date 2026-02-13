import type { FlatInstrument, InstrumentWithValues } from "../types"
import { createSlug } from "./create-slug"
import { getFirstBoolean } from "./get-first-boolean"
import { getFirstNumber } from "./get-first-number"
import { getFirstText } from "./get-first-text"
import { getSensorIdentifier } from "./get-sensor-identifier"

export function normalizeInstrument(inst: InstrumentWithValues): FlatInstrument {
  const flat: FlatInstrument = {
    id: inst.id,
    name: inst.name || 'instrument missing name',
    modelId: inst.modelId,
    slug: createSlug(inst.name || 'instrument missing name'),
    error: inst.error
  }

  for (const sensor of inst.sensors) {
    if (!sensor || typeof sensor !== 'object') continue
    const item = sensor as Record<string, unknown>
    const field = getSensorIdentifier(item)
    if (!field) continue

    const numeric = getFirstNumber(item)
    if (numeric !== undefined) {
      flat[field] = numeric
      continue
    }

    const boolVal = getFirstBoolean(item)
    if (boolVal !== undefined) {
      flat[field] = boolVal
      continue
    }

    const text = getFirstText(item)
    if (text !== undefined) {
      flat[field] = text
    }
  }

  return flat
}
