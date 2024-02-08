import dbConnect from '@/lib/dbConnect'
import Booking, { BookingType } from '@/models/Booking'

export async function GET(req: Request) {
  try {
    await dbConnect()
    const now = new Date()
    let bookings: BookingType[] = await Booking.find({
      date: { $gte: now },
    })

    bookings.sort((a, b) => {
      const [aHours, aMinutes] = a.time.split(':').map(Number)
      const [bHours, bMinutes] = b.time.split(':').map(Number)

      return aHours - bHours || aMinutes - bMinutes
    })

    return Response.json({ message: 'Bookings fetched ', bookings: bookings })
  } catch (error) {
    throw new Error('Could not fetch bookings')
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, message, date, time } = body
    await dbConnect()
    const booking = await Booking.create({
      firstName,
      lastName,
      email,
      phone,
      message,
      date,
      time,
    })
    return Response.json({ message: 'Booking created', booking: booking })
  } catch (error: any) {
    throw new Error(error.message)
  }
}
