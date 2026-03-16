'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRegion } from '@/context/RegionContext'
import { REGIONS } from '@/models/constants'
import type { AppRegionCode } from '@/models/types'
import './Nav.css'

const NAV_STRINGS: Record<string, { estimate: string; guides: string; about: string; guidesPath: string }> = {
  en: { estimate: '[ESTIMATE]', guides: '[GUIDES]', about: '[ABOUT]', guidesPath: '/guides/how-to-quote-a-job/' },
  de: { estimate: '[KALKULATION]', guides: '[RATGEBER]', about: '[ÜBER UNS]', guidesPath: '/de/guides/wie-man-einen-auftrag-kalkuliert/' },
  fr: { estimate: '[DEVIS]', guides: '[GUIDES]', about: '[À PROPOS]', guidesPath: '/fr/guides/comment-faire-un-devis/' },
  pl: { estimate: '[WYCENA]', guides: '[PORADNIKI]', about: '[O NAS]', guidesPath: '/pl/guides/jak-wycenic-zlecenie/' },
  nl: { estimate: '[OFFERTE]', guides: '[GIDSEN]', about: '[OVER ONS]', guidesPath: '/nl/guides/hoe-maak-je-een-offerte/' },
  es: { estimate: '[PRESUPUESTO]', guides: '[GUÍAS]', about: '[ACERCA DE]', guidesPath: '/es/guides/como-hacer-un-presupuesto/' },
  us: { estimate: '[ESTIMATE]', guides: '[GUIDES]', about: '[ABOUT]', guidesPath: '/us/guides/how-to-bid-a-job/' },
  au: { estimate: '[ESTIMATE]', guides: '[GUIDES]', about: '[ABOUT]', guidesPath: '/au/guides/how-to-quote-a-job/' },
  ca: { estimate: '[ESTIMATE]', guides: '[GUIDES]', about: '[ABOUT]', guidesPath: '/ca/guides/how-to-quote-a-job/' },
  pt: { estimate: '[ORÇAMENTO]', guides: '[GUIAS]', about: '[SOBRE]', guidesPath: '/pt/guides/' },
  it: { estimate: '[PREVENTIVO]', guides: '[GUIDE]', about: '[CHI SIAMO]', guidesPath: '/it/guides/' },
  sv: { estimate: '[OFFERT]', guides: '[GUIDER]', about: '[OM OSS]', guidesPath: '/sv/guides/' },
  tr: { estimate: '[TEKLİF]', guides: '[REHBER]', about: '[HAKKINDA]', guidesPath: '/tr/guides/' },
}

function getLocale(pathname: string): string {
  const match = pathname.match(/^\/(de|fr|pl|nl|es|us|au|ca|pt|it|sv|tr)(\/|$)/)
  return match ? match[1] : 'en'
}

export default function Nav() {
  const { region, setRegion } = useRegion()
  const pathname = usePathname()
  const locale = getLocale(pathname)
  const strings = NAV_STRINGS[locale] || NAV_STRINGS.en
  const prefix = locale === 'en' ? '' : `/${locale}`

  return (
    <nav className="nav">
      <div className="nav__links">
        <Link href={`${prefix}/`} className="nav__brand">lowriskquotes</Link>
        <Link href={`${prefix}/estimate/`} className="nav__link">{strings.estimate}</Link>
        <Link href={strings.guidesPath} className="nav__link">{strings.guides}</Link>
        <Link href={`${prefix}/about/`} className="nav__link">{strings.about}</Link>
      </div>
      {['en', 'us', 'au', 'ca'].includes(locale) && (
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
      )}
    </nav>
  )
}
