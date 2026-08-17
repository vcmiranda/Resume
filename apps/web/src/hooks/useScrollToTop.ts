import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Scroll handling for client-side navigation. react-router's ScrollRestoration
 * requires a data router; this site uses a plain router so it can prerender,
 * so we handle it here. Respects reduced-motion by using an instant jump.
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
}
