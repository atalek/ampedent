import User from '@/models/User'
import { getServerSession } from 'next-auth'
import dbConnect from './dbConnect'
import authOptions from './authOptions'

export async function isSuperAdmin() {
  const session = await getServerSession(authOptions)
  const name = session?.user?.name
  if (!name) {
    return false
  }
  await dbConnect()
  const user = await User.findOne({ name })
  if (!user) {
    return false
  }
  return user.role
}
