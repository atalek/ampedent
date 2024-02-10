import authOptions from '@/lib/authOptions'
import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'
import { getServerSession } from 'next-auth'

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (session) {
      await dbConnect()
      const user = await User.findOne({ name: session?.user?.name }).select(
        '-password',
      )

      return Response.json({
        message: 'user fetched',
        user: user.name,
        role: user.role,
      })
    } else {
      throw new Error('Unauthorized')
    }
  } catch (error) {
    throw error
  }
}
