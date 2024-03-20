import dbConnect from '@/lib/dbConnect'
import { isSuperAdmin } from '@/lib/isSuperAdmin'
import Booking, { BookingType } from '@/models/Booking'

export async function GET(req: Request) {
  try {
    await dbConnect()
    const role = await isSuperAdmin()
    if (role === 'superadmin' || role === 'admin') {
      const url = new URL(req.url)
      const _id = url.searchParams.get('_id')

      if (_id) {
        const booking = await Booking.findById(_id)
        return Response.json({ message: 'Booking fetched', booking: booking })
      }

      const status = url.searchParams.get('status')
      const search = url.searchParams.get('search')
      const page = Number(url.searchParams.get('page')) || 1
      const pageSize = 9

      let filter: any = {}

      if (status === 'all') {
        filter = {
          $or: [
            { firstName: { $regex: `.*${search}.*`, $options: 'i' } },
            { lastName: { $regex: `.*${search}.*`, $options: 'i' } },
            { phone: { $regex: `.*${search}.*`, $options: 'i' } },
            { email: { $regex: `.*${search}.*`, $options: 'i' } },
          ],
        }
      } else {
        filter = {
          status,
          $or: [
            { firstName: { $regex: `.*${search}.*`, $options: 'i' } },
            { lastName: { $regex: `.*${search}.*`, $options: 'i' } },
            { phone: { $regex: `.*${search}.*`, $options: 'i' } },
            { email: { $regex: `.*${search}.*`, $options: 'i' } },
          ],
        }
      }

      const totalBookings = await Booking.countDocuments(filter)
      const totalPages = Math.ceil(totalBookings / pageSize)

      let bookings: BookingType[] = []

      if (totalPages >= page) {
        bookings = await Booking.find(filter)
          .limit(pageSize)
          .skip(pageSize * (page - 1))
          .sort({ status: -1, date: 1, time: 1 })
          .exec()
      }

      return Response.json({
        message: 'Bookings fetched',
        bookings,
        totalPages: totalPages,
      })
    } else {
      throw new Error('Unauthorized')
    }
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

export async function PUT(req: Request) {
  try {
    await dbConnect()
    const url = new URL(req.url)
    const _id = url.searchParams.get('_id')
    const role = await isSuperAdmin()
    if (role === 'superadmin' || role === 'admin') {
      if (_id) {
        const booking = await Booking.findByIdAndUpdate(
          _id,
          { status: 'completed' },
          { new: true },
        )
        return Response.json({ message: 'Booking updated', booking: booking })
      }
    } else {
      throw new Error('Unauthorized')
    }
  } catch (error) {
    throw new Error('Could not update bookings')
  }
}
