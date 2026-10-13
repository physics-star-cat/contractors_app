import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ditt offertresultat: realistiskt intervall och riskanalys',
  description: 'Din kostnadsprognos: det realistiska prisintervallet, riskfördelningen och var de största osäkerheterna i din offert finns.',
  alternates: { canonical: '/sv/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
