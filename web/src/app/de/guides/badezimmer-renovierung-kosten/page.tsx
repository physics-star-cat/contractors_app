import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Badezimmer-Renovierung Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Kosten für eine Badsanierung in Deutschland. Position für Position aufgeschlüsselt mit Risikobewertungen, damit Sie Bäder kalkulieren können, ohne draufzuzahlen.',
  alternates: { canonical: '/de/guides/badezimmer-renovierung-kosten/' },
}

export default function BadezimmerRenovierungKostenPage() {
  return (
    <div className="guide">
      <h1>Badezimmer-Renovierung Kosten: was Handwerker wirklich wissen müssen</h1>

      <p>
        Badsanierungen sind das Tagesgeschäft vieler Handwerksbetriebe. Gleichzeitig bleibt hier
        oft Geld auf der Strecke. Der Umfang sieht einfach aus — rausreißen, neu verrohren,
        fliesen, montieren. Aber die versteckten Kosten summieren sich schnell: morsche Balken
        hinter der Badewannenverkleidung, Asbest im alten Fliesenkleber, ein Kunde der drei
        Wochen nach Beginn seine Fliesenwahl ändert.
      </p>
      <p>
        Diese Seite schlüsselt reale Badezimmerkosten 2026 in Deutschland auf und zeigt Ihnen,
        wo bei jeder Position das Risiko liegt.
      </p>

      <h2>typische Kostenaufschlüsselung</h2>

      <p>
        Dies sind Kosten für eine Badsanierung im mittleren Segment für ein Standardbad
        (ca. 6-8 m²). Budget- und Premiumvarianten liegen ober- bzw. unterhalb dieser Werte.
      </p>

      <ASCIIBox title="Kostenaufschlüsselung Badsanierung">
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
              <td>Rückbau &amp; Entsorgung</td>
              <td>€500 - €1.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Kommt darauf an, was sich hinter den Wänden verbirgt</td>
            </tr>
            <tr>
              <td>Sanitärinstallation</td>
              <td>€1.200 - €2.500</td>
              <td className="guide__highlight">Mittel</td>
              <td>Leitungen verlegen = Mehrkosten. Gleiche Position = günstiger.</td>
            </tr>
            <tr>
              <td>Elektroinstallation</td>
              <td>€500 - €1.200</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Standard-Schutzbereiche. Fußbodenheizung addiert €400+.</td>
            </tr>
            <tr>
              <td>Wand- &amp; Bodenfliesen</td>
              <td>€1.500 - €3.500</td>
              <td className="guide__highlight">Niedrig - Mittel</td>
              <td>Großformat = mehr Verschnitt und Zuschnitt</td>
            </tr>
            <tr>
              <td>Sanitärobjekte</td>
              <td>€800 - €3.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Vom Kunden geliefertes Material = höheres Verzögerungsrisiko</td>
            </tr>
            <tr>
              <td>Duschkabine / Glasabtrennung</td>
              <td>€400 - €2.500</td>
              <td className="guide__highlight">Hoch</td>
              <td>Standard-Kabine = Niedrig. Maßanfertigung = Hoch.</td>
            </tr>
            <tr>
              <td>Putz- &amp; Trockenbauarbeiten</td>
              <td>€400 - €800</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Unkompliziert, es sei denn die Wände sind in schlechtem Zustand</td>
            </tr>
            <tr>
              <td>Container / Entsorgung</td>
              <td>€300 - €500</td>
              <td className="guide__highlight">Sicher</td>
              <td>Festpreis vorab einholen</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Gesamtspanne für ein Bad im mittleren Segment: <span className="guide__highlight">€5.600 -
        €15.000</span>. Diese große Spanne wird hauptsächlich durch die Ausstattung, die der
        Kunde wählt, und durch das bestimmt, was sich hinter den alten Fliesen verbirgt.
      </p>

      <h2>wo Badsanierungen schiefgehen</h2>

      <p>
        Die größten Kostenexplosionen bei Bädern kommen aus drei Quellen:
      </p>
      <ul>
        <li>
          <strong>Verborgene Schäden.</strong> Morsche Deckenbalken, Feuchtigkeit in den Wänden,
          alte Bleirohre, die ersetzt werden müssen. Das wissen Sie erst nach dem Rückbau. Wenn
          die Chance auf bauliche Probleme besteht, markieren Sie diese Positionen als Hoch.
        </li>
        <li>
          <strong>Kundenwünsche.</strong> Der Kunde hat etwas auf Instagram gesehen. Die
          gewünschten Fliesen sind nicht mehr lieferbar. Das WC soll doch an die andere Wand.
          Jede Änderung während des Auftrags kostet Zeit und Geld. Kalkulieren Sie Sanitärobjekte
          mit mindestens Mittel, es sei denn der Kunde hat bereits alles gekauft.
        </li>
        <li>
          <strong>Sonderanfertigungen.</strong> Maßgefertigte Duschabtrennungen, Sonderwaschtische,
          importierte Fliesen mit sechs Wochen Lieferzeit. Das ist Hoch oder Grobe Schätzung. Wenn
          etwas nach Maß gefertigt werden muss, rechnen Sie damit, dass beim ersten Mal etwas
          nicht passt.
        </li>
      </ul>

      <h2>Bäder klüger kalkulieren</h2>

      <p>
        Anstatt einen pauschalen 10%-Aufschlag auf Ihre Badkalkulation zu rechnen, bewerten Sie
        jede Position ehrlich. Der Container ist Sicher. Ihr Stammelektriker ist Niedrig. Die
        maßgefertigte Duschkabine vom neuen Lieferanten ist Hoch. Geben Sie diese Werte in eine
        Simulation ein und Sie erhalten ein Angebot, das die tatsächlichen Risiken abdeckt — keinen
        Daumen-mal-Pi-Prozentsatz.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ BADSANIERUNG KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
