import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'about // lowriskquotes',
  description: 'How LowRiskQuotes uses Monte Carlo simulation to help contractors build safer bids.',
  alternates: { canonical: '/us/about/' },
}

export default function AboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        about lowriskquotes
      </h1>

      <ASCIIBox title="What is this">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes is a free cost estimation tool for contractors and
          anyone who needs to bid a job without underpricing it.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Instead of adding a flat contingency percentage to your bid, LowRiskQuotes
          runs a Monte Carlo simulation — thousands of randomized cost scenarios based on
          the uncertainty levels you assign to each line item, your job duration, and your
          travel. The result is a probability distribution showing what your job is likely
          to actually cost.
        </p>
      </ASCIIBox>

      <ASCIIBox title="How Monte Carlo works">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            For each item in your estimate, you tell us how uncertain you are about the
            cost (from &quot;certain&quot; at +/-2% to &quot;wild guess&quot; at +/-40%). We do the same for
            your job duration and travel time.
          </p>
          <p style={{ marginBottom: '12px' }}>
            The engine then runs 1,000 to 10,000 simulated versions of your project, each
            with randomized costs drawn from your uncertainty ranges. The simulations are
            skewed toward overages — because in the real world, projects tend to go over
            budget more often than under.
          </p>
          <p>
            The output tells you: at the 80th percentile (our recommended bid level),
            there is an 80% chance your actual costs will be lower than this number.
            That is a much safer basis for a bid than a gut feeling plus 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Your data">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Everything runs in your browser. Your estimates are saved to your device only
          (localStorage). No data is sent to any server. No account needed. No tracking
          beyond basic analytics.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/us/guides/how-to-bid-a-job/" style={{ marginRight: '16px' }}>
          [READ THE GUIDE]
        </Link>
        <Link href="/estimate/">
          [START ESTIMATING]
        </Link>
      </div>
    </div>
  )
}
