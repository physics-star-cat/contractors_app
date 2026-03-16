import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // wycena kosztów dla wykonawców',
  description: 'Prognozy kosztów Monte Carlo dla wykonawców. Przestań zgadywać — symuluj tysiące scenariuszy, aby znaleźć właściwą cenę.',
  alternates: { canonical: '/pl/' },
}

const SAMPLE_OUTPUT = `\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Ostrożna         \u2502 32 960 zł  \u2502
\u2502 Zalecana         \u2502 39 480 zł  \u2502
\u2502 Bezpieczna       \u2502 45 800 zł  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

ROZBICIE RYZYKA
Materiały      [\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591] 30%
Czas trwania   [\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591] 45%
Dojazd         [\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591] 15%`

export default function PlHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">przestań zgadywać // zacznij symulować</p>
        <p className="home__subtitle">prognozy kosztów Monte Carlo dla wykonawców</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="Jak to działa">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Wprowadź pozycje kosztowe, czas trwania i dojazd z poziomami niepewności</div>
            <div className="home__step"><span className="home__step-num">[2]</span> Symulacja Monte Carlo oblicza 10 000 scenariuszy kosztowych</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Otrzymaj statystycznie bezpieczną wycenę — nie zgadywankę</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Przykładowy wynik">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/pl/estimate/" className="home__cta-button">[ROZPOCZNIJ WYCENĘ]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes wykorzystuje symulację Monte Carlo, aby pomóc wykonawcom i rzemieślnikom
          tworzyć wyceny uwzględniające rzeczywistą niepewność. Zamiast dodawać ryczałtowy procent
          rezerwy, symuluj tysiące scenariuszy kosztowych, aby znaleźć cenę, przy której
          prawdopodobieństwo straty jest minimalne.
        </p>
        <p>
          Działa offline. Nie wymaga konta. Twoje dane nigdy nie opuszczają przeglądarki.
        </p>
      </section>
    </div>
  )
}
