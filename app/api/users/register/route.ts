import dbConnect from '@/lib/dbConnect'
import { isSuperAdmin } from '@/lib/isSuperAdmin'
import User from '@/models/User'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, password } = body
    await dbConnect()
    const role = await isSuperAdmin()
    if (role === 'superadmin') {
      const user = await User.create({ name, password })

      return Response.json({
        message: 'New user created',
        name: user.name,
        role: user.role,
      })
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
