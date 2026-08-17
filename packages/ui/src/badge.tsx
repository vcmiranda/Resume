import { cn } from './cn'

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border border-[var(--border)] px-1.5 py-0.5 text-[0.75rem] leading-4 text-muted',
        className,
      )}
      {...props}
    />
  )
}
