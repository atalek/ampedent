import { Metadata } from 'next'
import BookingForm from '../components/booking/BookingForm'

export const metadata: Metadata = {
  title: 'Book now',
}

function Booking() {
  return <BookingForm />
}
export default Booking
