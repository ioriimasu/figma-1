import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Saaed Imam - Full Stack Developer & Platform Architect',
  description: 'Co-Founder & Platform Architect at StitchOS. Engineering systems that compound: RFID, SaaS, and industrial software solutions.',
  keywords: ['Full Stack Developer', 'Platform Architect', 'RFID', 'SaaS', 'Industrial Software', 'StitchOS', 'Textile Technology'],
  authors: [{ name: 'Saaed Imam' }],
  creator: 'Saaed Imam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saaedimam.dev',
    title: 'Saaed Imam - Full Stack Developer & Platform Architect',
    description: 'Co-Founder & Platform Architect at StitchOS. Engineering systems that compound: RFID, SaaS, and industrial software solutions.',
    siteName: 'Saaed Imam Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saaed Imam - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saaed Imam - Full Stack Developer & Platform Architect',
    description: 'Co-Founder & Platform Architect at StitchOS. Engineering systems that compound: RFID, SaaS, and industrial software solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}