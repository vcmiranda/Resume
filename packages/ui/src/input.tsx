import * as React from 'react'
import { cn } from './cn'

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm',
        'placeholder:text-[var(--muted)] disabled:cursor-not-allowed disabled:opacity-50',
        'aria-[invalid=true]:border-red-500',
        className,
      )}
      {...props}
    />
  ),
)
Input.displayName = 'Input'
