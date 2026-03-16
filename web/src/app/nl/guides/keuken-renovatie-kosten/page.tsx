import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Keuken renovatie kosten Nederland 2026 // lowriskquotes',
  description:
    'Realistische keukenrenovatiekosten voor Nederlandse aannemers. Volledige kostenuitsplitsing per post met risicobeoordelingen om keukenopdrachten nauwkeurig te offreren.',
  alternates: { canonical: '/nl/guides/keuken-renovatie-kosten/' },
}

export default function KeukenRenovatieKostenPage() {
  return (
    <div className="guide">
      <h1>keuken renovatie kosten: een uitsplitsing voor aannemers</h1>

      <p>
        Keukens zijn opdrachten met hoge waarde en veel bewegende onderdelen. Loodgieterswerk,
        elektra, gas, schrijnwerk, werkbladen, tegels, vloeren, apparatuur — de co&ouml;rdinatie
        alleen al kan uw marge opeten als u niet goed heeft geprijsd. Dit is wat keukens
        werkelijk kosten in 2026 in Nederland en waar het risico zich verstopt.
      </p>

      <h2>typische kostenverdeling</h2>

      <p>
        Middenklasse keukenrenovatie voor een typisch Nederlands rijtjeshuis. Dit gaat uit van
        een volledige strip-out en vervanging, niet alleen het vervangen van deurtjes.
      </p>

      <ASCIIBox title="Keuken kostenverdeling">
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
              <td>€600 - €1.200</td>
              <td className="guide__highlight">Laag</td>
              <td>Voorspelbaar, tenzij asbest aanwezig is</td>
            </tr>
            <tr>
              <td>Keukenkasten (levering en plaatsing)</td>
              <td>€3.500 - €10.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Brugman/IKEA = Laag. Maatwerk schrijnwerk = Hoog.</td>
            </tr>
            <tr>
              <td>Werkbladen</td>
              <td>€1.000 - €4.500</td>
              <td className="guide__highlight">Gemiddeld - Hoog</td>
              <td>Laminaat = Laag. Graniet/composiet op maat opgemeten = Hoog.</td>
            </tr>
            <tr>
              <td>Loodgieterswerk</td>
              <td>€700 - €1.500</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Spoelbak verplaatsen voegt kosten en risico toe</td>
            </tr>
            <tr>
              <td>Elektra</td>
              <td>€900 - €1.800</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Nieuwe groepenkast of bedrading drijft dit op</td>
            </tr>
            <tr>
              <td>Gas (kookplaat, CV-ketel verplaatsing)</td>
              <td>€350 - €900</td>
              <td className="guide__highlight">Laag</td>
              <td>Erkend installateur. Eenvoudig als niets verplaatst wordt.</td>
            </tr>
            <tr>
              <td>Tegels (spatwand en vloer)</td>
              <td>€1.000 - €2.500</td>
              <td className="guide__highlight">Laag</td>
              <td>Standaard metrotegels = zeker. Complexe patronen = Gemiddeld.</td>
            </tr>
            <tr>
              <td>Vloer</td>
              <td>€500 - €1.500</td>
              <td className="guide__highlight">Laag</td>
              <td>PVC of vinyl. Egalisatie ondervloer kan kosten toevoegen.</td>
            </tr>
            <tr>
              <td>Stucwerk en schilderwerk</td>
              <td>€500 - €1.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Eenvoudig. Oude keukens vergen mogelijk meer voorbewerking.</td>
            </tr>
            <tr>
              <td>Apparatuur</td>
              <td>€1.200 - €5.000</td>
              <td className="guide__highlight">Zeker - Laag</td>
              <td>Meestal door klant aangeschaft. Bevestig voor u offreert.</td>
            </tr>
            <tr>
              <td>Container / afval</td>
              <td>€350 - €600</td>
              <td className="guide__highlight">Zeker</td>
              <td>Vaste prijs, vooraf reserveren</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totaalbereik voor een middenklasse keuken: <span className="guide__highlight">€10.600 -
        €30.500</span>. Het enorme bereik komt neer op de kwaliteit van de kasten, het
        werkbladmateriaal en hoeveel de indeling wijzigt.
      </p>

      <h2>waar keukens het budget opblazen</h2>

      <ul>
        <li>
          <strong>Werkbladen.</strong> Op maat gemaakte stenen werkbladen worden opgemeten nadat
          de kasten zijn geplaatst, en vervolgens off-site gefabriceerd. Als de opmeting niet
          klopt of het steen een gebrek heeft, wacht u weken op vervanging. Markeer
          maatwerkwerkbladen als Hoog onzekerheid.
        </li>
        <li>
          <strong>Indelingswijzigingen.</strong> De spoelbak verplaatsen betekent afvoer en
          waterleiding verleggen. De kookplaat verplaatsen betekent gas en afzuiging verleggen.
          Elke verplaatsing is een extra onderaannemer, een extra dag, een extra risicopunt. Als
          de klant alles wil verplaatsen, moeten uw loodgieters- en elektraramingen minimaal
          op Gemiddeld staan.
        </li>
        <li>
          <strong>Levertijden.</strong> Maatwerkkasten, stenen werkbladen en specialistische
          apparatuur kunnen 4-8 weken duren. Als &eacute;&eacute;n artikel te laat is, verschuift uw
          hele planning. Prijs het risico van stilstandtijd in uw offerte of zorg dat de klant
          begrijpt dat vertragingen voor hun rekening zijn.
        </li>
        <li>
          <strong>Scope creep.</strong> &quot;Als u toch bezig bent, kunt u die radiator
          verplaatsen?&quot; &quot;Eigenlijk, kunnen we de hele kamer stucen?&quot; Keukens trekken scope
          creep aan omdat klanten de rommel zien en alles in &eacute;&eacute;n keer willen laten
          repareren. Zorg voor een duidelijke scope op papier voordat u begint.
        </li>
      </ul>

      <h2>keukens met vertrouwen offreren</h2>

      <p>
        Een keuken met standaard Brugman-kasten, laminaat werkbladen en geen
        indelingswijzigingen is grotendeels Laag-onzekerheidswerk. U kunt dicht bij uw
        basisraming offreren. Een keuken met maatwerk schrijnwerk, granieten werkbladen en
        een complete herinrichting zit vol Hoog-onzekerheidsposten. Uw opslag moet dat
        weerspiegelen.
      </p>
      <p>
        Beoordeel elke kostenpost eerlijk, draai de simulatie en offreer op P80. Uw offerte
        zal hoger zijn bij risicovolle opdrachten en strakker bij eenvoudige — en zo hoort
        het ook.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ OFFERTE VOOR UW KEUKENKLUS ]</Link>
      </div>
    </div>
  )
}
