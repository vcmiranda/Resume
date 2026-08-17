import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@vcm/ui'
import type { Project } from '@vcm/content'
import { RepoMeta } from './RepoMeta'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted">{project.context}</p>
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          <Link
            to={`/work/${project.slug}`}
            className="transition-colors duration-150 hover:text-[var(--accent)]"
          >
            {project.title}
          </Link>
        </h3>
        <p className="measure text-muted">{project.summary}</p>

        <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        {project.repo && <RepoMeta repo={project.repo} />}

        <Link
          to={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 pt-2 text-sm text-[var(--accent)] hover:underline"
        >
          Read the case study
          <ArrowRight aria-hidden className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  )
}
