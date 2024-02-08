'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'

function SideNav2() {
  function signOut() {
    console.log('fat')
  }

  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link
        className='mb-2 h-20 items-center rounded-md bg-sky-50 p-4 md:h-40 hidden md:flex'
        href='/'>
        <div className='w-32 text-white md:w-40'>
          <Image
            alt='ampedent logo'
            width={500}
            height={500}
            src={'/ampedent.webp'}
          />
        </div>
      </Link>
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'>
          <form onSubmit={signOut} className='hidden md:block'>
            <button className='flex w-full h-[48px]  gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600'>
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SideNav2

{
  /* <PowerIcon className='w-6' /> */
}
