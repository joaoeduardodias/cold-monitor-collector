import type { FlatInstrument } from "../types"
import { convertToBoolean } from "./convert-to-boolean"
import { convertToNumber } from "./convert-to-number"

export function getInstrumentStatus(instrument: FlatInstrument): string {
  const model = convertToNumber(instrument.modelId)
  if (instrument.error || model === undefined) return ''

  const statusFlags = new Set<string>(
    [
      convertToBoolean(instrument.IsOpenDoor) && 'port',
      convertToBoolean(instrument.IsDefrost) && 'deg',
      convertToBoolean(instrument.IsRefrigeration) && 'resf',
      convertToBoolean(instrument.IsOutputFan) && 'vent',
      convertToBoolean(instrument.IsOutputDefr1) && 'deg',
      convertToBoolean(instrument.IsOutputRefr) && 'resf',
    ].filter((flag): flag is string => Boolean(flag))
  )

  return Array.from(statusFlags).join(',')
}