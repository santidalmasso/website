import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  title: 'Santi Dalmasso',
  authors: [
    {
      name: 'Santi Dalmasso',
      url: 'https://santidalmasso.com',
    },
  ],
  creator: 'Santi Dalmasso',
  openGraph: {
    title: 'Santi Dalmasso',
    locale: 'en_US',
    description:
      'Santi Dalmasso is a software engineer and entrepreneur based in San Francisco, CA.',
    url: 'https://santidalmasso.com',
    type: 'website',
    siteName: 'Santi Dalmasso',
    images: [
      {
        url: 'https://santidalmasso.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Santi Dalmasso',
      },
    ],
  },
  themeColor: '#111',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Santi Dalmasso',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@santidalmasso',
    site: '@santidalmasso',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
