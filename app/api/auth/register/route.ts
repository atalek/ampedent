import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'

export async function POST(req: Request) {
  const body = await req.json()
  const { username, password } = body
  try {
    await dbConnect()

    const user = await User.create({ username, password })

    return Response.json({
      message: 'New user created',
      username: user.username,
      role: user.role,
    })
  } catch (error: any) {
    throw new Error(error.message)
  }
}
