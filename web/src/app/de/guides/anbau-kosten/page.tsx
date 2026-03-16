import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Anbau Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Kosten für einen Anbau in Deutschland. Position für Position aufgeschlüsselt mit Risikobewertungen, damit Sie Anbauten kalkulieren können, ohne draufzuzahlen.',
  alternates: { canonical: '/de/guides/anbau-kosten/' },
}

export default function AnbauKostenPage() {
  return (
    <div className="guide">
      <h1>Anbau Kosten: was Handwerker wirklich wissen müssen</h1>

      <p>
        Ein Anbau gehört zu den anspruchsvollsten Projekten im Wohnungsbau. Der Auftraggeber
        erwartet einen nahtlosen Übergang zwischen Alt- und Neubau — und genau da liegen die
        Risiken. Fundamente, Statik, Dachanschluss, Baugenehmigung: jede dieser Positionen kann
        den Kostenrahmen sprengen, wenn sie nicht sauber kalkuliert wird.
      </p>
      <p>
        Diese Seite zeigt reale Anbaukosten 2026 in Deutschland und wo bei jeder Position
        das Risiko liegt.
      </p>

      <h2>typische Kostenaufschlüsselung</h2>

      <p>
        Dies sind Kosten für einen eingeschossigen Anbau mittlerer Ausstattung (ca. 20-30 m²).
        Keller, Obergeschoss oder gehobene Ausstattung erhöhen die Werte deutlich.
      </p>

      <ASCIIBox title="Kostenaufschlüsselung Anbau">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Kostenspanne</th>
              <th>Risikostufe</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fundament &amp; Bodenplatte</td>
              <td>€4.000 - €10.000</td>
              <td className="guide__highlight">Hoch</td>
              <td>Bodengutachten empfohlen — Überraschungen im Erdreich sind teuer</td>
            </tr>
            <tr>
              <td>Mauerwerk / Rohbau</td>
              <td>€12.000 - €25.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Materialpreise schwanken — frühzeitig einkaufen</td>
            </tr>
            <tr>
              <td>Dach &amp; Dachanschluss</td>
              <td>€5.000 - €12.000</td>
              <td className="guide__highlight">Hoch</td>
              <td>Anschluss ans Bestandsdach ist die kritischste Stelle</td>
            </tr>
            <tr>
              <td>Fenster &amp; Türen</td>
              <td>€3.000 - €8.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Sondermaße treiben die Kosten — Standard bevorzugen</td>
            </tr>
            <tr>
              <td>Elektro &amp; Sanitär</td>
              <td>€3.000 - €7.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Anschluss an bestehende Leitungen oft aufwendiger als gedacht</td>
            </tr>
            <tr>
              <td>Innenausbau &amp; Putz</td>
              <td>€4.000 - €8.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Gut planbar wenn der Rohbau steht</td>
            </tr>
            <tr>
              <td>Baugenehmigung &amp; Statik</td>
              <td>€2.000 - €5.000</td>
              <td className="guide__highlight">Sicher</td>
              <td>Vorab klären — ohne Genehmigung kein Baubeginn</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Gesamtspanne für einen eingeschossigen Anbau: <span className="guide__highlight">€33.000 -
        €75.000</span>. Die größten Kostentreiber sind der Boden, das Dach und die Ausstattung.
      </p>

      <h2>wo Anbauten schiefgehen</h2>

      <p>
        Die größten Kostenexplosionen bei Anbauten kommen aus drei Quellen:
      </p>
      <ul>
        <li>
          <strong>Bodenverhältnisse.</strong> Fels, hoher Grundwasserspiegel oder Altlasten
          im Erdreich können die Fundamentkosten verdoppeln. Ein Bodengutachten kostet €500-€1.000 —
          das ist gut investiertes Geld.
        </li>
        <li>
          <strong>Baugenehmigung.</strong> Auflagen, Grenzabstände, Bebauungspläne — wenn die
          Genehmigung Änderungen am Entwurf erfordert, verschieben sich alle Positionen.
          Klären Sie die Genehmigung vor der Kalkulation.
        </li>
        <li>
          <strong>Anschluss an den Bestand.</strong> Wo Alt- und Neubau aufeinandertreffen,
          entstehen Wärmebrücken, Setzungsrisse und Undichtigkeiten. Kalkulieren Sie den
          Dachanschluss immer als Hoch.
        </li>
      </ul>

      <h2>Anbauten klüger kalkulieren</h2>

      <p>
        Statt einen pauschalen Aufschlag auf die Gesamtsumme zu rechnen, bewerten Sie jede
        Position einzeln. Die Baugenehmigung ist Sicher. Der Innenausbau ist Niedrig. Das
        Fundament auf unbekanntem Boden ist Hoch. Geben Sie diese Werte in eine Simulation
        ein und Sie erhalten ein Angebot, das die tatsächlichen Risiken abbildet.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ ANBAU KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
