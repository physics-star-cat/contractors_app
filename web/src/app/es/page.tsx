import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // estimación de costes para contratistas',
  description: 'Proyecciones de costes Monte Carlo para contratistas. Deja de adivinar tus presupuestos — simula miles de escenarios para encontrar el precio correcto.',
  alternates: { canonical: '/es/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬──────────┐
│ Conservador     │ €8.240   │
│ Recomendado     │ €9.870   │
│ Seguro          │ €11.450  │
└────────────────┴──────────┘

DESGLOSE DE RIESGO
Materiales     [██████░░░░░░░░░░░░░░] 30%
Duración       [█████████░░░░░░░░░░░] 45%
Desplazamiento [███░░░░░░░░░░░░░░░░░] 15%`

export default function PaginaInicioES() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">deja de adivinar // empieza a simular</p>
        <p className="home__subtitle">proyecciones de costes Monte Carlo para contratistas</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="Cómo funciona">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Introduzca sus partidas, duración y desplazamientos con niveles de incertidumbre</div>
            <div className="home__step"><span className="home__step-num">[2]</span> La simulación Monte Carlo calcula 10.000 escenarios de costes</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Obtenga un presupuesto estadísticamente seguro — no una suposición</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Ejemplo de resultado">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/es/estimate/" className="home__cta-button">[CREAR PRESUPUESTO]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes utiliza simulación Monte Carlo para ayudar a contratistas y profesionales
          a crear presupuestos que tienen en cuenta la incertidumbre real. En lugar de añadir un
          porcentaje fijo de contingencia, simule miles de escenarios de costes para encontrar el
          precio en el que es improbable que pierda dinero.
        </p>
        <p>
          Funciona sin conexión. No requiere cuenta. Sus datos nunca salen de su navegador.
        </p>
      </section>
    </div>
  )
}
