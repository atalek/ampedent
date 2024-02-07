import dbConnect from '@/lib/dbConnect'
import Booking from '@/models/Booking'

export async function GET(req: Request) {
  return Response.json({ message: 'Hello from test route' })
}

export async function POST(req: Request) {
  const body = await req.json()
  const { firstName, lastName, email, phone, message } = body
  try {
    await dbConnect()
    const booking = await Booking.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    })
    return Response.json({ message: 'Booking created', booking: booking })
  } catch (error: any) {
    throw new Error(error.message)
  }
}
