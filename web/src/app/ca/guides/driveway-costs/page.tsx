import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Driveway Costs Canada 2026 // lowriskquotes',
  description:
    'Realistic driveway costs for Canadian contractors in CAD. Asphalt, interlock, concrete, and gravel — with freeze-thaw considerations and line-by-line risk ratings.',
  alternates: { canonical: '/ca/guides/driveway-costs/' },
}

export default function DrivewayCostsPageCA() {
  return (
    <div className="guide">
      <h1>driveway costs in Canada: what the quote actually needs to cover</h1>

      <p>
        Driveways look straightforward on paper. Dig it out, lay a base, surface it, done.
        But the margin killers hide underneath — literally. Poor drainage, frost heave, tree
        roots wrecking the base, restricted access for equipment. A driveway that looks like
        a two-day job can turn into a week if you have not scoped it properly.
      </p>
      <p>
        In Canada, freeze-thaw cycles are the enemy. A driveway that is not properly based
        and drained will heave, crack, and fail within a few years. That means deeper
        excavation, thicker granular base, and proper drainage — all of which cost more than
        in milder climates. Here is what driveways actually cost in 2026. All prices in CAD.
      </p>

      <h2>cost per square metre by surface type</h2>

      <p>
        These are supply-and-install rates for a standard residential driveway (roughly 40-50
        sqm). Prices assume reasonable access and stable subgrade.
      </p>

      <ASCIIBox title="Surface Type Costs (CAD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Surface Type</th>
              <th>Cost per sqm</th>
              <th>Lifespan</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gravel (Granular A)</td>
              <td>$40 - $80</td>
              <td>5-10 years</td>
              <td>Cheapest option. Needs grading and edging. Plowing can displace it.</td>
            </tr>
            <tr>
              <td>Asphalt</td>
              <td>$65 - $120</td>
              <td>15-20 years</td>
              <td>Most popular in Canada. Needs sealing every 2-3 years. Tolerates frost well.</td>
            </tr>
            <tr>
              <td>Concrete</td>
              <td>$80 - $140</td>
              <td>20-30 years</td>
              <td>Stamped adds $30-50/sqm. Must have control joints for freeze-thaw.</td>
            </tr>
            <tr>
              <td>Interlock (pavers)</td>
              <td>$100 - $180</td>
              <td>25-30 years</td>
              <td>Most labour-intensive. Herringbone costs more. Can be repaired in sections.</td>
            </tr>
            <tr>
              <td>Exposed aggregate</td>
              <td>$90 - $150</td>
              <td>20-25 years</td>
              <td>Good traction in winter. Decorative finish. Needs sealer.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: 50 sqm interlock paver driveway</h2>

      <p>
        Suburban home in Ontario. Old asphalt driveway being removed and replaced with
        interlock pavers. Municipal permit for curb cut already in place. Reasonable access
        for a skid steer.
      </p>

      <ASCIIBox title="Driveway Cost Breakdown (CAD)">
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
              <td>Excavation &amp; removal</td>
              <td>$1,200 - $2,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Depends on depth and what is underneath. Frost depth matters.</td>
            </tr>
            <tr>
              <td>Bin rental (2-3 bins)</td>
              <td>$700 - $1,300</td>
              <td className="guide__highlight">Low</td>
              <td>Book in advance. Road permit if placing on street.</td>
            </tr>
            <tr>
              <td>Granular base (Granular A + B)</td>
              <td>$1,000 - $1,800</td>
              <td className="guide__highlight">Medium</td>
              <td>Minimum 200mm compacted for freeze-thaw. Soft spots need more depth.</td>
            </tr>
            <tr>
              <td>Drainage / French drain</td>
              <td>$600 - $1,800</td>
              <td className="guide__highlight">High</td>
              <td>Critical in Canadian climate. Variable ground conditions.</td>
            </tr>
            <tr>
              <td>Paver supply (interlock)</td>
              <td>$1,800 - $3,200</td>
              <td className="guide__highlight">Low</td>
              <td>Standard pavers from Techo-Bloc, Permacon, or Unilock.</td>
            </tr>
            <tr>
              <td>Laying, levelling &amp; compacting</td>
              <td>$2,200 - $3,800</td>
              <td className="guide__highlight">Low</td>
              <td>Your labour. Herringbone takes longer than running bond.</td>
            </tr>
            <tr>
              <td>Edging &amp; soldier course</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Low</td>
              <td>Concrete edge restraint or paver border. Straightforward.</td>
            </tr>
            <tr>
              <td>Polymeric sand &amp; sealing</td>
              <td>$300 - $500</td>
              <td className="guide__highlight">Low</td>
              <td>Essential for interlock longevity. Weather-dependent application.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a 50 sqm interlock paver driveway: <span className="guide__highlight">
        $8,200 - $15,300</span>. The spread comes down to ground conditions and drainage. On
        a good site with stable subgrade, you are at the low end. Clay soil with poor drainage
        and deep frost penetration pushes you high. Add HST/GST on top.
      </p>

      <h2>where driveway jobs go wrong in Canada</h2>

      <p>
        Five things blow up driveway quotes in Canadian conditions:
      </p>
      <ul>
        <li>
          <strong>Frost heave.</strong> If the granular base is not deep enough or drainage is
          poor, frost will heave the surface within the first winter. You need a minimum of
          200mm compacted base in most Canadian zones — more in clay soil. Cutting corners here
          means callbacks.
        </li>
        <li>
          <strong>Subgrade condition.</strong> You dig out the old surface and find clay, rubble,
          or tree roots. Now you are digging deeper and bringing in more granular. That one item
          can add $1,000-$2,000 to the job. Always probe before you price.
        </li>
        <li>
          <strong>Drainage.</strong> Water that does not drain away from the driveway will
          freeze, expand, and destroy the surface. A French drain or catch basin on difficult
          ground is unpredictable. Rate it High unless you know the soil well.
        </li>
        <li>
          <strong>Season.</strong> Driveway work in Canada is seasonal. Asphalt plants close
          in late October. Interlock and concrete need above-freezing temperatures to cure
          properly. Quoting a driveway for November installation? Price the weather risk.
        </li>
        <li>
          <strong>Access and equipment.</strong> No room for a skid steer means hand-digging.
          No road access for a dump truck means wheelbarrowing. Both cost time. Price them in.
        </li>
      </ul>

      <h2>quoting driveways smarter</h2>

      <p>
        The subgrade and drainage are where uncertainty lives. Everything above ground is
        predictable — you know your paver prices, you know your laying speed. So rate those
        items Low and put the honest uncertainty on the groundworks. Feed it through a
        simulation and your quote covers the real risk instead of a blanket 15% markup.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR DRIVEWAY JOB ]</Link>
      </div>
    </div>
  )
}
