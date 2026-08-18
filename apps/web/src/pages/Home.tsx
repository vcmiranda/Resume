import { Link } from 'react-router'
import { Button } from '@vcm/ui'
import { Container } from '@/components/layout/Container'
import { Blueprint } from '@/components/layout/Blueprint'
import { Reveal } from '@/components/layout/Reveal'
import { ContactFormLazy } from '@/components/sections/ContactFormLazy'
import { featuredProjects, home, resume, site } from '@vcm/content'

const RULE = 'border-t border-[var(--border)]'

function SectionHeading({
  id,
  children,
  index,
  label,
}: {
  id: string
  children: React.ReactNode
  index: string
  label: string
}) {
  return (
    <Reveal className="mb-7 flex flex-wrap items-baseline gap-x-5 gap-y-2">
      <h2 id={id} className="text-2xl sm:text-3xl">
        {children}
      </h2>
      <span className="eyebrow-2">
        {index} / {label}
      </span>
    </Reveal>
  )
}

export function Home() {
  return (
    <>
      {/* Hero ------------------------------------------------------------- */}
      <Container className="border-b border-[var(--border)] pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:items-start lg:gap-14">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="eyebrow">{home.hero.kicker}</span>
              <span className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <h1 className="display text-3xl sm:text-4xl">{site.positioning}</h1>

            <p className="mt-6 max-w-[56ch] text-lg text-[var(--text)]/85">
              {site.hero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="blueprint">
                <a href="#work">
                  <Blueprint />
                  View my work
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[color-mix(in_srgb,var(--accent-2)_55%,transparent)] text-[var(--accent-2-strong)]"
              >
                <a href={site.resumePath} download>
                  Download résumé
                </a>
              </Button>
            </div>

            <p className="font-display mt-8 flex flex-wrap gap-x-3 gap-y-1 text-xs tracking-[0.08em] uppercase text-muted">
              {site.credibility.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </p>
          </Reveal>

          <Reveal className="blueprint border border-[var(--border)]">
            <Blueprint />
            <p className="eyebrow border-b border-[var(--border)] px-4 py-3.5">Currently</p>
            <dl className="m-0">
              {home.hero.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] px-4 py-3"
                >
                  <dt className="font-display text-xs tracking-[0.08em] uppercase text-muted">
                    {fact.label}
                  </dt>
                  <dd className="m-0 text-right text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="duotone border-b border-[var(--border)]">
              <img
                src={home.hero.portrait.src}
                alt={home.hero.portrait.alt}
                width={520}
                height={240}
                className="block h-60 w-full object-cover object-[center_42%]"
              />
            </div>
            <p className="px-4 py-3 text-sm text-muted">{home.hero.note}</p>
          </Reveal>
        </div>
      </Container>

      {/* Work ------------------------------------------------------------- */}
      <section id="work" aria-labelledby="work-heading" className="border-b border-[var(--border)]">
        <Container className="py-16 sm:py-18">
          <SectionHeading id="work-heading" {...home.sections.work}>
            {home.work.heading}
          </SectionHeading>

          <Reveal>
            <p className="max-w-[66ch] text-[var(--text)]/80">{home.work.intro}</p>
          </Reveal>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal
                key={project.slug}
                as="article"
                className="blueprint flex flex-col gap-3.5 border border-[var(--border)] px-5 pt-6 pb-5"
              >
                <Blueprint />
                <div className="flex items-baseline justify-between gap-3">
                  <span className="eyebrow-2">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-xs tracking-[0.1em] uppercase text-muted">
                    {project.context}
                  </span>
                </div>
                <h3 className="text-xl">{project.title}</h3>
                <p className="flex-1 text-sm text-[var(--text)]/80">{project.summary}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-[var(--border)] px-2 py-0.5 text-2xs tracking-[0.06em] uppercase text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/work/${project.slug}`}
                  className="font-display inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[var(--accent-strong)] no-underline hover:underline"
                >
                  Read the case study
                  <span aria-hidden>→</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-6 text-sm text-muted">{home.work.footnote}</p>
          </Reveal>
        </Container>
      </section>

      {/* Experience ------------------------------------------------------- */}
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="border-b border-[var(--border)]"
      >
        <Container className="py-16 sm:py-18">
          <SectionHeading id="experience-heading" {...home.sections.experience}>
            Experience
          </SectionHeading>

          {resume.roles.map((role) => (
            <Reveal
              key={`${role.company}-${role.dates}`}
              className={`grid gap-4 ${RULE} py-6 sm:grid-cols-[180px_1fr] sm:gap-7`}
            >
              <div>
                <p className="font-display text-xs tracking-[0.14em] uppercase text-[var(--accent)]">
                  {role.dates}
                </p>
                <p className="mt-1 text-sm text-muted">{role.location}</p>
              </div>
              <div>
                <h3 className="text-xl">{role.title}</h3>
                <p className="mt-1 mb-3 text-muted">{role.company}</p>
                <ul className="flex flex-col gap-2">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[14px_1fr] gap-3 text-[var(--text)]/85">
                      <span aria-hidden className="font-display text-[var(--accent-2)]">
                        +
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className={RULE} />
        </Container>
      </section>

      {/* Stack ------------------------------------------------------------ */}
      <section id="stack" aria-labelledby="stack-heading" className="border-b border-[var(--border)]">
        <Container className="py-16 sm:py-18">
          <SectionHeading id="stack-heading" {...home.sections.stack}>
            {home.stack.heading}
          </SectionHeading>

          <div className="grid md:grid-cols-2 md:gap-x-11">
            {home.stack.groups.map((group) => (
              <Reveal
                key={group.name}
                className={`grid gap-4 ${RULE} py-5 sm:grid-cols-[170px_1fr] sm:items-start`}
              >
                <p className="font-display text-xs tracking-[0.14em] uppercase text-[var(--accent)]">
                  {group.name}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Notes ------------------------------------------------------------ */}
      <section id="notes" aria-labelledby="notes-heading" className="border-b border-[var(--border)]">
        <Container className="py-16 sm:py-18">
          <SectionHeading id="notes-heading" {...home.sections.notes}>
            {home.notes.heading}
          </SectionHeading>

          <div className="field-plate blueprint px-7 pt-2.5 pb-6">
            <Blueprint />
            {home.notes.items.map((note) => (
              <Reveal key={note.title}>
                <Link
                  to={note.href}
                  className="rule-invert grid items-baseline gap-x-6 gap-y-2 border-t px-0.5 py-5 text-[var(--field-text)] no-underline transition-colors duration-150 hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] sm:grid-cols-[120px_1fr_130px]"
                >
                  <span className="font-display text-xs tracking-[0.14em] uppercase text-[var(--accent-2-strong)]">
                    {note.date}
                  </span>
                  <span>
                    <span className="font-display block text-lg font-semibold">{note.title}</span>
                    <span className="mt-1.5 block max-w-[70ch] text-[var(--field-text)]/75">
                      {note.blurb}
                    </span>
                  </span>
                  <span className="font-display text-xs tracking-[0.14em] uppercase text-[var(--field-text)]/55 sm:text-right">
                    {note.readingTime}
                  </span>
                </Link>
              </Reveal>
            ))}
            <div className="rule-invert border-t" />
          </div>
        </Container>
      </section>

      {/* About ------------------------------------------------------------ */}
      <section id="about" aria-labelledby="about-heading" className="border-b border-[var(--border)]">
        <Container className="py-16 sm:py-18">
          <div className="grid gap-12 md:grid-cols-2 md:gap-14">
            <div>
              <SectionHeading id="about-heading" {...home.sections.about}>
                {home.about.heading}
              </SectionHeading>
              <Reveal className="flex flex-col gap-4 text-lg text-[var(--text)]/85">
                {home.about.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
            </div>

            <Reveal>
              <p className="eyebrow mb-1.5">{home.about.principlesHeading}</p>
              {home.about.principles.map((principle) => (
                <div key={principle.title} className={`${RULE} py-4`}>
                  <h3 className="text-lg text-[var(--accent-2)]">{principle.title}</h3>
                  <p className="mt-1 text-[var(--text)]/75">{principle.body}</p>
                </div>
              ))}
              <div className={RULE} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Contact ---------------------------------------------------------- */}
      <section id="contact" aria-labelledby="contact-heading">
        <Container className="py-16 sm:py-18">
          <div className="grid gap-12 md:grid-cols-2 md:gap-14">
            <div>
              <SectionHeading id="contact-heading" {...home.sections.contact}>
                {home.contact.heading}
              </SectionHeading>
              <Reveal>
                <p className="max-w-[52ch] text-lg text-[var(--text)]/85">{home.contact.body}</p>
                <dl className={`mt-6 ${RULE}`}>
                  {home.contact.links.map((link) => (
                    <div key={link.label} className="border-b border-[var(--border)]">
                      <a
                        href={link.href}
                        className="flex items-baseline justify-between gap-4 px-0.5 py-3.5 text-[var(--text)] no-underline transition-colors duration-150 hover:text-[var(--accent-strong)]"
                      >
                        <span className="font-display text-xs tracking-[0.16em] uppercase text-muted">
                          {link.label}
                        </span>
                        <span>{link.value}</span>
                      </a>
                    </div>
                  ))}
                </dl>
                <div className="mt-6">
                  <Button asChild className="blueprint">
                    <a href={site.resumePath} download>
                      <Blueprint />
                      Download résumé (PDF)
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal className="blueprint border border-[var(--border)] px-6 py-6">
              <Blueprint />
              <p className="eyebrow mb-4">Or send a message</p>
              <ContactFormLazy />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
