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
    const { _id, username, password } = body
    await dbConnect()
    const user = await User.findById({ _id })

    if (!user) {
      throw new Error('User not found')
    }
    const updateFields: Partial<UserType> = {}
    if (username) updateFields.username = username
    if (password && password !== '') updateFields.password = password

    const updatedUser = await User.findByIdAndUpdate({ _id }, updateFields, {
      new: true,
    })
    return Response.json({ message: 'User updated' })
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url)
    const _id = url.searchParams.get('_id')
    await User.findByIdAndDelete(_id)
    return Response.json({ message: 'User deleted' })
  } catch (error) {
    throw error
  }
}
