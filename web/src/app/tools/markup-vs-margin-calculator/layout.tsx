import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'markup vs margin calculator // lowriskquotes',
  description:
    'Calculate the difference between markup and margin. Free calculator for contractors — stop losing money by confusing the two.',
  alternates: { canonical: '/tools/markup-vs-margin-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
