'use client'

import Link from 'next/link'
import { useRegion } from '@/context/RegionContext'
import { REGIONS } from '@/models/constants'
import type { AppRegionCode } from '@/models/types'
import './Nav.css'

export default function Nav() {
  const { region, setRegion } = useRegion()

  return (
    <nav className="nav">
      <div className="nav__links">
        <Link href="/" className="nav__brand">lowriskquotes</Link>
        <Link href="/estimate/" className="nav__link">[ESTIMATE]</Link>
        <Link href="/guides/how-to-quote-a-job/" className="nav__link">[GUIDES]</Link>
        <Link href="/about/" className="nav__link">[ABOUT]</Link>
      </div>
      <select
        className="nav__region"
        value={region}
        onChange={(e) => setRegion(e.target.value as AppRegionCode)}
        aria-label="Select region"
      >
        {(Object.keys(REGIONS) as AppRegionCode[]).map(code => (
          <option key={code} value={code}>
            {REGIONS[code].flag} {REGIONS[code].currencyCode}
          </option>
        ))}
      </select>
    </nav>
  )
}
