'use client'

import { FormEvent, useState } from 'react'

function Booking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleAppointment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const body = { name, email, phone, message }
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
          <div className=' flex flex-col my-4'>
            <label htmlFor='name'>
              Name {!name && <span className='text-red-600'>*</span>}
            </label>
            <input
              type='text'
              id='name'
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className=' flex flex-col my-4'>
            <label htmlFor='email'>
              Email {!email && <span className='text-red-600'>*</span>}
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className=' flex flex-col my-4'>
            <label htmlFor='phone'>
              Phone {!phone && <span className='text-red-600'>*</span>}
            </label>
            <input
              type='text'
              id='phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className=' flex flex-col my-4'>
            <label htmlFor='message'>
              Message {!message && <span className='text-red-600'>*</span>}
            </label>
            <textarea
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
            className=' rounded px-6 py-3 text-center font-semibold text-blue-400 border border-solid border-blue-400 hover:bg-blue-400 hover:text-white'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
export default Booking
