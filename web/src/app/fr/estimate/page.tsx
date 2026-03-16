'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Project } from '@/models/types'
import { useEstimator } from '@/context/EstimatorContext'
import { useRegion } from '@/context/RegionContext'
import { createProject } from '@/services/project'
import { runSimulation } from '@/engine/monteCarlo'
import ProjectDetails from '@/components/estimator/ProjectDetails'
import DurationSection from '@/components/estimator/DurationSection'
import WorkersSection from '@/components/estimator/WorkersSection'
import TravelSection from '@/components/estimator/TravelSection'
import LineItemsSection from '@/components/estimator/LineItemsSection'
import Summary from '@/components/estimator/Summary'
import '@/components/estimator/estimator.css'

export default function FrEstimatePage() {
  const { project: contextProject, setProject, setSimulationResult } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()
  const [project, setLocalProject] = useState<Project | null>(null)
  const [isSimulating, setIsSimulating] = useState(false)

  useEffect(() => {
    if (contextProject) {
      setLocalProject(contextProject)
    } else {
      setLocalProject(createProject(region))
    }
  }, [contextProject, region])

  if (!project) return null

  const updateProject = (updates: Partial<Project>) => {
    setLocalProject(prev => prev ? { ...prev, ...updates, updatedAt: new Date().toISOString() } : prev)
  }

  const handleRunSimulation = () => {
    if (project.lineItems.length === 0) return
    setIsSimulating(true)

    setTimeout(() => {
      const result = runSimulation(project)
      setProject(project)
      setSimulationResult(result)
      setIsSimulating(false)
      router.push('/fr/results/')
    }, 50)
  }

  const canRun = project.lineItems.length > 0

  return (
    <div className="estimator">
      <ProjectDetails project={project} onChange={updateProject} />
      <DurationSection project={project} onChange={updateProject} />
      <WorkersSection project={project} onChange={updateProject} />
      <TravelSection project={project} onChange={updateProject} />
      <LineItemsSection project={project} onChange={updateProject} />
      <Summary project={project} />
      <button
        className="run-btn"
        onClick={handleRunSimulation}
        disabled={!canRun || isSimulating}
        type="button"
      >
        {isSimulating ? '[ CALCUL EN COURS... ]' : '[ LANCER LA SIMULATION ]'}
      </button>
      {!canRun && (
        <div className="empty-state">ajoutez au moins un poste pour lancer la simulation</div>
      )}
    </div>
  )
}
