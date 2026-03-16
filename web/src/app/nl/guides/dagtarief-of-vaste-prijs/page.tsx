import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Dagtarief of vaste prijs? 2026 // lowriskquotes',
  description:
    'Wanneer werk je op dagtarief en wanneer op vaste prijs? Vergelijking van afrekenmodellen voor aannemers.',
  alternates: { canonical: '/nl/guides/dagtarief-of-vaste-prijs/' },
}

export default function DagtariefOfVastePrijsPage() {
  return (
    <div className="guide">
      <h1>dagtarief of vaste prijs: welk model kies je</h1>

      <p>
        „Wat kost het per dag?" versus „Wat kost het totaal?" — deze vraag komt bij elke klus
        terug. Beide modellen hebben hun plek, maar het verkeerde model bij de verkeerde klus
        kiezen is de snelste weg naar geldverlies of een verloren opdracht.
      </p>
      <p>
        De kernvraag is: wie draagt het risico? Bij een dagtarief ligt het risico bij de klant.
        Bij een vaste prijs — bij de aannemer.
      </p>

      <h2>wanneer een dagtarief logisch is</h2>

      <ASCIIBox title="Dagtarief — voor en tegen">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Voordelen</th>
              <th>Nadelen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Geen risico voor jou</td>
              <td>Klant kent de eindprijs niet</td>
            </tr>
            <tr>
              <td>Flexibel bij scopewijzigingen</td>
              <td>Klant kan je werktempo ter discussie stellen</td>
            </tr>
            <tr>
              <td>Ideaal voor moeilijk te prijzen werk</td>
              <td>Beperkt je verdienste bij efficiënt werken</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Een dagtarief werkt goed bij: sloopwerk met onbekenden, herstelwerk na waterschade,
        kleine eendagsklussen, werk waarvan de klant de scope niet kan definiëren. Gangbare
        dagtarieven in Nederland in 2026: <span className="guide__highlight">€ 350 - € 650/dag
        </span> per vakman, afhankelijk van specialisatie en regio.
      </p>

      <h2>wanneer een vaste prijs beter is</h2>

      <p>
        Een vaste prijs (aanneemsom) werkt wanneer:
      </p>
      <ul>
        <li>De scope helder gedefinieerd en meetbaar is</li>
        <li>Je het werk vaak hebt gedaan en de kosten kent</li>
        <li>De klant vooraf de eindprijs wil weten</li>
        <li>Je efficiënt bent en meer kunt verdienen dan op dagbasis</li>
      </ul>

      <p>
        Bij een vaste prijs hangt je winst af van je efficiëntie. Een team dat een badkamer
        in 7 dagen doet in plaats van 10, verdient meer per werkdag. Maar als je verkeerd
        prijst — verlies je.
      </p>

      <h2>hybride model</h2>

      <p>
        Veel ervaren aannemers combineren beide aanpakken. Bekende posten (tegels, schilderen,
        montage) prijzen ze vast. Onbekende posten (sloop, herstel van verborgen schade) — op
        dagtarief. Dit is eerlijk voor beide partijen en elimineert het risico van onderschatting.
      </p>

      <h2>bereken het</h2>

      <p>
        Voer vaste-prijsposten in met hun risiconiveau. Dagtariefposten markeer je als Vaste
        kosten (het dagtarief is immers bekend). De calculator toont het totaalbereik inclusief
        buffer op de risicovolle posten.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ VERGELIJK AFREKENMODELLEN ]</Link>
      </div>
    </div>
  )
}
