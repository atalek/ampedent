import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'
import NextAuth, { getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        name: { label: 'Name', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log(credentials)
        const name = credentials?.name
        const password = credentials?.password

        await dbConnect()
        const user = await User.findOne({ name })
        if (user && user.matchPassword(password)) {
          return user
        }
        return null
      },
    }),
  ],
}

export async function isSuperAdmin() {
  const session = await getServerSession(authOptions)
  const name = session?.user?.name
  if (!name) {
    return false
  }
  const user = await User.findOne({ name })
  if (!user) {
    return false
  }
  return user.role
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
