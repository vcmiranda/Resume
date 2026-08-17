import { Link } from 'react-router'
import { Container } from '@/components/layout/Container'
import { Button } from '@vcm/ui'
import { about, site } from '@vcm/content'

export function About() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="display text-3xl sm:text-4xl">{about.heading}</h1>

      <div className="measure mt-8 space-y-5 text-muted">
        {about.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <section aria-labelledby="how-i-work" className="mt-16">
        <h2 id="how-i-work" className="text-xl font-semibold tracking-tight">
          {about.principles.heading}
        </h2>
        <dl className="measure mt-6 space-y-6">
          {about.principles.items.map((item) => (
            <div key={item.title}>
              <dt className="font-medium">{item.title}</dt>
              <dd className="mt-1 text-muted">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="currently" className="mt-16">
        <h2 id="currently" className="text-xl font-semibold tracking-tight">
          {about.currently.heading}
        </h2>
        <div className="measure mt-4 space-y-3 text-muted">
          <p>{about.currently.stack}</p>
          <p>{about.currently.side}</p>
        </div>
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/resume">Download résumé</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={`mailto:${site.email}`}>Email me</a>
        </Button>
      </div>
    </Container>
  )
}
