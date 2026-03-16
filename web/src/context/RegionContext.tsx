'use client'

import { createContext, useContext, useState, useEffect } from 'react'
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

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<AppRegionCode>('US')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setRegionState(loadRegion())
    setLoaded(true)
  }, [])

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
