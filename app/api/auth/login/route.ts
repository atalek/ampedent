import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'

export async function POST(req: Request) {
  const body = await req.json()
  const { username, password } = body
  try {
    await dbConnect()
    const user = await User.findOne({ username })

    if (user && (await user.matchPassword(password))) {
      return Response.json({
        message: 'Logged in',
        username: user.username,
        role: user.role,
      })
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
