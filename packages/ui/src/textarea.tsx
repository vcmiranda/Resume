import * as React from 'react'
import { cn } from './cn'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-28 w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm',
        'placeholder:text-[var(--muted)] disabled:cursor-not-allowed disabled:opacity-50',
        'aria-[invalid=true]:border-red-500',
        className,
      )}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'
