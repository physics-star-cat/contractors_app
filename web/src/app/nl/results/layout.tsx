import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uw offerteresultaat: realistische bandbreedte en risico',
  description: 'Uw kostenprognose: de realistische prijsbandbreedte, de risicoverdeling en waar de grootste onzekerheden in uw offerte zitten.',
  alternates: { canonical: '/nl/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
