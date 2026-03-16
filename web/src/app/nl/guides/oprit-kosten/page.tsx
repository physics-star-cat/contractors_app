import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Oprit kosten 2026 // lowriskquotes',
  description:
    'Wat kost een nieuwe oprit in Nederland? Klinkers, asfalt, beton — realistische prijzen met risicobeoordeling.',
  alternates: { canonical: '/nl/guides/oprit-kosten/' },
}

export default function OpritKostenPage() {
  return (
    <div className="guide">
      <h1>oprit kosten: klinkers, asfalt en beton in 2026</h1>

      <p>
        Een oprit aanleggen lijkt rechttoe rechtaan. Oppervlakte meten, materiaal kiezen,
        uitvoeren. Maar de ondergrond bepaalt uiteindelijk of het een winstgevende klus wordt
        of een kostenpost. Slappe grond, hoge grondwaterstand, onbekende kabels — in Nederland
        zijn dit geen uitzonderingen maar de regel.
      </p>
      <p>
        Hieronder de realistische kosten voor een oprit in 2026.
      </p>

      <h2>typische kostenopbouw</h2>

      <p>
        Kosten voor een standaard oprit van 25-40 m².
      </p>

      <ASCIIBox title="Kostenopbouw oprit">
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
              <td>Verwijderen oude oprit</td>
              <td>€ 1.500 - € 4.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Dikte oude verharding varieert</td>
            </tr>
            <tr>
              <td>Ontgraving en fundering</td>
              <td>€ 3.000 - € 9.000</td>
              <td className="guide__highlight">Hoog</td>
              <td>Slappe grond = diepere fundering + worteldoek</td>
            </tr>
            <tr>
              <td>Klinkers (materiaal + leggen)</td>
              <td>€ 5.000 - € 15.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Standaardpatronen = voorspelbaar</td>
            </tr>
            <tr>
              <td>Banden en opsluitbanden</td>
              <td>€ 1.000 - € 3.000</td>
              <td className="guide__highlight">Vast</td>
              <td>Meetbaar vooraf</td>
            </tr>
            <tr>
              <td>Afwatering</td>
              <td>€ 1.500 - € 5.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Lijnafwatering of kolken — hangt af van afschot</td>
            </tr>
            <tr>
              <td>Inritvergunning gemeente</td>
              <td>€ 500 - € 2.000</td>
              <td className="guide__highlight">Vast</td>
              <td>Check vooraf bij gemeente</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totaalbereik: <span className="guide__highlight">€ 12.500 - € 38.000</span>. De
        ondergrond is de grootste onbekende — goede grond scheelt dagen werk.
      </p>

      <h2>veelvoorkomende valkuilen</h2>

      <ul>
        <li>
          <strong>Grond en water.</strong> Kleigrond houdt water vast en vereist een dikkere
          fundering. Als je het perceel niet kent, markeer ontgraving als Hoog risico.
        </li>
        <li>
          <strong>Kabels en leidingen.</strong> Waterleiding, elektra, gas — altijd een KLIC-
          melding doen voor je begint met graven. Verrassingen kosten tijd en geld.
        </li>
        <li>
          <strong>Weer.</strong> Buitenwerk in Nederland van november tot maart is onzeker.
          Regen en vorst vertragen bestratingswerkzaamheden. Plan een weersbuffer in.
        </li>
      </ul>

      <h2>veilig offreren</h2>

      <p>
        Meet het oppervlak, beoordeel de grond en bepaal het materiaal. Fundering op onbekende
        grond is Hoog risico, klinkers op voorbereide fundering is Laag. Voer de posten in de
        calculator in en krijg een prijs die de werkelijke risico's dekt.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN JE OPRIT ]</Link>
      </div>
    </div>
  )
}
