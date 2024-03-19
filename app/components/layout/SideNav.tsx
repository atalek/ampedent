'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function SideNav() {
  const { data: session, status } = useSession()
  const router = useRouter()

  return (
    <>
      {status === 'authenticated' && (
        <div className='flex h-full flex-col px-3 py-4 md:px-2'>
          <Link
            className='mb-2 h-20 items-center rounded-md bg-sky-50 p-4 md:h-40 hidden md:flex'
            href='/'>
            <div className='w-32 text-white md:w-40'>
              <Image
                alt='ampedent logo'
                width={160}
                height={124}
                src={'/ampedent.webp'}
              />
            </div>
          </Link>
          <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
            <NavLinks />
            <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'>
              <form className='hidden md:block'>
                <Link
                  href='/admin/bookings'
                  className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
                  {session?.user?.name}
                </Link>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default SideNav
