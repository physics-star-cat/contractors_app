import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // stima dei costi per imprese edili',
  description: 'Proiezioni di costo Monte Carlo per imprese edili e artigiani. Smetti di tirare a indovinare i tuoi preventivi — simula migliaia di scenari per trovare il prezzo giusto.',
  alternates: { canonical: '/it/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬──────────┐
│ Conservativo   │ 9.890 €  │
│ Raccomandato   │ 11.840 € │
│ Prudente       │ 13.740 € │
└────────────────┴──────────┘

ANALISI DEI RISCHI
Materiali      [██████░░░░░░░░░░░░░░] 30%
Durata         [█████████░░░░░░░░░░░] 45%
Spostamenti    [███░░░░░░░░░░░░░░░░░] 15%`

export default function ItHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">smetti di indovinare // inizia a simulare</p>
        <p className="home__subtitle">proiezioni di costo Monte Carlo per imprese edili</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="Come funziona">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Inserisci le voci di costo, la durata e gli spostamenti con i livelli di incertezza</div>
            <div className="home__step"><span className="home__step-num">[2]</span> La simulazione Monte Carlo calcola 10.000 scenari di costo</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Ottieni un preventivo statisticamente sicuro — non una stima a occhio</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Esempio di risultato">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/it/estimate/" className="home__cta-button">[CREA UN PREVENTIVO]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes utilizza la simulazione Monte Carlo per aiutare imprese edili e artigiani
          a creare preventivi che tengono conto dell&apos;incertezza reale. Invece di aggiungere una
          percentuale fissa di contingenza, simula migliaia di scenari di costo per trovare il
          prezzo con cui hai pochissime probabilità di perdere soldi.
        </p>
        <p>
          Funziona offline. Nessun account necessario. I tuoi dati non lasciano mai il tuo browser.
        </p>
      </section>
    </div>
  )
}
