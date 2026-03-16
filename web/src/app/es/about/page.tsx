import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'acerca de // lowriskquotes',
  description: 'Cómo LowRiskQuotes utiliza simulación Monte Carlo para ayudar a contratistas a crear presupuestos más seguros.',
  alternates: { canonical: '/es/about/' },
}

export default function PaginaAcercaDeES() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        acerca de lowriskquotes
      </h1>

      <ASCIIBox title="Qué es esto">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes es una herramienta gratuita de estimación de costes para contratistas,
          profesionales de la construcción y cualquier persona que necesite presupuestar un
          trabajo sin quedarse corto en el precio.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          En lugar de añadir un porcentaje fijo de contingencia a su presupuesto, LowRiskQuotes
          ejecuta una simulación Monte Carlo — miles de escenarios de costes aleatorios basados
          en los niveles de incertidumbre que usted asigna a cada partida, la duración del
          trabajo y sus desplazamientos. El resultado es una distribución de probabilidad que
          muestra cuánto es probable que cueste realmente su trabajo.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Cómo funciona Monte Carlo">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            Para cada partida de su presupuesto, nos indica cuánta incertidumbre tiene sobre
            el coste (desde &quot;seguro&quot; con +/-2% hasta &quot;estimación a ojo&quot; con +/-40%). Hacemos
            lo mismo para la duración del trabajo y el tiempo de desplazamiento.
          </p>
          <p style={{ marginBottom: '12px' }}>
            El motor ejecuta entonces de 1.000 a 10.000 versiones simuladas de su proyecto,
            cada una con costes aleatorios extraídos de sus rangos de incertidumbre. Las
            simulaciones se sesgan hacia los sobrecostes — porque en el mundo real, los
            proyectos tienden a exceder el presupuesto más a menudo que a quedarse por debajo.
          </p>
          <p>
            El resultado le indica: en el percentil 80 (nuestro nivel de presupuesto recomendado),
            hay un 80% de probabilidad de que sus costes reales sean inferiores a esta cifra.
            Eso es una base mucho más segura para un presupuesto que una intuición más un 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Sus datos">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Todo se ejecuta en su navegador. Sus presupuestos se guardan solo en su dispositivo
          (localStorage). No se envían datos a ningún servidor. No se necesita cuenta. Sin
          seguimiento más allá de analíticas básicas.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/es/guides/como-hacer-un-presupuesto/" style={{ marginRight: '16px' }}>
          [LEER LA GUÍA]
        </Link>
        <Link href="/es/estimate/">
          [COMENZAR]
        </Link>
      </div>
    </div>
  )
}
