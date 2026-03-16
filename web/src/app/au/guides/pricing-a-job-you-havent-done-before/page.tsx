import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'How to Price a Job You Haven\'t Done Before // lowriskquotes',
  description:
    'How Australian tradies can price unfamiliar work without losing money. A practical approach to quoting jobs outside your comfort zone.',
  alternates: { canonical: '/au/guides/pricing-a-job-you-havent-done-before/' },
}

export default function AUPricingNewJobPage() {
  return (
    <div className="guide">
      <h1>pricing a job you have not done before</h1>

      <p>
        Every tradie has been there. A customer asks you to quote something you have never
        done — or something you have done once, three years ago, and you cannot remember what
        it cost. You want the work. You do not want to look clueless. So you throw out a
        number that sounds about right and hope for the best.
      </p>
      <p>
        That is how tradies lose money. Here is a better approach.
      </p>

      <h2>the problem with unfamiliar work</h2>

      <p>
        When you price work you know well, you have mental benchmarks. You know how long a
        bathroom strip-out takes because you have done fifty of them. You know what tiles cost
        because you order them every month. You have a feel for what can go wrong.
      </p>
      <p>
        With unfamiliar work, you have none of that. Your estimate is a guess, and you do
        not even know how bad your guess is. That is the dangerous part — you cannot even
        calibrate your uncertainty.
      </p>

      <h2>step 1: break it down smaller</h2>

      <p>
        You might not know what a full deck build costs, but you probably know what timber
        costs per lineal metre from Bunnings Trade. You know what a day of labour costs. You
        can estimate how many days of work are involved even if you are not sure.
      </p>
      <p>
        Break the job into the smallest possible line items. Some of those items will be
        familiar (materials, skip bin, travel). Some will not (specialist labour, unfamiliar
        techniques). Now you have isolated the uncertainty instead of spreading it across the
        whole job.
      </p>

      <h2>step 2: research the unknowns</h2>

      <p>
        For the items you are genuinely unsure about:
      </p>
      <ul>
        <li>
          <strong>Call a subbie.</strong> If the job involves work outside your trade, get a
          real quote from a licenced subcontractor. That turns a Wild Guess into a Certain item.
        </li>
        <li>
          <strong>Ask other tradies.</strong> Your network is your best pricing resource. Other
          tradies who have done this type of work can give you realistic ballparks.
        </li>
        <li>
          <strong>Check supplier pricing.</strong> Bunnings Trade, your local timber yard, or
          specialist suppliers can give you current material costs. Do not rely on prices from
          your last job six months ago.
        </li>
        <li>
          <strong>Look at industry guides.</strong> Rawlinsons, Cordell, and industry
          associations publish cost guides with per-square-metre and per-unit rates for most
          building work in Australia.
        </li>
      </ul>

      <h2>step 3: be honest about your uncertainty</h2>

      <p>
        After your research, you will have some items that are well-priced and some that are
        still uncertain. The critical step is to be honest about which is which. Do not mark
        a guess as Low uncertainty because you want the quote to look competitive. Mark it as
        what it actually is.
      </p>

      <ASCIIBox title="Honest Assessment Example">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Source</th>
              <th>Tier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Timber supply</td>
              <td>Bunnings Trade quote in writing</td>
              <td className="guide__highlight">Certain</td>
            </tr>
            <tr>
              <td>Concrete footings</td>
              <td>Called a concreter, got a verbal ballpark</td>
              <td className="guide__highlight">Medium</td>
            </tr>
            <tr>
              <td>Labour — framing</td>
              <td>Done similar but not this exact thing</td>
              <td className="guide__highlight">Medium - High</td>
            </tr>
            <tr>
              <td>Balustrade install</td>
              <td>Never done it, guessing from YouTube</td>
              <td className="guide__highlight">Wild Guess</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>step 4: simulate and quote higher</h2>

      <p>
        When you run a simulation with honest uncertainty tiers, unfamiliar jobs will naturally
        produce a higher contingency than familiar ones. That is exactly right. The less you
        know about a job, the more buffer you need.
      </p>
      <p>
        Consider quoting unfamiliar work at P90 or even P95 instead of the usual P80. You are
        compensating for the fact that your base estimates are less reliable than usual. If
        the job comes in under budget, great — that is profit. If it hits snags, you have a
        buffer.
      </p>

      <h2>when to walk away</h2>

      <p>
        Sometimes the honest answer is: I cannot price this accurately enough to quote it
        safely. That is not failure. That is good business sense. If more than half your line
        items are Wild Guess territory, consider:
      </p>
      <ul>
        <li>Referring the customer to a specialist tradie who does this work regularly</li>
        <li>Offering to do it as time and materials instead of fixed price</li>
        <li>Subcontracting the unfamiliar portion to someone who knows the work</li>
      </ul>
      <p>
        The worst outcome is not losing the job. It is winning it at the wrong price and
        working for free — or worse, going backwards.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ PRICE YOUR JOB ]</Link>
      </div>
    </div>
  )
}
