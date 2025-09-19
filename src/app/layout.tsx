import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DIY IRS Relief Playbook - Legally Lower What You Owe',
  description: 'The same IRS processes tax firms charge $3,000+ for, explained step-by-step so you can do it yourself. 100% legal methods with templates included.',
  keywords: 'IRS relief, tax debt, offer in compromise, installment agreement, tax resolution, DIY tax help',
  authors: [{ name: 'DIY IRS Relief' }],
  creator: 'DIY IRS Relief',
  publisher: 'DIY IRS Relief',
  openGraph: {
    title: 'DIY IRS Relief Playbook - Legally Lower What You Owe',
    description: 'Professional IRS relief processes explained simply. Save thousands on tax resolution fees.',
    url: 'https://diyirsrelief.com',
    siteName: 'DIY IRS Relief Playbook',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DIY IRS Relief Playbook',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIY IRS Relief Playbook - Legally Lower What You Owe',
    description: 'Professional IRS relief processes explained simply. Save thousands on tax resolution fees.',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}