import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Leynardo Yosef | Backend Engineer Go & Node.js',
  description: 'Backend Engineer specializing in Go and Node.js with experience in logistics, government systems, NFT platforms, and scalable backend architecture.',
  keywords: [
    'backend engineer',
    'golang developer',
    'nodejs developer',
    'backend developer indonesia',
    'software engineer indonesia',
    'backend engineer indonesia',
    'go developer',
    'distributed systems',
    'scalable backend',
    'leynardo yosef',
  ],
  authors: [{ name: 'Leynardo Yosef' }],
  creator: 'Leynardo Yosef',
  publisher: 'Leynardo Yosef',
  metadataBase: new URL('https://leynardo.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leynardo.vercel.app',
    title: 'Leynardo Yosef | Backend Engineer Go & Node.js',
    description: 'Backend Engineer specializing in Go and Node.js with experience in logistics, government systems, NFT platforms, and scalable backend architecture.',
    siteName: 'Leynardo Yosef Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Leynardo Yosef - Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leynardo Yosef | Backend Engineer Go & Node.js',
    description: 'Backend Engineer specializing in Go and Node.js with experience in logistics, government systems, NFT platforms, and scalable backend architecture.',
    images: ['/og-image.png'],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>
          <div className="relative min-h-screen">
            {/* Background effects */}
            <div className="fixed inset-0 grid-background opacity-20 pointer-events-none" />
            <div className="gradient-blur fixed top-20 -left-20 w-96 h-96 bg-neon-cyan rounded-full" />
            <div className="gradient-blur fixed bottom-20 -right-20 w-96 h-96 bg-neon-blue rounded-full" />
            
            {/* Main content */}
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
