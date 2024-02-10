import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'

const authOptions: NextAuthOptions = {
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
        const name = credentials?.name
        const password = credentials?.password

        await dbConnect()
        const user = await User.findOne({ name })
        console.log(user && (await user.matchPassword(password)))
        if (user && (await user.matchPassword(password))) {
          return user
        }
        return null
      },
    }),
  ],
}

export default authOptions
