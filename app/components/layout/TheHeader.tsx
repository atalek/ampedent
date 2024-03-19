'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/ampedent.webp'
import { useEffect, useState } from 'react'
import UpArrow from '../Icons/UpArrow'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

function TheHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  const [y, setY] = useState(0)

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const { status } = useSession()

  useEffect(() => {
    const updateScroll = () => {
      setY(window.scrollY)
    }

    window.addEventListener('scroll', updateScroll)
    window.addEventListener('resize', updateScroll)

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [])

  return (
    <header
      className={`w-full z-50 sticky top-0 bg-sky-50  ${
        y > 0 ? 'border-b border-blue-400' : ''
      }`}>
      <div className='mx-auto flex flex-row items-center justify-between p-4  max-w-[1400px]'>
        <Link
          onClick={() => setIsOpen(false)}
          href='/'
          className=' flex gap-2 items-center text-xl font-bold md:text-3xl text-blue-600  hover:text-blue-800'>
          <Image
            src={logo}
            priority
            height={96}
            width={75}
            alt='ampeDent logo'
          />
          AmpeDent
        </Link>
        <nav className='hidden md:flex gap-6 items-center text-lg'>
          <Link
            href='/about'
            aria-label='About us page link'
            className={
              pathName === '/about'
                ? 'text-blue-600 font-bold'
                : '' + 'hover:text-blue-600'
            }>
            About us
          </Link>
          <Link
            href='/services'
            aria-label='Services page link'
            className={
              pathName === '/services'
                ? 'text-blue-600 font-bold'
                : '' + 'hover:text-blue-600'
            }>
            Services
          </Link>
          <Link
            href='/booking'
            aria-label='Create a booking page link'
            className='p-2 rounded-full bg-blue-600 text-white hover:bg-blue-800 '>
            Book now
          </Link>
          {status === 'authenticated' && (
            <>
              <Link
                href='/admin/bookings'
                aria-label='Admin bookings dashboard page link'
                className={
                  pathName.startsWith('/admin')
                    ? 'text-blue-600 font-bold'
                    : '' + 'hover:text-blue-600'
                }>
                Admin
              </Link>
              <button
                onClick={() => signOut()}
                className='p-2 text-blue-600 border border-blue-600 rounded  hover:text-blue-800 hover:border-blue-800'>
                Sign Out
              </button>
            </>
          )}
        </nav>
        <div className='flex md:hidden gap-8 items-center'>
          <button
            aria-label='expand mobile menu button'
            className={`hamburger ${isOpen ? 'open' : ''} focus:outline-none `}
            onClick={() => setIsOpen(prev => !prev)}>
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='md:hidden p-4 bg-sky-50  mt-2 flex flex-col gap-2 text-center'>
          <Link
            href={'/about'}
            aria-label='About us page link'
            className='border rounded p-2 border-blue-400 animate-link'>
            About us
          </Link>
          <Link
            href={'/services'}
            aria-label='Services page link'
            className='border rounded p-2 border-blue-400 animate-link'>
            Services
          </Link>
          <Link
            href={'/booking'}
            aria-label='Create a booking page link'
            className=' rounded p-2 bg-blue-600 text-white animate-link font-bold'>
            Book now
          </Link>
          {status === 'authenticated' && (
            <>
              <Link
                href={'/admin/bookings'}
                aria-label='Admin bookings dashboard page link'
                className='border rounded p-2 border-blue-400 animate-link'>
                Admin
              </Link>
              <button
                className=' rounded p-2 bg-blue-600 text-white animate-link font-bold'
                onClick={() => signOut()}>
                Sign Out
              </button>
            </>
          )}
        </div>
      )}
      <div className='fixed bottom-0 -right-6 p-10 z-[10]'>
        <button
          aria-label='go to top button'
          onClick={goTop}
          className={
            y < 40
              ? 'hidden'
              : '' +
                'rounded-full border-2 border-blue-600 px-3 sm:px-4 hover:bg-slate-200 cursor-pointer aspect-square grid place-items-center'
          }>
          <UpArrow />
        </button>
      </div>
    </header>
  )
}
export default TheHeader
