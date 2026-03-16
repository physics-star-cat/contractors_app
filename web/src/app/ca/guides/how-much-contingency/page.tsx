import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'How Much Contingency Should a Canadian Contractor Add? // lowriskquotes',
  description:
    'Why flat contingency percentages fail Canadian contractors and how probabilistic estimation gives you a smarter buffer based on actual project risk. CAD examples included.',
  alternates: { canonical: '/ca/guides/how-much-contingency/' },
}

export default function HowMuchContingencyPageCA() {
  return (
    <div className="guide">
      <h1>how much contingency should you add to a quote?</h1>

      <p>
        Ask five contractors and you will get five different answers. 10%. 15%. 20% if the
        job looks dodgy. These numbers are not based on anything. They are traditions passed
        down from whoever taught you to quote.
      </p>
      <p>
        The problem with a flat percentage is simple: it treats every job the same. A
        straightforward like-for-like kitchen cabinet swap gets the same contingency as a
        basement underpinning in a century home with no survey. That makes no sense.
      </p>

      <h2>the flat percentage problem</h2>

      <ASCIIBox title="Same Contingency, Different Risk">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Job</th>
              <th>Base Cost</th>
              <th>10% Contingency</th>
              <th>Actual Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fence replacement (known supplier, flat yard)</td>
              <td>$3,200</td>
              <td>$320</td>
              <td className="guide__highlight">~3% needed</td>
            </tr>
            <tr>
              <td>Bathroom strip-out (century home, no survey)</td>
              <td>$12,800</td>
              <td>$1,280</td>
              <td className="guide__highlight">~18% needed</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        The fence job has $320 of contingency it does not need. The bathroom job has $1,280
        when it needs $2,300. One quote is padded. The other is dangerously thin. Both used
        the same &quot;10% rule.&quot;
      </p>

      <h2>why percentages feel safe but are not</h2>

      <p>
        A flat contingency gives you a false sense of security. You think you have covered
        yourself, so you stop thinking about risk. But the contingency has no connection to
        where the risk actually sits. It is spread evenly across items that carry wildly
        different levels of uncertainty.
      </p>
      <p>
        The bin rental does not need contingency — you have a fixed price. The custom
        cabinetry needs a lot — the shop has never made this piece before, and it has to fit
        into a space you measured once. Flat percentages ignore this completely.
      </p>

      <h2>the better approach: risk-weighted estimation</h2>

      <p>
        Instead of one percentage for the whole job, rate each line item individually:
      </p>
      <ul>
        <li>Fixed-price items with written quotes: <strong className="guide__highlight">Certain</strong> (+/- 2%)</li>
        <li>Regular supplier, standard materials: <strong className="guide__highlight">Low</strong> (+/- 8%)</li>
        <li>Subcontractor you know but who has not quoted yet: <strong className="guide__highlight">Medium</strong> (+/- 15%)</li>
        <li>New supplier, specialist item, site unknowns: <strong className="guide__highlight">High</strong> (+/- 25%)</li>
        <li>No survey, unfamiliar scope, pure guess: <strong className="guide__highlight">Wild Guess</strong> (+/- 40%)</li>
      </ul>
      <p>
        When you run a simulation with these per-item risk ratings, the tool calculates your
        contingency for you. A low-risk job might need 4%. A high-risk job might need 22%. The
        number is specific to your job, not pulled from thin air.
      </p>

      <h2>what this means in practice</h2>

      <p>
        You stop guessing how much buffer to add. You stop worrying you have padded too much
        (and losing bids) or too little (and losing money). The buffer is calculated from the
        actual uncertainty in each line item, weighted by how much that item costs.
      </p>
      <p>
        A $500 bin rental with no uncertainty contributes almost nothing to your contingency.
        A $6,000 subcontractor quote marked as High contributes a lot. That is how risk
        actually works. Your contingency should reflect it.
      </p>
      <p>
        In Canada, this is especially important on jobs with weather risk. An outdoor job
        starting in October in Ontario carries more duration uncertainty than one starting in
        June. Your contingency should reflect the season, not just the scope.
      </p>

      {/* MiniEstimator component will be added here */}

      <div className="guide__cta">
        <Link href="/estimate/">[ CALCULATE YOUR CONTINGENCY ]</Link>
      </div>
    </div>
  )
}
