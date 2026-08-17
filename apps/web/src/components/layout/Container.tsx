import { cn } from '@vcm/ui'

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container-page', className)} {...props} />
}
