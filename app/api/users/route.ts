import dbConnect from '@/lib/dbConnect'
import User, { UserType } from '@/models/User'
import { isSuperAdmin } from '../auth/[...nextauth]/route'

export async function GET(req: Request) {
  try {
    const role = await isSuperAdmin()
    if (role === 'superadmin' || role === 'admin') {
      await dbConnect()
      const users = await User.find().select('-password')
      return Response.json({ message: 'User fetched', users: users })
    } else {
      throw new Error('Unathorized')
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function PUT(req: Request) {
  try {
    const role = await isSuperAdmin()
    if (role === 'superadmin') {
      const body = await req.json()
      const { _id, name, password } = body
      await dbConnect()
      const user = await User.findById({ _id })

      if (!user) {
        throw new Error('User not found')
      }
      const updateFields: Partial<UserType> = {}
      if (name) updateFields.name = name
      if (password && password !== '') updateFields.password = password

      await User.findByIdAndUpdate({ _id }, updateFields, {
        new: true,
      })
      return Response.json({ message: 'User updated' })
    } else {
      throw new Error('Unathorized')
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url)
    const _id = url.searchParams.get('_id')
    const role = await isSuperAdmin()

    if (role === 'superadmin') {
      const user = await User.findById(_id)
      if (user.role === 'superadmin') {
        throw new Error('Cannot delete superadmin')
      }
      await user.deleteOne()
      return Response.json({ message: 'User deleted' })
    } else {
      throw new Error('Unathorized')
    }
  } catch (error) {
    throw error
  }
}
