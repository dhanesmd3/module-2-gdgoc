import type { Project } from '../types/project'

type ProjectCardProps = Project

function ProjectCard({ title, description, techStack, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <article className="plan-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tech-stack">
        {techStack.map((tech) => (
          <li key={tech} className="plan-tag">{tech}</li>
        ))}
      </ul>
      <p className="hero-links">
        <a href={githubUrl} target="_blank" rel="noopener">GitHub</a>
        {liveUrl && (
          <>
            {' · '}
            <a href={liveUrl} target="_blank" rel="noopener">Live Demo</a>
          </>
        )}
      </p>
    </article>
  )
}

export default ProjectCard
