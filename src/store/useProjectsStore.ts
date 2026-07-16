import { create } from 'zustand'
import type { Project } from '../types/project'
import { initialProjects } from '../data/projects'

interface ProjectsState {
  projects: Project[]
  addProject: (project: Project) => void
}

/**
 * Global store for the projects list using Zustand.
 * Any component can read `projects` or call `addProject` without
 * needing props passed down through the component tree.
 */
export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: initialProjects,
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
}))
