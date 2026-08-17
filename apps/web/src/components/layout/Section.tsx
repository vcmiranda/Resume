import { cn } from '@vcm/ui'
import { Container } from './Container'

type Props = React.HTMLAttributes<HTMLElement> & { as?: 'section' | 'div' }

export function Section({ className, as: Tag = 'section', children, ...props }: Props) {
  return (
    <Tag className={cn('py-16 sm:py-24', className)} {...props}>
      <Container>{children}</Container>
    </Tag>
  )
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{children}</h2>
  )
}
