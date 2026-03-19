import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // tradie cost estimation Australia',
  description: 'Monte Carlo cost projections for Australian tradies. Stop guessing your quotes — simulate thousands of scenarios to find the right price in AUD.',
  alternates: { canonical: '/au/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬──────────┐
│ Conservative    │ $12,340  │
│ Recommended     │ $14,810  │
│ Safe            │ $17,180  │
└────────────────┴──────────┘

RISK BREAKDOWN
Materials      [██████░░░░░░░░░░░░░░] 30%
Duration       [█████████░░░░░░░░░░░] 45%
Travel         [███░░░░░░░░░░░░░░░░░] 15%`

export default function AUHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">stop guessing // start simulating</p>
        <p className="home__subtitle">monte carlo cost projections for australian tradies</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="How it works">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Enter your line items, duration, and travel with uncertainty levels</div>
            <div className="home__step"><span className="home__step-num">[2]</span> Monte Carlo simulation runs 10,000 cost scenarios</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Get a statistically safe quote — not a guess</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Example output">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/au/estimate/" className="home__cta-button">[START ESTIMATE]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes uses Monte Carlo simulation to help Australian tradies and
          tradespeople build quotes that account for real-world uncertainty. Instead of
          adding a flat contingency percentage, simulate thousands of cost scenarios to
          find the price point where you are unlikely to lose money.
        </p>
        <p>
          All prices in AUD. Built for the Australian construction market — Colorbond
          roofing, besser block walls, exposed aggregate driveways, and everything in
          between. Works offline. No account needed. Your data never leaves your browser.
        </p>
      </section>
    </div>
  )
}
