'use client'

import Link from 'next/link'
import Bookings from './Icons/Bookings'
import { useState } from 'react'
import AlignRight from './Icons/AlignRight'
import AlignLeft from './Icons/AlignLeft'

function SideNav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='relative'>
      <button
        onClick={() => setSidebarOpen(prev => !prev)}
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className={`absolute z-50 sm:z-0 top-2 left-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  transition-transform ${
          isSidebarOpen ? 'translate-x-[220px]' : 'translate-x-0'
        }`}>
        {isSidebarOpen ? <AlignLeft /> : <AlignRight />}
      </button>

      <aside
        id='default-sidebar'
        className={`fixed top-[106px] left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? '' : '-translate-x-full'
        } sm:translate-x-0 bg-sky-50`}
        aria-label='Sidenav'>
        <div className='overflow-y-auto py-5 px-3 h-full bg-sky-50 border-r border-gray-200 '>
          <nav className='space-y-2'>
            <Link
              href='/protected/bookings'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100  group'>
              <Bookings />
              <span className='ml-3'>Bookings</span>
            </Link>

            <Link href='#'>
              <button
                type='button'
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100  '
                aria-controls='dropdown-authentication'
                data-collapse-toggle='dropdown-authentication'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900  '
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clip-rule='evenodd'></path>
                </svg>
                <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                  Test?
                </span>
              </button>
            </Link>
          </nav>
          <div className='pt-5 mt-5 space-y-2 border-t border-gray-200 '>
            <Link
              href='/protected/users'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100   group'>
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75  group-hover:text-gray-900 '
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
                <path
                  fill-rule='evenodd'
                  d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                  clip-rule='evenodd'></path>
              </svg>
              <span className='ml-3'>Users list</span>
            </Link>

            <Link
              href='/protected/users/create'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100   group'>
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75  group-hover:text-gray-900 '
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
              </svg>
              <span className='ml-3'>Create a user</span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
export default SideNav
