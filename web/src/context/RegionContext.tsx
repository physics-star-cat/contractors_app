'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import type { AppRegionCode } from '@/models/types'
import { loadRegion, saveRegion } from '@/services/storage'

interface RegionContextValue {
  region: AppRegionCode
  setRegion: (region: AppRegionCode) => void
}

const RegionContext = createContext<RegionContextValue>({
  region: 'US',
  setRegion: () => {},
})

// Map locale paths to sensible default regions
const LOCALE_TO_REGION: Record<string, AppRegionCode> = {
  en: 'UK',
  de: 'UK',  // EUR — closest region with EUR-like pricing
  fr: 'UK',
  pl: 'UK',
  nl: 'UK',
  es: 'UK',
  us: 'US',
  au: 'AU',
  ca: 'CA',
  pt: 'UK',
  it: 'UK',
  sv: 'UK',
  tr: 'UK',
}

function getLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(de|fr|pl|nl|es|us|au|ca|pt|it|sv|tr)(\/|$)/)
  return match ? match[1] : 'en'
}

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const defaultRegion = LOCALE_TO_REGION[locale] || 'UK'

  const [region, setRegionState] = useState<AppRegionCode>(defaultRegion)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = loadRegion()
    // Only use saved region if user explicitly set one, otherwise use locale default
    const hasManualOverride = typeof window !== 'undefined' && localStorage.getItem('lowriskquotes_region')
    setRegionState(hasManualOverride ? saved : defaultRegion)
    setLoaded(true)
  }, [defaultRegion])

  const setRegion = (r: AppRegionCode) => {
    setRegionState(r)
    saveRegion(r)
  }

  if (!loaded) return null

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  )
}

export function useRegion() {
  return useContext(RegionContext)
}
