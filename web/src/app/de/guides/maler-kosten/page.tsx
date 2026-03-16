import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Maler Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Kosten für Malerarbeiten in Deutschland. Innenanstrich, Fassade, Tapezieren — Position für Position mit Risikobewertungen.',
  alternates: { canonical: '/de/guides/maler-kosten/' },
}

export default function MalerKostenPage() {
  return (
    <div className="guide">
      <h1>Maler Kosten: was Handwerker wirklich wissen müssen</h1>

      <p>
        Malerarbeiten gelten als einfach zu kalkulieren — Fläche mal Preis. Aber wer so
        rechnet, vergisst die Vorarbeiten. Spachteln, Schleifen, Grundieren, Abkleben,
        Abdecken: das macht bei Sanierungen oft 40-60 % der Arbeitszeit aus. Dazu kommen
        schwierige Untergründe, hohe Decken und Kunden, die drei Tage vor Schluss eine
        andere Farbe wollen.
      </p>
      <p>
        Diese Seite zeigt reale Malerkosten 2026 in Deutschland und wo bei jeder Position
        das Risiko liegt.
      </p>

      <h2>typische Kostenaufschlüsselung</h2>

      <p>
        Dies sind Kosten pro Quadratmeter für verschiedene Malerarbeiten. Die Gesamtkosten
        hängen von der Fläche und dem Zustand des Untergrunds ab.
      </p>

      <ASCIIBox title="Kostenaufschlüsselung Malerarbeiten">
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
              <td>Wände streichen (Neubau, 2x)</td>
              <td>€8 - €14</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Glatter Untergrund, wenig Vorarbeit</td>
            </tr>
            <tr>
              <td>Wände streichen (Sanierung, 2x)</td>
              <td>€12 - €22</td>
              <td className="guide__highlight">Mittel</td>
              <td>Vorarbeit: Spachteln, Schleifen, Grundieren</td>
            </tr>
            <tr>
              <td>Decken streichen</td>
              <td>€10 - €18</td>
              <td className="guide__highlight">Niedrig - Mittel</td>
              <td>Raumhöhe über 3 m = Gerüst nötig, Aufpreis</td>
            </tr>
            <tr>
              <td>Tapezieren (Vlies)</td>
              <td>€12 - €20</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Standardarbeit auf ebenem Untergrund</td>
            </tr>
            <tr>
              <td>Alte Tapete entfernen</td>
              <td>€5 - €12</td>
              <td className="guide__highlight">Mittel - Hoch</td>
              <td>Mehrere Schichten oder Styropor-Deckenplatten = Hoch</td>
            </tr>
            <tr>
              <td>Fassade streichen (inkl. Gerüst)</td>
              <td>€25 - €45</td>
              <td className="guide__highlight">Mittel</td>
              <td>Witterungsabhängig — Standzeit Gerüst beachten</td>
            </tr>
            <tr>
              <td>Lackierarbeiten (Türen, Fenster)</td>
              <td>€40 - €80 / Stück</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Pro Türblatt oder Fensterflügel</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Beispiel: Eine 80-m²-Wohnung komplett streichen (Wände + Decken, Sanierung)
        kostet im mittleren Segment: <span className="guide__highlight">€3.000 -
        €6.000</span> inkl. Vorarbeiten.
      </p>

      <h2>wo Malerarbeiten schiefgehen</h2>

      <p>
        Die häufigsten Kostenfallen bei Malerarbeiten:
      </p>
      <ul>
        <li>
          <strong>Vorarbeiten unterschätzt.</strong> Risse ausspachteln, Nikotin-Sperrgrund
          auftragen, Styropor-Deckenplatten entfernen — diese Arbeiten dauern oft länger
          als das eigentliche Streichen. Kalkulieren Sie Vorarbeiten separat.
        </li>
        <li>
          <strong>Farbwechsel.</strong> Von Dunkelrot auf Weiß braucht drei Anstriche statt
          zwei. Das ist 50 % mehr Arbeitszeit und Material. Fragen Sie immer nach der
          vorhandenen Farbe.
        </li>
        <li>
          <strong>Möbel und Abdeckung.</strong> In bewohnten Wohnungen ist das Abdecken
          und Abkleben ein erheblicher Zeitfaktor. Viele Maler kalkulieren das zu knapp.
        </li>
      </ul>

      <h2>Malerarbeiten klüger kalkulieren</h2>

      <p>
        Trennen Sie Vorarbeiten vom Anstrich. Streichen im Neubau ist Niedrig. Alte Tapete
        entfernen ist Mittel bis Hoch — je nach Anzahl der Schichten. Fassade ist Mittel
        wegen Witterungsrisiko. Bewerten Sie jede Position einzeln und Sie erhalten ein
        realistisches Angebot.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ MALERARBEITEN KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
