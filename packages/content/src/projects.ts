export type ProjectLink = { label: string; href: string }

export type Project = {
  slug: string
  title: string
  /** 1–2 sentences. Used on the card and as the meta description. */
  summary: string
  /** e.g. "ASICS Apps (Race Roster) · 2021–present" */
  context: string
  role: string
  stack: string[]
  featured: boolean
  order: number
  /** True when the write-up deliberately omits employer specifics. */
  confidential: boolean
  links?: ProjectLink[]
  /** GitHub repo name, if public. Drives the live TanStack Query panel. */
  repo?: string
  seo: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
}

export const projects: Project[] = [
  {
    slug: 'event-management-platform',
    title: 'Building a platform frontend from scratch',
    summary:
      'When our internal admin was split out of a monolith, I built its frontend from zero — the structure it grew into, the component library underneath it, and the CI/CD pipeline around it.',
    context: 'ASICS Apps (Race Roster) · 2021–present',
    role: 'Frontend architecture and implementation',
    stack: ['React', 'TypeScript', 'Vite', 'Apollo GraphQL', 'Material UI', 'Storybook'],
    featured: true,
    order: 1,
    confidential: true,
    seo: {
      title: 'Building a platform frontend from scratch',
      description:
        'How I built the frontend of an internal admin platform from zero: the structure, the conventions holding independently built sections together, and the component system that grew with it.',
      ogTitle: 'Building a platform frontend from scratch',
      ogDescription: 'React, TypeScript, Vite, Apollo GraphQL — and the decisions underneath them.',
    },
  },
  {
    slug: 'state-per-microfrontend',
    title: 'Choosing state per microfrontend',
    summary:
      'XState for workflow-driven flows, Redux, React Query, Valtio and Context elsewhere. On how our team evaluated them, why each won where it did, and the heuristic I use to choose.',
    context: 'ASICS Apps (Race Roster) · ongoing',
    role: 'Implementation and technical evaluation',
    stack: ['XState', 'Redux', 'React Query', 'Valtio', 'React Context', 'Architecture'],
    featured: true,
    order: 2,
    confidential: true,
    seo: {
      title: 'Choosing state per microfrontend',
      description:
        'XState, Redux, React Query, Valtio and Context across different microfrontends — why each won where it did, and the heuristic I use to choose.',
      ogTitle: 'Choosing state per microfrontend',
      ogDescription: 'Five state solutions, one selection heuristic.',
    },
  },
  {
    slug: 'nami',
    title: 'Nami — a file manager for people who hit the edges of Finder',
    summary:
      'Dual panes, a synced terminal, git status and remote hosts in one native macOS window, at the speed of the machine underneath.',
    context: 'Personal project',
    role: 'Sole designer and developer',
    stack: ['Tauri 2', 'macOS', 'Interaction design'],
    featured: true,
    order: 3,
    confidential: false,
    repo: 'nami',
    seo: {
      title: 'Nami — a native macOS file manager',
      description:
        'A native macOS file manager built with Tauri 2: dual panes, a synced terminal, git status and remote hosts in one window.',
      ogTitle: 'Nami — a native macOS file manager',
      ogDescription:
        'Dual panes, a synced terminal, git and remote hosts, at the speed of the machine underneath.',
    },
  },
  {
    slug: 'forma',
    title: 'Forma — client management for personal trainers',
    summary:
      'A tool for personal trainers to manage their clients and programme their workouts. In active development.',
    context: 'Personal project',
    role: 'Sole designer and developer',
    stack: ['TypeScript'],
    featured: false,
    order: 4,
    confidential: false,
    repo: 'forma',
    seo: {
      title: 'Forma — client management for personal trainers',
      description:
        'A client-management application for personal trainers, built with TypeScript. In active development.',
      ogTitle: 'Forma — client management for personal trainers',
      ogDescription: 'In active development.',
    },
  },
]

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order)

export const allProjects = [...projects].sort((a, b) => a.order - b.order)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
