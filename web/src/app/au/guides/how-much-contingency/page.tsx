import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'How Much Contingency Should a Tradie Add? // lowriskquotes',
  description:
    'How much contingency should Australian tradies add to their quotes? Why flat percentages fail and how risk-weighted contingency protects your margin. AUD examples.',
  alternates: { canonical: '/au/guides/how-much-contingency/' },
}

export default function AUHowMuchContingencyPage() {
  return (
    <div className="guide">
      <h1>how much contingency should you add to a quote?</h1>

      <p>
        Ask ten tradies and you will get ten different answers. &quot;I always add 10%.&quot; &quot;15% on
        renos, 10% on new builds.&quot; &quot;Depends on the customer.&quot; The truth is that a flat
        percentage contingency is a guess — and it is usually wrong. Sometimes it is too much,
        pricing you out of the job. Sometimes it is nowhere near enough, and you end up
        working for free.
      </p>
      <p>
        This guide explains why flat contingency fails and how to calculate a contingency
        that actually reflects the risk on your specific job.
      </p>

      <h2>why flat contingency does not work</h2>

      <p>
        Consider two jobs, both with a base estimate of $20,000:
      </p>

      <ASCIIBox title="Same Base Cost, Different Risk">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Job</th>
              <th>Description</th>
              <th>Risk Profile</th>
              <th>Needs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Job A</td>
              <td>Bathroom reno — standard fixtures from Bunnings, your usual plumber and sparky, no structural work</td>
              <td className="guide__highlight">Mostly Low</td>
              <td>~5-8% buffer</td>
            </tr>
            <tr>
              <td>Job B</td>
              <td>Bathroom reno — bespoke imported tiles, new fabricator for the shower screen, suspected asbestos, no site survey</td>
              <td className="guide__highlight">Mostly High</td>
              <td>~18-25% buffer</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        If you add a flat 10% to both, you are overpricing Job A (and might lose it to a
        cheaper quote) while underpricing Job B (and will almost certainly lose money). The
        right contingency depends on the specific risks in the specific job.
      </p>

      <h2>what the numbers actually look like</h2>

      <p>
        When you run a Monte Carlo simulation on jobs with different risk profiles, the
        contingency needed varies dramatically:
      </p>

      <ASCIIBox title="Risk-Weighted Contingency (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Risk Profile</th>
              <th>Base Estimate</th>
              <th>P80 Quote</th>
              <th>Effective Contingency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>All Certain/Low items</td>
              <td>$20,000</td>
              <td>$21,200</td>
              <td className="guide__highlight">6%</td>
            </tr>
            <tr>
              <td>Mix of Low/Medium items</td>
              <td>$20,000</td>
              <td>$22,400</td>
              <td className="guide__highlight">12%</td>
            </tr>
            <tr>
              <td>Mix of Medium/High items</td>
              <td>$20,000</td>
              <td>$24,000</td>
              <td className="guide__highlight">20%</td>
            </tr>
            <tr>
              <td>Mostly High/Wild Guess</td>
              <td>$20,000</td>
              <td>$26,800</td>
              <td className="guide__highlight">34%</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        The difference between 6% and 34% on a $20,000 job is $5,600. That is the difference
        between a healthy profit and a significant loss. A flat 10% would have been wrong in
        every single one of these scenarios.
      </p>

      <h2>real-world AUD examples</h2>

      <ASCIIBox title="Example 1: Deck Build">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Merbau deck, 25 sqm, standard design. Materials from your regular timber yard.
          Your usual chippy doing the labour. Council-approved plans already in hand.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Base estimate: <span className="guide__highlight">$12,000</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Risk profile: Mostly Low with one Medium item (timber prices)
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          Recommended quote (P80): <span className="guide__highlight">$13,100</span> — about 9% contingency
        </p>
      </ASCIIBox>

      <ASCIIBox title="Example 2: Full Bathroom Reno">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Full strip-out and refit. Imported tiles, custom frameless shower screen from a new
          supplier, suspected asbestos in old adhesive. Customer has not finalised fixtures.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Base estimate: <span className="guide__highlight">$18,000</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Risk profile: Mix of Medium and High items
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          Recommended quote (P80): <span className="guide__highlight">$21,800</span> — about 21% contingency
        </p>
      </ASCIIBox>

      <ASCIIBox title="Example 3: Granny Flat Build">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          60 sqm granny flat. Council DA not yet approved. Soil test not done. First time
          working with this drafter. Sewer connection location unknown.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Base estimate: <span className="guide__highlight">$95,000</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Risk profile: Multiple High and Wild Guess items
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          Recommended quote (P80): <span className="guide__highlight">$121,600</span> — about 28% contingency
        </p>
      </ASCIIBox>

      <h2>how to calculate your contingency</h2>

      <ol>
        <li>
          List every line item in your quote.
        </li>
        <li>
          For each one, honestly assess how confident you are in that number. Have you got
          a written quote? That is Certain. Are you guessing? That is High or Wild Guess.
        </li>
        <li>
          Run the numbers through a Monte Carlo simulation.
        </li>
        <li>
          The difference between your base estimate and the P80 result is your risk-weighted
          contingency. It is different for every job because every job has different risks.
        </li>
      </ol>

      <p>
        This takes about five minutes. It could save you thousands of dollars on every job.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ CALCULATE YOUR CONTINGENCY ]</Link>
      </div>
    </div>
  )
}
