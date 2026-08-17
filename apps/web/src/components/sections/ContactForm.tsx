import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Label, Textarea } from '@vcm/ui'
import { contactSchema, type ContactInput } from '@/lib/contact-schema'
import { site } from '@vcm/content'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  })

  async function onSubmit(values: ContactInput) {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p role="status" className="rounded-md border border-[var(--border)] p-4 text-sm">
        {site.contact.successMessage}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-600 dark:text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-600 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot — visually and programmatically hidden from humans */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={isSubmitting || status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </Button>
        {status === 'error' && (
          <p role="alert" className="text-sm text-red-600 dark:text-red-400">
            {site.contact.errorMessage}
          </p>
        )}
      </div>
    </form>
  )
}
