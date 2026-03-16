import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Fencing Costs Australia 2026 // lowriskquotes',
  description:
    'Australian fencing costs per metre for Colorbond, timber, pool fencing, and retaining walls. Real tradie pricing with risk ratings and council regulation tips.',
  alternates: { canonical: '/au/guides/fencing-costs/' },
}

export default function AUFencingCostsPage() {
  return (
    <div className="guide">
      <h1>fencing costs: per-metre pricing for australian tradies</h1>

      <p>
        Fencing is steady work in Australia — new builds, replacements after storms, pool
        compliance, and boundary disputes that end with someone finally getting a proper fence.
        The work itself is usually straightforward, but the costs vary wildly depending on
        material, terrain, and how involved the council gets.
      </p>
      <p>
        This guide covers real fencing costs per metre across Australia in 2026, including the
        tricky bits like sloping blocks, pool fencing compliance, and retaining walls that
        blow out the budget.
      </p>

      <h2>typical cost per metre</h2>

      <p>
        These are supply-and-install costs per lineal metre for standard 1.8m high boundary
        fencing. Pool fencing and retaining walls are priced separately.
      </p>

      <ASCIIBox title="Fencing Cost Per Metre (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Fence Type</th>
              <th>Cost/Metre</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Colorbond (standard)</td>
              <td>$75 - $120</td>
              <td className="guide__highlight">Low</td>
              <td>Most common in Australia. BlueScope steel. Minimal maintenance.</td>
            </tr>
            <tr>
              <td>Colorbond (premium colours)</td>
              <td>$90 - $140</td>
              <td className="guide__highlight">Low</td>
              <td>Matt finish and newer colours cost more. Check lead times on less common options.</td>
            </tr>
            <tr>
              <td>Timber paling</td>
              <td>$60 - $100</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Treated pine or hardwood. Cheaper upfront but needs maintenance. Capping rail recommended.</td>
            </tr>
            <tr>
              <td>Timber slat (feature)</td>
              <td>$120 - $250</td>
              <td className="guide__highlight">Medium</td>
              <td>Merbau, spotted gum, or hardwood. Labour-intensive. Popular for front boundaries.</td>
            </tr>
            <tr>
              <td>Pool fencing (glass)</td>
              <td>$300 - $600</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Frameless glass. Must comply with AS 1926. Council inspection required.</td>
            </tr>
            <tr>
              <td>Pool fencing (aluminium)</td>
              <td>$100 - $200</td>
              <td className="guide__highlight">Low</td>
              <td>Tubular aluminium. Must meet AS 1926 gap and height requirements.</td>
            </tr>
            <tr>
              <td>Retaining wall (timber sleepers)</td>
              <td>$150 - $350</td>
              <td className="guide__highlight">High</td>
              <td>Over 600mm high usually needs engineer&apos;s design. Drainage critical.</td>
            </tr>
            <tr>
              <td>Retaining wall (concrete block)</td>
              <td>$200 - $500</td>
              <td className="guide__highlight">High</td>
              <td>Structural. Engineer required over 600mm in most states. Add drainage and waterproofing.</td>
            </tr>
            <tr>
              <td>Old fence removal</td>
              <td>$15 - $30</td>
              <td className="guide__highlight">Low</td>
              <td>Per metre. Includes disposal. Asbestos sheeting in older fences = specialist removal.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        A typical 40-metre boundary fence in Colorbond runs <span className="guide__highlight">$3,000
        - $4,800</span> installed. Add a gate, step the fence on a slope, or hit rock when
        digging post holes and you are quickly above that range.
      </p>

      <h2>where fencing jobs go wrong</h2>

      <ul>
        <li>
          <strong>Sloping blocks.</strong> Stepped fencing on a slope takes significantly more
          time and materials than a flat run. Each step needs a cut panel or raked section. Price
          per metre goes up 20-40% on a decent slope. Always inspect the site — do not quote
          from a photo.
        </li>
        <li>
          <strong>Rocky ground.</strong> If you hit rock or heavy clay at post-hole depth, your
          labour time doubles. In sandstone areas around Sydney or basalt in Melbourne, factor
          this in or mark it as High uncertainty.
        </li>
        <li>
          <strong>Pool fencing compliance.</strong> Pool fencing in Australia must meet AS 1926.
          Council will inspect. Non-compliant gaps, self-closing gate failures, or climbable
          objects within 900mm will fail inspection. Rework is expensive and embarrassing. Know
          the standard inside out before you quote.
        </li>
        <li>
          <strong>Shared boundary disputes.</strong> Under the Dividing Fences Act (varies by
          state), neighbours generally share costs equally for a standard boundary fence. But
          what counts as standard is debatable. Sort this out before you start — not after you
          have installed a $250/metre hardwood slat fence your client&apos;s neighbour refuses to
          pay half for.
        </li>
      </ul>

      <h2>quoting fencing smarter</h2>

      <p>
        Fencing looks simple on paper — measure the run, price per metre, done. But the
        variables that blow out fencing jobs are all site-specific. Rocky ground, slopes,
        existing trees, retaining requirements. Quote each section of the fence separately and
        rate the uncertainty on each. A flat 20-metre run on clear ground is Certain. The
        6-metre section along the steep side boundary with sandstone at 300mm deep is a Wild
        Guess until you dig the first hole.
      </p>

      <div className="guide__cta">
        <Link href="/au/estimate/">[ ESTIMATE YOUR FENCING JOB ]</Link>
      </div>
    </div>
  )
}
