'use client'

import { BookingType } from '@/models/Booking'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  formatDate,
  formatTime,
  incrementTimeByOneHour,
} from '@/lib/dateAndTimeUtils'

function Bookings() {
  const [bookings, setBookings] = useState<BookingType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true)
        const res = await fetch('/api/booking')
        if (res.ok) {
          const data = await res.json()
          setBookings(data.bookings)
          setIsLoading(false)
        }
      } catch (err: any) {
        setIsLoading(false)
        setError(err.message)
      }
    }
    fetchUsers()
  }, [])

  return (
    <section className='grid gap-4'>
      <div className='relative'>
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
          placeholder='Search bookings...'
          type='search'
        />
      </div>
      {error && <p className='text-red-600 text-center'>{error}</p>}
      <div className='relative w-full overflow-auto'>
        <table className='w-full caption-bottom text-sm'>
          <thead>
            <tr className='border-b transition-colors hover:bg-muted/50 '>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[100px]'>
                Booking ID
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground'>
                Name
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground'>
                Email
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground'>
                Phone
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground'>
                Status
              </th>
              <th className='h-12 px-4 align-middle font-medium text-muted-foreground text-right'>
                Scheduled
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 &&
              bookings.map(booking => (
                <tr
                  className='border-b transition-colors hover:bg-muted/50 '
                  key={booking._id.toString()}>
                  <td className='p-4 align-middle font-medium'>
                    {booking._id.toString()}
                  </td>
                  <td className='p-4 align-middle capitalize'>
                    {booking.firstName} {booking.lastName}
                  </td>
                  <td className='p-4 align-middle '>{booking.email}</td>
                  <td className='p-4 align-middle'>{booking.phone}</td>
                  <td className='p-4 align-middle '>{booking.status}</td>
                  <td className='p-4 align-middle text-right'>
                    {formatTime(booking.time)} -{' '}
                    {incrementTimeByOneHour(booking.time)} ,{' '}
                    {formatDate(booking.date.toString())}
                  </td>
                  <td className='p-4 align-middle'>
                    <button className='btn '>
                      <Link href={`/admin/bookings/${booking._id.toString()}`}>
                        Show details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default Bookings
