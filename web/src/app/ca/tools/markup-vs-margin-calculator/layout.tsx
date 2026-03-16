import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'markup vs margin calculator // lowriskquotes Canada',
  description:
    'Calculate the difference between markup and margin in CAD. Free calculator for Canadian contractors — stop losing money by confusing the two.',
  alternates: { canonical: '/ca/tools/markup-vs-margin-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
