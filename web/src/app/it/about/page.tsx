import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'chi siamo // lowriskquotes',
  description: 'Come LowRiskQuotes usa la simulazione Monte Carlo per aiutare le imprese edili a creare preventivi più sicuri.',
  alternates: { canonical: '/it/about/' },
}

export default function ItAboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        informazioni su lowriskquotes
      </h1>

      <ASCIIBox title="Che cos'è">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes è uno strumento gratuito di stima dei costi per artigiani, imprese
          edili e chiunque debba preventivare un cantiere senza sottovalutare il prezzo.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Invece di aggiungere una percentuale fissa di contingenza al tuo preventivo, LowRiskQuotes
          esegue una simulazione Monte Carlo — migliaia di scenari di costo randomizzati basati
          sui livelli di incertezza che assegni a ogni voce, alla durata del cantiere e ai tuoi
          spostamenti. Il risultato è una distribuzione di probabilità che mostra quanto il tuo
          cantiere potrebbe realmente costare.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Come funziona Monte Carlo">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            Per ogni voce del tuo preventivo, indichi il tuo livello di incertezza sul costo
            (da &quot;certo&quot; con +/-2% fino a &quot;stima azzardata&quot; con +/-40%). Lo stesso
            principio si applica alla durata del cantiere e ai tempi di spostamento.
          </p>
          <p style={{ marginBottom: '12px' }}>
            Il motore esegue poi da 1.000 a 10.000 versioni simulate del tuo progetto, ciascuna
            con costi randomizzati all&apos;interno delle tue fasce di incertezza. Le simulazioni sono
            sbilanciate verso l&apos;alto — perché nella realtà i cantieri sforano il budget più spesso
            di quanto costino meno.
          </p>
          <p>
            Il risultato indica: all&apos;80° percentile (il nostro livello di preventivo raccomandato),
            c&apos;è l&apos;80% di probabilità che i tuoi costi reali siano inferiori a questo importo.
            È una base molto più sicura per un preventivo rispetto a un&apos;intuizione maggiorata del 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="I tuoi dati">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Tutto funziona nel tuo browser. I tuoi preventivi sono salvati solo sul tuo dispositivo
          (localStorage). Nessun dato viene inviato a un server. Nessun account necessario.
          Nessun tracciamento oltre alle statistiche di base.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/it/guides/come-fare-un-preventivo/" style={{ marginRight: '16px' }}>
          [LEGGI LA GUIDA]
        </Link>
        <Link href="/it/estimate/">
          [INIZIA]
        </Link>
      </div>
    </div>
  )
}
