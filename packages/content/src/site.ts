/**
 * Single source of truth for every editable string on the site.
 * No user-facing copy is hard-coded in a component. If you want to change
 * wording, change it here.
 */

export const site = {
  name: 'Vitor Miranda',
  title: 'Senior Frontend Engineer',
  email: 'vcmiranda@outlook.com',
  canonicalUrl: 'https://www.vcmiranda.me',
  githubUser: 'vcmiranda',
  resumePath: '/Vitor_Miranda_Software_Engineer_Resume.pdf',

  social: {
    github: 'https://github.com/vcmiranda',
    linkedin: 'https://www.linkedin.com/in/vcmiranda',
  },

  /** Anchors the résumé, LinkedIn and this site to the same positioning. */
  positioning: 'Senior frontend engineer. I build the architecture underneath the interface.',

  hero: {
    supporting:
      'Nine years in web development, nearly five of them at ASICS Apps building Race Roster. I work on the parts that get complicated — greenfield application architecture, design systems, and choosing the right state model for a given flow rather than the one we already had.',
    primaryCta: { label: 'View my work', href: '/work' },
    secondaryCta: { label: 'Download résumé', href: '/resume' },
  },

  /** Plain text. No logos, no bars, no percentages. */
  credibility: [
    'React',
    'TypeScript',
    'Remix',
    'Vite',
    'GraphQL',
    'XState',
    'Storybook',
    'Vitest',
  ],

  featuredWork: {
    heading: 'Selected work',
    intro:
      'Three projects, in enough detail to be useful. Two are from my work at ASICS Apps, described without internal specifics; one is my own.',
  },

  aboutPreview: {
    heading: 'A short version',
    body: [
      'I came to engineering after years of consulting and teaching — I trained more than a thousand people in software and lectured at a university before I wrote production code for a living.',
      'It is why code review, documentation and onboarding are not chores to me. Explaining things carefully is the part of the job I was doing first.',
    ],
    cta: { label: 'More about how I work', href: '/about' },
  },

  contact: {
    heading: 'Get in touch',
    body: 'I work on the parts of a frontend that get complicated: architecture, design systems, and choosing the right state model for the problem. If you want to discuss that work, email is the fastest way to reach me.',
    formNote: 'Prefer a form? This one reaches the same inbox.',
    successMessage: "Thanks — that reached my inbox. I'll reply within a day or two.",
    errorMessage: 'Something went wrong sending that. Email me directly and I will pick it up.',
  },

  footer: {
    builtWith: 'Built with React, TypeScript and Tailwind. Prerendered to static HTML.',
    privacy: 'No cookies, no tracking, no analytics scripts.',
  },

  /** Shown on case studies written without employer specifics. */
  confidentialNote:
    'Written without internal specifics: no screenshots, product data, or metrics belonging to my employer.',
} as const

export type Site = typeof site
