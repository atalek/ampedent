import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

import Loader from './components/Loader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AmpeDent',
  description: 'Dented',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <TheHeader />
          <Loader />
          {children}
        </div>
        <TheFooter />
      </body>
    </html>
  )
}
