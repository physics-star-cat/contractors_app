import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Preiserhöhungen während des Auftrags handhaben 2026 // lowriskquotes',
  description:
    'Wie Handwerker mit Preiserhöhungen bei Material und Subunternehmern während eines laufenden Auftrags umgehen. Rechtliche Grundlagen und praktische Strategien.',
  alternates: { canonical: '/de/guides/preiserhoehungen-waehrend-auftrag/' },
}

export default function PreiserhoehungenWaehrendAuftragPage() {
  return (
    <div className="guide">
      <h1>Preiserhöhungen während des Auftrags: so gehen Sie damit um</h1>

      <p>
        Sie haben ein Angebot abgegeben, der Kunde hat unterschrieben — und dann steigen die
        Materialpreise. Oder der Subunternehmer erhöht seine Preise. Oder die Lieferzeit
        verdoppelt sich und Sie müssen teurer einkaufen. Das ist kein Einzelfall — seit 2021
        gehören Preissteigerungen zum Alltag auf deutschen Baustellen.
      </p>
      <p>
        Diese Seite zeigt, wie Sie sich schützen und professionell mit Preiserhöhungen umgehen.
      </p>

      <h2>wann Sie Preiserhöhungen weitergeben können</h2>

      <ASCIIBox title="Rechtliche Grundlagen">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Situation</th>
              <th>Weitergabe möglich?</th>
              <th>Grundlage</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VOB-Vertrag mit Stoffpreisgleitklausel</td>
              <td className="guide__highlight">Ja</td>
              <td>Vertragsklausel</td>
              <td>Standardklausel bei öffentlichen Aufträgen</td>
            </tr>
            <tr>
              <td>BGB-Vertrag ohne Klausel, Preissteigerung &gt; 20 %</td>
              <td className="guide__highlight">Möglicherweise</td>
              <td>§ 313 BGB (Störung der Geschäftsgrundlage)</td>
              <td>Einzelfallprüfung — anwaltliche Beratung empfohlen</td>
            </tr>
            <tr>
              <td>BGB-Vertrag ohne Klausel, Preissteigerung &lt; 20 %</td>
              <td className="guide__highlight">Schwierig</td>
              <td>Allgemeines Geschäftsrisiko</td>
              <td>Muss in der Kalkulation abgefangen werden</td>
            </tr>
            <tr>
              <td>Angebot noch nicht angenommen</td>
              <td className="guide__highlight">Ja</td>
              <td>Angebot aktualisieren</td>
              <td>Bindefrist im Angebot kurz halten (4 Wochen)</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>praktische Strategien</h2>

      <ul>
        <li>
          <strong>Bindefrist kurz halten.</strong> Angebote mit einer Bindefrist von maximal
          vier Wochen versehen. Danach können Sie aktualisieren. Bei volatilen Materialien
          (Stahl, Holz, Kupfer) sogar nur zwei Wochen.
        </li>
        <li>
          <strong>Preisgleitklausel einbauen.</strong> In Ihre AGB oder Ihren Vertrag eine
          Klausel aufnehmen, die Preisanpassungen bei Materialpreisänderungen über einem
          bestimmten Prozentsatz (z.B. 5 %) erlaubt. Von einem Anwalt formulieren lassen.
        </li>
        <li>
          <strong>Material frühzeitig bestellen.</strong> Wenn Sie den Auftrag haben und die
          Preise absehbar steigen, bestellen Sie das Material sofort. Lagern ist billiger
          als Preissteigerung.
        </li>
        <li>
          <strong>Transparent kommunizieren.</strong> Wenn Preise steigen, informieren Sie den
          Kunden sofort mit Nachweis (Lieferantenrechnung, Preisliste). Kunden akzeptieren
          Preissteigerungen eher, wenn sie nachvollziehbar sind.
        </li>
      </ul>

      <h2>Preisrisiko in der Kalkulation abbilden</h2>

      <p>
        Die beste Strategie ist, Preisrisiken von Anfang an in die Kalkulation einzubauen.
        Materialien mit stabilen Preisen (Gipskarton, Standardfliesen) sind Niedrig. Materialien
        mit volatilen Preisen (Kupfer, Holz, Stahl) sind Mittel bis Hoch. Wenn Sie diese
        Risikostufen in Ihre Kalkulation einfließen lassen, haben Sie einen Puffer, der
        normale Schwankungen auffängt — ohne den Kunden zu überraschen.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ PREISRISIKO KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
