import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2, Save, Settings, XCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const configSchema = z.object({
  sitradUrl: z.url({ message: "URL inválida" }),
  username: z.string().min(1, { message: "Usuário é obrigatório" }),
  password: z.string().min(1, { message: "Senha é obrigatória" }),
  organizationId: z.string().min(1, { message: "Organization ID é obrigatório" }),
})

type ConfigData = z.infer<typeof configSchema>

function App() {
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ConfigData>({
    resolver: zodResolver(configSchema)
  })

  useEffect(() => {
    window.ipcRenderer.invoke('get-config').then((config) => {
      if (config) {
        setValue('sitradUrl', config.sitradUrl)
        setValue('username', config.username)
        setValue('password', config.password)
        setValue('organizationId', config.organizationId)
      }
    })
  }, [setValue])

  const testConnection = async (data: ConfigData) => {
    setStatus('testing')
    setMessage('Testando conexão...')
    try {
      const result = await window.ipcRenderer.invoke('test-sitrad-api', data)
      if (result.success) {
        setStatus('success')
        setMessage('Conexão estabelecida com sucesso!')
      } else {
        setStatus('error')
        setMessage(`Falha na conexão: ${result.error}`)
      }
    } catch (err) {
      setStatus('error')
      setMessage('Erro ao tentar conectar.')
    }
  }

  const saveConfig = async (data: ConfigData) => {
    try {
      await window.ipcRenderer.invoke('save-config', data)
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 3000)
    } catch (err) {
      alert('Erro ao salvar configuração')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <div className="flex items-center mb-6">
          <Settings className="text-blue-600 mr-2" size={24} />
          <h1 className="text-2xl font-bold text-gray-800">Cold Monitor Collector</h1>
        </div>

        <form onSubmit={handleSubmit(testConnection)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">URL da API Sitrad</label>
            <input
              {...register('sitradUrl')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              placeholder="http://192.168.1.100:8080/api/v1"
            />
            {errors.sitradUrl && <p className="text-red-500 text-xs mt-1">{errors.sitradUrl.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Usuário</label>
            <input
              {...register('username')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              {...register('password')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Organization ID</label>
            <input
              {...register('organizationId')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
            {errors.organizationId && <p className="text-red-500 text-xs mt-1">{errors.organizationId.message}</p>}
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              disabled={status === 'testing'}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex justify-center items-center"
            >
              {status === 'testing' ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
              Testar API
            </button>

            <button
              type="button"
              onClick={handleSubmit(saveConfig)}
              disabled={status !== 'success'}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-center items-center ${status === 'success'
                ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              <Save className="mr-2" size={18} />
              {isSaved ? 'Salvo!' : 'Salvar e Iniciar'}
            </button>
          </div>
        </form>

        {message && (
          <div className={`mt-4 p-3 rounded-md flex items-center ${status === 'success' ? 'bg-green-100 text-green-800' :
            status === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
            }`}>
            {status === 'success' && <CheckCircle className="mr-2" size={18} />}
            {status === 'error' && <XCircle className="mr-2" size={18} />}
            <span className="text-sm font-medium">{message}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
