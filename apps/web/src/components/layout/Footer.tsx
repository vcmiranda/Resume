import { Container } from './Container'
import { site } from '@vcm/content'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] py-10 text-sm text-muted">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            {site.name} — {site.location}
          </p>
          <p>{site.footer.builtWith}</p>
          <p>{site.footer.privacy}</p>
        </div>
        <nav aria-label="Elsewhere" className="flex gap-4">
          <a className="hover:text-[var(--text)]" href={site.social.github}>
            GitHub
          </a>
          <a className="hover:text-[var(--text)]" href={site.social.linkedin}>
            LinkedIn
          </a>
          <a className="hover:text-[var(--text)]" href={`mailto:${site.email}`}>
            Email
          </a>
        </nav>
      </Container>
    </footer>
  )
}
