import { describe, expect, it } from 'vitest'
import { contactSchema } from './contact-schema'

const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'I would like to talk about a senior frontend role on our team.',
}

describe('contactSchema', () => {
  it('accepts a well-formed message', () => {
    expect(contactSchema.safeParse(valid).success).toBe(true)
  })

  it('rejects a malformed email', () => {
    expect(contactSchema.safeParse({ ...valid, email: 'not-an-email' }).success).toBe(false)
  })

  it('rejects a message that is too short to be actionable', () => {
    expect(contactSchema.safeParse({ ...valid, message: 'hi' }).success).toBe(false)
  })

  it('rejects a filled honeypot field', () => {
    expect(contactSchema.safeParse({ ...valid, company: 'spam corp' }).success).toBe(false)
  })

  it('accepts an empty honeypot field', () => {
    expect(contactSchema.safeParse({ ...valid, company: '' }).success).toBe(true)
  })

  it('trims surrounding whitespace', () => {
    const parsed = contactSchema.parse({ ...valid, name: '  Ada  ' })
    expect(parsed.name).toBe('Ada')
  })
})
