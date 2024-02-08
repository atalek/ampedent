import Link from 'next/link'

function IndividualBooking() {
  return (
    <section>
      <Link
        href='/admin/bookings'
        className='p-3 border rounded hover:border-black'>
        Go back
      </Link>
    </section>
  )
}
export default IndividualBooking
