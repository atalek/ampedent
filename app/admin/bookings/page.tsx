'use client'

import { BookingType } from '@/models/Booking'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import {
  formatDate,
  formatTime,
  incrementTimeByOneHour,
} from '@/lib/dateAndTimeUtils'
import Spinner from '@/app/components/Spinner'
import Pagination from '@/app/components/admin/Pagination'

function Bookings() {
  const [bookings, setBookings] = useState<BookingType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState<number>()
  const debouncedSearchTerm = useDebounce(search, 400)
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    async function fetchBookings() {
      try {
        setIsLoading(true)
        const res = await fetch(
          `/api/booking?status=${filter}&page=${page}&search=${search}`,
        )
        if (res.ok) {
          const data = await res.json()
          setBookings(data.bookings)
          setPages(data.totalPages)
          setIsLoading(false)
        }
      } catch (err: any) {
        setIsLoading(false)
        setError(err.message)
      }
    }
    fetchBookings()
  }, [filter, debouncedSearchTerm, page])

  useEffect(() => {
    document.title = 'Bookings | Admin | AmpeDent'
  }, [])

  if (status === 'unauthenticated') {
    router.push('/')
  }

  return (
    <section className='grid gap-4'>
      <div className='relative'>
        {isLoading && <Spinner />}
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='max-w-md items-center'
          placeholder='Search for name or email'
          type='search'
        />
      </div>
      {error && <p className='text-red-600 text-center '>{error}</p>}
      <div className='md:min-h-[700px] h-full relative w-full overflow-auto'>
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
                <div className='flex flex-row items-center gap-4'>
                  <label htmlFor='status'>Status</label>
                  <select
                    name='status'
                    id='status'
                    onChange={e => setFilter(e.target.value)}
                    className='bg-white max-w-[150px]'>
                    <option value='all'>all</option>
                    <option value='pending'>pending</option>
                    <option value='completed'>completed</option>
                    <option value='canceled'>canceled</option>
                  </select>
                </div>
              </th>
              <th className='h-12 px-4 align-middle font-medium text-muted-foreground text-right'>
                Scheduled
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground'></th>
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
                  <td
                    className={`p-4 align-middle font-bold ${
                      booking.status === 'completed'
                        ? 'text-green-600'
                        : booking.status === 'canceled'
                        ? 'text-red-600'
                        : ''
                    }`}>
                    {booking.status}
                  </td>
                  <td className='p-4 align-middle md:text-right text-center'>
                    {formatTime(booking.time.toString())} -{' '}
                    {incrementTimeByOneHour(booking.time.toString())} ,{' '}
                    {formatDate(booking.date.toString())}
                  </td>
                  <td className='p-4 align-middle'>
                    <button>
                      <Link href={`/admin/bookings/${booking._id.toString()}`} className="btn">
                        Show details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {bookings.length > 0 && pages && (
        <Pagination page={page} setPage={setPage} pages={pages} />
      )}
    </section>
  )
}
export default Bookings
