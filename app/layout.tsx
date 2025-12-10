import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Deep Flow Coworking',
  description: 'Modern coworking spaces designed for productivity and collaboration',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-circle.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-circle.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-circle.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon-circle.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
