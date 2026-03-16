'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import type { Project, SimulationResult } from '@/models/types'

interface EstimatorContextValue {
  project: Project | null
  setProject: (project: Project) => void
  simulationResult: SimulationResult | null
  setSimulationResult: (result: SimulationResult) => void
  clear: () => void
}

const EstimatorContext = createContext<EstimatorContextValue>({
  project: null,
  setProject: () => {},
  simulationResult: null,
  setSimulationResult: () => {},
  clear: () => {},
})

export function EstimatorProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<Project | null>(null)
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null)

  const clear = useCallback(() => {
    setProject(null)
    setSimulationResult(null)
  }, [])

  return (
    <EstimatorContext.Provider value={{ project, setProject, simulationResult, setSimulationResult, clear }}>
      {children}
    </EstimatorContext.Provider>
  )
}

export function useEstimator() {
  return useContext(EstimatorContext)
}
