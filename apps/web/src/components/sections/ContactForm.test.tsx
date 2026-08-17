import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

function fetchMock(ok: boolean) {
  return vi.fn().mockResolvedValue({ ok, status: ok ? 200 : 500 })
}

describe('ContactForm', () => {
  beforeEach(() => vi.stubGlobal('fetch', fetchMock(true)))
  afterEach(() => vi.unstubAllGlobals())

  it('associates every input with a visible label', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('shows accessible validation errors and does not submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /send message/i }))

    const error = await screen.findByText(/please tell me your name/i)
    expect(error).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true')
    expect(fetch).not.toHaveBeenCalled()
  })

  it('posts valid input to the serverless route and confirms', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(
      screen.getByLabelText('Message'),
      'I would like to talk about a senior frontend role.',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => expect(fetch).toHaveBeenCalledWith('/api/contact', expect.anything()))
    expect(await screen.findByRole('status')).toHaveTextContent(/reached my inbox/i)
  })

  it('surfaces a recoverable error when delivery fails', async () => {
    vi.stubGlobal('fetch', fetchMock(false))
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Message'), 'A message long enough to pass validation.')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(await screen.findByRole('alert')).toBeInTheDocument()
  })
})
