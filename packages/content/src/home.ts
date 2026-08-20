/**
 * One-page homepage content. Anything that only exists on the landing page
 * lives here; roles come from resume.ts and cards from projects.ts so no copy
 * is duplicated across files.
 */

export const home = {
  hero: {
    kicker: 'London, Ontario · Remote across Canada',
    note: 'Open to senior frontend roles — last updated August 2026.',
    facts: [
      { label: 'Role', value: 'Senior Frontend Developer' },
      { label: 'Company', value: 'ASICS Apps (Race Roster)' },
      { label: 'Since', value: 'November 2021' },
      { label: 'Focus', value: 'Architecture · design systems · state' },
    ],
    portrait: { src: '/vitor-miranda.png', alt: 'Vitor Miranda' },
  },

  sections: {
    work: { index: '01', label: 'Two projects' },
    experience: { index: '02', label: 'Nine years' },
    stack: { index: '03', label: 'What I actually use' },
    notes: { index: '04', label: 'Writing' },
    about: { index: '05', label: 'The short version' },
    contact: { index: '06', label: 'Contact' },
  },

  work: {
    heading: 'Selected work',
    intro:
      'One is from my work at ASICS Apps, described without internal specifics; one is my own. Written as decisions rather than screenshots.',
    footnote:
      'Also in progress: Forma, a client-management tool for personal trainers. Too early to be a case study, honest enough to mention.',
  },

  stack: {
    heading: 'Stack',
    groups: [
      { name: 'Languages & frameworks', items: ['TypeScript', 'JavaScript', 'React', 'Remix (SSR)', 'Node.js'] },
      { name: 'State & data', items: ['XState', 'Redux', 'React Query', 'Valtio', 'React Context', 'GraphQL (Apollo)', 'REST'] },
      { name: 'Design systems & UI', items: ['Storybook', 'Radix UI', 'Material UI', 'Stitches', 'Semantic HTML', 'Responsive UI'] },
      { name: 'Testing', items: ['Vitest', 'Jest', 'React Testing Library'] },
      { name: 'Build & delivery', items: ['Vite', 'Docker', 'GitHub Actions', 'LaunchDarkly', 'Datadog', 'Lighthouse', 'Git'] },
      { name: 'AI-assisted development', items: ['Claude Code', 'Cursor', 'MCP', 'AGENTS.md'] },
    ],
  },

  notes: {
    heading: 'Notes',
    items: [
      {
        date: 'Aug 2026',
        title: 'What a component library needs before its first component',
        blurb:
          'A promotion rule. Without one, a shared library becomes a folder — and the interesting part of a design system is deciding what does not belong in it.',
        readingTime: '6 min read',
        href: '/work/event-management-platform',
      },
    ],
  },

  about: {
    heading: 'About',
    body: [
      'I have spent nearly five years at ASICS Apps, the team behind Race Roster, working mostly on architecture, design systems and state — the parts of a frontend that decide how easy everything after them is going to be.',
      'I got here indirectly. Before I wrote production code I spent years in project-management consulting — delivering enterprise implementations, training more than a thousand people, and lecturing at a university in Brazil. Then I moved to Canada, retrained at Fanshawe College, and started over as a developer in 2017.',
      'That background shows up in how I work. I am the person who writes the documentation, reviews the pull request properly, and wants the component library to have a rule about what belongs in it. Most of what makes a codebase pleasant a year later is decided by whether anyone bothered to explain it.',
    ],
    principlesHeading: 'How I work',
    principles: [
      {
        title: 'Architecture before abstraction',
        body: 'I would rather establish a convention early than refactor toward one later.',
      },
      {
        title: 'Pick the tool the problem needs',
        body: 'I have shipped XState, Redux, React Query, Valtio and Context across microfrontends. Knowing which one a flow calls for beats depth in any single one.',
      },
      {
        title: 'Ship it behind a flag',
        body: 'Everything goes out behind a feature flag with context rules, so rollout is a decision rather than an event.',
      },
      {
        title: 'Explain it',
        body: 'Storybook, documentation, code review, onboarding. It is the part of the job I was doing before I was an engineer.',
      },
    ],
  },

  contact: {
    heading: "Let's talk",
    body:
      'I am open to senior frontend roles in Canada or remote — architecture, design systems, or anything where the interface is genuinely hard. If you are hiring, or you just want to argue about state machines, email is the fastest way to reach me.',
    links: [
      { label: 'Email', value: 'vcmiranda@outlook.com', href: 'mailto:vcmiranda@outlook.com' },
      { label: 'GitHub', value: 'github.com/vcmiranda', href: 'https://github.com/vcmiranda' },
      { label: 'LinkedIn', value: 'linkedin.com/in/vcmiranda', href: 'https://www.linkedin.com/in/vcmiranda' },
      { label: 'Location', value: 'London, ON — remote across Canada', href: '#contact' },
    ],
  },
} as const

export type Home = typeof home
