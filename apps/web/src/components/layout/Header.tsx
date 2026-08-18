import { Link } from 'react-router'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { nav, site } from '@vcm/content'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-sm">
      <Container className="flex h-15 items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-2.5 no-underline">
          <span className="font-display text-lg font-semibold tracking-[0.06em] uppercase">
            {site.name}
          </span>
          <span className="eyebrow hidden sm:inline">{site.title}</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-6">
          <ul className="hidden items-center gap-5 sm:flex sm:gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-xs tracking-[0.13em] uppercase text-[var(--text)]/70 transition-colors duration-150 hover:text-[var(--accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  )
}
