'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Bookings from './Icons/Bookings'
import Users from './Icons/Users'
import CreateUser from './Icons/CreateUser'

const links = [
  { name: 'Bookings', href: '/admin/bookings', icon: <Bookings /> },
  {
    name: 'Users',
    href: '/admin/users',
    icon: <Users />,
  },
  {
    name: 'Create new user',
    href: '/admin/users/create',
    icon: <CreateUser />,
  },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map(link => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              pathname === link.href ? 'bg-sky-100 text-blue-600' : ''
            }`}>
            {link.icon}
            <p className=''>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
