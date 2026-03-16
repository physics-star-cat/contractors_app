import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Schilder kosten 2026 // lowriskquotes',
  description:
    'Wat kost schilderwerk in Nederland? Prijzen per m² voor binnen en buiten met risicobeoordeling voor aannemers.',
  alternates: { canonical: '/nl/guides/schilder-kosten/' },
}

export default function SchilderKostenPage() {
  return (
    <div className="guide">
      <h1>schilder kosten: tarieven, valkuilen en realistische offertes</h1>

      <p>
        Schilderwerk lijkt de eenvoudigste klus. De klant ziet verf en een roller en verwacht
        een lage prijs. Maar 60-70% van de tijd van een schilder gaat naar voorbereiding —
        plamuren, schuren, gronden, afplakken. Een aannemer die alleen het verven prijst,
        verliest altijd.
      </p>
      <p>
        Hieronder de realistische kosten van schilderwerk in 2026, inclusief voorbereiding.
      </p>

      <h2>typische kostenopbouw</h2>

      <p>
        Prijzen voor een woning met 100-180 m² wand- en plafondoppervlak.
      </p>

      <ASCIIBox title="Kostenopbouw schilderwerk">
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
              <td>Muren schilderen (2 lagen)</td>
              <td>€ 12 - € 22/m²</td>
              <td className="guide__highlight">Laag</td>
              <td>Op voorbereide ondergrond</td>
            </tr>
            <tr>
              <td>Plafonds schilderen</td>
              <td>€ 15 - € 25/m²</td>
              <td className="guide__highlight">Laag</td>
              <td>Langzamer werk, moeilijker bereikbaar</td>
            </tr>
            <tr>
              <td>Plamuren en schuren</td>
              <td>€ 10 - € 22/m²</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Afhankelijk van de staat van de muren</td>
            </tr>
            <tr>
              <td>Gronden</td>
              <td>€ 4 - € 8/m²</td>
              <td className="guide__highlight">Vast</td>
              <td>Altijd nodig, makkelijk te berekenen</td>
            </tr>
            <tr>
              <td>Afdekken meubels en vloeren</td>
              <td>€ 300 - € 1.000</td>
              <td className="guide__highlight">Vast</td>
              <td>Folie, tape, karton</td>
            </tr>
            <tr>
              <td>Houtwerk schilderen (deuren, kozijnen)</td>
              <td>€ 60 - € 180/stuk</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Oude verf = afbranden + grondverf</td>
            </tr>
            <tr>
              <td>Verf (materiaal)</td>
              <td>€ 800 - € 2.500</td>
              <td className="guide__highlight">Laag</td>
              <td>Afhankelijk van merk en aantal kleuren</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totale kosten schilderwerk appartement 70 m² (ca. 140 m² wanden): <span className="guide__highlight">
        € 4.000 - € 9.500</span> met voorbereiding en materiaal.
      </p>

      <h2>waar schilders geld verliezen</h2>

      <ul>
        <li>
          <strong>Voorbereiding onderschatten.</strong> Muren na behang, met scheuren of vocht
          vereisen veel meer werk dan verse stucwerk. Inspecteer altijd voor de offerte.
        </li>
        <li>
          <strong>Donkere en felle kleuren.</strong> Donkere tinten vereisen 3-4 lagen in plaats
          van 2. Dat verdubbelt de tijd en het verfverbruik. Vraag naar de kleur voor je offerte.
        </li>
        <li>
          <strong>Meubels in de ruimte.</strong> De klant belooft de kamer leeg te maken maar
          doet het niet. Verplaatsen en afdekken kost uren. Leg dit schriftelijk vast.
        </li>
      </ul>

      <h2>slim offreren</h2>

      <p>
        Meet het oppervlak, beoordeel de muren, vraag naar kleuren. Schilderen van een
        voorbereide kamer is Laag risico. Oude muren na behang zijn Gemiddeld. Voer elke post
        in de calculator in en krijg een prijs die je marge niet opeet.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN JE SCHILDERWERK ]</Link>
      </div>
    </div>
  )
}
