'use client'

import {
  formatDate,
  formatTime,
  incrementTimeByOneHour,
} from '@/lib/dateAndTimeUtils'
import { BookingType } from '@/models/Booking'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Spinner from '@/app/components/Spinner'

function IndividualBooking({ params }: { params: { id: string } }) {
  const [booking, setBooking] = useState<BookingType>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    async function fetchBooking() {
      try {
        setIsLoading(true)
        const res = await fetch(`/api/booking?_id=${params.id}`)
        if (res.ok) {
          const data = await res.json()
          setBooking(data.booking)
          setIsLoading(false)
        }
      } catch (err: any) {
        setError(err.message)
        setIsLoading(false)
      }
    }
    fetchBooking()
  }, [params.id])

  async function completeBooking() {
    try {
      setIsLoading(true)
      const res = await fetch(`/api/booking?_id=${params.id}`, {
        method: 'PUT',
      })
      if (res.ok) {
        router.push('/admin/bookings')
      }
      setIsLoading(false)
    } catch (err: any) {
      setError(err.message)

      setIsLoading(false)
    }
  }

  async function cancelBooking() {
    try {
      setIsLoading(true)
      const res = await fetch(`/api/booking/cancel?_id=${params.id}`, {
        method: 'PUT',
      })
      if (res.ok) {
        router.push('/admin/bookings')
      }
      setIsLoading(false)
    } catch (err: any) {
      setError(err.message)

      setIsLoading(false)
    }
  }

  if (status === 'unauthenticated') {
    router.push('/')
  }

  return (
    <section className=''>
      <Link
        href='/admin/bookings'
        className='p-3 border rounded hover:border-black'>
        Go back
      </Link>
      {booking && (
        <section className='max-w-3xl w-full mx-auto flex items-center justify-center p-4'>
          <div className='w-full'>
            <div className='mb-1'>
              <h1 className=' text-center mb-8 text-wrap text-2xl font-bold md:text-5xl'>
                Booking : {booking._id.toString()}
              </h1>
              {isLoading && <Spinner />}
              {error && <p className='text-red-600 text-center '>{error}</p>}
            </div>
            <form className='mx-auto flex flex-col'>
              <div className='grid md:grid-cols-2 gap-4 items-center'>
                <div>
                  <label htmlFor='firstName'>First name</label>
                  <input
                    disabled={true}
                    type='text'
                    id='firstName'
                    value={booking.firstName}
                  />
                </div>
                <div>
                  <label htmlFor='lastName'>Last name</label>
                  <input
                    disabled={true}
                    type='text'
                    id='lastName'
                    value={booking.lastName}
                  />
                </div>
              </div>
              <div className='flex flex-col my-4'>
                <label htmlFor='email'>Email</label>
                <input
                  disabled={true}
                  type='email'
                  id='email'
                  value={booking.email}
                />
              </div>
              <div className='flex flex-col my-4'>
                <label htmlFor='phone'>Phone</label>
                <input
                  disabled={true}
                  type='text'
                  id='phone'
                  value={booking.phone}
                />
              </div>
              <div className='grid md:grid-cols-2 gap-4 items-center'>
                <div className='flex flex-col'>
                  <label htmlFor='date' className='mb-[2px]'>
                    Date
                  </label>
                  <input
                    disabled={true}
                    type='text'
                    id='date'
                    value={formatDate(booking.date.toString())}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='time' className='mb-[2px]'>
                    Time
                  </label>
                  <input
                    disabled={true}
                    type='text'
                    id='time'
                    value={
                      formatTime(booking.time) +
                      ' ' +
                      '-' +
                      ' ' +
                      incrementTimeByOneHour(booking.time)
                    }
                  />
                </div>
              </div>
              <div className='flex flex-col my-4'></div>
              <div className='flex flex-col my-4'>
                <label htmlFor='message'>Message</label>
                <textarea
                  disabled={true}
                  value={booking.message}
                  id='message'
                  cols={30}
                  rows={10}></textarea>
              </div>

              {booking && booking.status === 'pending' && (
                <div className='flex md:flex-row flex-col items-center justify-between gap-4'>
                  <button
                    type='button'
                    className='rounded w-full md:max-w-[100px] px-6 py-3 text-center font-semibold text-white bg-blue-600 hover:bg-blue-800'>
                    Notify
                  </button>
                  <div className='flex w-full md:flex-row flex-col items-center gap-4'>
                    <button
                      onClick={cancelBooking}
                      type='button'
                      className='rounded w-full md:max-w-[200px] whitespace-nowrap px-6 py-3 text-center font-semibold text-white bg-red-500 hover:bg-red-800'>
                      Cancel appointment
                    </button>
                    <button
                      onClick={completeBooking}
                      type='button'
                      className='rounded w-full md:max-w-[200px] px-6 py-3 text-center font-semibold text-white bg-green-600 hover:bg-green-800'>
                      Mark as completed
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>
      )}
    </section>
  )
}

export default IndividualBooking
