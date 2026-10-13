import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bygg din offert post för post med risken inräknad',
  description: 'Bygg din offert post för post, ange risken för varje del och få ett realistiskt kostnadsintervall i SEK som tar hänsyn till överraskningar.',
  alternates: { canonical: '/sv/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
