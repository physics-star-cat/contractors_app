import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

const UPDATED = '2026-10-03'
const CONTACT_URL = 'https://github.com/physics-star-cat'

export const metadata: Metadata = {
  title: 'privacy // lowriskquotes',
  description:
    'lowriskquotes privacy policy: no accounts, Google Analytics on the website, anonymous event counts only on the API and MCP server, nothing you send is stored, no data sold.',
  alternates: { canonical: '/privacy/' },
}

const p: React.CSSProperties = { fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }
const hd: React.CSSProperties = { color: 'var(--accent-amber)' }

/**
 * Privacy policy (English only). Static page, linked from the footer and
 * llms.txt. Required by the Claude connectors and ChatGPT apps directories
 * for the remote MCP server at /api/mcp/.
 */
export default function PrivacyPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        privacy policy
      </h1>

      <ASCIIBox title="Scope">
        <p style={p}>
          This policy covers the lowriskquotes website (lowriskquotes.com, all language
          versions), its public REST API (/api/) and its remote MCP server (/api/mcp/).
          <span style={hd}> Last updated {UPDATED}.</span>
        </p>
        <p style={{ ...p, marginBottom: 0 }}>
          <span style={hd}>The short version:</span> there are no accounts, we store nothing
          you type or send, we sell nothing, and the only third parties involved are Google
          Analytics and Vercel (hosting).
        </p>
      </ASCIIBox>

      <ASCIIBox title="No accounts">
        <p style={{ ...p, marginBottom: 0 }}>
          lowriskquotes has no sign-up, login, newsletter or payment. We never ask for your
          name or email address. The cost estimator on the website runs entirely in your
          browser: your line items, uncertainty levels and results are kept in your own
          device&apos;s localStorage so they survive a page refresh, and are never sent to our
          servers. Clearing your browser storage removes them completely.
        </p>
      </ASCIIBox>

      <ASCIIBox title="The website: Google Analytics">
        <p style={{ ...p, marginBottom: 0 }}>
          The website uses Google Analytics 4 (GA4), Google&apos;s standard, cookie-based
          analytics product. It tells us how many people visit, which pages they read and
          roughly where they come from, in aggregate. Google sets cookies in your browser for
          this and processes the data under its own privacy policy
          (<a href="https://policies.google.com/privacy" rel="noopener">policies.google.com/privacy</a>).
          We do not pass GA4 any identifier of our own and do not link analytics data to any
          individual. You can block GA4 with a content blocker or Google&apos;s opt-out browser
          add-on; the site works identically without it.
        </p>
      </ASCIIBox>

      <ASCIIBox title="The API and MCP server: anonymous event counts only">
        <p style={p}>
          When an AI agent or developer calls the REST API or an MCP tool
          (<code>monte_carlo_estimate</code>, <code>retirement_drawdown</code>), our code may
          send one event to GA4 via the Measurement Protocol so that we can see how much the
          API is used. That event contains exactly two things:
        </p>
        <p style={p}>
          1. the event name (which endpoint or tool was called), and<br />
          2. a random client id generated fresh for that single event.
        </p>
        <p style={p}>
          The client id is not derived from you or your request and cannot be used to join
          one call to another. We do not store IP addresses, user agents, API keys (there are
          none) or any part of the request body. The numbers you send (cost ranges, portfolio
          size, annual spending, horizon, allocation, seed) exist only in memory for the
          milliseconds it takes to run the simulation, and are then discarded. Nothing is
          written to a database or log by our code.
        </p>
        <p style={{ ...p, marginBottom: 0 }}>
          Vercel, which hosts the serverless functions, keeps short-lived request logs for
          operating the platform under its own privacy policy
          (<a href="https://vercel.com/legal/privacy-policy" rel="noopener">vercel.com/legal/privacy-policy</a>).
          We do not export or analyse those logs for anything beyond debugging an outage.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Data sources">
        <p style={{ ...p, marginBottom: 0 }}>
          None. lowriskquotes does not hold a dataset about you or anyone else. Every result,
          on the website and through the API, is computed from the inputs the caller supplies
          at that moment, using published statistical methods (triangular-distribution Monte
          Carlo for cost estimates; a real-return, annual-step Monte Carlo for retirement
          drawdown). The guide pages quote typical cost ranges from public trade sources and
          contain no personal data. Simulation output is indicative and educational only, not
          financial advice.
        </p>
      </ASCIIBox>

      <ASCIIBox title="What we do not do">
        <p style={{ ...p, marginBottom: 0 }}>
          We do not sell, rent or share personal data with anyone, because we hold none. We
          do not run advertising, retargeting or third-party tracking pixels. We do not
          profile users. The only third parties that process anything are Google (GA4) and
          Vercel (hosting), as described above.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Your rights and contact">
        <p style={{ ...p, marginBottom: 0 }}>
          Because we hold no personal data, there is nothing for us to access, correct or
          delete on request; rights over GA4 data are exercised against Google. If you believe
          this page is wrong, or have any question about it, open an issue on GitHub at{' '}
          <a href={CONTACT_URL} rel="noopener">github.com/physics-star-cat</a>. Changes to this
          policy are published here with a new &quot;last updated&quot; date.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/about/" style={{ marginRight: '16px' }}>
          [ABOUT]
        </Link>
        <a href="/api/">
          [API DOCS]
        </a>
      </div>
    </div>
  )
}
