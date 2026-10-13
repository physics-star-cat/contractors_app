import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markup vs Margin Calculator for Tradies: Stop Underpricing',
  description:
    'See markup and margin for any percentage side by side in AUD, so you never underprice a job by confusing the two. Free calculator for tradies.',
  alternates: { canonical: '/au/tools/markup-vs-margin-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
