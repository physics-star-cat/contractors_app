import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Dakwerk kosten Nederland 2026 // lowriskquotes',
  description:
    'Realistische dakwerkkosten voor Nederlandse aannemers. Volledige dakrenovaties, platte daken, reparaties en dakgoten — met risicobeoordelingen per post zodat u dakwerk kunt offreren zonder verliezen.',
  alternates: { canonical: '/nl/guides/dakwerk-kosten/' },
}

export default function DakwerkKostenPage() {
  return (
    <div className="guide">
      <h1>dakwerk kosten: de klus prijzen die u pas ziet als u boven staat</h1>

      <p>
        Dakwerk is van nature offreren met hoog risico. U prijst het vanaf de grond en
        ontdekt de problemen pas op hoogte. Verrotte panlatten, doorgezakte gordingen,
        doorweekt onderdak dat uit elkaar valt als u het aanraakt. De steiger gaat omhoog,
        de klok tikt, en elke verrassing kost geld.
      </p>
      <p>
        Deze pagina splitst uit wat dakwerk werkelijk kost in 2026 in Nederland en waar de
        onzekerheid zich per kostenpost verschuilt.
      </p>

      <h2>kostenbereik per type opdracht</h2>

      <p>
        Richtprijzen voor gangbare dakopdrachten op een standaard tussenwoning. Werkelijke
        kosten hangen af van dakhelling, bereikbaarheid, materiaalkeuze en wat u aantreft
        als de oude bedekking eraf is.
      </p>

      <ASCIIBox title="Dakwerk kosten per type">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Type opdracht</th>
              <th>Typische kosten</th>
              <th>Duur</th>
              <th>Toelichting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Volledige dakrenovatie (schuin)</td>
              <td>€8.000 - €18.000</td>
              <td>5-10 dagen</td>
              <td>Strippen en opnieuw pannen/leien. Prijs schommelt op houtwerk.</td>
            </tr>
            <tr>
              <td>Plat dak (EPDM/bitumen)</td>
              <td>€2.500 - €6.000</td>
              <td>2-4 dagen</td>
              <td>Per 20 m2 sectie. Staat onderconstructie is de onbekende.</td>
            </tr>
            <tr>
              <td>Dakreparatie</td>
              <td>€200 - €1.800</td>
              <td>0,5-2 dagen</td>
              <td>Verschoven pannen tot kilgootherstellingen. Breed bereik.</td>
            </tr>
            <tr>
              <td>Boeiboorden, dakgoten en windveren</td>
              <td>€2.000 - €5.000</td>
              <td>2-4 dagen</td>
              <td>Kunststof vervanging. Verrotte sporen verhogen de kosten.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>uitgewerkt voorbeeld: volledige dakrenovatie tussenwoning</h2>

      <p>
        Standaard tussenwoning. Betonnen dakpannen uit de jaren tachtig. Onderdak is versleten,
        sommige panlatten verdacht. Dakoppervlak circa 70 m2. Klant wil nieuwe betonnen pannen
        en een droog nok-/randsysteem.
      </p>

      <ASCIIBox title="Dakrenovatie kostenverdeling">
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
              <td>Steigerhuur</td>
              <td>€1.200 - €2.200</td>
              <td className="guide__highlight">Laag</td>
              <td>Vraag vaste prijs. Langere huur = meer kosten bij uitloop.</td>
            </tr>
            <tr>
              <td>Strippen bestaande pannen en onderdak</td>
              <td>€800 - €1.400</td>
              <td className="guide__highlight">Laag</td>
              <td>Voorspelbare arbeid. Oude spijkers en mortel vertragen.</td>
            </tr>
            <tr>
              <td>Panlatten vervangen</td>
              <td>€500 - €1.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Volledig opnieuw latten is standaard. Verrotte breken bij verwijdering.</td>
            </tr>
            <tr>
              <td>Dampopen onderdak (folie)</td>
              <td>€400 - €700</td>
              <td className="guide__highlight">Laag</td>
              <td>Materiaalkosten zijn stabiel. Arbeid inbegrepen bij pannenleggen.</td>
            </tr>
            <tr>
              <td>Houtwerk reparaties (gordingen/sporen)</td>
              <td>€0 - €3.000</td>
              <td className="guide__highlight">Hoog</td>
              <td>De grote onbekende. Kan niets zijn. Kan zes sporen zijn.</td>
            </tr>
            <tr>
              <td>Dakpannen levering</td>
              <td>€2.000 - €3.500</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Betonpannen circa €1,20/stuk. Natuurleien zijn 3-4x duurder.</td>
            </tr>
            <tr>
              <td>Pannenleggen arbeid</td>
              <td>€1.800 - €3.000</td>
              <td className="guide__highlight">Laag</td>
              <td>Uw ploeg. Weervertragingen zijn de belangrijkste variabele.</td>
            </tr>
            <tr>
              <td>Droog nok- en randsysteem</td>
              <td>€400 - €800</td>
              <td className="guide__highlight">Laag</td>
              <td>Mechanische bevestiging. Sneller dan mortel.</td>
            </tr>
            <tr>
              <td>Loodwerk (loodslabben/kilgoten)</td>
              <td>€600 - €1.400</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Loodprijzen fluctueren. Check actuele tarieven voor u offreert.</td>
            </tr>
            <tr>
              <td>Container en afvalverwijdering</td>
              <td>€500 - €900</td>
              <td className="guide__highlight">Laag</td>
              <td>Oude pannen zijn zwaar. Meestal minimaal twee containers nodig.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totaalbereik voor een volledige dakrenovatie: <span className="guide__highlight">€8.200 -
        €17.900</span>. Die spreiding van bijna €10.000 is geen slordigheid — het is echte
        onzekerheid. De houtreparaties alleen al kunnen de klus met €3.000 doen schommelen.
        Al het andere is redelijk voorspelbaar als u uw leveranciersprijzen en ploegsnelheid
        kent.
      </p>

      <h2>waar dakwerkklussen misgaan</h2>

      <p>
        Vier risicofactoren domineren dakwerkoffertes:
      </p>
      <ul>
        <li>
          <strong>Verborgen houtrot.</strong> U kunt de staat van de sporen niet zien vanaf de
          grond. Een drone-inspectie of zolderinspectie helpt, maar u weet het pas zeker als de
          pannen eraf zijn. Als het dak van voor 1990 is en nooit is aangepakt, budget dan voor
          op z&apos;n minst enig houtwerk en markeer het als Hoog.
        </li>
        <li>
          <strong>Steigerhuur.</strong> De steiger zelf is voorspelbaar. Het risico zit in de
          duur. Als slecht weer of houtreparaties drie dagen toevoegen aan de klus, betaalt u
          voor een extra week huur. Reken dat mee in uw steigerpost.
        </li>
        <li>
          <strong>Weervensters.</strong> Een open dak kan niet &apos;s nachts in zware regen liggen.
          U heeft een realistisch weervenster nodig voor de strip-en-folie-fase. In de winter
          is dat venster kleiner. Prijs dienovereenkomstig of accepteer het risico.
        </li>
        <li>
          <strong>Materiaalprijsvolatiliteit.</strong> Lood, hout en pannen hebben de afgelopen
          jaren allemaal flinke prijsbewegingen laten zien. Een offerte die acht weken blijft
          liggen voor acceptatie moet mogelijk opnieuw geprijsd worden. Zet een vervaldatum op
          uw offertes — maximaal 30 dagen.
        </li>
      </ul>

      <h2>dakwerk slimmer offreren</h2>

      <p>
        De steiger, het onderdak en uw arbeid zijn allemaal Lage onzekerheid. Die bedragen kent
        u. De houtreparaties en het loodwerk zijn waar het risico zit. In plaats van elke post
        op te hogen met een vast opslagpercentage, beoordeel de risicovolle posten eerlijk en
        simuleer het bereik. Uw offerte laat de klant dan een realistisch bereik zien — en
        beschermt uw marge op de posten die werkelijk kunnen ontploffen.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ OFFERTE VOOR UW DAKWERKKLUS ]</Link>
      </div>
    </div>
  )
}
