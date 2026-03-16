import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'How to Bid a Job as a Contractor // lowriskquotes',
  description:
    'A practical guide to bidding jobs accurately. Learn why contractors underbid, how to assess risk on each line item, and how Monte Carlo simulation builds safer bids.',
  alternates: { canonical: '/us/guides/how-to-bid-a-job/' },
}

export default function HowToBidAJobPage() {
  return (
    <div className="guide">
      <h1>how to bid a job (without losing your shirt)</h1>

      <p>
        Most contractors have lost money on a job. Not because they did bad work — because
        they bid wrong. They priced based on best-case thinking, got the job, then watched
        their margin evaporate when reality showed up.
      </p>
      <p>
        This guide explains why that happens, and how to fix it with a method that takes about
        five minutes longer than your current approach.
      </p>

      <h2>why contractors underbid</h2>

      <p>
        Three forces push every bid downward:
      </p>

      <p>
        <strong className="guide__highlight">Optimism bias.</strong> You picture the job going
        smoothly. The drywall comes off clean. The joists are solid. The supplier delivers on
        time. You price for the version of the job where nothing goes wrong — even though that
        version almost never happens.
      </p>
      <p>
        <strong className="guide__highlight">Competitive pressure.</strong> You know the
        homeowner has three bids. So you sharpen your pencil, trim the fat, round everything
        down. Now your bid is tight. Too tight. You win the job and lose the profit.
      </p>
      <p>
        <strong className="guide__highlight">Single-point estimates.</strong> You write down one
        number for each line item: tile $2,500. That is not an estimate. That is a guess
        dressed up as a fact. Real costs are ranges. Tile could be $2,200 if your usual
        supplier has stock, or $3,000 if they do not and you are ordering from someone new.
      </p>

      <h2>the five uncertainty tiers</h2>

      <p>
        Not every line item in your bid carries the same risk. A dumpster rental from the company
        you have used fifty times is not the same as a custom glass shower enclosure from a
        fabricator you found last week. Treating them the same is the core mistake in flat
        contingency pricing.
      </p>
      <p>
        LowRiskQuotes uses five tiers of uncertainty. Here is what each one means in practice:
      </p>

      <ASCIIBox title="Uncertainty Tiers">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Range</th>
              <th>Real-World Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Certain</td>
              <td>+/- 2%</td>
              <td>Dumpster rental, fixed-price supplier quote in writing</td>
            </tr>
            <tr>
              <td className="guide__highlight">Low</td>
              <td>+/- 8%</td>
              <td>Materials from your regular supplier, standard fixtures</td>
            </tr>
            <tr>
              <td className="guide__highlight">Medium</td>
              <td>+/- 15%</td>
              <td>Subcontractor you have used before but not recently</td>
            </tr>
            <tr>
              <td className="guide__highlight">High</td>
              <td>+/- 25%</td>
              <td>First-time subcontractor, specialty materials, site unknowns</td>
            </tr>
            <tr>
              <td className="guide__highlight">Wild Guess</td>
              <td>+/- 40%</td>
              <td>No site visit done, unfamiliar scope, &quot;should be about...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        The key question for each line item is: <em>how confident am I that this number is
        right?</em> Not how confident you want to be. How confident you actually are, based on
        evidence. Have you got a written quote? That is Certain. Are you guessing from a job
        you did two years ago in a different zip code? That is High at best.
      </p>

      <h2>worked example: bathroom remodel</h2>

      <p>
        Let us walk through a real bid. Mrs. Chen wants her bathroom redone — demo, re-tile,
        new fixtures, custom glass shower enclosure, new plumbing, electrical, and a dumpster
        for the waste. Your base estimate comes to $8,700.
      </p>

      <ASCIIBox title="Line Items">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Estimate</th>
              <th>Tier</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wall &amp; floor tile</td>
              <td>$2,500</td>
              <td className="guide__highlight">Low</td>
              <td>Your regular supplier, you have priced similar before</td>
            </tr>
            <tr>
              <td>Fixtures (vanity, toilet, faucets)</td>
              <td>$1,100</td>
              <td className="guide__highlight">Medium</td>
              <td>Customer chose mid-range but has not finalized yet</td>
            </tr>
            <tr>
              <td>Custom glass shower enclosure</td>
              <td>$2,000</td>
              <td className="guide__highlight">High</td>
              <td>New fabricator, custom size, never ordered from them</td>
            </tr>
            <tr>
              <td>Plumbing (subcontractor)</td>
              <td>$1,600</td>
              <td className="guide__highlight">Medium</td>
              <td>Dave is reliable but has not bid yet on this job</td>
            </tr>
            <tr>
              <td>Electrician</td>
              <td>$800</td>
              <td className="guide__highlight">Low</td>
              <td>Standard bathroom electrical, your usual guy</td>
            </tr>
            <tr>
              <td>Dumpster rental</td>
              <td>$700</td>
              <td className="guide__highlight">Certain</td>
              <td>Fixed price from your regular hauling company</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        If you bid $8,700 flat, you are pricing for the scenario where every single line
        item comes in exactly on estimate. That is the single most unlikely outcome. It is like
        betting that every coin in a six-coin toss lands heads.
      </p>
      <p>
        Run those numbers through a Monte Carlo simulation and you get a distribution. The
        simulation runs thousands of versions of this job, each time pulling costs from within
        the uncertainty range you set. Because overruns are more common than underruns, the
        simulation skews upward — just like real life.
      </p>

      <ASCIIBox title="Simulation Output">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Base estimate: <span className="guide__highlight">$8,700</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (coin-flip odds): <span className="guide__highlight">$9,140</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (recommended bid): <span className="guide__highlight">$9,780</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (worst-case buffer): <span className="guide__highlight">$10,670</span>
        </p>
      </ASCIIBox>

      <p>
        The difference between $8,700 and $9,780 is $1,080 — about 12%. But it is not a
        flat 12% contingency. It is a calculated buffer based on the specific risks in this
        specific job. A job with all-Low items would need less. A job full of Wild Guesses
        would need much more.
      </p>

      <h2>reading the results: what the bell curve means</h2>

      <p>
        The simulation gives you a probability distribution — a bell curve showing how likely
        each total cost is. Here is how to read it:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> means there is a 50% chance the
          actual cost is below this number. Coin-flip odds. Not a safe bid.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> means 80% chance the actual cost is
          below this. This is the sweet spot for most contractors. You are protected against
          most overruns without pricing yourself out of the market.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> means 95% chance. This is your
          &quot;sleep well at night&quot; number. Use it for fixed-price contracts or customers who will
          not accept any change orders.
        </li>
      </ul>
      <p>
        Which percentile you bid at depends on the job and the customer. A time-and-materials
        job with a good client? P50 might be fine. A fixed-price kitchen for a lawyer who
        will hold you to every dollar? Bid at P80 or P95 and protect yourself.
      </p>

      <h2>common bidding mistakes</h2>

      <p>
        After running thousands of estimates through the simulator, patterns emerge. Here are
        the mistakes that cost contractors the most money:
      </p>

      <ol>
        <li>
          <strong>Marking everything as Low uncertainty.</strong> If you have not got a written
          quote, it is not Low. If you have not done this exact scope before, it is not Low.
          Be honest with yourself.
        </li>
        <li>
          <strong>Forgetting travel and time costs.</strong> Two hours of driving per day at
          $45/hour for a three-week job is $1,350. That is real money. Price it. Do not forget
          the IRS mileage rate either — $0.70/mile adds up fast.
        </li>
        <li>
          <strong>Not pricing for delays.</strong> Weather, late deliveries, customer changes.
          These are not rare events. They are the norm. Your job duration estimate needs
          its own uncertainty tier.
        </li>
        <li>
          <strong>Copying last year&apos;s prices.</strong> Material costs move. Lumber is up.
          Copper is up. If your prices are six months old, they are wrong.
        </li>
        <li>
          <strong>Bidding to win instead of bidding to profit.</strong> A job you win at the
          wrong price is worse than a job you do not get. The worst outcome is not losing the
          bid. It is winning it and working for free.
        </li>
      </ol>

      {/* MiniEstimator component will be added here */}

      <h2>putting it together</h2>

      <p>
        Here is the workflow. It adds about five minutes to your bidding process:
      </p>
      <ol>
        <li>List every line item as you normally would.</li>
        <li>For each one, ask: how confident am I in this number? Assign a tier.</li>
        <li>Add your daily rate, job duration, and travel.</li>
        <li>Run the simulation.</li>
        <li>Bid at P80 for most jobs. Adjust up or down based on contract type.</li>
      </ol>
      <p>
        You are not adding a made-up contingency. You are building a bid that reflects the
        actual risk profile of the actual job. That is the difference between hoping you make
        money and knowing you will.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ BUILD YOUR ESTIMATE ]</Link>
      </div>
    </div>
  )
}
