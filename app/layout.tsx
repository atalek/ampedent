import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

import TheHeader from './components/layout/TheHeader'
import TheFooter from './components/layout/TheFooter'

import Loader from './components/Loader'
import AppProvider from './components/AppProvider'
import { Suspense } from 'react'
import Spinner from './components/Spinner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AmpeDent | Your Dental Care Partner',
    template: `%s | AmpeDent`,
  },
  description:
    "AmpeDent provides comprehensive dental care services. We're committed to giving you a healthy smile.",
  metadataBase: new URL('https://ampedent.vercel.app/'),

  openGraph: {
    type: 'website',
    url: 'https://ampedent.vercel.app/',
    title: 'AmpeDent | Your Dental Care Partner',
    description:
      "AmpeDent provides comprehensive dental care services. We're committed to giving you a healthy smile.",
    images: [
      {
        url: 'https://res.cloudinary.com/dkofkuquf/image/upload/v1707573685/nuxtshop/rlviwuatbxvwxex336eh.webp',
        alt: 'AmpeDent Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://ampedent.vercel.app/',
    title: 'AmpeDent | Your Dental Care Partner',
    description:
      "AmpeDent provides comprehensive dental care services. We're committed to giving you a healthy smile.",
    images: [
      'https://res.cloudinary.com/dkofkuquf/image/upload/v1707573685/nuxtshop/rlviwuatbxvwxex336eh.webp',
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AppProvider>
        <body className={inter.className}>
          <div className='flex flex-col min-h-screen'>
            <TheHeader />
            <Suspense fallback={<Spinner />}>
              <Loader />
            </Suspense>
            {children}
            <Analytics />
          </div>
          <TheFooter />
        </body>
      </AppProvider>
    </html>
  )
}
