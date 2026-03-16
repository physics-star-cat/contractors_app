import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Unbekannten Auftrag kalkulieren 2026 // lowriskquotes',
  description:
    'Wie Handwerker Aufträge kalkulieren, die sie noch nie gemacht haben. Strategien für unbekannte Arbeiten, faire Preise und Risikobewertung.',
  alternates: { canonical: '/de/guides/unbekannten-auftrag-kalkulieren/' },
}

export default function UnbekanntenAuftragKalkulierenPage() {
  return (
    <div className="guide">
      <h1>Einen unbekannten Auftrag kalkulieren: so gehen Sie vor</h1>

      <p>
        Irgendwann kommt der Anruf: ein Kunde will etwas, das Sie noch nie gemacht haben.
        Vielleicht ein Material, das Sie nicht kennen. Oder eine Technik, die Sie bisher
        nur vom Hörensagen kennen. Ablehnen ist eine Option — aber dann wächst Ihr Betrieb
        nicht. Zu billig anbieten ist die andere Falle. Wie finden Sie den richtigen Preis
        für etwas, das Sie noch nie kalkuliert haben?
      </p>

      <h2>Schritt für Schritt zum Angebot</h2>

      <ASCIIBox title="Kalkulation unbekannter Auftrag">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Schritt</th>
              <th>Maßnahme</th>
              <th>Risikostufe</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Recherche</td>
              <td>Herstellerangaben, Fachforen, Kollegen fragen</td>
              <td className="guide__highlight">—</td>
              <td>Investieren Sie 1-2 Stunden vor der Kalkulation</td>
            </tr>
            <tr>
              <td>2. Aufteilen</td>
              <td>Auftrag in bekannte und unbekannte Positionen zerlegen</td>
              <td className="guide__highlight">—</td>
              <td>Was kennen Sie? Was ist neu?</td>
            </tr>
            <tr>
              <td>3. Bekannte Positionen</td>
              <td>Normal kalkulieren</td>
              <td className="guide__highlight">Niedrig - Mittel</td>
              <td>Hier sind Sie auf sicherem Terrain</td>
            </tr>
            <tr>
              <td>4. Unbekannte Positionen</td>
              <td>Beste Schätzung + Risikostufe Hoch oder Grobe Schätzung</td>
              <td className="guide__highlight">Hoch</td>
              <td>Ehrlich sein — Sie wissen es nicht genau</td>
            </tr>
            <tr>
              <td>5. Zeitpuffer</td>
              <td>Einarbeitungszeit einplanen</td>
              <td className="guide__highlight">Hoch</td>
              <td>Beim ersten Mal brauchen Sie 30-50 % länger</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>die häufigsten Fehler</h2>

      <ul>
        <li>
          <strong>Wie einen bekannten Auftrag kalkulieren.</strong> Wenn Sie noch nie
          Sichtbeton geschliffen haben, können Sie die Zeit nicht schätzen wie beim
          Fliesen legen. Geben Sie zu, dass Sie die Arbeit nicht kennen — und kalkulieren
          Sie entsprechend mit Hoch.
        </li>
        <li>
          <strong>Zu billig anbieten um den Auftrag zu bekommen.</strong> Der erste Auftrag
          mit einem neuen Material ist immer ein Lernprojekt. Wer zum Normalpreis anbietet,
          zahlt drauf. Berechnen Sie die Einarbeitung mit ein.
        </li>
        <li>
          <strong>Kein Musterstück.</strong> Bei unbekannten Materialien oder Techniken sollten
          Sie ein Musterstück anfertigen, bevor Sie kalkulieren. Das kostet einen halben Tag —
          spart aber tausende Euro an Nacharbeit.
        </li>
        <li>
          <strong>Nicht absichern.</strong> Bei völlig unbekannten Arbeiten bieten Sie auf
          Stundenbasis oder mit offenem Kostenrahmen an. Ein Festpreis bei einer Arbeit,
          die Sie nicht kennen, ist ein Glücksspiel.
        </li>
      </ul>

      <h2>die richtige Risikostufe wählen</h2>

      <p>
        Für unbekannte Arbeiten verwenden Sie Hoch oder Grobe Schätzung. Das ist keine
        Schwäche — das ist Ehrlichkeit. Ein Kunde, der ein transparentes Angebot mit
        klar benannten Unsicherheiten bekommt, vertraut Ihnen mehr als einem Betrieb,
        der alles zum Festpreis anbietet und dann Nachträge stellt.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ AUFTRAG KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
