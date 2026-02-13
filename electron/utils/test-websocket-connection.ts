import WebSocket from 'ws'

export function testWebSocketConnection(url: string, timeoutMs = 5000) {
  return new Promise<void>((resolve, reject) => {
    const ws = new WebSocket(url)
    let settled = false

    const timeout = setTimeout(() => {
      if (settled) return
      settled = true
      ws.terminate()
      reject(new Error(`Timeout ao conectar no sistema (${timeoutMs}ms)`))
    }, timeoutMs)

    ws.once('open', () => {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      ws.close()
      resolve()
    })

    ws.once('error', (err) => {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      reject(new Error(`Falha ao conectar no sistema: ${err.message}`))
    })
  })
}