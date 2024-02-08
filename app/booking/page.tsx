'use client'

import { FormEvent, useEffect, useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { formatTime } from '@/lib/dateAndTimeUtils'

function Booking() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const now = new Date()
  let defaultDate = new Date()
  if (now.getHours() >= 16) {
    defaultDate.setDate(now.getDate() + 1)
  }

  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(defaultDate)
  const [selectedTime, setSelectedTime] = useState(availableTimes[0])

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)
  const isValidPhone = (phone: string) =>
    phone.length >= 8 &&
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(phone)
  const isValidName = (name: string) => name.length >= 3
  const isValidMessage = (message: string) => message.length >= 10

  useEffect(() => {
    const isEmpty = [firstName, lastName, email, phone, message].some(
      x => x === '',
    )
    setIsDisabled(
      isEmpty ||
        !isValidName(firstName) ||
        !isValidName(lastName) ||
        !isValidEmail(email) ||
        !isValidPhone(phone) ||
        !isValidMessage(message),
    )
  }, [firstName, lastName, email, phone, message])

  useEffect(() => {
    async function fetchAvailableTimes() {
      try {
        const res = await fetch(`/api/availability?date=${selectedDate}`)
        if (res.ok) {
          const data = await res.json()
          setAvailableTimes(data.availableTimes)
        }
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchAvailableTimes()
  }, [selectedDate])

  function handleAppointment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setIsLoading(true)
      const body = {
        firstName,
        lastName,
        email,
        phone,
        message,
        date: selectedDate,
        time: selectedTime,
      }
      fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setIsLoading(false)
        setSelectedDate(defaultDate)
        setSelectedTime(availableTimes[0])
      })
    } catch (err: any) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  return (
    <section className='max-w-3xl w-full min-h-lvh mx-auto flex items-center justify-center p-4'>
      <div>
        <div className='my-8'>
          <h1 className='text-center mb-8 text-3xl font-bold md:text-5xl'>
            Book an appointment
          </h1>
          <p className='mx-auto mb-8 mt-4  text-slate-600 md:mb-16'>
            AmpeDent can help you maintain or create the smile you want with
            preventive, cosmetic, and restorative dentistry. Our practice uses
            state-of-the-art technology to give you a comfortable experience.
            Contact us today to learn more.
          </p>
          {error && <p className='text-red-600 text-center '>{error}</p>}
        </div>
        <form className=' mx-auto' onSubmit={handleAppointment}>
          <div className='grid md:grid-cols-2 gap-4 items-center'>
            <div>
              <label htmlFor='name'>
                First name
                {!isValidName(firstName) && (
                  <span className='text-red-600 ml-1'>*</span>
                )}
              </label>
              <input
                disabled={isLoading}
                type='text'
                id='name'
                autoFocus
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='name'>
                Last name
                {!isValidName(lastName) && (
                  <span className='text-red-600 ml-1'>*</span>
                )}
              </label>
              <input
                disabled={isLoading}
                type='text'
                id='name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className=' flex flex-col my-4'>
            <label htmlFor='email'>
              Email
              {!isValidEmail(email) && (
                <span className='text-red-600 ml-1'>*</span>
              )}
            </label>
            <input
              disabled={isLoading}
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className=' flex flex-col my-4'>
            <label htmlFor='phone'>
              Phone
              {!isValidPhone(phone) && (
                <span
                  className='text-red-600 ml-1
							'>
                  *
                </span>
              )}
            </label>
            <input
              disabled={isLoading}
              type='text'
              id='phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div className='grid md:grid-cols-2 gap-4 items-center'>
            <div className='flex flex-col'>
              <label htmlFor='date' className='mb-[2px]'>
                Date
                {!selectedDate && <span className='text-red-600 ml-1'>*</span>}
              </label>
              <DatePicker
                id='date'
                disabled={isLoading}
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd MMMM yyyy'
                filterDate={date => {
                  const day = date.getDay()
                  if (day === 0 || day === 6) {
                    return false
                  }
                  const today = new Date()
                  today.setHours(0, 0, 0, 0)
                  if (date < today) {
                    return false
                  }
                  const now = new Date()
                  if (
                    date.getDate() === now.getDate() &&
                    now.getHours() >= 16
                  ) {
                    return false
                  }
                  return true
                }}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='time' className='mb-[2px]'>
                Time
                {!selectedTime && <span className='text-red-600 ml-1'>*</span>}
              </label>
              <select
                value={selectedTime}
                onChange={e => setSelectedTime(e.target.value)}
                disabled={isLoading}
                id='time'
                className='appearance-none bg-white'>
                {availableTimes.length > 0 &&
                  availableTimes.map((time: string) => (
                    <option value={time} key={time}>
                      {formatTime(time)}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className=' flex flex-col my-4'></div>
          <div className=' flex flex-col my-4'>
            <label htmlFor='message'>
              Message
              {!isValidMessage(message) && (
                <span className='text-red-600 ml-1'>*</span>
              )}
            </label>
            <textarea
              disabled={isLoading}
              value={message}
              onChange={e => setMessage(e.target.value)}
              name='message'
              id='message'
              cols={30}
              rows={10}
              placeholder='Please send us a message with a few options for appointment times and we will respond the next business day.If you have any questions before scheduling,please let us know and we will address them.Thanks'></textarea>
          </div>
          <button
            type='submit'
            className=' rounded px-6 py-3 text-center font-semibold text-white bg-blue-600  hover:bg-blue-800'
            disabled={isDisabled || isLoading}>
            {isLoading ? 'Submitting' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}
export default Booking
