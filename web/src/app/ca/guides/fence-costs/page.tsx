import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Fence Costs Canada 2026 // lowriskquotes',
  description:
    'Realistic fence installation costs for Canadian contractors in CAD. Covers pressure-treated wood, cedar, and vinyl fencing with per-linear-foot pricing and frost heave considerations.',
  alternates: { canonical: '/ca/guides/fence-costs/' },
}

export default function FenceCostsPageCA() {
  return (
    <div className="guide">
      <h1>fence costs: what Canadian contractors actually need to know</h1>

      <p>
        Fence jobs are steady work across Canada — from new subdivisions needing privacy
        fencing to old properties where the posts have finally rotted through. The work
        itself is relatively straightforward, but the costs get tricky when you factor in
        property line disputes, municipal bylaws, rocky soil, and the reality that Canadian
        winters will test every post you set.
      </p>
      <p>
        This page breaks down real fence installation costs in Canada for 2026 and shows
        you where the risk sits on each line item. All prices in CAD.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are mid-range costs for a standard residential privacy fence (roughly 30 to
        50 linear metres, 1.8 metres tall). Prices vary by region — cedar is cheaper in BC,
        while labour rates are higher in the GTA and lower in the Atlantic provinces.
      </p>

      <ASCIIBox title="Fence Cost Breakdown (CAD)">
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
              <td>Pressure-treated wood fence</td>
              <td>$28 - $45/lin ft</td>
              <td className="guide__highlight">Low</td>
              <td>Most common. 4x4 posts, 2x4 rails, 1x6 boards.</td>
            </tr>
            <tr>
              <td>Cedar fence</td>
              <td>$40 - $65/lin ft</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Western red cedar. Naturally rot-resistant, no stain needed.</td>
            </tr>
            <tr>
              <td>Vinyl / PVC fence</td>
              <td>$45 - $75/lin ft</td>
              <td className="guide__highlight">Low</td>
              <td>Zero maintenance. Limited colour options.</td>
            </tr>
            <tr>
              <td>Chain link fence</td>
              <td>$18 - $30/lin ft</td>
              <td className="guide__highlight">Low</td>
              <td>Budget option. Common for backyards and commercial.</td>
            </tr>
            <tr>
              <td>Post holes (augered)</td>
              <td>$800 - $2,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Rocky soil or clay can double digging time</td>
            </tr>
            <tr>
              <td>Old fence removal</td>
              <td>$500 - $1,500</td>
              <td className="guide__highlight">Low</td>
              <td>Concrete footings make removal harder</td>
            </tr>
            <tr>
              <td>Gates (per gate)</td>
              <td>$300 - $900</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Wide gates for vehicle access cost more</td>
            </tr>
            <tr>
              <td>Property survey (if needed)</td>
              <td>$800 - $2,000</td>
              <td className="guide__highlight">Certain</td>
              <td>Strongly recommended. Avoids neighbour disputes.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a typical residential fence (40 linear metres): <span className="guide__highlight">$4,000 -
        $12,000</span>. Material choice and soil conditions are the biggest cost drivers.
        A pressure-treated fence on easy soil is half the cost of cedar on rocky ground.
        Add HST/GST on top depending on your province.
      </p>

      <h2>frost heave: why Canadian fences fail</h2>

      <p>
        The number one reason fences lean and fail in Canada is inadequate post depth.
        Posts need to extend below the frost line — typically 1.2 metres in southern Ontario,
        deeper on the Prairies. The standard approach is to set posts in concrete with a
        bell-shaped footing at the bottom so frost cannot grip and lift the post.
      </p>
      <p>
        Some contractors prefer gravel-set posts, arguing that concrete traps moisture and
        accelerates rot. There is merit to this in well-drained soils, but in heavy clay
        (common across much of Ontario and the Prairies), concrete footings with pressure-treated
        posts remain the most reliable method. Whichever approach you use, the post must
        sit below the frost line or it will heave within a few winters.
      </p>

      <h2>municipal bylaws and property lines</h2>

      <p>
        Nearly every Canadian municipality has fence bylaws, and they vary more than you
        might expect. Common rules include:
      </p>
      <ul>
        <li>Maximum height of 1.8 metres for backyard fences, 1.2 metres for front yards</li>
        <li>Setback requirements from the property line (often 15 to 30 centimetres)</li>
        <li>The &quot;good side&quot; facing outward toward the neighbour</li>
        <li>Restrictions on materials in heritage or conservation districts</li>
      </ul>
      <p>
        Always confirm the property line before starting. A recent survey or at minimum
        locating the iron survey pins saves enormous headaches. Building a fence 30
        centimetres onto a neighbour&apos;s property is an expensive mistake — you may have
        to tear it down and rebuild.
      </p>

      <h2>where fence jobs go wrong</h2>

      <ul>
        <li>
          <strong>Hitting rock or buried utilities.</strong> Ontario One Call (or your
          provincial equivalent) is mandatory before digging. Hitting a gas line is
          catastrophic. Hitting rock means switching from an auger to a jackhammer, and
          your labour cost doubles for those holes.
        </li>
        <li>
          <strong>Grade changes.</strong> A fence on a sloped lot requires either stepped
          panels or racked panels that follow the grade. Both add labour. Stepped is easier
          with pre-built panels; racked looks better but means building each section on site.
        </li>
        <li>
          <strong>Neighbour disputes.</strong> Shared fences mean shared costs in theory,
          but not always in practice. Make sure your customer has sorted this out before
          you start. You do not want to be caught in the middle of a property line argument.
        </li>
      </ul>

      <h2>quoting fences smarter</h2>

      <p>
        Fences are repetitive work, which makes them easier to estimate than most renovation
        types. But the per-post risk adds up across a long run. Rate your soil conditions
        honestly — easy augering in sandy soil is Low risk, heavy clay with rocks is Medium
        to High. Multiply that across 20 or 30 post holes and the variance becomes real.
        Build your quote from those individual assessments rather than a flat per-foot rate.
      </p>

      <div className="guide__cta">
        <Link href="/ca/estimate/">[ ESTIMATE YOUR FENCE JOB ]</Link>
      </div>
    </div>
  )
}
