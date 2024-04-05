import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbars from './Component/Navbars'
import Footer from './Component/Footer'
import { Analytics } from '@vercel/analytics/react'
import { GoogleTagManager, GoogleAnalytics  } from '@next/third-parties/google'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Willy Permana Ok',
  description: 'Curiculum Vitae dan Portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <GoogleTagManager gtmId="G-SWLRRNE0EV" />
        <GoogleAnalytics gaId="G-SWLRRNE0EV" />
        <Navbars />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
