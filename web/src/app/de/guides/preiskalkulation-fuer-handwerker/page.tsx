import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Preiskalkulation für Handwerker 2026 // lowriskquotes',
  description:
    'Leitfaden zur Preiskalkulation für Handwerker in Deutschland. Wie Sie Ihre Stunden, Material und Gemeinkosten richtig einkalkulieren und Ihre Marge schützen.',
  alternates: { canonical: '/de/guides/preiskalkulation-fuer-handwerker/' },
}

export default function PreiskalkulationFuerHandwerkerPage() {
  return (
    <div className="guide">
      <h1>Preiskalkulation für Handwerker: Schritt für Schritt</h1>

      <p>
        Viele Handwerker kalkulieren auf Basis von Erfahrungswerten und Bauchgefühl. Das
        funktioniert — bis es nicht mehr funktioniert. Ein Auftrag läuft schlecht, die
        Materialpreise steigen, ein Mitarbeiter fällt aus. Plötzlich fehlt die Marge. Eine
        saubere Preiskalkulation schützt Sie vor genau diesen Situationen.
      </p>
      <p>
        Diese Seite zeigt, wie Sie Ihre Preise 2026 strukturiert kalkulieren.
      </p>

      <h2>die drei Bausteine der Kalkulation</h2>

      <ASCIIBox title="Preiskalkulation Struktur">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Baustein</th>
              <th>Was gehört rein</th>
              <th>Typischer Anteil</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lohnkosten</td>
              <td>Bruttolohn, Sozialabgaben, Urlaub, Krankheit</td>
              <td>40 - 55 %</td>
              <td>Verrechnungssatz ≠ Bruttolohn — Faktor 1,7 bis 2,0</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>Baustoffe, Verbrauchsmaterial, Werkzeugverschleiß</td>
              <td>25 - 40 %</td>
              <td>Einkaufspreise + 10-15 % Aufschlag für Handling</td>
            </tr>
            <tr>
              <td>Gemeinkosten &amp; Gewinn</td>
              <td>Fahrzeug, Versicherung, Büro, Gewinn</td>
              <td>15 - 25 %</td>
              <td>Wird oft vergessen — dann fehlt am Jahresende die Marge</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>häufige Fehler bei der Kalkulation</h2>

      <ul>
        <li>
          <strong>Lohnkosten zu niedrig angesetzt.</strong> Ein Geselle kostet den Betrieb
          nicht €18/h Brutto, sondern €32-€38/h mit allen Nebenkosten. Viele Betriebe
          rechnen mit dem Bruttolohn — und wundern sich, warum am Jahresende nichts übrig
          bleibt.
        </li>
        <li>
          <strong>Gemeinkosten vergessen.</strong> Fahrzeugkosten, Werkzeug, Versicherung,
          Buchhaltung, Handy, Fortbildung — das summiert sich auf €500-€1.500 pro Mitarbeiter
          pro Monat. Diese Kosten müssen auf die Aufträge umgelegt werden.
        </li>
        <li>
          <strong>Kein Gewinnaufschlag.</strong> Viele Handwerker kalkulieren kostendeckend
          und vergessen den Gewinn. 8-12 % Gewinnaufschlag sind branchenüblich — und nötig
          für Investitionen und Rücklagen.
        </li>
        <li>
          <strong>Anfahrt nicht eingerechnet.</strong> 30 Minuten Anfahrt pro Tag sind bei
          250 Arbeitstagen 125 Stunden im Jahr. Das sind gut drei Arbeitswochen — die
          irgendwo in der Kalkulation auftauchen müssen.
        </li>
      </ul>

      <h2>vom Verrechnungssatz zum Angebotspreis</h2>

      <p>
        Ihr Verrechnungssatz ist die Basis. Multiplizieren Sie ihn mit den geschätzten
        Stunden pro Position, addieren Sie Material und Gemeinkosten. Dann bewerten Sie
        jede Position nach Risiko — Sicher, Niedrig, Mittel, Hoch. Positionen mit hohem
        Risiko brauchen mehr Puffer als sichere Positionen. Das Ergebnis ist ein Angebot,
        das Ihre Kosten deckt und Ihre Marge schützt.
      </p>
      <p>
        Keine Daumen-mal-Pi-Rechnung. Kein pauschaler Aufschlag. Sondern eine Kalkulation,
        die Sie dem Kunden erklären können.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ AUFTRAG KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
