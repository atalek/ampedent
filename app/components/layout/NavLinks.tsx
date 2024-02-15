'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Bookings from '../Icons/Bookings'
import Users from '../Icons/Users'
import CreateUser from '../Icons/CreateUser'
import { useEffect, useState } from 'react'

export default function NavLinks() {
  const pathname = usePathname()

  const [role, setRole] = useState<string>('')
  useEffect(() => {
    async function fetchRole() {
      const res = await fetch('/api/me')
      if (res.ok) {
        const data = await res.json()
        setRole(data.role)
      }
    }
    fetchRole()
  }, [])

  return (
    <>
      <Link
        href='/admin/bookings'
        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
          pathname.startsWith('/admin/bookings')
            ? 'bg-sky-100 text-blue-600'
            : ''
        }`}>
        <Bookings /> Bookings
      </Link>
      {role === 'superadmin' && (
        <>
          <Link
            href='/admin/users'
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              pathname === '/admin/users' ? 'bg-sky-100 text-blue-600' : ''
            }`}>
            <Users />
            Users
          </Link>
          <Link
            href='/admin/users/create'
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              pathname === '/admin/users/create'
                ? 'bg-sky-100 text-blue-600'
                : ''
            }`}>
            <CreateUser /> Create{' '}
            <span className='md:block hidden'> new user</span>
          </Link>
        </>
      )}
    </>
  )
}
