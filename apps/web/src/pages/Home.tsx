import { Link } from 'react-router'
import { Button } from '@vcm/ui'
import { Container } from '@/components/layout/Container'
import { Section, SectionHeading } from '@/components/layout/Section'
import { ProjectCard } from '@/components/work/ProjectCard'
import { ContactFormLazy } from '@/components/sections/ContactFormLazy'
import { site, featuredProjects } from '@vcm/content'

export function Home() {
  return (
    <>
      <Container className="pt-16 pb-6 sm:pt-20 sm:pb-8">
        <div className="animate-rise">
          <h1 className="display text-3xl sm:text-4xl">{site.positioning}</h1>
          <p className="measure mt-6 text-lg text-muted">{site.hero.supporting}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to={site.hero.primaryCta.href}>{site.hero.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to={site.hero.secondaryCta.href}>{site.hero.secondaryCta.label}</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted">{site.credibility.join(' · ')}</p>
        </div>
      </Container>

      <Section aria-labelledby="featured-work" className="pt-10 sm:pt-14">
        <h2 id="featured-work" className="text-xl font-semibold tracking-tight sm:text-2xl">
          {site.featuredWork.heading}
        </h2>
        <p className="measure mt-3 text-muted">{site.featuredWork.intro}</p>
        <div className="mt-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section aria-labelledby="about-preview" className="border-t border-[var(--border)]">
        <h2 id="about-preview" className="text-xl font-semibold tracking-tight sm:text-2xl">
          {site.aboutPreview.heading}
        </h2>
        <div className="measure mt-4 space-y-4 text-muted">
          {site.aboutPreview.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link
          to={site.aboutPreview.cta.href}
          className="mt-6 inline-block text-sm text-[var(--accent)] hover:underline"
        >
          {site.aboutPreview.cta.label}
        </Link>
      </Section>

      <Section id="contact" aria-labelledby="contact-heading" className="border-t border-[var(--border)]">
        <SectionHeading>
          <span id="contact-heading">{site.contact.heading}</span>
        </SectionHeading>
        <div className="mt-4 grid gap-10 md:grid-cols-2">
          <div className="measure space-y-4 text-muted">
            <p>{site.contact.body}</p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-base text-[var(--text)] underline underline-offset-4 hover:text-[var(--accent)]"
              >
                {site.email}
              </a>
            </p>
            <p className="text-sm">{site.contact.formNote}</p>
          </div>
          <ContactFormLazy />
        </div>
      </Section>
    </>
  )
}
