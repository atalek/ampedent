import Link from 'next/link'

function BookVisit() {
  return (
    <section className='bg-[#276981] w-full h-full text-white'>
      <div className=' flex items-center flex-col text-center my-20'>
        <h4 className='font-bold  text-4xl'>Book your visit online</h4>
        <p className='mt-8 text-lg'>
          View available appointments and enjoy dentistry done right. +FREE
          teeth whitening for life.
        </p>
        <Link
          href='/booking'
          className='mx-auto mt-16 inline-block rounded-md bg-blue-800 hover:bg-blue-600 px-8 py-4 text-center font-semibold text-white'>
          BOOK ONLINE
        </Link>
      </div>
    </section>
  )
}
export default BookVisit
