import type { FlatInstrument } from "../types"
import { convertToNumber } from "./convert-to-number"
import { PROCESS_STATUS_MAP } from "./process-status"

export function getProcessStatus(instrument: FlatInstrument): string {
  const text = typeof instrument.ProcessStatusText === 'string'
    ? instrument.ProcessStatusText.trim()
    : ''
  if (text) return text

  const numericStatus = convertToNumber(instrument.ProcessStatus)
  if (numericStatus !== undefined) {
    return PROCESS_STATUS_MAP[numericStatus] ?? String(numericStatus)
  }

  return ''
}