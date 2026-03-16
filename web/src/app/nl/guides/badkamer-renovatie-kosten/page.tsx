import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Badkamer renovatie kosten Nederland 2026 // lowriskquotes',
  description:
    'Realistische badkamerrenovatiekosten voor Nederlandse aannemers. Post-voor-post uitsplitsing met risicobeoordelingen zodat u badkamers kunt offreren zonder geld te verliezen.',
  alternates: { canonical: '/nl/guides/badkamer-renovatie-kosten/' },
}

export default function BadkamerRenovatieKostenPage() {
  return (
    <div className="guide">
      <h1>badkamer renovatie kosten: wat aannemers echt moeten weten</h1>

      <p>
        Badkamers zijn brood-en-boterwerk voor de meeste aannemers. Maar het is ook waar veel
        geld op tafel blijft liggen. De scope lijkt eenvoudig — strippen, opnieuw aanleggen,
        betegelen, monteren. Maar de verborgen kosten stapelen zich snel op: verrotte balken
        achter het badpaneel, asbest in de oude tegellijm, een klant die drie weken na de start
        van tegelkeuze verandert.
      </p>
      <p>
        Deze pagina splitst de werkelijke badkamerkosten in 2026 uit en laat zien waar het
        risico zit per kostenpost.
      </p>

      <h2>typische kostenverdeling</h2>

      <p>
        Dit zijn middenklasse badkamerrenovatiekosten voor een standaard Nederlandse badkamer
        (circa 2,5m x 2m). Budget- en luxe opdrachten zullen aan weerszijden van deze
        bedragen liggen.
      </p>

      <ASCIIBox title="Badkamer kostenverdeling">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Kostenbereik</th>
              <th>Risiconiveau</th>
              <th>Toelichting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sloopwerk en afvoer</td>
              <td>€500 - €1.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Hangt af van wat u achter de muren aantreft</td>
            </tr>
            <tr>
              <td>Loodgieterswerk</td>
              <td>€1.000 - €1.800</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Verplaatsen afvoer = duurder. Zelfde plek = goedkoper.</td>
            </tr>
            <tr>
              <td>Elektra</td>
              <td>€500 - €1.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Standaard zones. Vloerverwarming voegt €400+ toe.</td>
            </tr>
            <tr>
              <td>Wand- en vloertegels</td>
              <td>€1.500 - €3.000</td>
              <td className="guide__highlight">Laag - Gemiddeld</td>
              <td>Groot formaat = meer snijwerk en afval</td>
            </tr>
            <tr>
              <td>Sanitair</td>
              <td>€700 - €2.500</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Klant levert zelf = hoger risico op vertragingen</td>
            </tr>
            <tr>
              <td>Douchecabine / -wand</td>
              <td>€400 - €2.200</td>
              <td className="guide__highlight">Hoog</td>
              <td>Standaard = Laag. Op maat gemaakt glas = Hoog.</td>
            </tr>
            <tr>
              <td>Stucwerk / wanden</td>
              <td>€350 - €700</td>
              <td className="guide__highlight">Laag</td>
              <td>Eenvoudig, tenzij de muren slecht zijn</td>
            </tr>
            <tr>
              <td>Container / afvalverwijdering</td>
              <td>€300 - €500</td>
              <td className="guide__highlight">Zeker</td>
              <td>Vraag vooraf een vaste prijs aan</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totaalbereik voor een middenklasse badkamer: <span className="guide__highlight">€5.250 -
        €12.700</span>. Dat is een breed bereik. Het verschil wordt vooral bepaald door het
        sanitair dat de klant kiest en wat er achter de oude tegels schuilgaat.
      </p>

      <h2>waar badkamers misgaan</h2>

      <p>
        De grootste kostenexplosies bij badkamers komen uit drie hoeken:
      </p>
      <ul>
        <li>
          <strong>Verborgen schade.</strong> Verrotte vloerbalken, vocht in de muren, oude loden
          leidingen die vervangen moeten worden. U weet het pas als u gaat strippen. Als er
          enige kans is op constructieve problemen, markeer die posten als Hoog onzekerheid.
        </li>
        <li>
          <strong>Wijzigingen door de klant.</strong> Ze hebben iets op Pinterest gezien. De
          tegels die ze wilden zijn niet meer leverbaar. Ze willen het toilet naar de andere
          muur verplaatsen. Elke wijziging tijdens de klus kost tijd en geld. Prijs uw sanitair
          op minimaal Gemiddeld onzekerheid, tenzij de klant alles al gekocht heeft.
        </li>
        <li>
          <strong>Maatwerkproducten.</strong> Op maat gemaakte douchewanden, niet-standaard
          wastafels, ge&iuml;mporteerde tegels met zes weken levertijd. Dit is Hoog of Ruwe
          schatting-terrein. Als het op maat gemaakt moet worden, ga ervan uit dat iets de
          eerste keer niet past.
        </li>
      </ul>

      <h2>badkamers slimmer offreren</h2>

      <p>
        In plaats van een vast opslagpercentage van 10% op uw badkamerofferte, beoordeel elke
        kostenpost eerlijk. De container is Zeker. Uw vaste installateur is Laag. Die op maat
        gemaakte douchewand van een nieuwe leverancier is Hoog. Voer die in de simulatie en u
        krijgt een offerte die de werkelijke risico&apos;s dekt — geen natte-vingerpercentage.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ OFFERTE VOOR UW BADKAMERKLUS ]</Link>
      </div>
    </div>
  )
}
