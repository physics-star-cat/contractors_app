import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Verputz Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Kosten für Putzarbeiten in Deutschland. Innenputz, Außenputz, Sanierputz — Position für Position mit Risikobewertungen.',
  alternates: { canonical: '/de/guides/verputz-kosten/' },
}

export default function VerputzKostenPage() {
  return (
    <div className="guide">
      <h1>Verputz Kosten: was Handwerker wirklich wissen müssen</h1>

      <p>
        Putzarbeiten gehören zum Kerngeschäft im Ausbau. Ob Neubau oder Sanierung — Innenputz,
        Außenputz und Sanierputz haben jeweils eigene Kostenstrukturen und Risiken. Bei
        Sanierungen kommt dazu: der Untergrund ist oft schlechter als erwartet, und das merkt
        man erst, wenn der alte Putz ab ist.
      </p>
      <p>
        Diese Seite zeigt reale Verputzkosten 2026 in Deutschland und wo bei jeder Position
        das Risiko liegt.
      </p>

      <h2>typische Kostenaufschlüsselung</h2>

      <p>
        Dies sind Kosten pro Quadratmeter für verschiedene Putzarbeiten im mittleren Segment.
        Die Gesamtkosten hängen stark von der zu bearbeitenden Fläche ab.
      </p>

      <ASCIIBox title="Kostenaufschlüsselung Putzarbeiten">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Kostenspanne / m²</th>
              <th>Risikostufe</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Innenputz Neubau (Kalkzement)</td>
              <td>€15 - €25</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Standardarbeit auf ebenem Mauerwerk</td>
            </tr>
            <tr>
              <td>Innenputz Sanierung</td>
              <td>€25 - €45</td>
              <td className="guide__highlight">Mittel - Hoch</td>
              <td>Altputz abschlagen, Untergrund prüfen, ggf. Armierung</td>
            </tr>
            <tr>
              <td>Außenputz (WDVS / Wärmedämmverbundsystem)</td>
              <td>€80 - €160</td>
              <td className="guide__highlight">Mittel</td>
              <td>Inklusive Dämmung, Armierung, Oberputz und Anstrich</td>
            </tr>
            <tr>
              <td>Außenputz (reine Putzarbeiten)</td>
              <td>€30 - €55</td>
              <td className="guide__highlight">Niedrig - Mittel</td>
              <td>Ohne Dämmung — nur Grundputz und Oberputz</td>
            </tr>
            <tr>
              <td>Sanierputz (feuchte Wände)</td>
              <td>€40 - €70</td>
              <td className="guide__highlight">Hoch</td>
              <td>Ursache der Feuchtigkeit muss erst geklärt sein</td>
            </tr>
            <tr>
              <td>Gerüst (Außenarbeiten)</td>
              <td>€6 - €12</td>
              <td className="guide__highlight">Sicher</td>
              <td>Festpreis vorab einholen — Standzeit beachten</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Beispiel: Ein Einfamilienhaus mit 150 m² Außenwandfläche und WDVS kostet im
        mittleren Segment: <span className="guide__highlight">€12.000 - €24.000</span> für
        die Fassade plus Gerüst.
      </p>

      <h2>wo Putzarbeiten schiefgehen</h2>

      <p>
        Die häufigsten Kostenfallen bei Putzarbeiten:
      </p>
      <ul>
        <li>
          <strong>Untergrund.</strong> Bei Sanierungen ist der Untergrund oft schlechter als
          angenommen. Lose Stellen, Salze, Feuchtigkeit — das zeigt sich erst nach dem
          Abschlagen. Kalkulieren Sie Sanierputz immer als Hoch.
        </li>
        <li>
          <strong>Witterung.</strong> Außenputz braucht Temperaturen über 5°C und trockene
          Bedingungen. Verzögerungen durch Wetter sind bei Außenarbeiten vorprogrammiert.
          Planen Sie Puffer ein.
        </li>
        <li>
          <strong>Anschlussdetails.</strong> Fensteranschlüsse, Sockelanschlüsse,
          Durchdringungen — hier entsteht der meiste Mehraufwand. Diese Details werden
          bei der Kalkulation oft unterschätzt.
        </li>
      </ul>

      <h2>Putzarbeiten klüger kalkulieren</h2>

      <p>
        Bewerten Sie jede Position separat. Innenputz im Neubau ist Niedrig. Sanierputz
        auf feuchtem Mauerwerk ist Hoch. Das Gerüst ist Sicher — Festpreis einholen.
        Mit einer positionsweisen Risikobewertung erhalten Sie ein Angebot, das die
        tatsächlichen Unsicherheiten abbildet.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ PUTZARBEITEN KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
