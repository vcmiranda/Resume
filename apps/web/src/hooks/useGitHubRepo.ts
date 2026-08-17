import { useQuery } from '@tanstack/react-query'
import { site } from '@vcm/content'

/** Only the fields we render — GitHub returns far more. */
export type Repo = {
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  pushed_at: string
}

/**
 * Narrow guard rather than a schema library: this is a read-only public API and
 * a failed shape check falls back to static content, so pulling Zod into the
 * initial bundle for it is not a trade worth making.
 */
function isRepo(value: unknown): value is Repo {
  if (typeof value !== 'object' || value === null) return false
  const v = value as Record<string, unknown>
  return (
    typeof v.name === 'string' &&
    typeof v.html_url === 'string' &&
    typeof v.stargazers_count === 'number' &&
    typeof v.pushed_at === 'string'
  )
}

async function fetchRepo(name: string): Promise<Repo> {
  const res = await fetch(`https://api.github.com/repos/${site.githubUser}/${name}`, {
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!res.ok) throw new Error(`GitHub responded ${res.status}`)
  const data: unknown = await res.json()
  if (!isRepo(data)) throw new Error('Unexpected response shape from GitHub')
  return data
}

/**
 * Live repository data for public projects. Private repos 404, which is the
 * expected path — the UI degrades to the static content in /content/projects.
 */
export function useGitHubRepo(name: string | undefined) {
  return useQuery({
    queryKey: ['github', 'repo', name],
    queryFn: () => fetchRepo(name!),
    enabled: Boolean(name),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
  })
}
