import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Zolder verbouwing kosten 2026 // lowriskquotes',
  description:
    'Wat kost een zolderverbouwing in Nederland? Realistisch kostenoverzicht met risicobeoordeling voor aannemers.',
  alternates: { canonical: '/nl/guides/zolder-verbouwing-kosten/' },
}

export default function ZolderVerbouwingKostenPage() {
  return (
    <div className="guide">
      <h1>zolder verbouwing kosten: van opslag naar woonruimte</h1>

      <p>
        Een zolder ombouwen tot slaapkamer, kantoor of speelkamer is een populaire klus. Het
        dak is er al, de muren staan er — je hoeft alleen maar af te werken. Zo lijkt het
        althans. In werkelijkheid lopen zolderverbouwingen regelmatig uit door constructieve
        verrassingen, dakkapellen die niet passen en trappen die niet voldoen aan het
        Bouwbesluit.
      </p>
      <p>
        Hieronder de realistische kosten in 2026 en waar je als aannemer op moet letten.
      </p>

      <h2>typische kostenopbouw</h2>

      <p>
        Kosten voor een zolderverbouwing van 25-40 m² bruikbaar vloeroppervlak.
      </p>

      <ASCIIBox title="Kostenopbouw zolderverbouwing">
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
              <td>Constructieve versterking</td>
              <td>€ 4.000 - € 15.000</td>
              <td className="guide__highlight">Hoog</td>
              <td>Oude spanten kunnen vervanging nodig hebben</td>
            </tr>
            <tr>
              <td>Dakisolatie</td>
              <td>€ 5.000 - € 14.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Minerale wol of PIR — voorspelbaar</td>
            </tr>
            <tr>
              <td>Wanden en plafond (gipsplaat)</td>
              <td>€ 4.000 - € 10.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Schuine wanden kosten meer arbeidsuren</td>
            </tr>
            <tr>
              <td>Dakkapel</td>
              <td>€ 5.000 - € 18.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Prefab = voorspelbaar, maatwerk = duurder</td>
            </tr>
            <tr>
              <td>Vloer</td>
              <td>€ 3.000 - € 8.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Geluidsisolatie en egalisatie</td>
            </tr>
            <tr>
              <td>Elektra</td>
              <td>€ 2.000 - € 5.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Standaard aansluitpunten</td>
            </tr>
            <tr>
              <td>Verwarming</td>
              <td>€ 2.500 - € 7.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Aansluiting op bestaande CV</td>
            </tr>
            <tr>
              <td>Vaste trap</td>
              <td>€ 3.000 - € 12.000</td>
              <td className="guide__highlight">Hoog</td>
              <td>Vloersparingen + trap op maat</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totaalbereik: <span className="guide__highlight">€ 28.500 - € 89.000</span>. De
        grootste onzekerheden zitten in de constructie en de trap.
      </p>

      <h2>veelvoorkomende valkuilen</h2>

      <ul>
        <li>
          <strong>Constructie dakspanten.</strong> Oude woningen hebben vaak spanten die niet
          berekend zijn op een verblijfsruimte. Zonder advies van een constructeur riskeer je
          kostbare aanpassingen halverwege het project.
        </li>
        <li>
          <strong>Stahoogte.</strong> Minimaal 2,3 m op minimaal 50% van het vloeroppervlak
          volgens het Bouwbesluit. Controleer dit voor de offerte.
        </li>
        <li>
          <strong>Trap.</strong> Een vloersparing in de verdiepingsvloer is een constructieve
          ingreep. Dit vereist berekening en vaak versterking van de vloerbalken.
        </li>
      </ul>

      <h2>veilig offreren</h2>

      <p>
        Beoordeel de constructie en het dak voordat je een prijs afgeeft. Constructieve posten
        markeer je als Hoog risico, afwerkingsposten als Laag. Voer alles in de calculator in
        en je krijgt een prijs die je marge beschermt.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN JE ZOLDERVERBOUWING ]</Link>
      </div>
    </div>
  )
}
