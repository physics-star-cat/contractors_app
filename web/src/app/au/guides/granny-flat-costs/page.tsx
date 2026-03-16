import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Granny Flat Costs Australia 2026 // lowriskquotes',
  description:
    'What granny flats actually cost to build in Australia. Kit homes vs custom builds, DA requirements, connection costs, and where builders lose money.',
  alternates: { canonical: '/au/guides/granny-flat-costs/' },
}

export default function AUGrannyFlatCostsPage() {
  return (
    <div className="guide">
      <h1>granny flat costs: what builders actually spend in australia</h1>

      <p>
        Granny flats are booming in Australia. With housing affordability pressure, rental
        demand, and state governments loosening regulations, more homeowners are building
        secondary dwellings than ever. For tradies, they represent solid mid-size projects —
        but the quoting is complex because you are building a complete dwelling, not just
        renovating a room.
      </p>
      <p>
        This guide covers what granny flats genuinely cost to build in 2026, from kit homes
        through to custom-designed builds, including the service connection costs that catch
        a lot of builders out.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These figures are for a standard one-bedroom granny flat of around 50-60 square metres.
        Larger builds and premium finishes push costs well beyond these ranges.
      </p>

      <ASCIIBox title="Granny Flat Cost Breakdown (AUD)">
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
              <td>Kit flat (supply only)</td>
              <td>$40,000 - $70,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Prefab panels, flat-pack. Still needs slab, services, and fitout labour.</td>
            </tr>
            <tr>
              <td>Custom build (full)</td>
              <td>$100,000 - $180,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Architect-designed. More flexibility but more scope for cost blowout.</td>
            </tr>
            <tr>
              <td>Slab / foundations</td>
              <td>$8,000 - $18,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Waffle pod or strip footing. Soil classification (M, H, E) drives cost.</td>
            </tr>
            <tr>
              <td>Sewer connection</td>
              <td>$5,000 - $15,000</td>
              <td className="guide__highlight">High</td>
              <td>Distance to main sewer line is the variable. Sydney Water or local authority approval.</td>
            </tr>
            <tr>
              <td>Water connection</td>
              <td>$2,000 - $5,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Tap off existing main or new meter. Authority fees vary by state.</td>
            </tr>
            <tr>
              <td>Electrical connection</td>
              <td>$3,000 - $8,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Separate meter board usually required. Underground cable run from main switchboard.</td>
            </tr>
            <tr>
              <td>Council / DA fees</td>
              <td>$2,000 - $8,000</td>
              <td className="guide__highlight">Medium</td>
              <td>CDC is cheaper and faster if you qualify. Full DA takes 6-12 weeks.</td>
            </tr>
            <tr>
              <td>Kitchen fitout</td>
              <td>$5,000 - $15,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Compact kitchen. Flat-pack from Bunnings vs custom joinery is a big cost gap.</td>
            </tr>
            <tr>
              <td>Bathroom fitout</td>
              <td>$6,000 - $14,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Full bathroom with waterproofing. Compact layout reduces tiling area.</td>
            </tr>
            <tr>
              <td>Landscaping / driveway</td>
              <td>$3,000 - $10,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Council may require separate access and landscaping plans.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a complete granny flat: <span className="guide__highlight">$80,000 -
        $150,000+</span>. Kit builds with short service runs come in at the lower end. Custom
        designs on difficult sites with long sewer runs push well past $150,000. The service
        connections alone can add $10,000-$28,000 that clients often do not expect.
      </p>

      <h2>where granny flat builds go wrong</h2>

      <ul>
        <li>
          <strong>Service connection costs.</strong> This is the number one budget killer. The
          sewer connection alone can cost $15,000 if the main line is at the front of the block
          and the granny flat is at the back. Get your plumber to quote the sewer connection
          before you finalise the build price — not after.
        </li>
        <li>
          <strong>Council and DA delays.</strong> In NSW, granny flats up to 60sqm can go through
          a Complying Development Certificate (CDC) which is faster. But if your site does not
          meet the CDC criteria — flood zone, heritage area, bushfire zone, undersized block —
          you need a full DA which takes months. In Victoria, the rules differ again. Check
          state-specific regulations before you commit to a timeline.
        </li>
        <li>
          <strong>Site access.</strong> Getting materials onto a tight backyard site costs money.
          Crane lifts for trusses, bobcat access through narrow side gates, manual handling where
          a forklift cannot reach. Factor this in — it adds 5-15% to labour on constrained sites.
        </li>
        <li>
          <strong>Soil conditions.</strong> Reactive clay (H or E class sites) means deeper
          footings and a more expensive slab design. Get a soil test early. A $500 soil report
          can save you $10,000 in unexpected foundation costs.
        </li>
      </ul>

      <h2>quoting granny flats smarter</h2>

      <p>
        A granny flat is a small house. Quote it like one. Break it into slab, frame, lock-up,
        fitout, and services. Rate each stage separately. The frame package from a kit supplier
        is Low uncertainty — it is a fixed price. The sewer connection across a 30-metre
        backyard through unknown soil is High. When you simulate those ranges independently,
        you get an honest total that accounts for the real risks instead of a single number
        you are hoping covers everything.
      </p>

      <div className="guide__cta">
        <Link href="/au/estimate/">[ ESTIMATE YOUR GRANNY FLAT BUILD ]</Link>
      </div>
    </div>
  )
}
