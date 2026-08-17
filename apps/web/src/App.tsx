import { useState } from 'react'
import { useLocation, useRoutes } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { routes, metaForPath } from '@/routes'
import { makeQueryClient } from '@/lib/query'
import { Seo } from '@/components/seo/Seo'

export function App() {
  // Per-render client, not module scope: a shared instance would leak cache
  // between requests during prerendering.
  const [queryClient] = useState(makeQueryClient)

  return (
    <QueryClientProvider client={queryClient}>
      <Routed />
    </QueryClientProvider>
  )
}

function Routed() {
  const element = useRoutes(routes)
  const { pathname } = useLocation()
  return (
    <>
      <Seo meta={metaForPath(pathname)} />
      {element}
    </>
  )
}
