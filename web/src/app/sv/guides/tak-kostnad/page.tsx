import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Kostnad takarbeten Sverige 2026 // lowriskquotes',
  description:
    'Realistiska kostnader för takarbeten för hantverkare i Sverige. Omläggning, platta tak, reparationer och plåtarbeten — med risknivåer för att prissätta utan att bränna sig.',
  alternates: { canonical: '/sv/guides/tak-kostnad/' },
}

export default function TakKostnadPage() {
  return (
    <div className="guide">
      <h1>kostnad för takarbeten: att prissätta ett jobb du inte ser förrän du är uppe</h1>

      <p>
        Takarbeten är till sin natur ett högriskområde för prissättning. Du sätter priset från
        marken och upptäcker problemen på höjden. Ruttna läkt, nedhängande takstolar, underlagspapp
        som faller sönder vid beröring. Byggnadsställningen är uppe, mätaren tickar och varje
        överraskning kostar pengar.
      </p>
      <p>
        Den här sidan bryter ner vad takarbeten verkligen kostar i Sverige 2026 och var
        osäkerheten gömmer sig på varje post.
      </p>

      <h2>prisintervall efter typ av projekt</h2>

      <p>
        Riktpriser för vanliga takarbeten på ett standardhus. Faktiska kostnader beror på
        taklutning, tillgänglighet, materialval och vad du hittar när det gamla taket är borta.
      </p>

      <ASCIIBox title="Kostnader per typ av takprojekt">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Typ av projekt</th>
              <th>Typisk kostnad</th>
              <th>Tid</th>
              <th>Anteckningar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Komplett omläggning (betongpannor)</td>
              <td>80 000 kr - 180 000 kr</td>
              <td>5-12 dagar</td>
              <td>Rivning och omläggning. Priset varierar med takstolens skick.</td>
            </tr>
            <tr>
              <td>Platt tak (EPDM/papp)</td>
              <td>25 000 kr - 60 000 kr</td>
              <td>2-5 dagar</td>
              <td>Per sektion om 20 m². Underlagets skick är okänt.</td>
            </tr>
            <tr>
              <td>Takreparation</td>
              <td>3 000 kr - 20 000 kr</td>
              <td>0,5-2 dagar</td>
              <td>Pannbyte till ränndalsreparationer. Brett spann.</td>
            </tr>
            <tr>
              <td>Hängrännor och stuprör</td>
              <td>15 000 kr - 40 000 kr</td>
              <td>2-3 dagar</td>
              <td>Byte av plåt eller plast. Ruttna vindskivor = merkostnad.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>konkret exempel: komplett omläggning på villa</h2>

      <p>
        Villa från 1980-talet i Mellansverige. Betongpannor från nybygget. Underlagspappen nedbruten,
        vissa läkt misstänkta. Takyta cirka 90 m². Kunden vill ha tegelpannor och torrt nockbeslag.
      </p>

      <ASCIIBox title="Kostnadsfördelning takomläggning">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Intervall</th>
              <th>Risknivå</th>
              <th>Anteckningar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Byggnadsställning</td>
              <td>12 000 kr - 20 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Begär fast offert. Tidsöverdrag = längre hyra.</td>
            </tr>
            <tr>
              <td>Rivning av befintliga pannor och papp</td>
              <td>8 000 kr - 14 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Förutsägbar arbetskostnad. Gamla spik och bruk saktar ner.</td>
            </tr>
            <tr>
              <td>Byte av läkt</td>
              <td>6 000 kr - 12 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Komplett omläktning standard. Ruttna läkt går sönder vid demontering.</td>
            </tr>
            <tr>
              <td>Underlagspapp diffusionsöppen</td>
              <td>5 000 kr - 8 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Stabil materialkostnad. Montering ingår i takläggningen.</td>
            </tr>
            <tr>
              <td>Takstolsreparationer</td>
              <td>0 kr - 30 000 kr</td>
              <td className="guide__highlight">Hög</td>
              <td>Den stora okända. Kan vara noll. Kan bli åtta takstolar.</td>
            </tr>
            <tr>
              <td>Tegelpannor (leverans)</td>
              <td>20 000 kr - 35 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Betongpannor ~10 kr/st. Naturskiffer 3-4 gånger dyrare.</td>
            </tr>
            <tr>
              <td>Arbetskostnad läggning</td>
              <td>18 000 kr - 30 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Ditt lag. Väder är den största variabeln.</td>
            </tr>
            <tr>
              <td>Nock och vindskivor (torrt beslag)</td>
              <td>4 000 kr - 8 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Mekanisk infästning. Snabbare än bruksfogning.</td>
            </tr>
            <tr>
              <td>Plåtarbeten (bärlingar/ränndalsprofiler)</td>
              <td>6 000 kr - 14 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Plåtpriser varierar. Kontrollera aktuella priser innan du offererar.</td>
            </tr>
            <tr>
              <td>Container och avfallshantering</td>
              <td>5 000 kr - 9 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Gamla pannor är tunga. Räkna med minst två containrar.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totalt prisintervall för komplett omläggning: <span className="guide__highlight">84 000 kr -
        180 000 kr</span>. Det spannet på 96 000 kr är inte slarv — det är verklig osäkerhet.
        Enbart takstolsreparationer kan variera projektet med 30 000 kr. Allt annat är rimligt
        förutsägbart om du kan dina leverantörspriser och lagets kapacitet.
      </p>

      <h2>var takprojekt spårar ur</h2>

      <p>
        Fyra riskfaktorer dominerar takofferter:
      </p>
      <ul>
        <li>
          <strong>Den dolda takstommen.</strong> Du kan inte se takstolarnas skick från marken.
          En drönarbefarning eller inspektion från vinden hjälper, men du vet inte säkert förrän
          pannorna är borta. Om taket är från före 1990 och aldrig rörts, planera för åtminstone
          lite takstolsarbete och markera det som Hög.
        </li>
        <li>
          <strong>Byggnadsställningen.</strong> Ställningen i sig är förutsägbar. Risken är
          tiden. Om väder eller takstolsreparationer lägger till tre dagar betalar du en extra
          veckas hyra. Räkna in det i din ställningspost.
        </li>
        <li>
          <strong>Väderfönster.</strong> Ett öppet tak kan inte ligga exponerat mot regn en
          hel natt. Du behöver ett realistiskt väderfönster för rivning-och-underlagsetappen.
          På vintern är det fönstret kortare. Prissätt därefter eller acceptera risken.
        </li>
        <li>
          <strong>Volatila materialpriser.</strong> Plåt, virke och pannor har alla upplevt
          kraftiga prissvängningar senaste åren. En offert som ligger åtta veckor innan
          den accepteras kan behöva prisjustering. Sätt ett giltighetsdatum — max 30 dagar.
        </li>
      </ul>

      <h2>prissätt tak smart</h2>

      <p>
        Ställning, underlagspapp och din egen arbetskraft är alla Låg osäkerhet. Du känner till
        de siffrorna. Takstolsreparationer och plåtarbeten är där risken gömmer sig. Istället
        för att blåsa upp varje post med ett schablonpåslag, bedöm riskposterna ärligt och
        simulera intervallet. Din offert visar då kunden ett realistiskt spann — och skyddar
        din marginal på posterna som verkligen kan explodera.
      </p>

      <div className="guide__cta">
        <Link href="/sv/estimate/">[ PRISSÄTT DITT TAKPROJEKT ]</Link>
      </div>
    </div>
  )
}
