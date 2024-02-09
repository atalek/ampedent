import dbConnect from '@/lib/dbConnect'
import Booking from '@/models/Booking'
import { isSuperAdmin } from '../../auth/[...nextauth]/route'

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
          { status: 'canceled' },
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
