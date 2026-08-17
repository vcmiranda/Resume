import { z } from 'zod'

/** Shared by the form (client) and the serverless route (server). One schema. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please tell me your name.').max(80),
  email: z.string().trim().email('That does not look like an email address.').max(160),
  message: z
    .string()
    .trim()
    .min(20, 'A little more detail helps — 20 characters minimum.')
    .max(4000, 'That is longer than 4000 characters.'),
  /** Honeypot. Bots fill hidden fields; humans never see it. */
  company: z.string().max(0, 'Rejected.').optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
