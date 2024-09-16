import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import api from './services/api'

interface User {
  id: string
  name: string
  age: number
  email: string
}

export function Home() {
  const [users, setUsers] = useState<User[]>([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  async function getUsers() {
    const res = await api.get('/usuarios')
    setUsers(res.data)
  }

  async function createUser() {
    await api.post('/usuarios', { name, age, email })
    setName('')
    setAge('')
    setEmail('')
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-slate-800 flex flex-col gap-y-8 p-10 rounded-lg">
        <p className="text-white text-3xl font-bold">Cadastro de Usuários</p>
        <div className="flex flex-col gap-y-3">
          <Input
            className="text-white"
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className="text-white"
            type="number"
            placeholder="idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Input
            className="text-white"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button variant={'default'} onClick={createUser}>
          Cadastrar
        </Button>
      </div>
      {users.map((user) => (
        <div
          className="bg-slate-800 flex justify-between p-4 rounded-lg w-80 h-30 text-white mt-5"
          key={user.id}
        >
          <div className="flex flex-col">
            <p>
              <span className="font-bold">Nome:</span> {user.name}
            </p>
            <p>
              <span className="font-bold">Idade:</span> {user.age}
            </p>
            <p>
              <span className="font-bold">Email:</span> {user.email}
            </p>
          </div>
          <div className="flex">
            <p>a</p>
          </div>
        </div>
      ))}
    </div>
  )
}
