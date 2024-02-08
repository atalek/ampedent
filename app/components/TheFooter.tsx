import Link from 'next/link'
import Github from './Icons/Github'

function TheFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='block'>
      <div className='py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10'>
        <div className='flex-row flex justify-between max-[767px]:flex-col max-[767px]:items-start'>
          <div className='w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:'>
            <h2 className='font-bold text-3xl md:text-5xl'>
              Personalized care, exceptional results
            </h2>
          </div>
          <div className='max-[991px]:ml-4 max-[991px]:flex-none max-[767px]: max-[767px]:mt-8'>
            <div className='mb-4 flex max-w-[272px] items-start justify-start'>
              <img
                src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bb99e6cf78_MapPin.svg'
                alt=''
                className='inline-block mr-3'
              />
              <p className='text-slate-600 max-[479px]:text-sm'>
                123 Main St, Anytown, CA 90210, USA
              </p>
            </div>
            <div className='mb-4 flex max-w-[272px] items-start justify-start'>
              <img
                src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg'
                alt=''
                className='inline-block mr-3'
              />
              <p className='text-slate-600 max-[479px]:text-sm'>
                ampedent@example.com
              </p>
            </div>
          </div>
        </div>
        <div className='mb-14 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)] mt-16'></div>
        <div className='flex-row flex justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start'>
          <div className='font-semibold max-[991px]: max-[479px]:mb-4 max-[991px]:py-1 text-center sm:text-center'>
            <Link
              href='/about'
              className='inline-block font-normal text-slate-600 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6'>
              About
            </Link>
            <Link
              href='/services'
              className='inline-block font-normal text-slate-600 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6'>
              Services
            </Link>
            <Link
              href='booking'
              className='inline-block font-normal text-slate-600 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6'>
              Booking
            </Link>
            <Link
              href='/admin/bookings'
              className='inline-block font-normal text-slate-600 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6'>
              Admin
            </Link>
          </div>
          <div className='max-[991px]:flex-none '>
            <Link
              href='https://github.com/Amphei'
              target='_blank'
              className='text-slate-600   flex flex-row items-center gap-1 '>
              © {currentYear} ampeDent - Made by Amphei <Github />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default TheFooter
