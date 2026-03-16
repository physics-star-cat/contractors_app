import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'

export const metadata: Metadata = {
  title: 'lowriskquotes // kostenraming voor aannemers',
  description: 'Monte Carlo-kostenprognoses voor aannemers. Stop met gokken — simuleer duizenden scenario\'s om de juiste prijs te vinden.',
  alternates: { canonical: '/nl/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬──────────┐
│ Conservatief   │ €8.240   │
│ Aanbevolen     │ €9.870   │
│ Veilig         │ €11.450  │
└────────────────┴──────────┘

RISICOVERDELING
Materialen     [██████░░░░░░░░░░░░░░] 30%
Looptijd       [█████████░░░░░░░░░░░] 45%
Reistijd       [███░░░░░░░░░░░░░░░░░] 15%`

export default function NlHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">stop met gokken // begin met simuleren</p>
        <p className="home__subtitle">Monte Carlo-kostenprognoses voor aannemers</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="Hoe het werkt">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Voer uw posten, looptijd en reistijd in met onzekerheidsniveaus</div>
            <div className="home__step"><span className="home__step-num">[2]</span> Monte Carlo-simulatie berekent 10.000 kostenscenario&apos;s</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Ontvang een statistisch veilige offerte — geen gok</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Voorbeeldresultaat">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/nl/estimate/" className="home__cta-button">[START OFFERTE]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes gebruikt Monte Carlo-simulatie om aannemers en vaklieden te helpen
          offertes te maken die rekening houden met werkelijke onzekerheid. In plaats van een
          vast opslagpercentage toe te voegen, simuleert u duizenden kostenscenario&apos;s om het
          prijspunt te vinden waarbij u waarschijnlijk geen geld verliest.
        </p>
        <p>
          Werkt offline. Geen account nodig. Uw gegevens verlaten nooit uw browser.
        </p>
      </section>
    </div>
  )
}
