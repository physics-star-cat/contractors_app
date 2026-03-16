import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Zaun Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Zaunkosten pro laufenden Meter in Deutschland. Doppelstabmattenzaun, Sichtschutz, WPC und mehr — aufgeschlüsselt mit Risikobewertungen für Handwerker.',
  alternates: { canonical: '/de/guides/zaun-kosten/' },
}

export default function ZaunKostenPage() {
  return (
    <div className="guide">
      <h1>Zaun Kosten: was Handwerker pro Meter wirklich kalkulieren müssen</h1>

      <p>
        Zaunbau gehört zu den gefragtesten Aufträgen im Garten- und Landschaftsbau. Auf den ersten
        Blick scheint es einfach: Pfosten setzen, Elemente montieren, fertig. Doch die Realität
        sieht anders aus. Unebenes Gelände, Wurzeln im Boden, Grenzstreitigkeiten mit Nachbarn und
        schwankende Materialpreise machen die Kalkulation zur Herausforderung.
      </p>
      <p>
        Diese Seite zeigt Ihnen aktuelle Zaunkosten 2026 in Deutschland — pro laufenden Meter,
        nach Zauntyp aufgeschlüsselt, mit ehrlichen Risikobewertungen.
      </p>

      <h2>typische Kosten pro laufenden Meter</h2>

      <p>
        Die folgenden Preise beziehen sich auf die Komplettleistung inklusive Material, Pfosten,
        Fundament und Montage. Der tatsächliche Preis hängt stark von Bodenbeschaffenheit und
        Zaunhöhe ab.
      </p>

      <ASCIIBox title="Zaunkosten pro laufenden Meter">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Zauntyp</th>
              <th>Kosten / lfm</th>
              <th>Risikostufe</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maschendrahtzaun</td>
              <td>€25 - €45</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Günstigste Option. Standardmaterial, schnelle Montage.</td>
            </tr>
            <tr>
              <td>Doppelstabmattenzaun</td>
              <td>€55 - €110</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Sehr verbreitet. Höhe und Materialstärke bestimmen den Preis.</td>
            </tr>
            <tr>
              <td>Sichtschutzzaun Holz</td>
              <td>€70 - €140</td>
              <td className="guide__highlight">Mittel</td>
              <td>Holzpreise schwanken. Kesseldruckimprägnierung empfohlen.</td>
            </tr>
            <tr>
              <td>WPC-Zaun</td>
              <td>€90 - €180</td>
              <td className="guide__highlight">Niedrig - Mittel</td>
              <td>Wartungsarm. Pfosten aus Aluminium treiben den Preis.</td>
            </tr>
            <tr>
              <td>Aluminium-Sichtschutz</td>
              <td>€120 - €250</td>
              <td className="guide__highlight">Mittel</td>
              <td>Premiumsegment. Lange Lieferzeiten bei Sonderfarben.</td>
            </tr>
            <tr>
              <td>Gabionenzaun</td>
              <td>€150 - €300</td>
              <td className="guide__highlight">Mittel - Hoch</td>
              <td>Schweres Fundament nötig. Statik bei Hanglage prüfen.</td>
            </tr>
            <tr>
              <td>Fundamente (Einzelfundament)</td>
              <td>€15 - €35</td>
              <td className="guide__highlight">Mittel</td>
              <td>Fels oder Wurzeln = deutlich teurer. Boden vorher prüfen.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Beispiel: Ein Doppelstabmattenzaun mit 30 lfm kommt auf <span className="guide__highlight">€1.650 -
        €3.300</span> inklusive Montage und Fundamente. Hinzu kommen eventuelle Kosten für ein
        Zugangstor (€300 - €800 je nach Breite und Material).
      </p>

      <h2>wo Zaunprojekte schiefgehen</h2>

      <p>
        Die häufigsten Kostentreiber beim Zaunbau:
      </p>
      <ul>
        <li>
          <strong>Bodenverhältnisse.</strong> Felsiger Untergrund, Lehm oder ein hoher
          Grundwasserspiegel machen das Setzen der Pfosten erheblich aufwendiger. Ohne
          Bodenerkundung kalkulieren Sie blind.
        </li>
        <li>
          <strong>Grundstücksgrenzen.</strong> Unklare Grenzen führen zu Streit und Baustopps.
          Immer den amtlichen Grenzstein prüfen oder einen Vermesser einschalten, bevor der
          erste Pfosten gesetzt wird.
        </li>
        <li>
          <strong>Hanglage und Gefälle.</strong> Bei Geländesprüngen müssen Elemente
          treppenförmig versetzt werden. Das erhöht den Zuschnitt und die Montagezeit erheblich.
          Kalkulieren Sie diese Abschnitte mit Hoch.
        </li>
      </ul>

      <h2>Zaunprojekte klüger kalkulieren</h2>

      <p>
        Statt einen pauschalen Meterpreis anzubieten, bewerten Sie jeden Abschnitt einzeln. Der
        gerade Abschnitt auf ebenem Boden ist Niedrig. Das Gefällestück mit altem Baumbestand ist
        Hoch. Das Tor mit Sondermaß ist Mittel bis Hoch. Geben Sie diese Werte in eine
        Risikosimulation ein und Sie erhalten ein Angebot, das Ihre Marge schützt — nicht eine
        grobe Schätzung, die Sie am Ende draufzahlen lässt.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ ZAUNPROJEKT KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
