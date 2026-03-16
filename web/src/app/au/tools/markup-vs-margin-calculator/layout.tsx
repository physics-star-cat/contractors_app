import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'markup vs margin calculator for australian tradies // lowriskquotes',
  description:
    'Calculate the difference between markup and margin in AUD. Free calculator for Australian tradies — stop losing money by confusing the two.',
  alternates: { canonical: '/au/tools/markup-vs-margin-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
