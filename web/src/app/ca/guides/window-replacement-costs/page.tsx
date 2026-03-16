import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Window Replacement Costs Canada 2026 // lowriskquotes',
  description:
    'Realistic window replacement costs for Canadian contractors in CAD. Covers double vs triple pane, vinyl vs fibreglass, Energy Star ratings, and rebate programs like Greener Homes.',
  alternates: { canonical: '/ca/guides/window-replacement-costs/' },
}

export default function WindowReplacementCostsPageCA() {
  return (
    <div className="guide">
      <h1>window replacement costs: what Canadian contractors actually need to know</h1>

      <p>
        Window replacement is one of the highest-demand renovation categories in Canada,
        driven by energy costs, comfort, and government rebate programmes. Canadian homeowners
        feel the difference between old single-pane or failed double-pane windows and new
        triple-pane units — both in comfort and on their heating bills. For contractors, window
        work is steady year-round and scales well, but the quoting can get complicated fast
        when you factor in frame types, glass options, and the condition of the existing openings.
      </p>
      <p>
        This page breaks down real window replacement costs in Canada for 2026 and shows you
        where the risk sits on each line item. All prices in CAD.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are mid-range costs for replacing windows in a standard Canadian home (typically
        10 to 20 windows). Prices vary by province — custom sizes and heritage homes in older
        neighbourhoods cost more. Labour is higher in the GTA and Metro Vancouver.
      </p>

      <ASCIIBox title="Window Replacement Cost Breakdown (CAD)">
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
              <td>Vinyl double-pane (per window)</td>
              <td>$500 - $900</td>
              <td className="guide__highlight">Low</td>
              <td>Standard sizes, insert installation. Most common.</td>
            </tr>
            <tr>
              <td>Vinyl triple-pane (per window)</td>
              <td>$700 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Energy Star Most Efficient. Worth it in colder zones.</td>
            </tr>
            <tr>
              <td>Fibreglass triple-pane (per window)</td>
              <td>$900 - $1,600</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Premium option. Paintable. Better thermal performance.</td>
            </tr>
            <tr>
              <td>Bay / bow window</td>
              <td>$2,500 - $5,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Structural support, flashing, interior finishing</td>
            </tr>
            <tr>
              <td>Full-frame installation (per window)</td>
              <td>$200 - $500</td>
              <td className="guide__highlight">Medium</td>
              <td>Removing old frame to studs. Required if frame is rotten.</td>
            </tr>
            <tr>
              <td>Insert / retrofit installation (per window)</td>
              <td>$100 - $250</td>
              <td className="guide__highlight">Low</td>
              <td>New window into existing frame. Faster, less disruption.</td>
            </tr>
            <tr>
              <td>Exterior capping &amp; caulking</td>
              <td>$50 - $150/window</td>
              <td className="guide__highlight">Low</td>
              <td>Aluminium capping over brick mould</td>
            </tr>
            <tr>
              <td>Interior trim &amp; finishing</td>
              <td>$75 - $200/window</td>
              <td className="guide__highlight">Low</td>
              <td>Casing, sill extension, paint. More on full-frame jobs.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a whole-house window replacement (15 windows, mid-spec): <span className="guide__highlight">$8,000 -
        $20,000</span>. The spread depends on frame material, glass configuration, and whether
        you are doing insert or full-frame installations. Add HST/GST on top depending on
        your province.
      </p>

      <h2>double pane vs triple pane: the Canadian question</h2>

      <p>
        In most of the United States, double-pane windows are standard. In Canada, the
        conversation has shifted firmly toward triple pane, especially in climate zones 6
        and above (which covers most of the country outside of southern BC and parts of
        southern Ontario). Triple-pane windows with two low-E coatings and argon or krypton
        gas fill deliver R-values of 5 to 8, compared to R-3 to R-4 for standard double pane.
      </p>
      <p>
        The upfront cost premium for triple pane is typically 25-40% more than double pane,
        but the energy savings are real — particularly in provinces with high heating costs.
        For contractors, the practical difference is weight: triple-pane units are significantly
        heavier, which affects handling and may require two installers for larger windows.
      </p>

      <h2>energy star and rebate programmes</h2>

      <p>
        Energy Star Canada rates windows by climate zone. To qualify for most rebate
        programmes, windows must meet the Energy Star rating for the zone where they are
        being installed. The federal Canada Greener Homes Grant programme (and its successors)
        has offered up to $250 per window or door, up to a maximum that has varied between
        $5,000 and $5,600 for a whole project. Provincial programmes stack on top — Ontario,
        Quebec, and BC have all offered additional incentives.
      </p>
      <p>
        For contractors, rebate programmes drive demand but also create customer expectations.
        Homeowners often underestimate the paperwork involved — pre- and post-retrofit
        EnerGuide evaluations are typically required. Being able to guide customers through
        the rebate process is a genuine competitive advantage. Make sure the windows you
        specify actually qualify before the customer counts on the rebate.
      </p>

      <h2>where window jobs go wrong</h2>

      <ul>
        <li>
          <strong>Rotten frames discovered at installation.</strong> You quote for insert
          installation, pull the old window, and find the rough opening is compromised.
          Now it is a full-frame job with potential structural repairs. If the home is older
          than 30 years, price at least a few windows as full-frame to cover this risk, or
          mark your installation line as Medium uncertainty.
        </li>
        <li>
          <strong>Custom sizes and lead times.</strong> Standard sizes ship in 2 to 4 weeks.
          Custom sizes can take 8 to 12 weeks from Canadian manufacturers. If you are ordering
          in spring (peak season), add another 2 to 4 weeks. Misquoting the lead time means
          angry customers and crews sitting idle.
        </li>
        <li>
          <strong>Improper flashing and sealing.</strong> A window can be Energy Star rated
          to the highest standard, but if the flashing and air sealing around it are poor,
          you lose most of the benefit. Use self-adhering membrane flashing on the rough
          opening, backer rod and caulk on the interior, and low-expansion spray foam in
          the shim space. This is where the quality of the installation matters more than
          the quality of the window.
        </li>
      </ul>

      <h2>quoting windows smarter</h2>

      <p>
        Window jobs have a predictable per-unit cost but the risk multiplies across a whole
        house. One rotten frame out of fifteen windows is probable — five rotten frames
        changes your project entirely. Instead of adding a blanket contingency, assess
        each opening. If you can inspect from the exterior and see intact caulking and
        no paint bubbling, mark that window as Low. If you see staining, soft wood, or
        failed sealant, mark it as Medium-High. Build your quote from those individual
        assessments and you will protect your margin without overpricing the job.
      </p>

      <div className="guide__cta">
        <Link href="/ca/estimate/">[ ESTIMATE YOUR WINDOW JOB ]</Link>
      </div>
    </div>
  )
}
