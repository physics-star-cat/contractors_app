import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'über uns // lowriskquotes',
  description: 'Wie LowRiskQuotes Monte-Carlo-Simulation nutzt, um Handwerkern und Bauunternehmern zu helfen, sicherere Angebote zu erstellen.',
  alternates: { canonical: '/de/about/' },
}

export default function DeAboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        über lowriskquotes
      </h1>

      <ASCIIBox title="Was ist das">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes ist ein kostenloses Kalkulationswerkzeug für Handwerker, Bauunternehmer
          und alle, die einen Auftrag kalkulieren müssen, ohne sich unter Wert zu verkaufen.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Anstatt einen pauschalen Aufschlag auf Ihr Angebot zu rechnen, führt LowRiskQuotes
          eine Monte-Carlo-Simulation durch — tausende zufällige Kostenszenarien basierend auf
          den Unsicherheitsstufen, die Sie jeder Position, Ihrer Auftragsdauer und Ihrer
          Anfahrt zuweisen. Das Ergebnis ist eine Wahrscheinlichkeitsverteilung, die zeigt,
          was Ihr Auftrag tatsächlich kosten wird.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Wie Monte Carlo funktioniert">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            Für jede Position in Ihrer Kalkulation geben Sie an, wie unsicher Sie bezüglich
            der Kosten sind (von &quot;sicher&quot; bei +/-2% bis &quot;grobe Schätzung&quot; bei +/-40%).
            Dasselbe gilt für Ihre Auftragsdauer und Anfahrtszeit.
          </p>
          <p style={{ marginBottom: '12px' }}>
            Die Berechnungsengine führt dann 1.000 bis 10.000 simulierte Versionen Ihres
            Projekts durch, jede mit zufälligen Kosten aus Ihren Unsicherheitsbereichen.
            Die Simulationen sind in Richtung Mehrkosten verzerrt — weil in der realen Welt
            Projekte häufiger über Budget gehen als darunter.
          </p>
          <p>
            Das Ergebnis sagt Ihnen: Beim 80. Perzentil (unsere empfohlene Angebotshöhe)
            besteht eine 80%ige Wahrscheinlichkeit, dass Ihre tatsächlichen Kosten unter
            dieser Zahl liegen. Das ist eine viel sicherere Grundlage für ein Angebot als
            ein Bauchgefühl plus 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Ihre Daten">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Alles läuft in Ihrem Browser. Ihre Kalkulationen werden nur auf Ihrem Gerät
          gespeichert (localStorage). Es werden keine Daten an einen Server gesendet. Kein
          Konto erforderlich. Kein Tracking über grundlegende Analysen hinaus.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/de/guides/wie-man-einen-auftrag-kalkuliert/" style={{ marginRight: '16px' }}>
          [RATGEBER LESEN]
        </Link>
        <Link href="/de/estimate/">
          [KALKULATION STARTEN]
        </Link>
      </div>
    </div>
  )
}
