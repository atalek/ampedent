import { allTimes } from '@/data/times'
import dbConnect from '@/lib/dbConnect'
import Booking from '@/models/Booking'
import { unstable_noStore as noStore } from 'next/cache'

export async function GET(req: Request) {
  noStore()
  try {
    const url = new URL(req.url)
    const date = url.searchParams.get('date')

    let selectedDate: Date | null = null
    if (date !== null) {
      selectedDate = new Date(date)
    } else {
      throw new Error('Invalid date')
    }

    const dayOfWeek = selectedDate.getDay()
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      throw new Error('No available times on Saturday or Sunday')
    }

    await dbConnect()

    const bookings = await Booking.find({
      date: {
        $gte: new Date(selectedDate.setHours(0, 0, 0, 0)),
        $lt: new Date(selectedDate.setHours(23, 59, 59, 999)),
      },
    })

    const bookedAndNotCanceledTimes = bookings
      .filter(booking => booking.status !== 'canceled')
      .map(booking => booking.time)

    const utcTime = new Date().getTime()
    const dstOffset = new Date(utcTime).getTimezoneOffset() / 60
    const cetOffset = dstOffset < 60 ? 60 : 120
    const currentCETTime = new Date(utcTime + cetOffset * 60 * 1000)

    const availableTimes = allTimes.filter(time => {
      const availableTime = new Date(
        `${selectedDate?.toISOString().split('T')[0]}T${time}`,
      )
      return (
        availableTime.getTime() > currentCETTime.getTime() &&
        !bookedAndNotCanceledTimes.includes(time)
      )
    })

    return Response.json({
      message: 'Available times fetched',
      availableTimes: availableTimes,
    })
  } catch (error) {
    throw new Error('Could not fetch available times: ' + error)
  }
}
