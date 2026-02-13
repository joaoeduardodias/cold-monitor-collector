import type { InstrumentWithValues, NormalizedReading } from "../types"
import { convertToBoolean } from "./convert-to-boolean"
import { convertToNumber } from "./convert-to-number"
import { findSensorValue } from "./find-sensor-value"
import { getInstrumentStatus } from "./get-instrument-status"
import { getProcessStatus } from "./get-process-status"
import { hasSensorError } from "./has-sensor-error"
import { normalizeInstrument } from "./normalize-instrument"

export function toNormalizedReading(inst: InstrumentWithValues, instrumentId: string): NormalizedReading {
  const flat = normalizeInstrument(inst)
  const name = flat.name || 'instrument missing name'
  const model = typeof flat.modelId === 'number' ? flat.modelId : 72
  const isPress = model === 67
  const type = String(inst.type || (isPress ? 'PRESSURE' : 'TEMPERATURE')).toLowerCase()

  const sensorError = isPress
    ? convertToBoolean(flat.IsErrorPressureSensor)
    : model === 72
      ? convertToBoolean(flat.IsErrorS1)
      : convertToBoolean(flat.IsSensorError)

  const setPoint = convertToNumber(flat.CurrentSetpoint)
    ?? convertToNumber(flat.FncSetpoint)
    ?? findSensorValue(inst.sensors, ['currentsetpoint', 'setpoint atual', 'setpoint', 'set point', 'sp'])
    ?? 0

  const differential = convertToNumber(flat.FncDifferential)
    ?? convertToNumber(flat.CurrentDifferential)
    ?? findSensorValue(inst.sensors, ['currentdifferential', 'fncdifferential', 'diferencial', 'differential', 'hysteresis'])
    ?? 0

  const maxValue = convertToNumber(flat.FncMaxSetpoint)
    ?? findSensorValue(inst.sensors, ['fncmaxsetpoint', 'maxsetpoint', 'maximo', 'máximo', 'max'])
    ?? inst.maxValue
    ?? 100

  const minValue = convertToNumber(flat.FncMinSetpoint)
    ?? findSensorValue(inst.sensors, ['fncminsetpoint', 'minsetpoint', 'minimo', 'mínimo', 'min'])
    ?? inst.minValue
    ?? -100

  const rawTemperature = isPress
    ? convertToNumber(flat.GasPressure)
    : model === 72
      ? convertToNumber(flat.Sensor1)
      : convertToNumber(flat.Temperature)

  const temperature = sensorError
    ? 0
    : rawTemperature
    ?? findSensorValue(inst.sensors, ['sensor1', 'temperatura', 'temperature', 'temp'])
    ?? 0

  return {
    id: instrumentId,
    idSitrad: inst.id,
    name,
    model,
    orderDisplay: typeof inst.orderDisplay === 'number' ? inst.orderDisplay : 0,
    type,
    process: getProcessStatus(flat) || String(inst.process || 'Refrigeração'),
    status: getInstrumentStatus(flat) || String(inst.status || ''),
    isSensorError: Boolean(inst.error) || Boolean(sensorError) || hasSensorError(inst.sensors),
    maxValue,
    minValue,
    setPoint,
    temperature,
    createdAt: null,
    differential
  }
}