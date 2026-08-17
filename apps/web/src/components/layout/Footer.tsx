import { Container } from './Container'
import { site } from '@vcm/content'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6 text-sm text-muted">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} — {site.location}
        </p>
        <nav aria-label="Elsewhere" className="flex gap-5">
          <a className="hover:text-[var(--accent)]" href={site.social.github}>
            GitHub
          </a>
          <a className="hover:text-[var(--accent)]" href={site.social.linkedin}>
            LinkedIn
          </a>
          <a className="hover:text-[var(--accent)]" href={`mailto:${site.email}`}>
            Email
          </a>
          <span>© 2026</span>
        </nav>
      </Container>
    </footer>
  )
}
