import type { Project } from '../types/project'

type ProjectCardProps = Project

function ProjectCard({ title, description, techStack, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-display">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <ul className="my-3 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-accent"
          >
            {tech}
          </li>
        ))}
      </ul>
      <p className="font-mono text-sm">
        <a href={githubUrl} target="_blank" rel="noopener" className="text-primary hover:underline">
          GitHub
        </a>
        {liveUrl && (
          <>
            {' · '}
            <a href={liveUrl} target="_blank" rel="noopener" className="text-primary hover:underline">
              Live Demo
            </a>
          </>
        )}
      </p>
    </article>
  )
}

export default ProjectCard
