import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Deck Building Costs Canada 2026 // lowriskquotes',
  description:
    'Realistic deck building costs for Canadian contractors in CAD. Covers pressure-treated, cedar, and composite decking with frost depth footings and permit requirements by province.',
  alternates: { canonical: '/ca/guides/deck-building-costs/' },
}

export default function DeckBuildingCostsPageCA() {
  return (
    <div className="guide">
      <h1>deck building costs: what Canadian contractors actually need to know</h1>

      <p>
        Decks are seasonal gold for Canadian contractors. Homeowners start calling in March,
        want it done by Victoria Day, and every neighbour who sees the finished product
        wants one too. But decks have their own cost pitfalls — frost depth requirements
        that vary wildly by province, lumber prices that shift quarterly, and customers
        who underestimate how much a good deck actually costs.
      </p>
      <p>
        This page breaks down real deck building costs in Canada for 2026 and shows you
        where the risk sits on each line item. All prices in CAD.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are mid-range costs for a standard residential deck (roughly 14 x 4 metres,
        or about 55 square metres). Prices vary by region — lumber is generally cheaper in
        BC and the Prairies, while labour rates run higher in the GTA and Metro Vancouver.
      </p>

      <ASCIIBox title="Deck Building Cost Breakdown (CAD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost Range</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Footings (sonotubes, concrete)</td>
              <td>$1,200 - $3,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Frost depth: 1.2m Ontario, up to 1.8m in the Prairies</td>
            </tr>
            <tr>
              <td>Framing (beam, joists, ledger)</td>
              <td>$2,000 - $4,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Pressure-treated SPF. Engineered beams for longer spans.</td>
            </tr>
            <tr>
              <td>Decking — pressure-treated</td>
              <td>$1,800 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>$4 - $7/sq ft installed. Most budget-friendly option.</td>
            </tr>
            <tr>
              <td>Decking — cedar</td>
              <td>$3,000 - $5,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>$7 - $12/sq ft installed. Western red cedar preferred.</td>
            </tr>
            <tr>
              <td>Decking — composite</td>
              <td>$4,500 - $8,000</td>
              <td className="guide__highlight">Low</td>
              <td>$10 - $16/sq ft installed. Higher material, lower maintenance.</td>
            </tr>
            <tr>
              <td>Railings &amp; stairs</td>
              <td>$1,500 - $4,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Aluminium or glass railings push costs up significantly</td>
            </tr>
            <tr>
              <td>Permits &amp; engineering</td>
              <td>$300 - $1,200</td>
              <td className="guide__highlight">Certain</td>
              <td>Required in most municipalities for attached decks</td>
            </tr>
            <tr>
              <td>Demolition of old deck</td>
              <td>$800 - $2,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Disposal fees vary. Check for lead paint on older decks.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a mid-spec deck: <span className="guide__highlight">$10,000 -
        $30,000</span>. The material choice is the single biggest cost driver. A pressure-treated
        deck at the low end costs roughly a third of a premium composite build. Add HST/GST
        on top depending on your province.
      </p>

      <h2>frost depth and footings: the Canadian factor</h2>

      <p>
        This is where Canadian deck builds diverge from everything you read on American
        websites. Your footings must extend below the frost line, and that depth varies
        dramatically across the country. In southern Ontario it is typically 1.2 metres.
        In Winnipeg it is 1.5 metres. In Edmonton and Saskatoon it can reach 1.8 metres.
        Helical piles are an increasingly popular alternative to sonotubes — they are faster
        to install and work well in clay soils, but they cost more per footing.
      </p>
      <p>
        The Ontario Building Code (OBC) and the National Building Code of Canada (NBCC) both
        specify minimum footing requirements. If you are building in a municipality that has
        adopted the NBCC with local amendments, check the specific frost depth for your area.
        Getting this wrong means the deck heaves, and you are back to fix it on your own dime.
      </p>

      <h2>where deck jobs go wrong</h2>

      <ul>
        <li>
          <strong>Ledger board failures.</strong> The connection between the deck and the house
          is the most critical structural detail. Lag bolts into the rim joist with proper
          flashing is the minimum. If the house has a brick veneer, you cannot attach to the
          brick — you need to go through to the framing. This catches a surprising number
          of builders.
        </li>
        <li>
          <strong>Not accounting for grade changes.</strong> Sloped lots mean taller posts,
          more bracing, and potentially engineered drawings. A deck that is 600mm off the
          ground on one side and 2.4 metres on the other is a completely different build.
          Quote accordingly.
        </li>
        <li>
          <strong>Permit surprises.</strong> Many municipalities require permits for any deck
          over 600mm above grade or attached to the house. Some require engineered drawings
          for decks over a certain size. Skipping the permit is not worth the risk — it
          becomes the homeowner&apos;s problem at resale and your problem if something fails.
        </li>
      </ul>

      <h2>quoting decks smarter</h2>

      <p>
        Decks look simple but the cost variables are real. Footing conditions, material choice,
        and site access all move the number. Instead of guessing at a contingency percentage,
        rate each line item honestly — footings on a rocky site are High risk, composite
        decking from a reliable supplier is Low. Build your quote from those individual
        assessments and you will land closer to reality every time.
      </p>

      <div className="guide__cta">
        <Link href="/ca/estimate/">[ ESTIMATE YOUR DECK JOB ]</Link>
      </div>
    </div>
  )
}
