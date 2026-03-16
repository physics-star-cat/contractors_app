import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Kostnad köksrenovering Sverige 2026 // lowriskquotes',
  description:
    'Realistiska kostnader för köksrenovering för hantverkare i Sverige. Komplett post-för-post-uppdelning med risknivåer för att prissätta dina kök med precision.',
  alternates: { canonical: '/sv/guides/koksrenovering-kostnad/' },
}

export default function KoksrenoveringKostnadPage() {
  return (
    <div className="guide">
      <h1>kostnad för köksrenovering: en hantverkares uppdelning</h1>

      <p>
        Kök är högt värderade projekt med många yrkesgrupper inblandade. VVS, el, gas,
        snickeri, bänkskivor, kakel, golv, vitvaror — enbart samordningen kan äta upp din
        marginal om du inte prissatt korrekt. Här är vad kök verkligen kostar i Sverige 2026
        och var riskerna döljer sig.
      </p>

      <h2>typisk kostnadsfördelning</h2>

      <p>
        Mellanklass köksrenovering i ett standardhus i Sverige. Detta förutsätter en komplett
        rivning och nyinstallation, inte bara byte av luckor.
      </p>

      <ASCIIBox title="Kostnadsfördelning kök">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Prisintervall</th>
              <th>Risknivå</th>
              <th>Anteckningar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rivning och bortforsling</td>
              <td>6 000 kr - 12 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Förutsägbart förutom vid asbestfynd</td>
            </tr>
            <tr>
              <td>Köksskåp (leverans och montering)</td>
              <td>40 000 kr - 120 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>IKEA-stommar = Låg. Snickeribyggt = Hög.</td>
            </tr>
            <tr>
              <td>Bänkskivor</td>
              <td>10 000 kr - 45 000 kr</td>
              <td className="guide__highlight">Medel - Hög</td>
              <td>Laminat = Låg. Granit/kvarts uppmätt på plats = Hög.</td>
            </tr>
            <tr>
              <td>VVS</td>
              <td>8 000 kr - 15 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Flytta diskbänken = mer kostnad och risk</td>
            </tr>
            <tr>
              <td>El</td>
              <td>10 000 kr - 20 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Uppgradering till moderna krav eller total ominstallation</td>
            </tr>
            <tr>
              <td>Kakel (stänkskydd och golv)</td>
              <td>10 000 kr - 25 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Standardkakel = säkert. Komplexa mönster = Medel.</td>
            </tr>
            <tr>
              <td>Golv</td>
              <td>5 000 kr - 15 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Trägolv eller vinyl. Undergolvspreparering kan tillkomma.</td>
            </tr>
            <tr>
              <td>Gips och målning</td>
              <td>5 000 kr - 10 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Enkelt. Äldre kök kan kräva mer förarbete.</td>
            </tr>
            <tr>
              <td>Vitvaror</td>
              <td>15 000 kr - 50 000 kr</td>
              <td className="guide__highlight">Säker - Låg</td>
              <td>Ofta köpt av kunden. Bekräfta innan du offererar.</td>
            </tr>
            <tr>
              <td>Container och avfall</td>
              <td>3 500 kr - 6 000 kr</td>
              <td className="guide__highlight">Säker</td>
              <td>Fast pris, boka i förväg</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totalt prisintervall för ett mellanklass kök: <span className="guide__highlight">112 500 kr -
        318 000 kr</span>. Det enorma spannet förklaras av kvaliteten på skåpen, bänkskivans
        material och omfattningen av planlösningsändringar.
      </p>

      <h2>var kök spränger budgeten</h2>

      <ul>
        <li>
          <strong>Bänkskivor.</strong> Stenbänkskivor mäts efter att skåpen monterats och
          tillverkas externt. Om mallen är felaktig eller stenen har en defekt väntar du veckor
          på ersättning. Markera specialbeställda bänkskivor som Hög osäkerhet.
        </li>
        <li>
          <strong>Planlösningsändringar.</strong> Att flytta diskbänken innebär att flytta avlopp
          och vatten. Att flytta spisen innebär att flytta el eller gas och ventilation. Varje
          flytt är en extra underentreprenör, en extra dag, ytterligare en felpunkt. Om kunden
          vill flytta allt måste dina VVS- och eluppskattningar vara minst Medel.
        </li>
        <li>
          <strong>Leveranstider.</strong> Specialbeställda skåp, stenbänkskivor och specifika
          vitvaror kan ta 4 till 8 veckor. Om en del är sen förskjuts hela ditt schema. Räkna
          in risk för stillestånd i din offert eller se till att kunden förstår att förseningar
          är på deras bekostnad.
        </li>
        <li>
          <strong>Utökat omfång.</strong> &quot;Eftersom du redan är här, kan du flytta det där
          elementet?&quot; &quot;Kan vi ta och putsa hela rummet?&quot; Kök lockar till sig
          utökat omfång eftersom kunder ser bygget och vill göra allt på en gång. Ha ett tydligt
          omfång skriftligt innan du börjar.
        </li>
      </ul>

      <h2>prissätt kök med tillförsikt</h2>

      <p>
        Ett kök med standardskåp, laminatbänk och inga planlösningsändringar är i princip
        ett Låg osäkerhetsprojekt. Du kan offerera nära din basuppskattning. Ett kök med
        specialsnickeri, granitbänk och total omplanering är fullt av Hög-poster. Din buffert
        måste återspegla det.
      </p>
      <p>
        Bedöm varje post ärligt, kör simuleringen och offerera på P80. Din offert blir högre
        på riskfyllda projekt och tightare på enkla projekt — det är exakt så det bör fungera.
      </p>

      <div className="guide__cta">
        <Link href="/sv/estimate/">[ PRISSÄTT DITT KÖK ]</Link>
      </div>
    </div>
  )
}
