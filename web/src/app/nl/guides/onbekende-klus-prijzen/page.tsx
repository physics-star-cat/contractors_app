import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Onbekende klus prijzen 2026 // lowriskquotes',
  description:
    'Hoe prijs je een klus die je nog nooit hebt gedaan? Strategieën voor aannemers om onbekend werk veilig te offreren.',
  alternates: { canonical: '/nl/guides/onbekende-klus-prijzen/' },
}

export default function OnbekendKlusPrijzenPage() {
  return (
    <div className="guide">
      <h1>onbekende klus prijzen: hoe voorkom je verlies op werk dat je niet kent</h1>

      <p>
        Een klant belt met een klus die je nog nooit hebt gedaan. Een pergola bouwen. Een
        terras renoveren. Een schouw inbouwen. Je hebt het team, je hebt het gereedschap, je
        kunt het waarschijnlijk — maar wat moet je vragen? Hier beginnen de problemen.
      </p>
      <p>
        Onbekende klussen zijn de grootste bron van verlies voor aannemers. Niet omdat het werk
        moeilijk is, maar omdat je niet weet wat je niet weet. Dit is hoe je het veilig aanpakt.
      </p>

      <h2>strategie 1: splits op in bekende elementen</h2>

      <p>
        Elke klus bestaat uit kleinere taken. Een pergola is: puntfunderingen, staanders, balken,
        verbindingen, afwerking. Funderingen kun je prijzen. Hout zagen en monteren — ook.
        Splits het onbekende werk op in bekende onderdelen en prijs die normaal.
      </p>

      <h2>strategie 2: markeer onbekenden eerlijk</h2>

      <ASCIIBox title="Voorbeeld opsplitsing">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Jouw inschatting</th>
              <th>Risiconiveau</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Graafwerk funderingen</td>
              <td>Doe ik regelmatig</td>
              <td className="guide__highlight">Laag</td>
            </tr>
            <tr>
              <td>Houten staanders en balken</td>
              <td>Vergelijkbaar gedaan</td>
              <td className="guide__highlight">Gemiddeld</td>
            </tr>
            <tr>
              <td>Houtverbindingen</td>
              <td>Eerste keer</td>
              <td className="guide__highlight">Hoog</td>
            </tr>
            <tr>
              <td>Dakbedekking pergola</td>
              <td>Nooit gedaan</td>
              <td className="guide__highlight">Ruwe schatting</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Posten gemarkeerd als Hoog risico en Ruwe schatting krijgen een hogere buffer in de
        calculatie. Dat is eerlijk — je doet niet alsof je een prijs kent die je niet kent.
      </p>

      <h2>strategie 3: zoek informatie</h2>

      <ul>
        <li>
          <strong>Vraag collega's.</strong> Andere aannemers hebben misschien ervaring met
          vergelijkbaar werk. Eén telefoontje kan je offerte redden.
        </li>
        <li>
          <strong>Vraag prijzen bij onderaannemers.</strong> Als je iets zelf niet kunt, vraag
          een specialist om een prijs. Zijn offerte is een Vaste kostenpost in jouw calculatie.
        </li>
        <li>
          <strong>Zoek online.</strong> Bouwfora, vakgroepen, instructievideo's — ze geven je
          geen exacte prijs, maar helpen bij het inschatten van tijd en materiaal.
        </li>
      </ul>

      <h2>wanneer weigeren</h2>

      <p>
        Als na het opsplitsen het merendeel van de posten Ruwe schatting is — overweeg of je
        deze klus wilt aannemen. Beter weigeren of op uurbasis aanbieden dan een vaste prijs
        geven waar je geen vertrouwen in hebt.
      </p>

      <h2>offreer met buffer voor onbekenden</h2>

      <p>
        Voer de posten in met hun werkelijke risiconiveaus. De calculator past de buffer per
        post aan — bekende onderdelen krijgen weinig, onbekende veel.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN JE ONBEKENDE KLUS ]</Link>
      </div>
    </div>
  )
}
