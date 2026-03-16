import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Stukadoor kosten 2026 // lowriskquotes',
  description:
    'Wat kost stucwerk in Nederland? Prijzen per m² voor glad, spachtel en sierpleister met risicobeoordeling.',
  alternates: { canonical: '/nl/guides/stukadoor-kosten/' },
}

export default function StukadoorKostenPage() {
  return (
    <div className="guide">
      <h1>stukadoor kosten: prijzen per m² en verborgen risico's</h1>

      <p>
        Stukadoorswerk is een van de meest voorspelbare klussen in de bouw. De prijzen per
        vierkante meter zijn marktconform, en een ervaren stukadoor kan de arbeidstijd nauwkeurig
        inschatten. Toch komen er offertes voor die de kosten niet dekken — meestal door de
        staat van de ondergrond, moeilijke bereikbaarheid of scopewijzigingen tijdens het werk.
      </p>
      <p>
        Hieronder een overzicht van realistische stukadoorskosten in 2026.
      </p>

      <h2>typische kostenopbouw</h2>

      <p>
        Prijzen voor het stucen van een woning met 120-250 m² wand- en plafondoppervlak.
      </p>

      <ASCIIBox title="Kostenopbouw stucwerk">
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
              <td>Glad stucwerk</td>
              <td>€ 18 - € 28/m²</td>
              <td className="guide__highlight">Laag</td>
              <td>Standaardwerk, goed meetbaar</td>
            </tr>
            <tr>
              <td>Spachtelpleister</td>
              <td>€ 12 - € 20/m²</td>
              <td className="guide__highlight">Laag</td>
              <td>Sneller dan glad, dunne laag</td>
            </tr>
            <tr>
              <td>Sierpleister</td>
              <td>€ 22 - € 38/m²</td>
              <td className="guide__highlight">Laag</td>
              <td>Meer materiaalverbruik</td>
            </tr>
            <tr>
              <td>Ondergrond voorbereiden</td>
              <td>€ 1.500 - € 5.000</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Oud stucwerk verwijderen, voorstrijken</td>
            </tr>
            <tr>
              <td>Hoekprofielen en randen</td>
              <td>€ 600 - € 1.800</td>
              <td className="guide__highlight">Vast</td>
              <td>Op strekkende meters te berekenen</td>
            </tr>
            <tr>
              <td>Plafonds</td>
              <td>€ 22 - € 35/m²</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Lastiger bereikbaar, langzamer werk</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Voorbeeld: glad stucwerk in een woning met 180 m² wandoppervlak: <span className="guide__highlight">
        € 3.240 - € 5.040</span> voor het aanbrengen, exclusief voorbereiding.
      </p>

      <h2>wat de prijs opdrijft</h2>

      <ul>
        <li>
          <strong>Oud stucwerk verwijderen.</strong> Bikken en afvoeren van oud pleisterwerk kost
          € 1.500-5.000 extra. Als je niet weet wat eronder zit, markeer als Gemiddeld risico.
        </li>
        <li>
          <strong>Ongelijke muren.</strong> Afwijkingen van meer dan 5 mm per meter vereisen
          extra lagen of voorstrijken. Meer materiaal en arbeid.
        </li>
        <li>
          <strong>Hoog en krap.</strong> Trappenhuizen, plafonds boven 3 meter, smalle gangen —
          alles vertraagt en vereist steigers.
        </li>
      </ul>

      <h2>veilig offreren</h2>

      <p>
        Meet het wand- en plafondoppervlak en beoordeel de ondergrond. Stucwerk op nieuw
        metselwerk is Laag risico. Oud stucwerk verwijderen in een jaren '30 woning is Gemiddeld
        of Hoog. Voer de posten in de calculator in en krijg een prijs afgestemd op het
        werkelijke risico.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN JE STUCWERK ]</Link>
      </div>
    </div>
  )
}
