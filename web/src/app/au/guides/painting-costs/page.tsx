import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Painting Costs Australia 2026 // lowriskquotes',
  description:
    'Realistic painting costs for Australian tradies. Interior and exterior painting — full cost breakdown in AUD with risk ratings to help you quote painting jobs accurately.',
  alternates: { canonical: '/au/guides/painting-costs/' },
}

export default function AUPaintingCostsPage() {
  return (
    <div className="guide">
      <h1>painting costs: what aussie painters need to charge</h1>

      <p>
        Painting looks simple from the outside. Slap some Dulux on and you are done. But
        experienced painters know the real work is in the prep — filling, sanding, priming,
        masking. A job that looks like two days of rolling can easily become a week of
        preparation if the existing surfaces are rough.
      </p>
      <p>
        This page breaks down what painting work actually costs in Australia in 2026 and
        where the uncertainty sits.
      </p>

      <h2>cost ranges by job type</h2>

      <p>
        Typical rates for common painting jobs. Prices assume a standard 3-bedroom home.
        High ceilings, multi-storey exteriors, and heritage detailing push costs up.
      </p>

      <ASCIIBox title="Painting Job Type Costs (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Job Type</th>
              <th>Typical Cost</th>
              <th>Duration</th>
              <th>Risk Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full interior repaint (3-bed)</td>
              <td>$4,000 - $8,000</td>
              <td>4-7 days</td>
              <td className="guide__highlight">Low - Medium</td>
            </tr>
            <tr>
              <td>Full exterior repaint (3-bed)</td>
              <td>$5,000 - $12,000</td>
              <td>5-10 days</td>
              <td className="guide__highlight">Medium</td>
            </tr>
            <tr>
              <td>Single room repaint</td>
              <td>$500 - $1,200</td>
              <td>1-2 days</td>
              <td className="guide__highlight">Low</td>
            </tr>
            <tr>
              <td>Interior — new build (3-bed)</td>
              <td>$6,000 - $10,000</td>
              <td>5-8 days</td>
              <td className="guide__highlight">Low</td>
            </tr>
            <tr>
              <td>Deck / pergola staining</td>
              <td>$800 - $2,500</td>
              <td>1-3 days</td>
              <td className="guide__highlight">Low</td>
            </tr>
            <tr>
              <td>Fence painting / staining</td>
              <td>$500 - $2,000</td>
              <td>1-3 days</td>
              <td className="guide__highlight">Low</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: full exterior repaint of a weatherboard home</h2>

      <p>
        Standard 3-bedroom weatherboard home in suburban Australia. Existing paint is peeling
        in sections. Some timber rot around window frames. Customer wants a full prep, prime,
        and two-coat finish in Dulux Weathershield.
      </p>

      <ASCIIBox title="Exterior Repaint Breakdown (AUD)">
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
              <td>Scaffold / elevated work platform</td>
              <td>$800 - $2,000</td>
              <td className="guide__highlight">Low</td>
              <td>Get a fixed quote. Two-storey = more scaffold.</td>
            </tr>
            <tr>
              <td>Pressure washing</td>
              <td>$300 - $600</td>
              <td className="guide__highlight">Low</td>
              <td>Standard prep. Allow drying time.</td>
            </tr>
            <tr>
              <td>Scraping, sanding &amp; prep</td>
              <td>$1,000 - $2,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>The big variable. Peeling paint = much more prep time.</td>
            </tr>
            <tr>
              <td>Timber repairs &amp; filling</td>
              <td>$300 - $1,500</td>
              <td className="guide__highlight">High</td>
              <td>Rotten boards, window sills, fascia. Cannot assess until you start.</td>
            </tr>
            <tr>
              <td>Lead paint testing / management</td>
              <td>$0 - $800</td>
              <td className="guide__highlight">High</td>
              <td>Pre-1970 homes likely contain lead paint. Testing mandatory.</td>
            </tr>
            <tr>
              <td>Primer</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Low</td>
              <td>Zinsser or Dulux prep coat. Bare timber needs more.</td>
            </tr>
            <tr>
              <td>Paint supply (2 coats)</td>
              <td>$600 - $1,000</td>
              <td className="guide__highlight">Low</td>
              <td>Dulux Weathershield or similar. 15-20 litres typical for a 3-bed.</td>
            </tr>
            <tr>
              <td>Labour — application (2 coats)</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Brush and roll. Spray = faster but more masking.</td>
            </tr>
            <tr>
              <td>Trim, windows &amp; detail work</td>
              <td>$500 - $1,200</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Cutting in around windows and trim. Fiddly but predictable.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a full exterior repaint: <span className="guide__highlight">$5,900 -
        $13,800</span>. The prep work and timber repairs are the biggest swing factors. A house
        in good condition with minimal peeling could come in at $6,000. A house with extensive
        rot and lead paint issues could easily hit $14,000.
      </p>

      <h2>where painting jobs go wrong</h2>

      <ul>
        <li>
          <strong>Underestimating prep.</strong> The number one mistake. You look at a house
          from the road and think &quot;a week.&quot; Then you get up on the scaffold and find peeling
          paint everywhere, timber rot in the eaves, and three layers of old paint that need
          scraping back. Always inspect from scaffold height before quoting, or mark prep as
          High uncertainty.
        </li>
        <li>
          <strong>Lead paint.</strong> Any home built before 1970 in Australia is likely to have
          lead paint. You are legally required to manage it safely. This means testing, proper
          containment, and potentially licensed removal. Do not ignore this — the fines are
          serious.
        </li>
        <li>
          <strong>Weather.</strong> Exterior painting needs dry weather above 10 degrees with
          low humidity. In southern states, your painting season is shorter. A week of rain
          mid-job means a week of lost time. Factor weather into your duration estimate.
        </li>
        <li>
          <strong>Colour changes.</strong> Going from a dark colour to a light one (or vice
          versa) may need three coats instead of two. Confirm the colour scheme early and
          adjust your paint quantity and labour accordingly.
        </li>
      </ul>

      <h2>quoting painting jobs smarter</h2>

      <p>
        The paint supply and application labour are Low uncertainty — you know those numbers.
        The prep, timber repairs, and lead paint management are where the risk hides. Rate
        each item honestly, simulate the range, and quote at P80. Your customer gets a
        realistic price, and you protect your margin on the items that actually blow up.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR PAINTING JOB ]</Link>
      </div>
    </div>
  )
}
