import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Prijsstijgingen tijdens klus 2026 // lowriskquotes',
  description:
    'Hoe ga je om met prijsstijgingen van materialen tijdens een klus? Strategieën voor aannemers op een onzekere markt.',
  alternates: { canonical: '/nl/guides/prijsstijgingen-tijdens-klus/' },
}

export default function PrijsstijgingenTijdensKlusPage() {
  return (
    <div className="guide">
      <h1>prijsstijgingen tijdens de klus: hoe bescherm je jezelf</h1>

      <p>
        Je hebt in januari geoffreerd, het werk begint in maart. Ondertussen is staal 15%
        duurder geworden en hout 20%. Je offerte is verouderd, maar de klant houdt je aan je
        woord. Herkenbaar?
      </p>
      <p>
        De afgelopen jaren hebben laten zien dat materiaalprijzen in weken kunnen springen.
        Een aannemer die zich hier niet tegen beschermt, kan zijn hele winst verliezen door
        een prijsstijging waar hij niets aan kon doen.
      </p>

      <h2>de omvang van het probleem</h2>

      <ASCIIBox title="Voorbeelden prijsstijgingen 2024-2026">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Materiaal</th>
              <th>Typische jaarstijging</th>
              <th>Impact op offerte van € 80.000</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Staal en wapening</td>
              <td>5 - 20%</td>
              <td className="guide__highlight">€ 1.000 - € 4.800</td>
            </tr>
            <tr>
              <td>Constructiehout</td>
              <td>8 - 25%</td>
              <td className="guide__highlight">€ 1.600 - € 6.000</td>
            </tr>
            <tr>
              <td>Cement en beton</td>
              <td>5 - 12%</td>
              <td className="guide__highlight">€ 400 - € 1.900</td>
            </tr>
            <tr>
              <td>Isolatiemateriaal</td>
              <td>3 - 10%</td>
              <td className="guide__highlight">€ 250 - € 1.200</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Bij grote klussen die maanden duren, kan een ongedekte prijsstijging € 4.000-12.000
        aan winst kosten.
      </p>

      <h2>beschermingsstrategieën</h2>

      <ul>
        <li>
          <strong>Prijsindexeringsclausule.</strong> Neem in het contract op dat
          materiaalprijzen kunnen wijzigen bij een stijging boven een bepaalde drempel
          (bijv. 5%). Dit is standaard in de branche en eerlijke klanten accepteren dit.
        </li>
        <li>
          <strong>Korte geldigheid offerte.</strong> Offerte geldig voor 14-30 dagen, niet 90.
          Hoe langer de geldigheid, hoe groter het risico op prijsstijgingen.
        </li>
        <li>
          <strong>Materiaal vroeg inkopen.</strong> Als je zeker weet dat de klus doorgaat,
          bestel de belangrijkste materialen vooruit en blokkeer de prijs. Vereist werkkapitaal
          maar elimineert risico.
        </li>
        <li>
          <strong>Materiaalposten apart.</strong> In de offerte materiaal en arbeid scheiden.
          Materiaal opgeven als „tegen actuele groothandelsprijzen + X%". Arbeid vast prijzen.
        </li>
      </ul>

      <h2>hoe verwerk je dit in de offerte</h2>

      <p>
        Materiaalposten met een lange levertijd markeer je als Gemiddeld of Hoog risico.
        Materiaal dat vooruit is ingekocht is een Vaste kostenpost. Arbeid van je vaste team
        is Laag risico. De calculator past de buffer aan per post.
      </p>

      <p>
        Onthoud: een eerlijk gesprek met de klant over prijsrisico's bij de offerte is beter
        dan een moeilijk gesprek over meerwerk halverwege het project.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN MET PRIJSBESCHERMING ]</Link>
      </div>
    </div>
  )
}
