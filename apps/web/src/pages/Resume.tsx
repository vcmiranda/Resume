import { Download } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@vcm/ui'
import { resume, site } from '@vcm/content'

export function Resume() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="display text-3xl sm:text-4xl">{resume.heading}</h1>
      <p className="measure mt-5 text-muted">{resume.intro}</p>

      <Button asChild className="mt-8">
        <a href={site.resumePath} download>
          <Download aria-hidden />
          {resume.downloadLabel}
        </a>
      </Button>

      <div className="mt-16 space-y-12">
        <section aria-labelledby="r-summary">
          <h2 id="r-summary" className="text-xl font-semibold tracking-tight">
            Summary
          </h2>
          <p className="measure mt-3 text-muted">{resume.summary}</p>
        </section>

        <section aria-labelledby="r-skills">
          <h2 id="r-skills" className="text-xl font-semibold tracking-tight">
            Skills
          </h2>
          <dl className="mt-4 space-y-3">
            {resume.skills.map((s) => (
              <div key={s.label} className="sm:flex sm:gap-4">
                <dt className="min-w-56 font-medium">{s.label}</dt>
                <dd className="text-muted">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="r-experience">
          <h2 id="r-experience" className="text-xl font-semibold tracking-tight">
            Experience
          </h2>
          <div className="mt-6 space-y-10">
            {resume.roles.map((role) => (
              <article key={`${role.company}-${role.dates}`}>
                <h3 className="font-semibold">{role.title}</h3>
                <p className="text-sm text-muted">
                  {role.company} · {role.location} · {role.dates}
                </p>
                <ul className="measure mt-3 list-disc space-y-1.5 pl-5 text-muted">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="r-education">
          <h2 id="r-education" className="text-xl font-semibold tracking-tight">
            Education
          </h2>
          <ul className="mt-4 space-y-2">
            {resume.education.map((e) => (
              <li key={e.credential}>
                <span className="font-medium">{e.school}</span>{' '}
                <span className="text-muted">
                  — {e.credential}. {e.location}. {e.dates}.
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  )
}
