import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pålägg vs marginal: prissätt jobb utan att förlora pengar',
  description:
    'Se pålägg och marginal för valfri procentsats sida vid sida och prissätt aldrig för lågt genom att blanda ihop dem. Gratis kalkylator för hantverkare.',
  alternates: { canonical: '/sv/tools/palagg-marginal-kalkylator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
