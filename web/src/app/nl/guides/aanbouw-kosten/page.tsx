import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Aanbouw kosten 2026 // lowriskquotes',
  description:
    'Wat kost een aanbouw in Nederland? Compleet kostenoverzicht met risicobeoordeling voor aannemers.',
  alternates: { canonical: '/nl/guides/aanbouw-kosten/' },
}

export default function AanbouwKostenPage() {
  return (
    <div className="guide">
      <h1>aanbouw kosten: wat kost een uitbouw echt in 2026</h1>

      <p>
        Een aanbouw is een van de meest gevraagde klussen in Nederland. Meer woonruimte zonder
        te verhuizen — dat willen veel huiseigenaren. Voor de aannemer is het een lucratieve
        klus, maar ook een waar de risico's snel oplopen. Fundering, constructie, aansluiting
        op het bestaande pand, vergunningen — op elk punt kan iets tegenvallen.
      </p>
      <p>
        Hieronder vind je realistische kosten voor een aanbouw in 2026, met per post een
        risicobeoordeling.
      </p>

      <h2>typische kostenopbouw</h2>

      <p>
        Kosten voor een standaard aanbouw van 15-25 m² op de begane grond, gemetselde
        constructie.
      </p>

      <ASCIIBox title="Kostenopbouw aanbouw">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Kostenbereik</th>
              <th>Risiconiveau</th>
              <th>Opmerkingen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fundering</td>
              <td>€ 8.000 - € 20.000</td>
              <td className="guide__highlight">Hoog</td>
              <td>Grondgesteldheid kan verrassen</td>
            </tr>
            <tr>
              <td>Dragende muren</td>
              <td>€ 12.000 - € 28.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Afhankelijk van materiaal en hoogte</td>
            </tr>
            <tr>
              <td>Dakconstructie</td>
              <td>€ 8.000 - € 18.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Aansluiting op bestaand dak = duurder</td>
            </tr>
            <tr>
              <td>Kozijnen en deuren</td>
              <td>€ 5.000 - € 14.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Standaardmaten = voorspelbaar</td>
            </tr>
            <tr>
              <td>Installaties (elektra, loodgieter)</td>
              <td>€ 6.000 - € 15.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Aansluiting op bestaande installaties</td>
            </tr>
            <tr>
              <td>Isolatie en afwerking buitenzijde</td>
              <td>€ 5.000 - € 12.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Voorspelbaar werkpakket</td>
            </tr>
            <tr>
              <td>Afwerking binnenzijde</td>
              <td>€ 8.000 - € 25.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Afhankelijk van afwerkingsniveau</td>
            </tr>
            <tr>
              <td>Vergunning en constructeur</td>
              <td>€ 3.000 - € 7.000</td>
              <td className="guide__highlight">Vast</td>
              <td>Vooraf regelen, kosten bekend</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totaalbereik voor een standaard aanbouw begane grond: <span className="guide__highlight">
        € 55.000 - € 139.000</span>. De spreiding komt vooral door grondgesteldheid,
        afwerkingsniveau en regio.
      </p>

      <h2>waar aanbouwen misgaan</h2>

      <ul>
        <li>
          <strong>Fundering en bodem.</strong> Hoge grondwaterstand, slappe grond of onbekende
          kabels en leidingen. Een bodemonderzoek kost € 1.000-2.500 en kan duizenden euro's
          aan verrassingen voorkomen.
        </li>
        <li>
          <strong>Aansluiting op bestaand pand.</strong> Dilatatievoeg, daknaad, vloerniveaus
          gelijk krijgen — hier ontstaan onverwachte uren.
        </li>
        <li>
          <strong>Vergunningen.</strong> Bestemmingsplan controleren, welstandscommissie,
          buren informeren. Vertragingen kosten geld. Regel dit voor de offerte.
        </li>
      </ul>

      <h2>veilig offreren</h2>

      <p>
        Splits de offerte op in posten en beoordeel het risico per post apart. Fundering op
        onbekende grond is Hoog risico. Standaard kozijnen zijn Laag. Voer alles in de
        calculator in en laat de wiskunde het veilige bedrag bepalen.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN JE AANBOUW ]</Link>
      </div>
    </div>
  )
}
