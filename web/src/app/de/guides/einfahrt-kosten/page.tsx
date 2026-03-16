import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Einfahrt Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Kosten für eine neue Einfahrt in Deutschland. Pflaster, Asphalt oder Beton — Position für Position mit Risikobewertungen.',
  alternates: { canonical: '/de/guides/einfahrt-kosten/' },
}

export default function EinfahrtKostenPage() {
  return (
    <div className="guide">
      <h1>Einfahrt Kosten: was Handwerker wirklich wissen müssen</h1>

      <p>
        Einfahrten wirken auf den ersten Blick wie ein unkomplizierter Auftrag — Fläche
        auskoffern, Unterbau verdichten, Belag drauf. Aber der Teufel steckt im Detail:
        Versickerungspflicht, unbekannter Untergrund, alte Leitungen und die Frage, ob die
        vorhandene Entwässerung ausreicht. Wer hier nicht sauber kalkuliert, verschenkt Marge.
      </p>
      <p>
        Diese Seite zeigt reale Einfahrtkosten 2026 in Deutschland und wo bei jeder Position
        das Risiko liegt.
      </p>

      <h2>typische Kostenaufschlüsselung</h2>

      <p>
        Dies sind Kosten für eine gepflasterte Einfahrt mittlerer Ausstattung (ca. 40-60 m²).
        Asphalt ist günstiger, Naturstein teurer.
      </p>

      <ASCIIBox title="Kostenaufschlüsselung Einfahrt">
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
              <td>Rückbau alte Einfahrt</td>
              <td>€800 - €2.500</td>
              <td className="guide__highlight">Mittel</td>
              <td>Alte Betonfundamente oder Wurzeln können überraschen</td>
            </tr>
            <tr>
              <td>Erdarbeiten &amp; Auskofferung</td>
              <td>€1.500 - €4.000</td>
              <td className="guide__highlight">Mittel - Hoch</td>
              <td>Bodenklasse entscheidet — Lehm oder Fels = teurer</td>
            </tr>
            <tr>
              <td>Unterbau &amp; Tragschicht</td>
              <td>€1.200 - €3.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Schotter, verdichten, planieren — Standardarbeit</td>
            </tr>
            <tr>
              <td>Pflasterbelag</td>
              <td>€2.000 - €6.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Betonsteine = Niedrig. Naturstein = Mittel (mehr Zuschnitt).</td>
            </tr>
            <tr>
              <td>Randeinfassung</td>
              <td>€400 - €1.200</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Standardarbeit — Tiefbordsteine setzen</td>
            </tr>
            <tr>
              <td>Entwässerung &amp; Versickerung</td>
              <td>€800 - €3.000</td>
              <td className="guide__highlight">Mittel - Hoch</td>
              <td>Versickerungspflicht prüfen — Rigole oder Drain nötig?</td>
            </tr>
            <tr>
              <td>Container &amp; Entsorgung</td>
              <td>€400 - €800</td>
              <td className="guide__highlight">Sicher</td>
              <td>Festpreis vorab einholen</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Gesamtspanne für eine gepflasterte Einfahrt: <span className="guide__highlight">€7.100 -
        €20.500</span>. Die Entwässerung und der Untergrund sind die größten Unbekannten.
      </p>

      <h2>wo Einfahrten schiefgehen</h2>

      <p>
        Die häufigsten Kostenfallen bei Einfahrten:
      </p>
      <ul>
        <li>
          <strong>Untergrund.</strong> Was unter der alten Einfahrt liegt, weiß man erst nach
          dem Auskoffern. Alte Fundamente, Wurzeln, Leitungen oder Lehmboden können die
          Erdarbeiten deutlich verteuern.
        </li>
        <li>
          <strong>Entwässerung.</strong> Seit der Verschärfung der Versickerungsvorschriften
          müssen viele Einfahrten mit Drainagen oder Versickerungsmulden geplant werden. Das
          wurde früher oft vergessen — und kostet €1.000-€3.000 extra.
        </li>
        <li>
          <strong>Bordsteinabsenkung.</strong> Wenn die Einfahrt an eine Gemeindestraße
          anschließt, ist eine Bordsteinabsenkung durch die Kommune nötig. Das dauert
          Wochen und kostet €500-€1.500 extra.
        </li>
      </ul>

      <h2>Einfahrten klüger kalkulieren</h2>

      <p>
        Bewerten Sie jede Position ehrlich. Der Unterbau ist Niedrig — Standardarbeit.
        Die Erdarbeiten auf unbekanntem Boden sind Mittel bis Hoch. Die Entwässerung ist
        Mittel, solange die Versickerungspflicht nicht geklärt ist. Mit einer positionsweisen
        Risikobewertung erhalten Sie ein Angebot, das realistisch ist.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ EINFAHRT KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
