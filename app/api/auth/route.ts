import dbConnect from '@/lib/dbConnect'
import User, { UserType } from '@/models/User'

export async function POST(req: Request) {
  const body = await req.json()
  const { username, password } = body
  try {
    await dbConnect()
    const user = await User.create({
      username,
      password,
    })
    return Response.json({ message: 'User created' })
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function GET(req: Request) {
  try {
    await dbConnect()
    const users = await User.find().select('-password')
    return Response.json({ message: 'User fetched', users: users })
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { username, password, role } = body
    await dbConnect()
    const user = await User.findOne({ username })

    if (!user) {
      return Response.json({ error: 'User not found' })
    }
    const updateFields: Partial<UserType> = {}
    if (username) updateFields.username = username
    if (password) updateFields.password = password
    if (role) updateFields.role = role

    const updatedUser = await User.findOneAndUpdate(
      { username },
      updateFields,
      {
        new: true,
      },
    )
    return Response.json({ message: 'User updated' })
  } catch (error: any) {
    throw new Error(error.message)
  }
}
