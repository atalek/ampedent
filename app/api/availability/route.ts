import dbConnect from '@/lib/dbConnect'
import Booking from '@/models/Booking'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const date = url.searchParams.get('date')

    let selectedDate: Date | null = null
    if (date !== null) {
      selectedDate = new Date(date)
    } else {
      throw new Error('Invalid date')
    }
    await dbConnect()

    const bookings = await Booking.find({
      date: {
        $gte: new Date(selectedDate.setHours(0, 0, 0, 0)),
        $lt: new Date(selectedDate.setHours(23, 59, 59, 999)),
      },
    })

    const allTimes = [
      '08:00:00.000Z',
      '09:00:00.000Z',
      '10:00:00.000Z',
      '11:00:00.000Z',
      '12:00:00.000Z',
      '13:00:00.000Z',
      '14:00:00.000Z',
      '15:00:00.000Z',
      '16:00:00.000Z',
    ]

    const bookedTimes = bookings.map(booking => booking.time)
    const availableTimes = allTimes.filter(time => !bookedTimes.includes(time))

    return Response.json({
      message: 'Bookings fetched ',
      availableTimes: availableTimes,
    })
  } catch (error) {
    throw new Error('Could not fetch bookings')
  }
}
