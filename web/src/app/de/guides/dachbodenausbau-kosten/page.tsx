import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Dachbodenausbau Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Kosten für einen Dachbodenausbau in Deutschland. Position für Position aufgeschlüsselt mit Risikobewertungen für eine sichere Kalkulation.',
  alternates: { canonical: '/de/guides/dachbodenausbau-kosten/' },
}

export default function DachbodenausbauKostenPage() {
  return (
    <div className="guide">
      <h1>Dachbodenausbau Kosten: was Handwerker wirklich wissen müssen</h1>

      <p>
        Der Dachbodenausbau ist ein lukratives Geschäft — Wohnraum schaffen ohne Grundstückskosten.
        Aber die Kalkulation hat ihre Tücken. Dachstuhlverstärkung, Dämmung, Brandschutzauflagen
        und niedrige Kniestockhöhen machen aus einem vermeintlich einfachen Projekt schnell eine
        komplexe Baustelle. Wer hier pauschal kalkuliert, verliert Geld.
      </p>
      <p>
        Diese Seite zeigt reale Kosten für einen Dachbodenausbau 2026 in Deutschland und wo
        bei jeder Position das Risiko liegt.
      </p>

      <h2>typische Kostenaufschlüsselung</h2>

      <p>
        Dies sind Kosten für einen Dachbodenausbau mittlerer Ausstattung (ca. 30-50 m²
        Nutzfläche). Gauben, Loggia oder ein zusätzliches Bad erhöhen die Werte erheblich.
      </p>

      <ASCIIBox title="Kostenaufschlüsselung Dachbodenausbau">
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
              <td>Dachstuhl prüfen &amp; ertüchtigen</td>
              <td>€2.000 - €8.000</td>
              <td className="guide__highlight">Hoch</td>
              <td>Zustand der Sparren oft erst nach Freilegung erkennbar</td>
            </tr>
            <tr>
              <td>Dämmung (Zwischensparren + Untersparren)</td>
              <td>€4.000 - €9.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>GEG-Anforderungen beachten — U-Wert 0,24 W/(m²K)</td>
            </tr>
            <tr>
              <td>Dachfenster / Gauben</td>
              <td>€2.000 - €15.000</td>
              <td className="guide__highlight">Mittel - Hoch</td>
              <td>Dachfenster = Mittel. Gaube = Hoch (Statik + Genehmigung).</td>
            </tr>
            <tr>
              <td>Trockenbau &amp; Beplankung</td>
              <td>€3.000 - €6.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Standardarbeit — Schrägen erfordern mehr Zuschnitt</td>
            </tr>
            <tr>
              <td>Fußbodenaufbau</td>
              <td>€2.500 - €5.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Trittschalldämmung und Tragfähigkeit der Decke prüfen</td>
            </tr>
            <tr>
              <td>Elektro &amp; Heizung</td>
              <td>€3.000 - €6.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Leitungsführung über bestehende Schächte wenn möglich</td>
            </tr>
            <tr>
              <td>Treppe</td>
              <td>€2.000 - €6.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Durchbruch in bestehende Decke = statische Prüfung nötig</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Gesamtspanne für einen Dachbodenausbau: <span className="guide__highlight">€18.500 -
        €55.000</span>. Die größte Unbekannte ist der Zustand des vorhandenen Dachstuhls
        und ob Gauben geplant sind.
      </p>

      <h2>wo Dachbodenausbauten schiefgehen</h2>

      <p>
        Die häufigsten Kostenfallen beim Dachausbau:
      </p>
      <ul>
        <li>
          <strong>Dachstuhl.</strong> Holzwurmbefall, zu schwache Sparren, fehlende Pfetten.
          Das erfahren Sie oft erst, wenn die alte Verkleidung entfernt ist. Kalkulieren Sie
          diese Position immer als Hoch.
        </li>
        <li>
          <strong>Brandschutz.</strong> Rettungswege, Brandwände, Rauchmelderpflicht — die
          Anforderungen steigen, wenn aus Speicher Wohnraum wird. Klären Sie das vorab mit
          dem Bauamt.
        </li>
        <li>
          <strong>Kopfhöhe und Nutzfläche.</strong> Was auf dem Plan als 50 m² aussieht,
          schrumpft durch Schrägen auf 35 m² Nutzfläche. Das enttäuscht Auftraggeber —
          kommunizieren Sie das frühzeitig.
        </li>
      </ul>

      <h2>Dachausbauten klüger kalkulieren</h2>

      <p>
        Bewerten Sie jede Position ehrlich. Die Dämmung ist Niedrig — Standardarbeit mit
        bekannten Materialien. Der Dachstuhl ist Hoch, solange Sie ihn nicht geprüft haben.
        Die Gaube ist Hoch wegen Statik und Genehmigung. Geben Sie diese Werte in eine
        Simulation ein und Ihr Angebot deckt die tatsächlichen Risiken ab.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ DACHAUSBAU KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
