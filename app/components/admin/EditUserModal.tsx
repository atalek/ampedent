'use client'

import { UserType } from '@/models/User'
import { FormEvent, useState } from 'react'

function EditUserModal({
  user,
  onUserUpdate,
}: {
  user: UserType
  onUserUpdate: () => void
}) {
  const [showUser, setShowUser] = useState(false)
  const [name, setName] = useState(user.name || '')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleEdit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const body = { _id: user._id, name, password }
      const res = await fetch('/api/users/', {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        onUserUpdate()
        setShowUser(false)
        setPassword('')
      }
    } catch (error: any) {
      setError(error.message)
    }
  }
  return (
    <>
      <button className='btn' onClick={() => setShowUser(prev => !prev)}>
        Edit
      </button>
      {showUser ? (
        <div className='fixed inset-0 z-40' onClick={() => setShowUser(false)}>
          <div className=' flex min-h-svh overflow-x-hidden overflow-y-scroll fixed inset-0 z-50  '>
            <div className=' my-6 mx-auto flex items-center justify-center max-w-4xl w-full'>
              <div
                onClick={event => event.stopPropagation()}
                className='border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white '>
                <div className=' flex items-center justify-center p-4 border-b border-solid'>
                  <form
                    className='mx-auto mb-4 max-w-md w-full pb-4'
                    onSubmit={handleEdit}>
                    <h1 className='text-center text-3xl my-8'>
                      Edit {user.name}
                    </h1>
                    <div className='relative'>
                      <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type='text'
                        className='my-4 '
                        name='name'
                        placeholder='name'
                        required
                      />
                    </div>
                    <div className='relative mb-4 pb-2'>
                      <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                        className='my-4 '
                        placeholder='password'
                      />
                    </div>
                    {error && (
                      <p className='text-red-600 text-center '>{error}</p>
                    )}
                    <button
                      type='submit'
                      className=' rounded px-6 py-3 text-center font-semibold text-white bg-blue-600  hover:bg-blue-800'>
                      Confirm
                    </button>
                  </form>
                </div>
                <div className='flex md:flex-row flex-col gap-4 items-center justify-end p-6 border-t border-solid  rounded-b'>
                  <div className='inline-flex '>
                    <button
                      className='bg-red-500 hover:bg-red-600 text-white rounded  background-transparent font-bold uppercase px-6 py-3  md:text-sm text-xs  mr-1 mb-1  '
                      type='button'
                      onClick={() => setShowUser(prev => !prev)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </div>
      ) : null}
    </>
  )
}
export default EditUserModal
