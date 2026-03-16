import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Hoeveel marge inbouwen? 2026 // lowriskquotes',
  description:
    'Hoeveel marge moet je inbouwen in je offerte? Gids voor aannemers — risicobuffer per post in plaats van een vast percentage.',
  alternates: { canonical: '/nl/guides/hoeveel-marge-inbouwen/' },
}

export default function HoeveelMargeInbouwenPage() {
  return (
    <div className="guide">
      <h1>hoeveel marge inbouwen? risicobuffer zonder gokken</h1>

      <p>
        Elke aannemer weet dat je „iets moet opnemen voor onvoorzien". De vraag is: hoeveel?
        5%? 10%? 20%? De meeste bedrijven hanteren één vast percentage voor alles — en dan
        offreren ze te hoog (en verliezen de klus) of te laag (en verliezen geld).
      </p>
      <p>
        Het probleem is dat een vast percentage geen onderscheid maakt tussen een zekere kostenpost
        en een complete onbekende. Er is een betere manier.
      </p>

      <h2>waarom een vast percentage niet werkt</h2>

      <p>
        Stel je twee klussen voor:
      </p>

      <ASCIIBox title="Vergelijking klussen">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Klus</th>
              <th>Waarde</th>
              <th>Buffer 10%</th>
              <th>Werkelijk risico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 kamers schilderen (bekende muren)</td>
              <td>€ 5.000</td>
              <td>€ 500</td>
              <td className="guide__highlight">Zeer laag — € 150 is genoeg</td>
            </tr>
            <tr>
              <td>Badkamerrenovatie jaren '30 woning</td>
              <td>€ 22.000</td>
              <td>€ 2.200</td>
              <td className="guide__highlight">Hoog — € 4.500 is misschien niet genoeg</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        10% is te veel voor het schilderwerk en te weinig voor de badkamer. Een vast percentage
        weerspiegelt de werkelijkheid niet.
      </p>

      <h2>beoordeling per post</h2>

      <p>
        Beoordeel in plaats van één percentage het risico per post apart:
      </p>
      <ul>
        <li>
          <strong>Vaste kosten</strong> — je hebt een offerte van de leverancier. Buffer: 0%.
        </li>
        <li>
          <strong>Laag risico</strong> — je hebt dit vaak gedaan, prijzen zijn stabiel. Buffer: 3-5%.
        </li>
        <li>
          <strong>Gemiddeld risico</strong> — je kent de scope maar er zijn onbekenden (ondergrond,
          bereikbaarheid). Buffer: 10-15%.
        </li>
        <li>
          <strong>Hoog risico</strong> — eerste keer, speciaal materiaal, weerafhankelijk.
          Buffer: 20-30%.
        </li>
        <li>
          <strong>Ruwe schatting</strong> — je gokt. Buffer: 30-50% of meer.
        </li>
      </ul>

      <h2>hoe werkt dit in de praktijk</h2>

      <p>
        Een badkamerrenovatie met 8 posten. Container en afvoer is Vast — 0%. Elektra via je
        vaste onderaannemer is Laag — 5%. Glazen douchewand op maat is Hoog — 25%. De totale
        buffer die uit de posten volgt is anders dan een pauschal 10% — en trefzekerder.
      </p>

      <p>
        Dit heeft nog een voordeel: het is makkelijker uit te leggen aan de klant. In plaats
        van „ik heb 10% opgenomen voor de zekerheid" zeg je „deze post heeft een hogere buffer
        omdat we niet weten wat er achter de oude tegels zit". De klant begrijpt het en
        accepteert het.
      </p>

      <h2>bereken het automatisch</h2>

      <p>
        Voer je posten in met hun risiconiveau. Het systeem berekent een veilige buffer per
        post en toont het totale onvoorzien-bedrag — zonder gokwerk.
      </p>

      <div className="guide__cta">
        <Link href="/nl/estimate/">[ BEREKEN DE BUFFER VOOR JE KLUS ]</Link>
      </div>
    </div>
  )
}
