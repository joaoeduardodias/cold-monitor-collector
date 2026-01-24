import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2, PlayCircle, Settings, Square, WifiOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const configSchema = z.object({
  sitradUrl: z.url("URL inválida"),
  username: z.string().min(1, "Usuário obrigatório"),
  password: z.string().min(1, "Senha obrigatória"),
  organizationId: z.uuid("Formato Inválido").min(1, "Organization ID obrigatório"),
})

type ConfigData = z.infer<typeof configSchema>
type Status = 'running' | 'stopped' | 'testing' | 'idle' | 'error'

export default function App() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ConfigData>({
    resolver: zodResolver(configSchema)
  })

  const [status, setStatus] = useState<Status>('idle')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function loadInitialState() {
    const config = await window.electronAPI.getConfig()
    const running = await window.electronAPI.getState()

    if (config) {
      setValue('sitradUrl', config.sitradUrl)
      setValue('username', config.username)
      setValue('password', config.password)
      setValue('organizationId', config.organizationId)
    }

    setStatus(running ? 'running' : 'stopped')
  }

  useEffect(() => {
    loadInitialState()
  }, [])

  const testAPI = handleSubmit(async (data) => {
    setLoading(true)
    setStatus('testing')
    setMessage('Testando conexão com o Sitrad...')

    try {
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
    await window.electronAPI.saveConfig(data)
    await window.electronAPI.start()
    setStatus('running')
    setMessage('Enviando dados...')
  })

  const stop = async () => {
    await window.electronAPI.stop()
    setStatus('stopped')
    setMessage('Envio interrompido.')
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex justify-center items-start">


      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-6 border border-slate-200">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="text-blue-600" size={24} />
          <h1 className="text-xl font-semibold text-slate-800">Cold Monitor Coletor</h1>
        </div>

        <div className="space-y-4">
          <Input label="URL da API Sitrad" reg={register('sitradUrl')} error={errors.sitradUrl?.message} placeholder="http://192.168.0.100:8080/api/v1" />
          <Input label="Usuário" reg={register('username')} error={errors.username?.message} />
          <Input type="password" label="Senha" reg={register('password')} error={errors.password?.message} />
          <Input label="Organization ID" reg={register('organizationId')} error={errors.organizationId?.message} />
        </div>

        <div className="mt-5 space-y-3">
          <button onClick={testAPI} disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-700 transition">
            {loading && <Loader2 className="animate-spin" size={18} />}
            Testar API
          </button>

          {status !== 'running' ? (
            <button onClick={start} className="w-full bg-green-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-green-700">
              <PlayCircle size={18} /> Iniciar Envio
            </button>
          ) : (
            <button onClick={stop} className="w-full bg-red-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-red-700">
              <Square size={18} /> Parar Envio
            </button>
          )}
        </div>

        {message && (
          <div className={`
            mt-4 text-sm px-3 py-2 rounded-lg flex items-center gap-2 border
            ${status === 'running' ? 'bg-green-100 border-green-300 text-green-800' :
              status === 'error' ? 'bg-red-100 border-red-300 text-red-800' :
                status === 'testing' ? 'bg-blue-100 border-blue-300 text-blue-800' :
                  'bg-gray-100 border-gray-300 text-gray-700'}
          `}>
            {status === 'running' && <CheckCircle size={18} className="text-green-700" />}
            {status === 'error' && <WifiOff size={18} className="text-red-700" />}
            {status === 'testing' && <Loader2 size={18} className="animate-spin text-blue-700" />}
            <span>{message}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function Input({ label, error, type = "text", reg, placeholder }: any) {
  return (
    <div>
      <label className="block text-sm text-slate-700 font-medium mb-1">{label}</label>
      <input {...reg} type={type} placeholder={placeholder}
        className="w-full border rounded-lg px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}
