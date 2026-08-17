/**
 * Vercel serverless function. The only server-side code on the site.
 *
 * Validates with the same Zod schema the form uses, rejects honeypot hits,
 * rate-limits by IP in-memory, then delivers via Resend. No database, no
 * persistence, nothing stored.
 *
 * Environment variables (set in the Vercel dashboard):
 *   RESEND_API_KEY   — from resend.com
 *   CONTACT_TO       — inbox that receives the message
 *   CONTACT_FROM     — verified sender, e.g. site@vcmiranda.me
 */
import { contactSchema } from '../src/lib/contact-schema'

export const config = { runtime: 'edge' }

const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 3
const hits = new Map<string, { count: number; reset: number }>()

function rateLimited(ip: string, now: number): boolean {
  const entry = hits.get(ip)
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip, Date.now())) return json({ error: 'Too many requests' }, 429)

  let payload: unknown
  try {
    payload = await req.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return json({ error: 'Validation failed', issues: parsed.error.issues }, 400)
  }

  // Honeypot: a filled hidden field means a bot. Return 200 so it does not retry.
  if (parsed.data.company) return json({ ok: true }, 200)

  const { name, email, message } = parsed.data
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO
  const from = process.env.CONTACT_FROM

  if (!apiKey || !to || !from) {
    console.error('contact: missing RESEND_API_KEY, CONTACT_TO or CONTACT_FROM')
    return json({ error: 'Mail is not configured' }, 500)
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio contact — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  })

  if (!res.ok) {
    console.error('contact: resend responded', res.status, await res.text())
    return json({ error: 'Delivery failed' }, 502)
  }

  return json({ ok: true }, 200)
}
