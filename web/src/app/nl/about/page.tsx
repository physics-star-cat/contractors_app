import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'over ons // lowriskquotes',
  description: 'Hoe LowRiskQuotes Monte Carlo-simulatie gebruikt om aannemers te helpen veiligere offertes te maken.',
  alternates: { canonical: '/nl/about/' },
}

export default function NlAboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        over lowriskquotes
      </h1>

      <ASCIIBox title="Wat is dit">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes is een gratis kostenramingstool voor aannemers, vaklieden en iedereen
          die een opdracht moet offreren zonder zich te laag in te schrijven.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          In plaats van een vast opslagpercentage op uw offerte te zetten, voert LowRiskQuotes
          een Monte Carlo-simulatie uit — duizenden willekeurige kostenscenario&apos;s op basis van
          de onzekerheidsniveaus die u aan elke kostenpost, uw projectduur en uw reistijd
          toekent. Het resultaat is een kansverdeling die laat zien wat uw opdracht
          waarschijnlijk werkelijk gaat kosten.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Hoe Monte Carlo werkt">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            Voor elke post in uw raming geeft u aan hoe onzeker u bent over de kosten (van
            &quot;zeker&quot; met +/-2% tot &quot;ruwe schatting&quot; met +/-40%). Hetzelfde geldt voor uw
            projectduur en reistijd.
          </p>
          <p style={{ marginBottom: '12px' }}>
            De engine draait vervolgens 1.000 tot 10.000 gesimuleerde versies van uw project,
            elk met willekeurige kosten getrokken uit uw onzekerheidsbereiken. De simulaties
            zijn scheef naar boven — omdat projecten in de echte wereld vaker duurder uitvallen
            dan goedkoper.
          </p>
          <p>
            Het resultaat vertelt u: bij het 80e percentiel (ons aanbevolen offerteniveau) is
            er 80% kans dat uw werkelijke kosten lager zullen zijn dan dit bedrag. Dat is een
            veel veiligere basis voor een offerte dan een onderbuikgevoel plus 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Uw gegevens">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Alles draait in uw browser. Uw offertes worden alleen op uw apparaat opgeslagen
          (localStorage). Er worden geen gegevens naar een server gestuurd. Geen account nodig.
          Geen tracking buiten basisanalytics.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/nl/guides/hoe-maak-je-een-offerte/" style={{ marginRight: '16px' }}>
          [GIDS LEZEN]
        </Link>
        <Link href="/nl/estimate/">
          [BEGINNEN]
        </Link>
      </div>
    </div>
  )
}
