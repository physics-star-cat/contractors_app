import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // Kostenkalkulation für Handwerker',
  description: 'Monte-Carlo-Kostenprognosen für Handwerker und Bauunternehmer. Hören Sie auf zu raten — simulieren Sie tausende Szenarien, um den richtigen Preis zu finden.',
  alternates: { canonical: '/de/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬──────────┐
│ Konservativ     │ €8.240   │
│ Empfohlen       │ €9.870   │
│ Sicher          │ €11.450  │
└────────────────┴──────────┘

RISIKOAUFSCHLÜSSELUNG
Material       [██████░░░░░░░░░░░░░░] 30%
Dauer          [█████████░░░░░░░░░░░] 45%
Anfahrt        [███░░░░░░░░░░░░░░░░░] 15%`

export default function DeHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">nicht raten // simulieren</p>
        <p className="home__subtitle">Monte-Carlo-Kostenprognosen für Handwerker</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="So funktioniert es">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Geben Sie Ihre Positionen, Dauer und Anfahrt mit Unsicherheitsstufen ein</div>
            <div className="home__step"><span className="home__step-num">[2]</span> Monte-Carlo-Simulation berechnet 10.000 Kostenszenarien</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Erhalten Sie ein statistisch sicheres Angebot — keine Vermutung</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Beispielausgabe">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/de/estimate/" className="home__cta-button">[KALKULATION STARTEN]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes nutzt Monte-Carlo-Simulation, um Handwerkern und Bauunternehmern zu helfen,
          Angebote zu erstellen, die reale Unsicherheiten berücksichtigen. Anstatt einen pauschalen
          Aufschlag hinzuzufügen, simulieren Sie tausende Kostenszenarien, um den Preis zu finden,
          bei dem Sie kein Geld verlieren.
        </p>
        <p>
          Funktioniert offline. Kein Konto erforderlich. Ihre Daten verlassen nie Ihren Browser.
        </p>
      </section>
    </div>
  )
}
