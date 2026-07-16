import ProjectCard from '../components/ProjectCard'
import { useProjectsStore } from '../store/useProjectsStore'

function ProjectsPage() {
  const projects = useProjectsStore((state) => state.projects)

  return (
    <section className="min-h-[40vh] py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-8 font-display text-2xl">Projects</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
