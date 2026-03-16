import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Tagessatz oder Festpreis? Ratgeber 2026 // lowriskquotes',
  description:
    'Wann Handwerker besser auf Tagessatz arbeiten und wann ein Festpreis sinnvoll ist. Vor- und Nachteile beider Modelle mit konkreten Beispielen.',
  alternates: { canonical: '/de/guides/tagessatz-oder-festpreis/' },
}

export default function TagessatzOderFestpreisPage() {
  return (
    <div className="guide">
      <h1>Tagessatz oder Festpreis? Wann welches Modell besser passt</h1>

      <p>
        Die Frage kommt bei jedem Auftrag: Festpreis oder auf Stundenbasis? Beide Modelle
        haben Vor- und Nachteile — und die richtige Wahl hängt davon ab, wie gut Sie den
        Aufwand einschätzen können. Wer hier falsch wählt, verliert entweder Geld (Festpreis
        bei unklarem Umfang) oder den Auftrag (Stundenbasis bei preissensiblen Kunden).
      </p>

      <h2>wann welches Modell</h2>

      <ASCIIBox title="Tagessatz vs. Festpreis">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Kriterium</th>
              <th>Tagessatz / Stundenbasis</th>
              <th>Festpreis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Umfang klar definiert?</td>
              <td>Nein — Umfang unklar oder änderbar</td>
              <td>Ja — klares Leistungsverzeichnis</td>
            </tr>
            <tr>
              <td>Untergrund / Bestand bekannt?</td>
              <td>Nein — Überraschungen möglich</td>
              <td>Ja — Zustand dokumentiert</td>
            </tr>
            <tr>
              <td>Kundentyp</td>
              <td>Vertrauensvoll, will Qualität</td>
              <td>Preisbewusst, will Sicherheit</td>
            </tr>
            <tr>
              <td>Ihr Risiko</td>
              <td className="guide__highlight">Niedrig</td>
              <td className="guide__highlight">Hoch</td>
            </tr>
            <tr>
              <td>Kundenrisiko</td>
              <td className="guide__highlight">Hoch</td>
              <td className="guide__highlight">Niedrig</td>
            </tr>
            <tr>
              <td>Typische Aufträge</td>
              <td>Sanierung, Altbau, Reparaturen</td>
              <td>Neubau, Serienfertigung, Wiederholungsaufträge</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>typische Tagessätze 2026</h2>

      <p>
        Aktuelle Tagessätze für Handwerker in Deutschland (8-Stunden-Tag, inkl. Anfahrt):
      </p>
      <ul>
        <li>Maler / Trockenbauer: <span className="guide__highlight">€320 - €450</span></li>
        <li>Elektriker: <span className="guide__highlight">€380 - €520</span></li>
        <li>Sanitär / Heizung: <span className="guide__highlight">€400 - €550</span></li>
        <li>Fliesenleger: <span className="guide__highlight">€350 - €480</span></li>
        <li>Maurer / Betonbauer: <span className="guide__highlight">€380 - €500</span></li>
      </ul>

      <h2>der Mittelweg: Festpreis mit Risikostufen</h2>

      <p>
        In der Praxis wollen die meisten Kunden einen Festpreis. Aber Sie können nicht alles
        gleich sicher kalkulieren. Die Lösung: kalkulieren Sie auf Festpreisbasis, aber bewerten
        Sie jede Position nach Risiko. Sichere Positionen bekommen keinen Aufschlag. Positionen
        mit hohem Risiko bekommen einen angemessenen Puffer. So erhalten Sie einen Festpreis,
        der Ihre Marge schützt.
      </p>
      <p>
        Und wenn eine Position wirklich nicht als Festpreis kalkulierbar ist — zum Beispiel
        Rückbau im Altbau — bieten Sie diese eine Position auf Stundenbasis an. Der Rest
        bleibt Festpreis. Das ist fair für beide Seiten.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ AUFTRAG KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
