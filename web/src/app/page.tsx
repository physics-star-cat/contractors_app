import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import './page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // contractor cost estimation',
  description: 'Monte Carlo cost projections for contractors. Stop guessing your quotes — simulate thousands of scenarios to find the right price.',
  alternates: { canonical: '/' },
}

const SAMPLE_OUTPUT = `\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Conservative    \u2502 \u00A38,240   \u2502
\u2502 Recommended     \u2502 \u00A39,870   \u2502
\u2502 Safe            \u2502 \u00A311,450  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

RISK BREAKDOWN
Materials      [\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591] 30%
Duration       [\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591] 45%
Travel         [\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591] 15%`

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'lowriskquotes',
  url: 'https://lowriskquotes.com/',
  description: 'Monte Carlo cost estimation for contractors and tradespeople.',
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'lowriskquotes',
  url: 'https://lowriskquotes.com/',
}

export default function HomePage() {
  return (
    <div className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">stop guessing // start simulating</p>
        <p className="home__subtitle">monte carlo cost projections for contractors</p>
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
        <Link href="/estimate/" className="home__cta-button">[START ESTIMATE]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes uses Monte Carlo simulation to help contractors and tradespeople
          build quotes that account for real-world uncertainty. Instead of adding a flat
          contingency percentage, simulate thousands of cost scenarios to find the price
          point where you are unlikely to lose money.
        </p>
        <p>
          Works offline. No account needed. Your data never leaves your browser.
        </p>
      </section>
    </div>
  )
}
