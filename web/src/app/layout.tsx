import type { Metadata } from 'next'
import { RegionProvider } from '@/context/RegionContext'
import { EstimatorProvider } from '@/context/EstimatorContext'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // contractor cost estimation',
  description: 'Monte Carlo cost projections for contractors. Stop guessing, start simulating.',
  metadataBase: new URL('https://lowriskquotes.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <RegionProvider>
          <EstimatorProvider>
            <div className="app">
              <Nav />
              <main>{children}</main>
              <Footer />
            </div>
          </EstimatorProvider>
        </RegionProvider>
      </body>
    </html>
  )
}
