import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zbuduj wycenę pozycja po pozycji z uwzględnieniem ryzyka',
  description: 'Zbuduj wycenę pozycja po pozycji, ustaw ryzyko każdego elementu i uzyskaj realistyczny zakres kosztów uwzględniający niespodzianki.',
  alternates: { canonical: '/pl/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
