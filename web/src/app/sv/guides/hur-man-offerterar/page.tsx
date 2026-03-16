import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Hur man gör en offert som hantverkare // lowriskquotes',
  description:
    'Praktisk guide för att prissätta dina projekt med precision. Lär dig varför hantverkare underprisar, hur du bedömer risk på varje post och hur Monte Carlo-simulering bygger säkrare offerter.',
  alternates: { canonical: '/sv/guides/hur-man-offerterar/' },
}

export default function HurManOfferterarPage() {
  return (
    <div className="guide">
      <h1>hur man gör en offert (utan att förlora skjortan)</h1>

      <p>
        De flesta hantverkare har förlorat pengar på ett projekt. Inte för att de jobbade dåligt
        — utan för att de räknade fel. De satte priset utifrån bästa scenariot, fick jobbet och
        såg sedan marginalen smälta bort när verkligheten slog till.
      </p>
      <p>
        Den här guiden förklarar varför det händer och hur du åtgärdar det med en metod som
        bara tar fem minuter extra jämfört med ditt vanliga tillvägagångssätt.
      </p>

      <h2>varför hantverkare underprisar sina offerter</h2>

      <p>
        Tre krafter trycker ner varje offert:
      </p>

      <p>
        <strong className="guide__highlight">Optimismbias.</strong> Du föreställer dig att
        projektet går utan problem. Putsen lossnar rent. Bjälkarna är friska. Leverantören
        levererar i tid. Du prissätter för den version av projektet där inget går snett — fast
        den versionen nästan aldrig inträffar.
      </p>
      <p>
        <strong className="guide__highlight">Konkurrenstryck.</strong> Du vet att kunden har
        begärt tre offerter. Så du skär i kostnaderna, avrundar nedåt och pressar priset. Din
        offert är tajt. För tajt. Du får jobbet men förlorar vinsten.
      </p>
      <p>
        <strong className="guide__highlight">Punktestimering.</strong> Du skriver ner en enda
        siffra för varje post: kakel 24 000 kr. Det är inte en uppskattning. Det är en gissning
        förklädd till fakta. Verkliga kostnader är intervall. Kaklet kan kosta 21 000 kr om din
        vanliga leverantör har i lager, eller 29 000 kr om du måste beställa från en annan.
      </p>

      <h2>de fem osäkerhetsnivåerna</h2>

      <p>
        Varje post i din offert bär inte samma risk. En container från uthyraren du använt i tio
        år är inte samma sak som en specialbeställd duschvägg från en glasmästare du hittade förra
        veckan. Att behandla dem lika är grundfelet med schablonmässiga påslag.
      </p>
      <p>
        LowRiskQuotes använder fem osäkerhetsnivåer. Här är vad varje nivå betyder i praktiken:
      </p>

      <ASCIIBox title="Osäkerhetsnivåer">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Nivå</th>
              <th>Intervall</th>
              <th>Praktiskt exempel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Säker</td>
              <td>+/- 2%</td>
              <td>Containerhyra, skriftlig offert från leverantör med fast pris</td>
            </tr>
            <tr>
              <td className="guide__highlight">Låg</td>
              <td>+/- 8%</td>
              <td>Material från din vanliga leverantör, standardbeslag</td>
            </tr>
            <tr>
              <td className="guide__highlight">Medel</td>
              <td>+/- 15%</td>
              <td>Underentreprenör du jobbat med men inte nyligen</td>
            </tr>
            <tr>
              <td className="guide__highlight">Hög</td>
              <td>+/- 25%</td>
              <td>Ny underentreprenör, specialmaterial, okända förutsättningar</td>
            </tr>
            <tr>
              <td className="guide__highlight">Vild gissning</td>
              <td>+/- 40%</td>
              <td>Ingen platsbesiktning, okänt omfång, &quot;det borde bli ungefär...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Nyckelfrågan för varje post är: <em>hur säker är jag på att den här siffran stämmer?</em>
        Inte hur säker du vill vara. Hur säker du faktiskt är, baserat på bevis. Har du en
        skriftlig offert? Det är Säker. Uppskattar du utifrån ett projekt du gjorde för två år
        sedan i en annan stad? Det är Hög på sin höjd.
      </p>

      <h2>konkret exempel: badrumsrenovering</h2>

      <p>
        Låt oss ta en verklig offert. Familjen Svensson vill renovera sitt badrum — rivning,
        nytt kakel, nya sanitetsprodukter, specialbeställd duschvägg, VVS, el och bortforsling
        av avfall. Din basuppskattning landar på 77 000 kr.
      </p>

      <ASCIIBox title="Kostnadsposter">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Uppskattning</th>
              <th>Nivå</th>
              <th>Varför</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kakel väggar och golv</td>
              <td>24 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Din vanliga leverantör, du har prissatt liknande förut</td>
            </tr>
            <tr>
              <td>Sanitetsprodukter (handfat, toalett, blandare)</td>
              <td>10 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Kunden har valt mellanklass men inte bestämt slutgiltigt</td>
            </tr>
            <tr>
              <td>Specialbeställd duschvägg</td>
              <td>18 000 kr</td>
              <td className="guide__highlight">Hög</td>
              <td>Ny glasmästare, icke-standardmått, aldrig beställt från dem</td>
            </tr>
            <tr>
              <td>VVS (underentreprenör)</td>
              <td>14 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Lars är pålitlig men har inte offererat det här jobbet ännu</td>
            </tr>
            <tr>
              <td>Elektriker</td>
              <td>7 500 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Standard badrumsinstallation, din vanliga elektriker</td>
            </tr>
            <tr>
              <td>Container</td>
              <td>3 500 kr</td>
              <td className="guide__highlight">Säker</td>
              <td>Fast pris från din vanliga uthyrare</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Om du offererat 77 000 kr rakt av prissätter du för scenariot där varje post träffar
        exakt på uppskattningen. Det är det mest osannolika resultatet. Det är som att satsa på
        att sex mynt alla landar på krona.
      </p>
      <p>
        Kör dessa siffror genom en Monte Carlo-simulering och du får en fördelning. Simuleringen
        kör tusentals versioner av det här projektet, och drar kostnader ur det osäkerhetsintervall
        du definierat varje gång. Eftersom överskridanden är vanligare än besparingar viktas
        simuleringen uppåt — precis som i verkligheten.
      </p>

      <ASCIIBox title="Simuleringsresultat">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Basuppskattning: <span className="guide__highlight">77 000 kr</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (krona eller klave): <span className="guide__highlight">80 900 kr</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (rekommenderad offert): <span className="guide__highlight">86 400 kr</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (maximal säkerhetsmarginal): <span className="guide__highlight">94 100 kr</span>
        </p>
      </ASCIIBox>

      <p>
        Skillnaden mellan 77 000 kr och 86 400 kr är 9 400 kr — ungefär 12%. Men det är inte
        ett schablonmässigt påslag på 12%. Det är en buffert beräknad utifrån de specifika
        riskerna i just det här projektet. Ett projekt med enbart Låg-poster behöver mindre. Ett
        projekt fullt av vilda gissningar behöver mycket mer.
      </p>

      <h2>läsa resultaten: vad klockkurvan betyder</h2>

      <p>
        Simuleringen ger dig en sannolikhetsfördelning — en klockkurva som visar sannolikheten
        för varje totalkostnad. Så här läser du den:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> betyder att det finns 50% chans att
          den faktiska kostnaden hamnar under det beloppet. Det är krona eller klave. Inte en
          säker offert.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> betyder 80% chans att den faktiska
          kostnaden hamnar under. Det är den optimala nivån för de flesta hantverkare. Du är
          skyddad mot de flesta överskridanden utan att prisa ut dig.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> betyder 95% chans. Det är din
          &quot;sov gott&quot;-siffra. Använd den för fastpriskontrakt eller kunder som inte
          accepterar några avvikelser.
        </li>
      </ul>
      <p>
        Vilken percentil du offererar på beror på projektet och kunden. Ett löpande projekt med
        en bra kund? P50 kan räcka. Ett fast kök för en kund som håller dig till varenda krona?
        Offerera på P80 eller P95 och skydda dig.
      </p>

      <h2>vanliga offertmisstag</h2>

      <p>
        Efter att ha kört tusentals offerter genom simulatorn framträder mönster. Här är de
        misstag som kostar hantverkare mest:
      </p>

      <ol>
        <li>
          <strong>Markera allt som Låg osäkerhet.</strong> Om du inte har en skriftlig offert
          är det inte Låg. Om du aldrig gjort exakt det här arbetet är det inte Låg. Var ärlig
          mot dig själv.
        </li>
        <li>
          <strong>Glömma rese- och tidskostnader.</strong> Två timmars körning per dag à 350 kr
          per timme i tre veckor blir 10 500 kr. Det är riktiga pengar. Prissätt det.
        </li>
        <li>
          <strong>Inte prissätta förseningar.</strong> Väder, sena leveranser, kundändringar.
          Det är inte sällsynta händelser. Det är norm. Din tidsuppskattning behöver också sin
          egen osäkerhetsnivå.
        </li>
        <li>
          <strong>Använda förra årets priser.</strong> Materialkostnader rör sig. Trä har gått
          upp. Koppar har gått upp. Om dina priser är sex månader gamla är de fel.
        </li>
        <li>
          <strong>Offerera för att vinna istället för att tjäna pengar.</strong> Ett projekt du
          vinner till fel pris är värre än ett projekt du inte får. Det värsta resultatet är inte
          att förlora upphandlingen. Det är att vinna den och jobba gratis.
        </li>
      </ol>

      <h2>sätt ihop allt</h2>

      <p>
        Här är metoden. Den lägger till ungefär fem minuter till din offertprocess:
      </p>
      <ol>
        <li>Lista varje post som du brukar göra.</li>
        <li>För varje post, fråga dig: hur säker är jag på den här siffran? Tilldela en nivå.</li>
        <li>Lägg till din dagstariff, projektlängd och resor.</li>
        <li>Kör simuleringen.</li>
        <li>Offerera på P80 för de flesta projekt. Justera uppåt eller nedåt beroende på kontraktstyp.</li>
      </ol>
      <p>
        Du lägger inte till ett påhittat påslag. Du bygger en offert som speglar den verkliga
        riskprofilen för det verkliga projektet. Det är skillnaden mellan att hoppas tjäna
        pengar och att veta att du gör det.
      </p>

      <div className="guide__cta">
        <Link href="/sv/estimate/">[ SKAPA DIN OFFERT ]</Link>
      </div>
    </div>
  )
}
