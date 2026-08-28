import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'AMMAR ADILOVIĆ — Video Editor, Videographer, Motion Designer',
  description:
    'Personal portfolio of Ammar Adilović — video editor, videographer and motion designer based in Sarajevo, Bosnia & Herzegovina. Crafting stories through editing, motion and film.',
  generator: 'v0.app',
  metadataBase: new URL('https://ammaradilovic.com'),
  openGraph: {
    title: 'AMMAR ADILOVIĆ — Video Editor · Videographer · Motion Designer',
    description: 'Crafting stories through editing, motion and film.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} bg-background`}>
      <body className="font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
