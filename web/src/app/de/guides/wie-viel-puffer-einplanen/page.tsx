import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Wie viel Puffer einplanen? Ratgeber 2026 // lowriskquotes',
  description:
    'Wie viel Puffer sollten Handwerker bei der Kalkulation einplanen? Warum pauschale 10 % nicht reichen und wie positionsweise Risikobewertung besser funktioniert.',
  alternates: { canonical: '/de/guides/wie-viel-puffer-einplanen/' },
}

export default function WieVielPufferEinplanenPage() {
  return (
    <div className="guide">
      <h1>Wie viel Puffer einplanen? Warum pauschale 10 % nicht reichen</h1>

      <p>
        Jeder Handwerker kennt das: man rechnet einen pauschalen Aufschlag auf die Kalkulation
        und hofft, dass es reicht. 10 % ist der Klassiker. Manche nehmen 15 %. Aber woher
        kommen diese Zahlen? Meistens aus dem Bauchgefühl. Und Bauchgefühl ist kein
        Geschäftsmodell.
      </p>
      <p>
        Diese Seite erklärt, warum pauschale Puffer nicht funktionieren und wie Sie
        stattdessen kalkulieren sollten.
      </p>

      <h2>das Problem mit pauschalen Aufschlägen</h2>

      <p>
        Ein pauschaler Puffer behandelt alle Positionen gleich. Aber das Risiko ist nicht
        gleichmäßig verteilt. Hier ein Beispiel:
      </p>

      <ASCIIBox title="Warum 10 % nicht funktioniert">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Kosten</th>
              <th>Echtes Risiko</th>
              <th>Nötiger Puffer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Container bestellen</td>
              <td>€400</td>
              <td className="guide__highlight">Sicher</td>
              <td>€0</td>
            </tr>
            <tr>
              <td>Fliesen legen (bekannte Fliese)</td>
              <td>€2.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>€100 - €200</td>
            </tr>
            <tr>
              <td>Sanitärinstallation (Leitungen verlegen)</td>
              <td>€1.800</td>
              <td className="guide__highlight">Mittel</td>
              <td>€200 - €500</td>
            </tr>
            <tr>
              <td>Rückbau Altbau (unbekannter Zustand)</td>
              <td>€1.000</td>
              <td className="guide__highlight">Hoch</td>
              <td>€500 - €1.500</td>
            </tr>
            <tr>
              <td>Maßanfertigung Duschabtrennung</td>
              <td>€2.000</td>
              <td className="guide__highlight">Hoch</td>
              <td>€400 - €1.000</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Gesamtkosten: €7.200. Ein pauschaler 10-%-Puffer wäre €720. Aber das reale
        Risiko liegt bei <span className="guide__highlight">€1.200 - €3.200</span>. Mit
        10 % decken Sie nicht einmal die Hälfte ab.
      </p>

      <h2>warum Handwerker zu wenig Puffer nehmen</h2>

      <ul>
        <li>
          <strong>Angst vor Preisverlust.</strong> Wer zu viel aufschlägt, bekommt den
          Auftrag nicht. Also wird der Puffer gedrückt. Aber ein transparenter Puffer,
          der auf echten Risiken basiert, lässt sich dem Kunden besser erklären als ein
          pauschaler Prozentsatz.
        </li>
        <li>
          <strong>Erfahrung täuscht.</strong> Der letzte Auftrag lief gut, also wird der
          nächste auch laufen. Aber Ihr letzter Auftrag hatte vielleicht einen guten
          Untergrund. Der nächste nicht.
        </li>
        <li>
          <strong>Zeitmangel.</strong> Eine positionsweise Risikobewertung klingt aufwendig.
          Ist sie aber nicht — wenn Sie das richtige Werkzeug nutzen.
        </li>
      </ul>

      <h2>besser: positionsweise Risikobewertung</h2>

      <p>
        Statt einem pauschalen Prozentsatz bewerten Sie jede Position einzeln: Sicher,
        Niedrig, Mittel, Hoch oder Grobe Schätzung. Daraus errechnet sich ein Puffer,
        der die tatsächlichen Unsicherheiten abbildet — nicht mehr und nicht weniger.
        Der Kunde sieht ein transparentes Angebot, und Sie schützen Ihre Marge.
      </p>
      <p>
        Das Ergebnis: Sie gewinnen Aufträge, weil Ihr Angebot nachvollziehbar ist. Und
        Sie verlieren kein Geld, weil Ihr Puffer auf echten Daten basiert.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ PUFFER BERECHNEN ]</Link>
      </div>
    </div>
  )
}
