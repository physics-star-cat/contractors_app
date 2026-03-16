import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'painting and decorating costs // lowriskquotes',
  description:
    'UK painting and decorating costs for contractors. Interior and exterior rates, risk factors like prep work and wallpaper removal, plus a worked example for a full house interior.',
  alternates: { canonical: '/guides/painting-and-decorating-costs/' },
}

export default function PaintingAndDecoratingCostsPage() {
  return (
    <div className="guide">
      <h1>painting and decorating costs: where the margin really sits</h1>

      <p>
        Painting looks like the simple end of the trade. It is not. The paint goes on fast — it
        is everything before the paint that eats the budget. Stripping wallpaper that has been
        on since 1985. Filling cracks that keep coming back. Prepping woodwork that should have
        been replaced ten years ago.
      </p>
      <p>
        Here is how the costs actually break down in 2026 and where jobs go sideways.
      </p>

      <h2>interior vs exterior rates</h2>

      <ASCIIBox title="Painting & Decorating Rates">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Work Type</th>
              <th>Rate</th>
              <th>Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interior — per room (standard)</td>
              <td>£250 - £500</td>
              <td>Walls, ceiling, woodwork. Light prep.</td>
            </tr>
            <tr>
              <td>Interior — per sqm (walls only)</td>
              <td>£8 - £18</td>
              <td>Prep, mist coat, 2 coats emulsion</td>
            </tr>
            <tr>
              <td>Exterior — per sqm</td>
              <td>£15 - £35</td>
              <td>Scaffold, prep, masonry paint</td>
            </tr>
            <tr>
              <td>Woodwork — per linear metre</td>
              <td>£8 - £15</td>
              <td>Skirting, architrave, door frames</td>
            </tr>
            <tr>
              <td>Front door (both sides)</td>
              <td>£80 - £150</td>
              <td>Sand, prime, 2 coats gloss or satin</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Per-room pricing works for standard boxes. Once rooms get large, tall, or complicated,
        switch to per-sqm and price the extras separately. You will not lose money that way.
      </p>

      <h2>risk factors that blow the budget</h2>

      <ul>
        <li>
          <strong>Prep work unknowns.</strong> A room that looks ready to paint rarely is. Hairline
          cracks, flaking paint, uneven filler from a previous bodge job. Budget 30-50% of your
          time on prep for older properties. For new builds, it is more like 15%.
        </li>
        <li>
          <strong>Wallpaper removal.</strong> One layer of paste-the-wall vinyl comes off in
          minutes. Four layers of woodchip over lining paper on plaster? That is a full day per
          room. Add £100-£250 per room if there is any doubt about what is underneath.
        </li>
        <li>
          <strong>High ceilings and stairwells.</strong> Anything over 3m needs a tower or
          platform. Stairwells are the worst — awkward angles, slow going, safety gear. Add
          £150-£400 for access equipment and the extra time.
        </li>
        <li>
          <strong>Lead paint.</strong> Pre-1960s properties may have lead paint on woodwork.
          You cannot just sand it. Proper containment and disposal adds cost and time. If you
          suspect lead, test it. The fine for getting it wrong is not worth the shortcut.
        </li>
      </ul>

      <h2>worked example: full house interior (3-bed semi)</h2>

      <p>
        Standard 3-bed semi. All rooms painted — walls, ceilings, woodwork throughout. Some
        wallpaper removal in the lounge and hallway. No exterior work.
      </p>

      <ASCIIBox title="Full House Interior Breakdown">
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
              <td>Wallpaper stripping (2 rooms)</td>
              <td>£200 - £500</td>
              <td className="guide__highlight">High</td>
              <td>Unknown layers. Could be quick, could be brutal.</td>
            </tr>
            <tr>
              <td>Prep &amp; filling (whole house)</td>
              <td>£400 - £800</td>
              <td className="guide__highlight">Medium</td>
              <td>Cracks, holes, sanding woodwork throughout</td>
            </tr>
            <tr>
              <td>Ceilings — mist &amp; 2 coats (7 rooms)</td>
              <td>£500 - £900</td>
              <td className="guide__highlight">Low</td>
              <td>Straightforward if plaster is sound</td>
            </tr>
            <tr>
              <td>Walls — 2 coats emulsion (7 rooms)</td>
              <td>£900 - £1,600</td>
              <td className="guide__highlight">Low</td>
              <td>Standard coverage. Dark-to-light needs extra coat.</td>
            </tr>
            <tr>
              <td>Woodwork — gloss/satin throughout</td>
              <td>£600 - £1,100</td>
              <td className="guide__highlight">Medium</td>
              <td>Doors, skirting, architrave, window frames</td>
            </tr>
            <tr>
              <td>Stairwell &amp; landing</td>
              <td>£350 - £600</td>
              <td className="guide__highlight">Medium</td>
              <td>Access adds time. Tower hire £80-£150.</td>
            </tr>
            <tr>
              <td>Materials (paint, filler, sheets)</td>
              <td>£400 - £600</td>
              <td className="guide__highlight">Low</td>
              <td>Trade paint. Customer choice adds cost.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range: <span className="guide__highlight">£3,350 - £6,100</span>. The low end is
        a house in decent nick with minimal prep. The high end is older property with wallpaper
        everywhere, dodgy woodwork, and a stairwell that needs a tower for three days.
      </p>

      <h2>quoting decorating work smarter</h2>

      <p>
        The biggest mistake on decorating quotes is underpricing prep. The paint itself is the
        easy part. Rate your wallpaper stripping as High uncertainty if you have not seen behind
        it. Rate your ceilings as Low if the plaster is sound. Let each line item carry its own
        risk instead of slapping 10% on top and hoping for the best.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR DECORATING JOB ]</Link>
      </div>
    </div>
  )
}
