import { Link } from 'react-router'
import { Container } from '@/components/layout/Container'
import { Button } from '@vcm/ui'

export function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="display text-3xl sm:text-4xl">Not found</h1>
      <p className="measure mt-5 text-muted">
        That page does not exist. It may have been renamed, or the link may be wrong.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Back to the homepage</Link>
      </Button>
    </Container>
  )
}
