'use client'

import { FormEvent, useEffect, useState } from 'react'

function Booking() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)
  const isValidPhone = (phone: string) =>
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

  function handleAppointment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setIsLoading(true)
      const body = { firstName, lastName, email, phone, message }
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
      })
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <section className='max-w-3xl w-full min-h-lvh mx-auto flex items-center justify-center p-4'>
      <div>
        <div className='my'>
          <h1 className='text-center mb-8 text-3xl font-bold md:text-5xl'>
            Book an appointment
          </h1>
          <p className='mx-auto mb-8 mt-4  text-slate-600 md:mb-16'>
            AmpeDent can help you maintain or create the smile you want with
            preventive, cosmetic, and restorative dentistry. Our practice uses
            state-of-the-art technology to give you a comfortable experience.
            Contact us today to learn more.
          </p>
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
              {!isValidEmail(email) && <span className='text-red-600'>*</span>}
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
              {!isValidPhone(phone) && <span className='text-red-600'>*</span>}
            </label>
            <input
              disabled={isLoading}
              type='text'
              id='phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className=' flex flex-col my-4'>
            <label htmlFor='message'>
              Message
              {!isValidMessage(message) && (
                <span className='text-red-600'>*</span>
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
