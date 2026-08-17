import { Star } from 'lucide-react'
import { useGitHubRepo } from '@/hooks/useGitHubRepo'

/**
 * Live GitHub data. Private or missing repos simply render nothing — the card
 * still reads correctly from static content, so this never blocks the page.
 */
export function RepoMeta({ repo }: { repo: string }) {
  const { data, isLoading, isError } = useGitHubRepo(repo)

  if (isLoading) {
    return (
      <p className="text-sm text-muted" aria-live="polite">
        Loading repository details…
      </p>
    )
  }
  if (isError || !data) return null

  const updated = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'short',
  }).format(new Date(data.pushed_at))

  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
      <a href={data.html_url} className="hover:text-[var(--text)] hover:underline">
        {data.html_url.replace('https://', '')}
      </a>
      {data.language && <span>{data.language}</span>}
      {data.stargazers_count > 0 && (
        <span className="inline-flex items-center gap-1">
          <Star aria-hidden className="size-3.5" />
          {data.stargazers_count}
          <span className="sr-only">stars</span>
        </span>
      )}
      <span>Updated {updated}</span>
    </p>
  )
}
