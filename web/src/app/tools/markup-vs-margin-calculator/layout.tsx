import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markup vs Margin Calculator: Price Jobs Without Losing Money',
  description:
    'See markup and margin for any percentage side by side, so you never underprice a job by confusing the two. Free calculator for contractors.',
  alternates: { canonical: '/tools/markup-vs-margin-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
