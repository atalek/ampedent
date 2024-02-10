'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { FormEvent, useEffect, useState } from 'react'

function CreateUser() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    document.title = 'Create user | Admin | AmpeDent'
  }, [])

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      if (!name || !password) return
      setIsLoading(true)
      const body = { name, password }
      const res = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        router.push('/admin/users')
      }
      setIsLoading(false)
    } catch (err: any) {
      setIsLoading(false)
      setError(err.message)
    }
  }
  if (status === 'unauthenticated') {
    router.push('/')
  }
  return (
    <section>
      <div className=' py-16 md:py-24 lg:py-32 p-4'>
        <form
          className='mx-auto mb-4 max-w-md w-full pb-4'
          onSubmit={handleLogin}>
          <h1 className='text-center text-3xl my-8'>
            Create a new AmpeDent user
          </h1>
          <div className='relative'>
            <input
              disabled={isLoading}
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              className='my-4 '
              name='name'
              placeholder='username'
              required
            />
          </div>
          <div className='relative mb-4 pb-2'>
            <input
              disabled={isLoading}
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              className='my-4 '
              placeholder='password'
              required
            />
          </div>
          {error && <p className='text-red-600 text-center my-4'>{error}</p>}
          <button
            disabled={isLoading}
            type='submit'
            className=' rounded px-6 py-3 text-center font-semibold text-white bg-blue-600  hover:bg-blue-800'>
            Create user
          </button>
        </form>
      </div>
    </section>
  )
}

export default CreateUser
