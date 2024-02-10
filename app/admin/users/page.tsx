'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import Spinner from '@/app/components/Spinner'
import DeleteButton from '@/app/components/admin/DeleteButton'
import EditUserModal from '@/app/components/admin/EditUserModal'
import { UserType } from '@/models/User'

function UserList() {
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)
  const triggerRefresh = () => setRefreshKey(refreshKey + 1)
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true)
        const res = await fetch('/api/users')
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
  }, [refreshKey])

  async function handleDeleteClick(_id: string) {
    try {
      const res = await fetch(`/api/users?_id=${_id}`, { method: 'DELETE' })
      if (res.ok) {
        triggerRefresh()
      }
    } catch (error: any) {
      setError(error.message)
    }
  }

  if (status === 'unauthenticated') {
    router.push('/')
  }

  useEffect(() => {
    document.title = 'Users | Admin | AmpeDent'
  }, [])
  return (
    <>
      {isLoading && <Spinner />}
      {error && <p className='text-red-600 text-center '>{error}</p>}
      <section className='relative w-full overflow-auto'>
        <table className='w-full caption-bottom text-sm'>
          <thead>
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
          <tbody>
            {users.length > 0 &&
              users.map(user => (
                <tr
                  className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'
                  key={user._id.toString()}>
                  <td className='p-4 align-middle  font-semibold'>
                    {user._id.toString()}
                  </td>
                  <td className='p-4 align-middle '>{user.name}</td>
                  <td className='p-4 align-middle '>{user.role}</td>
                  <td className='p-4 align-middle  flex justify-end gap-2'>
                    <EditUserModal user={user} onUserUpdate={triggerRefresh} />
                    <DeleteButton
                      label='Delete'
                      onDelete={() => handleDeleteClick(user._id.toString())}
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
