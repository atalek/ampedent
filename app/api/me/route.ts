import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import User from '@/models/User'
import { getServerSession } from 'next-auth'

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  const user = await User.findOne({ name: session?.user?.name }).select(
    '-password',
  )

  return Response.json({
    message: 'user fetched',
    user: user.name,
    role: user.role,
  })
}
