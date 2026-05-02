import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Mercy-Vocational-Training-Centre-Chepareria',
  description: 'Empowering skills for a better future. A leading vocational training institution in Chepareria, West Pokot County, Kenya offering technical and practical skills training.',
  keywords: ['vocational training', 'TVET', 'Kenya', 'West Pokot', 'technical skills', 'education', 'Chepareria'],
  authors: [{ name: 'Our Lady of Mercy College' }],
  openGraph: {
    title: 'Mercy-Vocational-Training-Centre-Chepareria',
    description: 'Empowering skills for a better future through technical and vocational education.',
    type: 'website',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/android-touch-icon.png', type: 'image/svg+xml' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', media: '(prefers-color-scheme: light)' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
