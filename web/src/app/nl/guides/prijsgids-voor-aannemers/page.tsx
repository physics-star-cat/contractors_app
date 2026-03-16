import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Prijsgids voor aannemers 2026 // lowriskquotes',
  description:
    'Hoe maak je een offerte als aannemer? Complete gids van opmeting tot presentatie aan de klant.',
  alternates: { canonical: '/nl/guides/prijsgids-voor-aannemers/' },
}

export default function PrijsgidsVoorAannemersPage() {
  return (
    <div className="guide">
      <h1>prijsgids voor aannemers: van opmeting tot offerte</h1>

      <p>
        Prijzen bepalen is de vaardigheid die bepaalt of je bedrijf winst maakt. Een te lage
        prijs — je werkt voor niets of met verlies. Een te hoge prijs — je verliest de klus.
        De meeste aannemers leren prijzen door vallen en opstaan, en betalen het leergeld uit
        eigen zak.
      </p>
      <p>
        Deze gids laat een systematische aanpak zien die risico's minimaliseert en je met
        vertrouwen laat offreren.
      </p>

      <h2>stap 1: nauwkeurige opmeting</h2>

      <p>
        Alles begint met een locatiebezoek. Offreer nooit op basis van foto's of een
        telefonische beschrijving. Ter plaatse meet je:
      </p>
      <ul>
        <li>Wand-, vloer- en plafondoppervlaktes</li>
        <li>Lengtes van te vervangen of aan te leggen installaties</li>
        <li>Staat van de ondergrond en bestaande elementen</li>
        <li>Bereikbaarheid — oprit, lift, trappenhuis, parkeermogelijkheden</li>
      </ul>

      <h2>stap 2: postenlijst</h2>

      <p>
        Splits de klus op in losse posten. Elke post bevat:
      </p>

      <ASCIIBox title="Poststructuur">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Element</th>
              <th>Voorbeeld</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Postnaam</td>
              <td>Verwijderen oude tegels</td>
            </tr>
            <tr>
              <td>Materiaalkosten</td>
              <td>€ 150 (zakken, gereedschap)</td>
            </tr>
            <tr>
              <td>Arbeidskosten</td>
              <td>€ 800 (2 dagen × € 400)</td>
            </tr>
            <tr>
              <td>Risiconiveau</td>
              <td>Gemiddeld — onbekend wat eronder zit</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>stap 3: risicobeoordeling</h2>

      <p>
        Wijs elke post een zekerheidsniveau toe — van Vast (je hebt een harde leveranciersofferte)
        tot Ruwe schatting (je gokt). Dit is geen pauschal 10% toevoegen. Het is een eerlijke
        beoordeling van elke post afzonderlijk.
      </p>

      <h2>stap 4: eindcalculatie</h2>

      <p>
        Tel de kosten op, voeg een opslag toe voor overhead en winst, en neem de risicobuffers
        mee per post. Je eindprijs dekt:
      </p>
      <ul>
        <li>Materiaal en arbeid</li>
        <li>Indirecte kosten (reistijd, gereedschap, verzekering)</li>
        <li>Risicobuffer (per post verschillend)</li>
        <li>Je winst</li>
      </ul>

      <h2>stap 5: offertepresentatie</h2>

      <p>
        De klant waardeert een transparante offerte met een uitsplitsing per post. Je hoeft
        het risiconiveau niet te tonen — maar toon wel het kostenbereik. „Sloopwerk: € 800 -
        € 1.200, afhankelijk van wat er onder de tegels zit" klinkt professioneel en eerlijk.
      </p>

      <h2>ga systematisch offreren</h2>

      <p>
        Voer je posten in de calculator in. Het systeem berekent een veilig prijsbereik en
        toont hoeveel buffer je nodig hebt op elke fase.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN JE KLUS ]</Link>
      </div>
    </div>
  )
}
