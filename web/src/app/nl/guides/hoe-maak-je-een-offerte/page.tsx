import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Hoe maak je een offerte als aannemer // lowriskquotes',
  description:
    'Een praktische gids voor het nauwkeurig offreren van opdrachten. Leer waarom aannemers te laag inschrijven, hoe u risico per kostenpost beoordeelt, en hoe Monte Carlo-simulatie veiligere offertes maakt.',
  alternates: { canonical: '/nl/guides/hoe-maak-je-een-offerte/' },
}

export default function HoeMaakJeEenOffertePage() {
  return (
    <div className="guide">
      <h1>hoe maak je een offerte (zonder er geld op toe te leggen)</h1>

      <p>
        De meeste aannemers hebben weleens geld verloren op een opdracht. Niet omdat ze slecht
        werk leverden — maar omdat ze verkeerd offreerden. Ze baseerden de prijs op het
        best-case scenario, kregen de opdracht, en zagen vervolgens hun marge verdampen toen de
        werkelijkheid zich aandiende.
      </p>
      <p>
        Deze gids legt uit waarom dat gebeurt en hoe u het kunt voorkomen met een methode die
        ongeveer vijf minuten langer duurt dan uw huidige aanpak.
      </p>

      <h2>waarom aannemers te laag inschrijven</h2>

      <p>
        Drie krachten drukken elke offerte omlaag:
      </p>

      <p>
        <strong className="guide__highlight">Optimisme-bias.</strong> U stelt zich voor dat de
        klus soepel verloopt. Het stucwerk komt er netjes af. De balken zijn stevig. De
        leverancier levert op tijd. U prijst de versie van de opdracht waarin niets misgaat —
        terwijl die versie vrijwel nooit werkelijkheid wordt.
      </p>
      <p>
        <strong className="guide__highlight">Concurrentiedruk.</strong> U weet dat de klant drie
        offertes heeft. Dus slijpt u uw potlood, haalt u alle vet eraf en rondt u alles naar
        beneden af. Nu is uw offerte krap. Te krap. U wint de opdracht maar verliest de winst.
      </p>
      <p>
        <strong className="guide__highlight">Puntschattingen.</strong> U schrijft één bedrag op
        voor elke kostenpost: tegels €2.000. Dat is geen schatting. Dat is een gok vermomd als
        feit. Werkelijke kosten zijn bereiken. Tegels kunnen €1.800 zijn als uw vaste leverancier
        voorraad heeft, of €2.400 als dat niet zo is en u bij een nieuwe leverancier moet bestellen.
      </p>

      <h2>de vijf onzekerheidsniveaus</h2>

      <p>
        Niet elke kostenpost in uw offerte draagt hetzelfde risico. Een containerhuur bij het
        bedrijf dat u al vijftig keer heeft gebruikt is niet hetzelfde als een op maat gemaakte
        glazen douchewand van een leverancier die u vorige week heeft gevonden. Ze gelijk
        behandelen is de kernfout van een vast opslagpercentage.
      </p>
      <p>
        LowRiskQuotes gebruikt vijf niveaus van onzekerheid. Dit is wat elk niveau in de
        praktijk betekent:
      </p>

      <ASCIIBox title="Onzekerheidsniveaus">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Niveau</th>
              <th>Bereik</th>
              <th>Praktijkvoorbeeld</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Zeker</td>
              <td>+/- 2%</td>
              <td>Containerhuur, vaste prijsopgave van leverancier op papier</td>
            </tr>
            <tr>
              <td className="guide__highlight">Laag</td>
              <td>+/- 8%</td>
              <td>Materialen van uw vaste leverancier, standaard beslag</td>
            </tr>
            <tr>
              <td className="guide__highlight">Gemiddeld</td>
              <td>+/- 15%</td>
              <td>Onderaannemer die u eerder heeft ingeschakeld maar niet recent</td>
            </tr>
            <tr>
              <td className="guide__highlight">Hoog</td>
              <td>+/- 25%</td>
              <td>Nieuwe onderaannemer, specialistisch materiaal, onbekende bouwkundige staat</td>
            </tr>
            <tr>
              <td className="guide__highlight">Ruwe schatting</td>
              <td>+/- 40%</td>
              <td>Geen inspectie gedaan, onbekende scope, &quot;moet ongeveer ... zijn&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        De kernvraag per kostenpost is: <em>hoe zeker ben ik dat dit bedrag klopt?</em> Niet hoe
        zeker u wilt zijn. Hoe zeker u werkelijk bent, op basis van bewijs. Heeft u een
        schriftelijke prijsopgave? Dat is Zeker. Baseert u zich op een klus van twee jaar
        geleden in een andere regio? Dat is op z&apos;n best Hoog.
      </p>

      <h2>uitgewerkt voorbeeld: badkamerrenovatie</h2>

      <p>
        Laten we een echte offerte doorlopen. Mevrouw De Vries wil haar badkamer laten
        verbouwen — strippen, opnieuw betegelen, nieuw sanitair, op maat gemaakte glazen
        douchewand, nieuwe leidingwerk, elektra en een container voor het afval. Uw
        basisraming komt uit op €7.200.
      </p>

      <ASCIIBox title="Kostenposten">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Raming</th>
              <th>Niveau</th>
              <th>Reden</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wand- en vloertegels</td>
              <td>€2.200</td>
              <td className="guide__highlight">Laag</td>
              <td>Uw vaste leverancier, u heeft vergelijkbare prijzen eerder gezien</td>
            </tr>
            <tr>
              <td>Sanitair (wastafel, toilet, kranen)</td>
              <td>€900</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Klant heeft middenklasse gekozen maar nog niet definitief besloten</td>
            </tr>
            <tr>
              <td>Op maat gemaakte glazen douchewand</td>
              <td>€1.700</td>
              <td className="guide__highlight">Hoog</td>
              <td>Nieuwe leverancier, maatwerkformaat, nooit eerder bij besteld</td>
            </tr>
            <tr>
              <td>Loodgieter (onderaannemer)</td>
              <td>€1.400</td>
              <td className="guide__highlight">Gemiddeld</td>
              <td>Jan is betrouwbaar maar heeft nog niet geoffreerd voor deze klus</td>
            </tr>
            <tr>
              <td>Elektricien</td>
              <td>€650</td>
              <td className="guide__highlight">Laag</td>
              <td>Standaard badkamerelektra, uw vaste installateur</td>
            </tr>
            <tr>
              <td>Containerhuur</td>
              <td>€350</td>
              <td className="guide__highlight">Zeker</td>
              <td>Vaste prijs van uw vaste containerverhuurbedrijf</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Als u €7.200 als vaste prijs offreert, rekent u op het scenario waarin elke kostenpost
        precies op de raming uitkomt. Dat is het meest onwaarschijnlijke resultaat. Het is alsof
        u erop wedt dat elke munt bij zes worpen op kop landt.
      </p>
      <p>
        Voer die getallen door een Monte Carlo-simulatie en u krijgt een verdeling. De simulatie
        draait duizenden versies van deze opdracht, waarbij elke keer kosten worden getrokken
        uit het onzekerheidsbereik dat u heeft ingesteld. Omdat overschrijdingen vaker
        voorkomen dan onderschrijdingen, neigt de simulatie naar boven — net als in het
        echte leven.
      </p>

      <ASCIIBox title="Simulatieresultaat">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Basisraming: <span className="guide__highlight">€7.200</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (50/50 kans): <span className="guide__highlight">€7.560</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (aanbevolen offerte): <span className="guide__highlight">€8.080</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (worst-case buffer): <span className="guide__highlight">€8.820</span>
        </p>
      </ASCIIBox>

      <p>
        Het verschil tussen €7.200 en €8.080 is €880 — ongeveer 12%. Maar het is geen vast
        opslagpercentage van 12%. Het is een berekende buffer op basis van de specifieke
        risico&apos;s in deze specifieke opdracht. Een opdracht met alleen Lage posten zou minder
        nodig hebben. Een opdracht vol Ruwe schattingen zou veel meer nodig hebben.
      </p>

      <h2>de resultaten lezen: wat de kansverdeling betekent</h2>

      <p>
        De simulatie geeft u een kansverdeling — een klokvormige curve die laat zien hoe
        waarschijnlijk elke totale kostenuitkomst is. Zo leest u deze:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> betekent dat er 50% kans is dat de
          werkelijke kosten onder dit bedrag liggen. Muntworpkansen. Geen veilige offerte.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> betekent 80% kans dat de werkelijke
          kosten onder dit bedrag liggen. Dit is het ideale punt voor de meeste aannemers. U
          bent beschermd tegen de meeste overschrijdingen zonder uzelf uit de markt te prijzen.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> betekent 95% kans. Dit is uw
          &quot;rustig slapen&quot;-getal. Gebruik het voor vaste-prijscontracten of klanten die geen
          enkele meerwerk accepteren.
        </li>
      </ul>
      <p>
        Bij welk percentiel u offreert hangt af van de opdracht en de klant. Een regie-opdracht
        met een goede klant? P50 kan prima zijn. Een vaste-prijskeuken voor een klant die u aan
        elke cent houdt? Offreer op P80 of P95 en bescherm uzelf.
      </p>

      <h2>veelgemaakte fouten bij offreren</h2>

      <p>
        Na het doorrekenen van duizenden ramingen door de simulator tekenen zich patronen af.
        Dit zijn de fouten die aannemers het meeste geld kosten:
      </p>

      <ol>
        <li>
          <strong>Alles als Laag onzekerheid markeren.</strong> Als u geen schriftelijke
          prijsopgave heeft, is het niet Laag. Als u deze exacte scope niet eerder heeft
          uitgevoerd, is het niet Laag. Wees eerlijk tegen uzelf.
        </li>
        <li>
          <strong>Reis- en tijdkosten vergeten.</strong> Twee uur rijden per dag tegen €35/uur
          voor een drieweekse klus is €1.050. Dat is echt geld. Reken het mee.
        </li>
        <li>
          <strong>Niet prijzen voor vertragingen.</strong> Weer, te late leveringen,
          wijzigingen door de klant. Dit zijn geen zeldzame gebeurtenissen. Ze zijn de norm. Uw
          schatting van de projectduur heeft zijn eigen onzekerheidsniveau nodig.
        </li>
        <li>
          <strong>Prijzen van vorig jaar kopiëren.</strong> Materiaalprijzen bewegen. Hout is
          gestegen. Koper is gestegen. Als uw prijzen zes maanden oud zijn, kloppen ze niet
          meer.
        </li>
        <li>
          <strong>Offreren om te winnen in plaats van offreren om winst te maken.</strong> Een
          opdracht die u wint tegen de verkeerde prijs is erger dan een opdracht die u niet
          krijgt. Het slechtste resultaat is niet de opdracht mislopen. Het is de opdracht
          winnen en gratis werken.
        </li>
      </ol>

      <h2>alles samenvoegen</h2>

      <p>
        Dit is de werkwijze. Het voegt ongeveer vijf minuten toe aan uw offerteproces:
      </p>
      <ol>
        <li>Maak een lijst van alle kostenposten zoals u normaal zou doen.</li>
        <li>Vraag uzelf per post af: hoe zeker ben ik van dit bedrag? Ken een niveau toe.</li>
        <li>Voeg uw dagtarief, projectduur en reistijd toe.</li>
        <li>Draai de simulatie.</li>
        <li>Offreer op P80 voor de meeste opdrachten. Pas aan op basis van het contracttype.</li>
      </ol>
      <p>
        U voegt geen verzonnen opslag toe. U bouwt een offerte die het werkelijke risicoprofiel
        van de werkelijke opdracht weerspiegelt. Dat is het verschil tussen hopen dat u geld
        verdient en weten dat u dat doet.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ MAAK UW OFFERTE ]</Link>
      </div>
    </div>
  )
}
