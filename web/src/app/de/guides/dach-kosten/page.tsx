import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Dachdeckerkosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Dachdeckerkosten für deutsche Handwerksbetriebe. Komplettsanierung, Flachdach, Reparaturen und Dachrinnen — mit Risikobewertungen für eine sichere Kalkulation.',
  alternates: { canonical: '/de/guides/dach-kosten/' },
}

export default function DachKostenPage() {
  return (
    <div className="guide">
      <h1>Dachkosten: den Auftrag kalkulieren, den man erst oben sieht</h1>

      <p>
        Dacharbeiten sind von Natur aus risikoreiche Kalkulationen. Sie kalkulieren vom Boden
        aus und finden die Probleme erst in der Höhe. Morsche Latten, durchhängende Sparren,
        durchnässte Unterspannbahn, die beim Anfassen zerfällt. Das Gerüst steht, die Uhr
        läuft, und jede Überraschung kostet Geld.
      </p>
      <p>
        Diese Seite schlüsselt auf, was Dacharbeiten in Deutschland 2026 tatsächlich kosten
        und wo bei jeder Position die Unsicherheit steckt.
      </p>

      <h2>Kostenspannen nach Auftragstyp</h2>

      <p>
        Richtwerte für gängige Dacharbeiten an einem typischen Einfamilienhaus. Die
        tatsächlichen Kosten hängen von Dachneigung, Zugänglichkeit, Materialwahl und dem
        ab, was Sie finden, wenn die alte Eindeckung runterkommt.
      </p>

      <ASCIIBox title="Dacharbeiten nach Typ">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Auftragstyp</th>
              <th>Typische Kosten</th>
              <th>Dauer</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Komplettsanierung (Steildach)</td>
              <td>€12.000 - €30.000</td>
              <td>5-12 Tage</td>
              <td>Abriss und Neueindeckung. Preis schwankt je nach Holzzustand.</td>
            </tr>
            <tr>
              <td>Flachdach (Bitumen/EPDM)</td>
              <td>€3.000 - €8.000</td>
              <td>2-5 Tage</td>
              <td>Pro 30 m² Abschnitt. Zustand der Schalung ist die Unbekannte.</td>
            </tr>
            <tr>
              <td>Dachreparatur</td>
              <td>€300 - €2.500</td>
              <td>0,5-2 Tage</td>
              <td>Verrutschte Ziegel bis Kehlreparaturen. Große Bandbreite.</td>
            </tr>
            <tr>
              <td>Dachrinnen &amp; Fallrohre</td>
              <td>€1.500 - €4.000</td>
              <td>1-3 Tage</td>
              <td>Zink oder Kupfer. Morsche Sparrenköpfe erhöhen die Kosten.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>Rechenbeispiel: Komplettsanierung Einfamilienhaus</h2>

      <p>
        Typisches Einfamilienhaus, Baujahr 1985. Betondachsteine, Unterspannbahn ist
        durchlässig, einige Latten verdächtig. Dachfläche ca. 120 m². Bauherr wünscht neue
        Tondachziegel und Metallfirst.
      </p>

      <ASCIIBox title="Kostenaufschlüsselung Dachsanierung">
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
              <td>Gerüststellung</td>
              <td>€1.500 - €3.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Festpreis einholen. Längere Standzeit = Mehrkosten bei Verzögerung.</td>
            </tr>
            <tr>
              <td>Abriss alte Eindeckung &amp; Unterspannbahn</td>
              <td>€1.200 - €2.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Planbare Arbeit. Alte Mörtelgrate verlangsamen die Arbeit.</td>
            </tr>
            <tr>
              <td>Lattung erneuern</td>
              <td>€800 - €1.500</td>
              <td className="guide__highlight">Mittel</td>
              <td>Komplettlattung ist Standard. Morsche Latten brechen beim Entfernen.</td>
            </tr>
            <tr>
              <td>Unterdeckbahn (diffusionsoffen)</td>
              <td>€600 - €1.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Materialkosten stabil. Arbeitszeit in Eindeckung enthalten.</td>
            </tr>
            <tr>
              <td>Holzsanierung (Sparren/Pfetten)</td>
              <td>€0 - €5.000</td>
              <td className="guide__highlight">Hoch</td>
              <td>Die große Unbekannte. Kann nichts sein. Können sechs Sparren sein.</td>
            </tr>
            <tr>
              <td>Dachziegel (Lieferung)</td>
              <td>€3.000 - €5.500</td>
              <td className="guide__highlight">Mittel</td>
              <td>Betondachsteine ~€1/Stück. Tonziegel 2-3x teurer. Naturschiefer 4-5x.</td>
            </tr>
            <tr>
              <td>Eindeckung (Arbeitslohn)</td>
              <td>€2.500 - €4.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Ihr Team. Wetterverzögerungen sind die Hauptvariable.</td>
            </tr>
            <tr>
              <td>Metallfirst &amp; Ortgang</td>
              <td>€500 - €1.200</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Mechanische Befestigung. Schneller als Mörtelbettung.</td>
            </tr>
            <tr>
              <td>Klempnerarbeiten (Anschlüsse/Kehlen)</td>
              <td>€800 - €2.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>Zink- und Kupferpreise schwanken. Aktuelle Preise vor Angebot prüfen.</td>
            </tr>
            <tr>
              <td>Container &amp; Entsorgung</td>
              <td>€600 - €1.200</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Alte Ziegel sind schwer. Meist zwei Container nötig.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Gesamtspanne für eine Komplettsanierung: <span className="guide__highlight">€11.500 -
        €26.400</span>. Diese Spanne von fast €15.000 ist keine Schlamperei — das ist echte
        Unsicherheit. Allein die Holzsanierung kann den Auftrag um €5.000 verschieben. Alles
        andere ist relativ vorhersehbar, wenn Sie Ihre Lieferantenpreise und die
        Geschwindigkeit Ihres Teams kennen.
      </p>

      <h2>wo Dachaufträge schiefgehen</h2>

      <p>
        Vier Risikofaktoren dominieren Dachkalkulationen:
      </p>
      <ul>
        <li>
          <strong>Verborgene Fäulnis.</strong> Sie können den Zustand der Sparren vom Boden aus
          nicht sehen. Eine Drohnenaufnahme oder Dachbodenbegehung hilft, aber Gewissheit haben
          Sie erst, wenn die Ziegel ab sind. Wenn das Dach vor 1990 gebaut wurde und nie
          angefasst wurde, kalkulieren Sie zumindest etwas Holzarbeit ein und markieren Sie es
          als Hoch.
        </li>
        <li>
          <strong>Gerüststandzeit.</strong> Das Gerüst selbst ist planbar. Das Risiko ist die
          Dauer. Wenn Schlechtwetter oder Holzsanierung drei Tage zum Auftrag addieren, zahlen
          Sie eine Extra-Woche Standzeit. Berücksichtigen Sie das in Ihrer Gerüstposition.
        </li>
        <li>
          <strong>Wetterfenster.</strong> Ein offenes Dach kann nicht über Nacht bei Starkregen
          stehen. Sie brauchen ein realistisches Wetterfenster für die Abriss-und-Folien-Phase.
          Im Winter ist dieses Fenster kleiner. Kalkulieren Sie entsprechend oder akzeptieren
          Sie das Risiko.
        </li>
        <li>
          <strong>Materialpreisschwankungen.</strong> Zink, Holz und Ziegel haben in den
          letzten Jahren starke Preisbewegungen gesehen. Ein Angebot, das acht Wochen liegt,
          bevor es angenommen wird, muss eventuell neu kalkuliert werden. Setzen Sie ein
          Ablaufdatum auf Ihre Angebote — maximal 30 Tage.
        </li>
      </ul>

      <h2>Dachaufträge klüger kalkulieren</h2>

      <p>
        Das Gerüst, die Unterspannbahn und Ihre Arbeitskraft sind alle Niedrig-Unsicherheit.
        Diese Zahlen kennen Sie. Die Holzsanierung und Klempnerarbeiten sind der Ort, wo das
        Risiko liegt. Statt jede Position mit einem pauschalen Aufschlag zu polstern, bewerten
        Sie die riskanten Positionen ehrlich und simulieren Sie die Spanne. Ihr Angebot zeigt
        dem Bauherrn dann eine realistische Bandbreite — und schützt Ihre Marge bei den
        Positionen, die tatsächlich explodieren.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ DACHAUFTRAG KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
