import { Link, NavLink } from 'react-router'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { nav, site } from '@vcm/content'
import { cn } from '@vcm/ui'

export function Header() {
  return (
    <header className="border-b border-[var(--border)]">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:bg-[var(--surface)]',
                  isActive ? 'text-[var(--text)]' : 'text-muted',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  )
}
