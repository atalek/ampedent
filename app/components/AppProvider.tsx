'use client'
import { SessionProvider } from 'next-auth/react'

function AppProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
export default AppProvider
