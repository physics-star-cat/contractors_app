import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'How Much Contingency Should a Contractor Add? // lowriskquotes',
  description:
    'Why flat contingency percentages fail contractors and how probabilistic estimation gives you a smarter buffer based on actual project risk.',
  alternates: { canonical: '/us/guides/how-much-contingency/' },
}

export default function HowMuchContingencyPage() {
  return (
    <div className="guide">
      <h1>how much contingency should you add to a bid?</h1>

      <p>
        Ask five contractors and you will get five different answers. 10%. 15%. 20% if the
        job looks sketchy. These numbers are not based on anything. They are traditions passed
        down from whoever taught you to bid.
      </p>
      <p>
        The problem with a flat percentage is simple: it treats every job the same. A
        straightforward like-for-like kitchen cabinet swap gets the same contingency as a
        second-story addition on a home with no structural plans. That makes no sense.
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
              <td>$3,000</td>
              <td>$300</td>
              <td className="guide__highlight">~3% needed</td>
            </tr>
            <tr>
              <td>Bathroom demo (old house, no survey)</td>
              <td>$12,000</td>
              <td>$1,200</td>
              <td className="guide__highlight">~18% needed</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        The fence job has $300 of contingency it does not need. The bathroom job has $1,200
        when it needs $2,160. One bid is padded. The other is dangerously thin. Both used
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
        The dumpster rental does not need contingency — you have a fixed price. The custom
        cabinetry needs a lot — the shop has never built this piece before, and it has to fit
        into a space you measured once. Flat percentages ignore this completely.
      </p>

      <h2>the better approach: risk-weighted estimation</h2>

      <p>
        Instead of one percentage for the whole job, rate each line item individually:
      </p>
      <ul>
        <li>Fixed-price items with written quotes: <strong className="guide__highlight">Certain</strong> (+/- 2%)</li>
        <li>Regular supplier, standard materials: <strong className="guide__highlight">Low</strong> (+/- 8%)</li>
        <li>Subcontractor you know but who has not bid yet: <strong className="guide__highlight">Medium</strong> (+/- 15%)</li>
        <li>New supplier, specialty item, site unknowns: <strong className="guide__highlight">High</strong> (+/- 25%)</li>
        <li>No site visit, unfamiliar scope, pure guess: <strong className="guide__highlight">Wild Guess</strong> (+/- 40%)</li>
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
        A $400 dumpster with no uncertainty contributes almost nothing to your contingency. A
        $6,000 subcontractor bid marked as High contributes a lot. That is how risk
        actually works. Your contingency should reflect it.
      </p>

      {/* MiniEstimator component will be added here */}

      <div className="guide__cta">
        <Link href="/estimate/">[ CALCULATE YOUR CONTINGENCY ]</Link>
      </div>
    </div>
  )
}
