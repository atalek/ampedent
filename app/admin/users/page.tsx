'use client'

import DeleteButton from '@/app/components/DeleteButton'
import EditUserModal from '@/app/components/EditUserModal'
import { UserType } from '@/models/User'
import { useEffect, useState } from 'react'

function UserList() {
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true)
        const res = await fetch('/api/auth')
        if (res.ok) {
          const data = await res.json()

          setUsers(data.users)
          setIsLoading(false)
        }
      } catch (err: any) {
        setIsLoading(true)

        setError(err.message)
      }
    }
    fetchUsers()
  }, [])

  async function handleDeleteClick(_id: string) {
    try {
      const res = await fetch(`/api/auth?_id=${_id}`, { method: 'DELETE' })
      if (res.ok) {
        console.log(res)
      }
    } catch (error: any) {
      setError(error.message)
    }
  }
  return (
    <>
      <section className='relative w-full overflow-auto'>
        <form className='relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400'>
            <circle cx='11' cy='11' r='8'></circle>
            <path d='m21 21-4.3-4.3'></path>
          </svg>
          <input
            className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 w-full max-w-md'
            placeholder='Search users...'
            type='search'
          />
        </form>
        <table className='w-full caption-bottom text-sm'>
          <thead className='[&amp;_tr]:border-b'>
            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground  w-16'>
                ID
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground '>
                Username
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground '>
                Role
              </th>
              <th className='h-12 px-4 align-middle font-medium text-muted-foreground  w-20 text-right'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='[&amp;_tr:last-child]:border-0'>
            {users.length > 0 &&
              users.map(user => (
                <tr
                  className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'
                  key={user._id}>
                  <td className='p-4 align-middle  font-semibold'>
                    {user._id}
                  </td>
                  <td className='p-4 align-middle '>{user.username}</td>
                  <td className='p-4 align-middle '>{user.role}</td>
                  <td className='p-4 align-middle  flex justify-end gap-2'>
                    <EditUserModal user={user} />
                    <DeleteButton
                      label='Delete'
                      onDelete={() => handleDeleteClick(user._id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </>
  )
}
export default UserList
