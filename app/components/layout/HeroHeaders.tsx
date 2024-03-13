import Link from 'next/link'

function HeroHeaders() {
  return (
    <div className='mx-auto  w-full max-w-7xl text-center mt-32'>
      <h1 className='mb-4 text-4xl font-bold md:text-7xl  text-center'>
        Building lifetime relationships through positive experiences
      </h1>

      <div className='flex items-stretch justify-center mt-8'>
        <Link
          href='/booking'
          className='mx-auto inline-block rounded-md bg-blue-800 hover:bg-blue-600 px-8 py-4 text-center font-semibold text-white'>
          BOOK ONLINE
        </Link>
      </div>
    </div>
  )
}
export default HeroHeaders
