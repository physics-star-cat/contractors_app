import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Fussboden Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Bodenbelag-Kosten pro Quadratmeter in Deutschland. Parkett, Laminat, Vinyl, Fliesen — aufgeschlüsselt mit Risikobewertungen für Handwerker.',
  alternates: { canonical: '/de/guides/fussboden-kosten/' },
}

export default function FussbodenKostenPage() {
  return (
    <div className="guide">
      <h1>Fussboden Kosten: was Bodenleger pro Quadratmeter wirklich kalkulieren müssen</h1>

      <p>
        Bodenbeläge verlegen klingt nach planbarer Arbeit — Fläche ausmessen, Material bestellen,
        loslegen. In der Praxis zeigt sich aber schnell: Der Untergrund ist uneben, die Türzargen
        müssen gekürzt werden, der Estrich hat zu viel Restfeuchte und der Kunde möchte nach der
        Hälfte doch ein anderes Verlegemuster. All das frisst Marge.
      </p>
      <p>
        Diese Seite zeigt Ihnen aktuelle Bodenbelag-Kosten 2026 in Deutschland — pro Quadratmeter,
        nach Belagstyp aufgeschlüsselt, mit ehrlichen Risikobewertungen.
      </p>

      <h2>typische Kosten pro Quadratmeter</h2>

      <p>
        Die folgenden Preise umfassen Material und Verlegung. Untergrundvorbereitung und
        Sockelleisten sind separat aufgeführt.
      </p>

      <ASCIIBox title="Bodenbelag-Kosten pro m²">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Belagstyp</th>
              <th>Kosten / m²</th>
              <th>Risikostufe</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laminat</td>
              <td>€20 - €45</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Klick-System. Schnelle Verlegung, günstigstes Material.</td>
            </tr>
            <tr>
              <td>Vinyl / Designboden</td>
              <td>€30 - €60</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Klick oder Klebe. Feuchtraumgeeignet. Untergrund muss eben sein.</td>
            </tr>
            <tr>
              <td>Parkett (Fertigparkett)</td>
              <td>€50 - €90</td>
              <td className="guide__highlight">Niedrig - Mittel</td>
              <td>Schwimmend verlegt. Akklimatisierungszeit einplanen.</td>
            </tr>
            <tr>
              <td>Parkett (Massivholz)</td>
              <td>€80 - €160</td>
              <td className="guide__highlight">Mittel - Hoch</td>
              <td>Verklebt. Schleifen und Versiegeln = Extra-Arbeitstage.</td>
            </tr>
            <tr>
              <td>Fliesen (Feinsteinzeug)</td>
              <td>€45 - €100</td>
              <td className="guide__highlight">Mittel</td>
              <td>Großformat = mehr Verschnitt. Diagonalverlegung teurer.</td>
            </tr>
            <tr>
              <td>Naturstein</td>
              <td>€80 - €200</td>
              <td className="guide__highlight">Hoch</td>
              <td>Jede Platte anders. Hoher Verschnitt, Imprägnierung nötig.</td>
            </tr>
            <tr>
              <td>Untergrundvorbereitung</td>
              <td>€8 - €25</td>
              <td className="guide__highlight">Mittel</td>
              <td>Spachteln, Grundieren, Ausgleichen. Zustand erst nach Rückbau sichtbar.</td>
            </tr>
            <tr>
              <td>Sockelleisten</td>
              <td>€5 - €15 / lfm</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Material und Montage. Gehrungsschnitte bei vielen Ecken aufwendiger.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Beispiel: 60 m² Fertigparkett in einem Wohnzimmer kosten <span className="guide__highlight">€3.000 -
        €5.400</span> für Material und Verlegung, plus €480 - €1.500 für Untergrundvorbereitung
        und Sockelleisten.
      </p>

      <h2>wo Bodenprojekte schiefgehen</h2>

      <p>
        Die häufigsten Kostentreiber beim Bodenverlegen:
      </p>
      <ul>
        <li>
          <strong>Untergrund-Überraschungen.</strong> Alter Kleber unter dem Teppich, unebener
          Estrich, zu hohe Restfeuchte — all das kommt erst zum Vorschein, wenn der alte Belag
          raus ist. Rechnen Sie die Untergrundvorbereitung immer mit Mittel, es sei denn Sie
          kennen den Zustand bereits.
        </li>
        <li>
          <strong>Verlegemuster-Änderungen.</strong> Der Kunde möchte statt geradem Verband
          plötzlich ein Fischgrätmuster. Das verdoppelt den Verschnitt und erhöht die
          Arbeitszeit um 30-50 %. Muster vor Auftragsstart schriftlich fixieren.
        </li>
        <li>
          <strong>Türen und Übergänge.</strong> Türzargen kürzen, Übergangsschienen an
          unterschiedliche Belagshöhen anpassen, Dehnungsfugen bei offenen Grundrissen —
          Kleinigkeiten, die sich bei 15 Türen summieren.
        </li>
      </ul>

      <h2>Bodenprojekte klüger kalkulieren</h2>

      <p>
        Bewerten Sie nicht die gesamte Fläche pauschal, sondern jeden Raum einzeln. Das
        Schlafzimmer mit bekanntem Untergrund ist Niedrig. Die Küche mit altem Fliesenkleber ist
        Mittel. Das Wohnzimmer mit Fischgrät-Massivparkett ist Hoch. Geben Sie diese Werte in
        eine Risikosimulation ein — so erhalten Sie ein Angebot, das Ihre tatsächlichen Kosten
        widerspiegelt, nicht eine optimistische Schätzung.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ BODENPROJEKT KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
