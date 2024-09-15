import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

export function Home() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-slate-800 flex flex-col gap-y-8 p-10 rounded-lg">
        <p className="text-white text-3xl font-bold">Cadastro de Usuários</p>
        <div className="flex flex-col gap-y-3">
          <Input className="text-white" placeholder="nome" />
          <Input className="text-white" placeholder="idade" />
          <Input className="text-white" name="email" placeholder="email" />
        </div>
        <Button variant={'default'}>Cadastrar</Button>
      </div>
    </div>
  )
}
