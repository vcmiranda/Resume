import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@vcm/ui'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) ?? 'light'
    setTheme(current)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* private mode — fall back to the OS preference next load */
    }
    setTheme(next)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="px-2"
    >
      {theme === 'dark' ? <Sun aria-hidden /> : <Moon aria-hidden />}
    </Button>
  )
}
