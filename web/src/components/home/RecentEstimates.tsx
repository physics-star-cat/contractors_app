'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { Project } from '@/models/types'
import { loadProjects, deleteProject } from '@/services/storage'
import { useEstimator } from '@/context/EstimatorContext'
import ASCIIBox from '@/components/ui/ASCIIBox'
import './RecentEstimates.css'

export default function RecentEstimates() {
  const [projects, setProjects] = useState<Project[]>([])
  const { setProject } = useEstimator()
  const router = useRouter()

  useEffect(() => {
    setProjects(loadProjects().sort((a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    ))
  }, [])

  if (projects.length === 0) return null

  const handleLoad = (project: Project) => {
    setProject(project)
    router.push('/estimate/')
  }

  const handleDelete = (id: string) => {
    deleteProject(id)
    setProjects(prev => prev.filter(p => p.id !== id))
  }

  return (
    <section className="recent">
      <ASCIIBox title="Recent estimates">
        {projects.slice(0, 5).map(p => (
          <div key={p.id} className="recent__item">
            <span className="recent__name" onClick={() => handleLoad(p)}>
              {'> '}{p.name}
            </span>
            <span className="recent__date">{new Date(p.updatedAt).toLocaleDateString()}</span>
            <button className="recent__delete" onClick={() => handleDelete(p.id)} type="button">[x]</button>
          </div>
        ))}
      </ASCIIBox>
    </section>
  )
}
