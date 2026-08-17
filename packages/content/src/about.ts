export const about = {
  heading: 'About',
  body: [
    'I am a senior frontend engineer in London, Ontario. I have spent nearly five years at ASICS Apps, the team behind Race Roster, working mostly on architecture, design systems and state — the parts of a frontend that decide how easy everything after them is going to be.',
    'I got here indirectly. Before I wrote production code I spent years in project management consulting: delivering enterprise software implementations, training more than a thousand people, and lecturing at a university in Brazil. Then I moved to Canada, retrained at Fanshawe College, and started over as a developer in 2017.',
    'That background shows up in how I work. I am the person who writes the documentation, who reviews the pull request properly, and who wants the component library to have a rule about what belongs in it. I do not think that is separate from engineering — most of what makes a codebase pleasant to work in a year later is decided by whether anyone bothered to explain it.',
  ],
  principles: {
    heading: 'How I work',
    items: [
      {
        title: 'Architecture before abstraction',
        body: 'I would rather establish a convention early than refactor toward one later.',
      },
      {
        title: 'Match the tool to the shape of the state',
        body: 'XState, Redux, React Query, Valtio and Context all run across our microfrontends. Knowing which one a flow actually calls for is worth more than depth in any single one.',
      },
      {
        title: 'Ship it behind a flag',
        body: 'Everything I build goes out behind a LaunchDarkly or Datadog flag with context rules, so rollout is a decision rather than an event.',
      },
      {
        title: 'Explain it',
        body: 'Storybook, documentation, code review, onboarding. It is the part of the job I was doing before I was an engineer.',
      },
    ],
  },
  currently: {
    heading: 'Currently',
    stack: 'React, TypeScript, Remix, Vite, GraphQL, XState, Storybook, Vitest.',
    side: 'Outside work I am building Nami, a native macOS file manager, and Forma, a client-management tool for personal trainers.',
  },
  personal: {
    heading: 'Outside that',
    todo: 'Two lines, no more. Something real and concrete — a hobby, where you are from, something you are bad at. Skip this section entirely rather than writing a generic one; a fake personal detail is worse than none.',
  },
} as const
