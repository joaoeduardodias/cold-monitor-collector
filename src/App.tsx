import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2, Minus, PlayCircle, Settings, Square, WifiOff, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const configSchema = z.object({
  sitradUrl: z.string().url("URL inválida"),
  username: z.string().min(1, "Usuário obrigatório"),
  password: z.string().min(1, "Senha obrigatória"),
  setupToken: z.string().optional(),
})

type ConfigData = z.infer<typeof configSchema>
type Status = 'running' | 'stopped' | 'testing' | 'idle' | 'error'
type SavedConfig = Partial<{
  sitradUrl: string
  username: string
  password: string
  setupToken: string
}>

function getStatusLabel(status: Status) {
  if (status === 'running') return 'Ativo'
  if (status === 'testing') return 'Testando'
  if (status === 'error') return 'Erro'
  if (status === 'stopped') return 'Parado'
  return 'Pronto'
}

export default function App() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ConfigData>({
    resolver: zodResolver(configSchema)
  })

  const [status, setStatus] = useState<Status>('idle')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [showStopAuthModal, setShowStopAuthModal] = useState(false)
  const [stopAuthPassword, setStopAuthPassword] = useState('')
  const [stopping, setStopping] = useState(false)
  const [startBlocked, setStartBlocked] = useState(false)
  const [startBlockedReason, setStartBlockedReason] = useState('')

  async function loadInitialState() {
    const config = await window.electronAPI.getConfig() as SavedConfig | undefined
    const running = await window.electronAPI.getState()

    if (config) {
      setValue('sitradUrl', config.sitradUrl ?? '')
      setValue('username', config.username ?? '')
      setValue('password', config.password ?? '')
      setValue('setupToken', config.setupToken ?? '')
    }

    setStatus(running ? 'running' : 'stopped')
  }

  const testAPI = handleSubmit(async (data) => {
    setLoading(true)
    setStatus('testing')
    setMessage('Testando conexão com o Sitrad...')
    setStartBlocked(false)
    setStartBlockedReason('')

    try {
      await window.electronAPI.saveConfig(data)
      const result = await window.electronAPI.testSitrad(data)
      if (result.success) {
        setMessage('Conexão OK!')
        setStatus('idle')
      } else {
        setMessage('Erro: ' + result.error)
        setStatus('error')
      }
    } finally {
      setLoading(false)
    }
  })

  const start = handleSubmit(async (data) => {
    if (startBlocked) {
      const warning = startBlockedReason || 'Ja existe um agente ativo para esta organizacao.'
      setStatus('error')
      setMessage(warning)
      window.alert(warning)
      return
    }

    await window.electronAPI.saveConfig(data)
    await window.electronAPI.start()
    const running = await window.electronAPI.getState()
    setStatus(running ? 'running' : 'error')
    setMessage(running ? 'Enviando dados...' : 'Falha ao iniciar o envio. Revise as configurações.')
  })

  const openStopAuthModal = () => {
    setStopAuthPassword('')
    setShowStopAuthModal(true)
  }

  const stop = async () => {
    if (!stopAuthPassword.trim()) {
      setStatus('error')
      setMessage('Digite a senha de parada para interromper o envio.')
      return
    }

    setStopping(true)
    const result = await window.electronAPI.stopWithAuth(stopAuthPassword)
    setStopping(false)
    if (!result.success) {
      setStatus('error')
      setMessage(result.error ?? 'Senha inválida.')
      return
    }

    setShowStopAuthModal(false)
    setStatus('stopped')
    setMessage('Envio interrompido.')
  }

  useEffect(() => {
    void loadInitialState()
    const unsubscribeStopAuth = window.electronAPI.onStopAuthRequested(() => {
      openStopAuthModal()
    })
    const unsubscribeCollectorEvent = window.electronAPI.onCollectorRuntimeEvent((event) => {
      if (event.code === 'AGENT_ALREADY_RUNNING') {
        setStartBlocked(true)
        setStartBlockedReason(event.message)
        window.alert(event.message)
      } else if (event.status === 'running') {
        setStartBlocked(false)
        setStartBlockedReason('')
      }
      setStatus(event.status)
      setMessage(event.message)
    })
    return () => {
      unsubscribeStopAuth()
      unsubscribeCollectorEvent()
    }
  }, [])

  const minimizeWindow = async () => {
    await window.electronAPI.minimizeWindow()
  }

  const toggleMaximizeWindow = async () => {
    await window.electronAPI.toggleMaximizeWindow()
  }

  const closeWindow = async () => {
    await window.electronAPI.closeWindow()
  }

  return (
    <div className="app-backdrop">
      <div className="window-shell">
        <div className="window-drag-bar">
          <div className="window-drag-left">
            <span className="window-drag-title">Cold Monitor Collector</span>
            <span className={`status-pill status-${status}`}>{getStatusLabel(status)}</span>
          </div>
          <div className="window-controls">
            <button type="button" className="window-control-btn" onClick={minimizeWindow} aria-label="Minimizar janela">
              <Minus size={16} />
            </button>
            <button type="button" className="window-control-btn" onClick={toggleMaximizeWindow} aria-label="Maximizar ou restaurar janela">
              <Square size={14} />
            </button>
            <button type="button" className="window-control-btn window-control-close" onClick={closeWindow} aria-label="Fechar janela">
              <X size={16} />
            </button>
          </div>
        </div>
        <div className="app-content">
          <header className="app-header">
            <div className="app-header-title">
              <Settings className="app-icon" size={24} />
              <h1>Cold Monitor Coletor</h1>
            </div>
            <p>Configure credenciais, valide conexão e inicie a coleta de dados.</p>
          </header>

          <section className="panel">
            <div className="field-grid">
              <Input label="URL da API Sitrad" reg={register('sitradUrl')} error={errors.sitradUrl?.message} placeholder="https://192.168.0.100:8080/api/v1" />
              <Input label="Usuário" reg={register('username')} error={errors.username?.message} />
              <Input type="password" label="Senha" reg={register('password')} error={errors.password?.message} />
              <Input type="password" label="Token de ativação (primeiro acesso)" reg={register('setupToken')} error={errors.setupToken?.message} />
            </div>
          </section>

          <section className="actions">
            <button onClick={testAPI} disabled={loading} className="btn btn-primary">
              {loading && <Loader2 className="animate-spin" size={18} />}
              Testar API
            </button>

            {status !== 'running' ? (
              <button onClick={start} className="btn btn-success" disabled={startBlocked}>
                <PlayCircle size={18} /> Iniciar Envio
              </button>
            ) : (
              <button onClick={openStopAuthModal} className="btn btn-danger">
                <Square size={18} /> Parar Envio
              </button>
            )}
          </section>

          {message && (
            <div className={`feedback feedback-${status}`}>
              {status === 'running' && <CheckCircle size={18} />}
              {status === 'error' && <WifiOff size={18} />}
              {status === 'testing' && <Loader2 size={18} className="animate-spin" />}
              <span>{message}</span>
            </div>
          )}

          {showStopAuthModal && (
            <div className="modal-overlay">
              <div className="modal-panel">
                <h2>Autenticar parada</h2>
                <p>Digite a senha para interromper o envio.</p>
                <input
                  type="password"
                  value={stopAuthPassword}
                  onChange={(event) => setStopAuthPassword(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') void stop()
                  }}
                  placeholder="Senha de parada"
                  autoFocus
                />
                <div className="modal-actions">
                  <button type="button" className="btn btn-primary" onClick={() => setShowStopAuthModal(false)} disabled={stopping}>
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-danger" onClick={stop} disabled={stopping}>
                    {stopping && <Loader2 className="animate-spin" size={18} />}
                    Confirmar parada
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Input({ label, error, type = "text", reg, placeholder }: any) {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...reg} type={type} placeholder={placeholder} />
      {error && <p className="field-error">{error}</p>}
    </div>
  )
}
