export type ResumeRole = {
  title: string
  company: string
  location: string
  dates: string
  bullets: string[]
}

export const resume = {
  heading: 'Résumé',
  intro: 'The same document I send with applications. Last updated August 2026.',
  downloadLabel: 'Download PDF',
  summary:
    'Senior frontend engineer with nine years building web applications, the last seven in React, currently at ASICS Apps (Race Roster). Built a shared component library from scratch and maintain a 40+ component library and Storybook. Implemented state management across microfrontends following a team evaluation, using XState for workflow-driven flows alongside Redux, React Query, Valtio, and Context.',
  skills: [
    { label: 'Languages and frameworks', value: 'TypeScript, JavaScript, React, Remix (SSR), Node.js' },
    { label: 'State and data', value: 'XState, Redux, React Query, Valtio, React Context, GraphQL (Apollo), REST' },
    { label: 'Design systems and UI', value: 'Storybook, Radix UI, Material UI, semantic HTML, responsive UI' },
    { label: 'Testing', value: 'Vitest, Jest, React Testing Library' },
    { label: 'Build and delivery', value: 'Vite, Docker, GitHub Actions, LaunchDarkly, Datadog, Lighthouse, Git' },
    { label: 'AI-assisted engineering', value: 'Claude Code, Cursor, Model Context Protocol (MCP), agent skills, AGENTS.md and project rules' },
  ],
  roles: [
    {
      title: 'Senior Frontend Developer',
      company: 'ASICS Apps (Race Roster)',
      location: 'London, Ontario',
      dates: 'Nov 2021 – Present',
      bullets: [
        'Built the frontend of a standalone event-management admin platform from scratch after the monolith was split, selecting the stack and owning the architecture.',
        'Built a shared component library from the ground up and maintain a 40+ component library and Storybook.',
        'Implemented state management across microfrontends following a team evaluation, applying XState to workflow-driven flows.',
        'Ship every feature behind LaunchDarkly and Datadog feature flags with context rules controlling staged rollout.',
        'Established AI-assisted development workflows, authoring repository-level agent guidance in AGENTS.md and project rules.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'binnj, inc.',
      location: 'London, Ontario',
      dates: 'Jan 2019 – Nov 2021',
      bullets: [
        'Built single-page applications from scratch with React, React Router and Redux, and maintained existing AngularJS applications.',
        'Ran client-facing proofs of concept to test UX changes before build.',
      ],
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Sport-Travel Inc.',
      location: 'London, Ontario',
      dates: 'Sep 2017 – Dec 2018',
      bullets: [
        'Built RESTful API endpoints with Node.js and Express, consumed by Vue.js web and mobile clients.',
        'Integrated Stripe for payment processing.',
      ],
    },
    {
      title: 'Project Management Consultant',
      company: 'Prosperi Technology',
      location: 'Vitória, Brazil',
      dates: 'Aug 2012 – Mar 2016',
      bullets: [
        'Delivered enterprise project-management implementations, generating $160,000+ in revenue and reducing client change requests by 33%.',
        'Trained 1,000+ professionals in project-management software.',
      ],
    },
  ] satisfies ResumeRole[],
  education: [
    { school: 'Fanshawe College', credential: 'Internet Applications and Web Development', location: 'London, ON', dates: '2016 – 2018' },
    { school: 'Vila Velha University', credential: 'MBA, Project Management', location: 'Vitória, Brazil', dates: '2007 – 2008' },
    { school: 'Vila Velha University', credential: 'BBA, Business Management', location: 'Vitória, Brazil', dates: '2001 – 2006' },
  ],
} as const
