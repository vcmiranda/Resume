import { Link, useParams } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge, Button } from '@vcm/ui'
import { CaseStudyBody } from '@/components/work/CaseStudyBody'
import { RepoMeta } from '@/components/work/RepoMeta'
import { getProject, allProjects, getCaseStudy, site } from '@vcm/content'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined
  const study = slug ? getCaseStudy(slug) : undefined

  if (!project) return <NotFound />

  const index = allProjects.findIndex((p) => p.slug === project.slug)
  const next = allProjects[(index + 1) % allProjects.length]

  return (
    <Container className="py-16 sm:py-20">
      <Link
        to="/work"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-[var(--text)]"
      >
        <ArrowLeft aria-hidden className="size-4" />
        All work
      </Link>

      <header className="mt-8">
        <p className="text-sm text-muted">{project.context}</p>
        <h1 className="display mt-3 text-3xl sm:text-4xl">{project.title}</h1>
        <p className="measure mt-5 text-lg text-muted">{project.summary}</p>

        <dl className="mt-8 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="text-muted">Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        {project.repo && (
          <div className="mt-4">
            <RepoMeta repo={project.repo} />
          </div>
        )}

        {project.confidential && (
          <p className="mt-8 rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-muted">
            {site.confidentialNote}
          </p>
        )}
      </header>

      <div className="mt-12">
        {study ? (
          <CaseStudyBody sections={study.sections} />
        ) : (
          <p className="text-muted">This write-up is still in progress.</p>
        )}
      </div>

      <nav
        aria-label="More work"
        className="mt-20 flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="text-sm text-muted">Next</p>
          <Link to={`/work/${next!.slug}`} className="font-medium hover:text-[var(--accent)]">
            {next!.title}
          </Link>
        </div>
        <Button asChild variant="outline">
          <a href={`mailto:${site.email}`}>Get in touch</a>
        </Button>
      </nav>
    </Container>
  )
}
