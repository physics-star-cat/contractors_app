import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // kostnadsuppskattning för hantverkare',
  description: 'Monte Carlo-kostnadsprognoser för hantverkare och entreprenörer. Sluta gissa på dina offerter — simulera tusentals scenarier för att hitta rätt pris.',
  alternates: { canonical: '/sv/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬────────────┐
│ Konservativ     │ 98 900 kr  │
│ Rekommenderad   │ 118 400 kr │
│ Försiktig       │ 137 400 kr │
└────────────────┴────────────┘

RISKFÖRDELNING
Material       [██████░░░░░░░░░░░░░░] 30%
Tid            [█████████░░░░░░░░░░░] 45%
Resor          [███░░░░░░░░░░░░░░░░░] 15%`

export default function SvHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">sluta gissa // börja simulera</p>
        <p className="home__subtitle">Monte Carlo-kostnadsprognoser för hantverkare</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="Hur det fungerar">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Ange dina poster, tidsåtgång och resor med osäkerhetsnivåer</div>
            <div className="home__step"><span className="home__step-num">[2]</span> Monte Carlo-simuleringen beräknar 10 000 kostnadsscenarier</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Få en statistiskt säker offert — inte en gissning</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Exempelresultat">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/sv/estimate/" className="home__cta-button">[SKAPA EN OFFERT]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes använder Monte Carlo-simulering för att hjälpa hantverkare och entreprenörer
          att skapa offerter som tar hänsyn till verklig osäkerhet. Istället för att lägga på en
          schablonmässig procent simulerar du tusentals kostnadsscenarier för att hitta det pris
          där du har mycket liten risk att förlora pengar.
        </p>
        <p>
          Fungerar offline. Inget konto krävs. Din data lämnar aldrig din webbläsare.
        </p>
      </section>
    </div>
  )
}
