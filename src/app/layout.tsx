import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbars from './Component/Navbars'
import Footer from './Component/Footer'
import { Analytics } from '@vercel/analytics/react'


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
      <head><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SWLRRNE0EV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SWLRRNE0EV');
</script></head>
      <body className={inter.className}>
        <Navbars />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
