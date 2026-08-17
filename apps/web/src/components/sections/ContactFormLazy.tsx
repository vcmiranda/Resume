import { Suspense, lazy } from 'react'

const ContactForm = lazy(() =>
  import('./ContactForm').then((m) => ({ default: m.ContactForm })),
)

/**
 * The form is a progressive enhancement below the fold — the email address
 * above it is always present, including with JavaScript disabled. Splitting it
 * keeps React Hook Form, Zod and the resolver out of the initial bundle.
 */
export function ContactFormLazy() {
  return (
    <Suspense
      fallback={
        <div className="h-72 rounded-md border border-[var(--border)]" aria-hidden />
      }
    >
      <ContactForm />
    </Suspense>
  )
}
