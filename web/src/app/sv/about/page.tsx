import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'om oss // lowriskquotes',
  description: 'Hur LowRiskQuotes använder Monte Carlo-simulering för att hjälpa hantverkare skapa säkrare offerter.',
  alternates: { canonical: '/sv/about/' },
}

export default function SvAboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        om lowriskquotes
      </h1>

      <ASCIIBox title="Vad är det">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes är ett gratis kostnadsberäkningsverktyg för hantverkare, byggentreprenörer
          och alla som behöver prissätta ett projekt utan att underprisa.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Istället för att lägga på en schablonmässig procent på din offert kör LowRiskQuotes en
          Monte Carlo-simulering — tusentals randomiserade kostnadsscenarier baserade på de
          osäkerhetsnivåer du tilldelar varje post, projektets längd och dina resor. Resultatet
          är en sannolikhetsfördelning som visar vad ditt projekt sannolikt kommer att kosta.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Hur Monte Carlo fungerar">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            För varje post i din offert anger du din osäkerhetsnivå för kostnaden (från
            &quot;säker&quot; med +/-2% till &quot;vild gissning&quot; med +/-40%). Samma princip
            gäller för projektets längd och restid.
          </p>
          <p style={{ marginBottom: '12px' }}>
            Motorn kör sedan 1 000 till 10 000 simulerade versioner av ditt projekt, var och en
            med randomiserade kostnader inom dina osäkerhetsintervall. Simuleringarna är viktade
            mot överskridanden — eftersom projekt i verkligheten går över budget oftare än de
            kostar mindre.
          </p>
          <p>
            Resultatet visar dig: vid 80:e percentilen (vår rekommenderade offertnivå) finns det
            80% chans att dina faktiska kostnader hamnar under det beloppet. Det är en mycket
            säkrare grund för en offert än en magkänsla plus 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Din data">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Allt körs i din webbläsare. Dina offerter sparas bara på din enhet (localStorage).
          Ingen data skickas till en server. Inget konto krävs. Ingen spårning utöver grundläggande
          statistik.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/sv/guides/hur-man-offerterar/" style={{ marginRight: '16px' }}>
          [LÄS GUIDEN]
        </Link>
        <Link href="/sv/estimate/">
          [BÖRJA]
        </Link>
      </div>
    </div>
  )
}
