import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Kostnad badrumsrenovering Sverige 2026 // lowriskquotes',
  description:
    'Realistiska kostnader för badrumsrenovering för hantverkare i Sverige. Post-för-post-uppdelning med risknivåer för att prissätta dina projekt utan att förlora pengar.',
  alternates: { canonical: '/sv/guides/badrumsrenovering-kostnad/' },
}

export default function BadrumsrenoveringKostnadPage() {
  return (
    <div className="guide">
      <h1>kostnad för badrumsrenovering: vad hantverkare verkligen behöver veta</h1>

      <p>
        Badrum är bröd och smör för många hantverkare. Det är också där mycket pengar lämnas
        på bordet. Omfattningen verkar enkel — rivning, nytt rör, kakel, montering. Men dolda
        kostnader ackumuleras snabbt: ruttna golvbjälkar bakom badkaret, asbest i det gamla
        kakelfixet, en kund som byter kakel tre veckor efter start.
      </p>
      <p>
        Den här sidan bryter ner de verkliga kostnaderna för badrumsrenovering i Sverige 2026
        och visar var risken finns på varje post.
      </p>

      <h2>typisk kostnadsfördelning</h2>

      <p>
        Här är kostnaderna för en mellanklass badrumsrenovering i ett standardbadrum i Sverige
        (cirka 5 till 6 m²). Budget- och lyxprojekt hamnar på vardera sidan av dessa belopp.
      </p>

      <ASCIIBox title="Kostnadsfördelning badrum">
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
              <td>5 000 kr - 10 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Beror på vad du hittar bakom väggarna</td>
            </tr>
            <tr>
              <td>VVS</td>
              <td>10 000 kr - 18 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Flytta avlopp = dyrare. Samma placering = billigare.</td>
            </tr>
            <tr>
              <td>El</td>
              <td>5 000 kr - 10 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Standardinstallation. Golvvärme lägger till 4 000 kr+.</td>
            </tr>
            <tr>
              <td>Kakel väggar och golv</td>
              <td>15 000 kr - 30 000 kr</td>
              <td className="guide__highlight">Låg - Medel</td>
              <td>Storformat = fler skärningar och spill</td>
            </tr>
            <tr>
              <td>Sanitetsprodukter</td>
              <td>8 000 kr - 25 000 kr</td>
              <td className="guide__highlight">Medel</td>
              <td>Kundlevererade varor = högre förseningsrisk</td>
            </tr>
            <tr>
              <td>Duschvägg</td>
              <td>4 000 kr - 22 000 kr</td>
              <td className="guide__highlight">Hög</td>
              <td>Standard från butik = Låg. Specialglas = Hög.</td>
            </tr>
            <tr>
              <td>Tätskikt och gipsskivor</td>
              <td>4 000 kr - 8 000 kr</td>
              <td className="guide__highlight">Låg</td>
              <td>Branschstandard. Kräver godkänd behörighet.</td>
            </tr>
            <tr>
              <td>Container och avfallshantering</td>
              <td>3 000 kr - 5 000 kr</td>
              <td className="guide__highlight">Säker</td>
              <td>Begär fast pris i förväg</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Totalt prisintervall för ett mellanklass badrum: <span className="guide__highlight">54 000 kr -
        128 000 kr</span>. Det stora spannet beror framför allt på kundens val av inredning och
        vad som döljer sig bakom det gamla kaklet.
      </p>

      <h2>var badrum spårar ur</h2>

      <p>
        De största budgetöverskridandena på badrum kommer från tre källor:
      </p>
      <ul>
        <li>
          <strong>Dolda skador.</strong> Ruttna bjälkar, fukt i väggarna, gamla blyavloppsrör som
          måste bytas. Du vet inte förrän du rivit. Om det finns minsta chans till problem bakom
          konstruktionen, markera dessa poster som Hög osäkerhet.
        </li>
        <li>
          <strong>Kundändringar.</strong> De såg något på Instagram. Kaklet de ville ha är slut.
          De vill flytta toaletten till andra väggen. Varje ändring under projektets gång kostar
          tid och pengar. Prissätt sanitetsprodukter som minst Medel om inte kunden redan köpt allt.
        </li>
        <li>
          <strong>Specialbeställningar.</strong> Specialbeställda duschväggar, icke-standardhandfat,
          importerat kakel med sex veckors leveranstid. Det är Hög eller Vild gissning-territorium.
          Om det är specialtillverkat, utgå från att något inte passar vid första försöket.
        </li>
      </ul>

      <h2>prissätt badrum smart</h2>

      <p>
        Istället för att lägga på ett schablonmässigt påslag på 10% på din badrumsoffert,
        bedöm varje post ärligt. Containern är Säker. Din vanliga elektriker är Låg. Den
        specialbeställda duschen från en ny glasmästare är Hög. Kör allt genom en simulering
        och du får en offert som täcker de verkliga riskerna — inte ett procentpåslag på känsla.
      </p>

      <div className="guide__cta">
        <Link href="/sv/estimate/">[ PRISSÄTT DITT BADRUM ]</Link>
      </div>
    </div>
  )
}
