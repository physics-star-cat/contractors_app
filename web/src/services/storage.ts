import type { Project, AppRegionCode } from '@/models/types'

const PROJECTS_KEY = 'lowriskquotes_projects'
const REGION_KEY = 'lowriskquotes_region'

export function loadProjects(): Project[] {
  if (typeof window === 'undefined') return []
  try {
    const json = localStorage.getItem(PROJECTS_KEY)
    return json ? JSON.parse(json) : []
  } catch {
    return []
  }
}

export function saveProject(project: Project): void {
  const projects = loadProjects()
  const index = projects.findIndex(p => p.id === project.id)
  if (index >= 0) {
    projects[index] = { ...project, updatedAt: new Date().toISOString() }
  } else {
    projects.push(project)
  }
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects))
}

export function deleteProject(id: string): void {
  const projects = loadProjects().filter(p => p.id !== id)
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects))
}

export function loadRegion(): AppRegionCode {
  if (typeof window === 'undefined') return 'US'
  const saved = localStorage.getItem(REGION_KEY)
  if (saved && ['US', 'UK', 'CA', 'AU', 'NZ'].includes(saved)) {
    return saved as AppRegionCode
  }
  return detectRegion()
}

export function saveRegion(region: AppRegionCode): void {
  localStorage.setItem(REGION_KEY, region)
}

function detectRegion(): AppRegionCode {
  if (typeof navigator === 'undefined') return 'US'
  const lang = navigator.language
  if (lang.includes('GB') || lang.includes('en-GB')) return 'UK'
  if (lang.includes('CA') || lang.includes('en-CA')) return 'CA'
  if (lang.includes('AU') || lang.includes('en-AU')) return 'AU'
  if (lang.includes('NZ') || lang.includes('en-NZ')) return 'NZ'
  return 'US'
}
