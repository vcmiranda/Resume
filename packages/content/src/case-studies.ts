/**
 * Case-study bodies as typed data rather than MDX — keeps every editable string
 * in /content and avoids adding a markdown pipeline the site does not need.
 *
 * `todo` blocks render as a visible placeholder in development and are stripped
 * from production builds, so nothing unfinished can ship by accident.
 * See CaseStudyBody.tsx.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'h3'; text: string }
  | { type: 'note'; text: string }
  | { type: 'todo'; text: string }

export type Section = { id: string; heading: string; blocks: Block[] }

export type CaseStudy = {
  slug: string
  sections: Section[]
}

/** Fixed narrative order for every case study. */
export const SECTION_ORDER = [
  'Context',
  'Problem',
  'My role and ownership',
  'Constraints',
  'Approach and technical decisions',
  'Outcome',
  'Lessons and next iteration',
] as const

export const caseStudies: CaseStudy[] = [
  {
    slug: 'event-management-platform',
    sections: [
      {
        id: 'context',
        heading: 'Context',
        blocks: [
          {
            type: 'p',
            text: 'ASICS Apps builds Race Roster, a race-registration platform used by event organizers and athletes. As part of a platform upgrade, the system was split into separate parts, each with its own repository and deployment. The admin section became its own system.',
          },
          {
            type: 'todo',
            text: 'One sentence on what the admin section does for organizers — creating events, managing registrations, reporting? Keep it to what is publicly evident from the product. Also: what drove the split — release independence, team autonomy, tech debt, scaling?',
          },
        ],
      },
      {
        id: 'problem',
        heading: 'Problem',
        blocks: [
          {
            type: 'p',
            text: 'The admin frontend did not exist yet. There was an existing product to match in behaviour and expectation, a backend to integrate with, and no established frontend foundation in the new repository.',
          },
          {
            type: 'todo',
            text: 'What made this genuinely hard? Domain complexity of event management, migrating users without disruption, matching legacy behaviour, timeline? A case study with no difficulty in it reads as a chore log.',
          },
        ],
      },
      {
        id: 'role',
        heading: 'My role and ownership',
        blocks: [
          {
            type: 'p',
            text: 'I built the frontend application from scratch and owned its architecture. I selected the stack and set up the project, then developed the application and its component library as it grew.',
          },
          {
            type: 'todo',
            text: 'Team context: how many frontend engineers, and were you the first or only one at the start? "I was the first frontend engineer on the new repo" is a strong, specific sentence if it is true.',
          },
        ],
      },
      {
        id: 'constraints',
        heading: 'Constraints',
        blocks: [
          {
            type: 'todo',
            text: 'Pick the two or three that were real: an existing GraphQL schema shaped by the previous system; feature parity with the section being replaced; a small team, so the foundation had to be learnable by people who had not built it; timeline pressure from the wider split; existing brand and design conventions.',
          },
        ],
      },
      {
        id: 'approach',
        heading: 'Approach and technical decisions',
        blocks: [
          { type: 'h3', text: 'React and TypeScript' },
          {
            type: 'p',
            text: "The team's existing stack, so the choice was about consistency and hiring rather than novelty. Not every decision needs to be interesting.",
          },
          { type: 'h3', text: 'Vite over the alternatives' },
          {
            type: 'p',
            text: 'For a greenfield repository where the developer feedback loop is the thing you pay for every day for years, build speed is an architecture decision, not a preference.',
          },
          { type: 'h3', text: 'Apollo GraphQL rather than REST with a fetch layer' },
          {
            type: 'todo',
            text: 'Was the API already GraphQL, or was that decided here? What did the normalized cache buy, and what did it cost? Be honest about the cost — every senior reader knows Apollo has one.',
          },
          { type: 'h3', text: 'Material UI as the base, extended rather than replaced' },
          {
            type: 'p',
            text: 'Building on an existing accessible component set rather than from zero, then deciding where the abstraction stopped: which components wrapped MUI, which were built independently, and how to keep consumers from reaching past that layer.',
          },
          { type: 'h3', text: 'The component library and Storybook' },
          {
            type: 'p',
            text: 'Storybook served as both documentation and a development environment. The interesting part is the promotion criterion — what is general enough to move into the shared library versus what stays local to a feature.',
          },
          {
            type: 'todo',
            text: 'Application structure: feature folders, route-based splitting, a shared/domain boundary? What convention did you set, and did it hold up? Also what you chose not to test, and why.',
          },
          {
            type: 'note',
            text: 'Diagram to add: one box-and-arrow of the shape of the system — admin frontend, GraphQL layer, backend services, component library as a shared dependency. Your own drawing, no internal names.',
          },
        ],
      },
      {
        id: 'outcome',
        heading: 'Outcome',
        blocks: [
          {
            type: 'p',
            text: 'The application shipped and is in production, serving event organizers. The component library became the foundation the frontend work builds on.',
          },
          {
            type: 'todo',
            text: 'Add whatever you can source: number of screens or modules, time from empty repo to first production release, engineers now working in it. If you have nothing shareable, say so plainly — "I cannot share usage numbers publicly, but I am happy to talk through them" costs nothing and reads as trustworthy.',
          },
        ],
      },
      {
        id: 'lessons',
        heading: 'Lessons and next iteration',
        blocks: [
          {
            type: 'todo',
            text: 'The most valuable section here and the one candidates skip. What would you decide differently now? Which decision looked risky and turned out fine, or looked safe and turned out expensive? What would you change with a free week? A senior reader trusts a case study with a real regret in it.',
          },
        ],
      },
    ],
  },

  {
    slug: 'state-per-microfrontend',
    sections: [
      {
        id: 'context',
        heading: 'Context',
        blocks: [
          {
            type: 'p',
            text: 'Our frontend is split across multiple microfrontends, each owned and deployed independently. That structure means state management does not have to be a single global decision — each surface can use what suits it, at the cost of consistency across the whole.',
          },
          { type: 'todo', text: 'How many microfrontends? One number, and the claim becomes concrete.' },
        ],
      },
      {
        id: 'problem',
        heading: 'Problem',
        blocks: [
          {
            type: 'p',
            text: 'Flows with branching paths, asynchronous steps that can fail, back-navigation, and states that should not be reachable are exactly where ad-hoc state management stops scaling. Every guard becomes a boolean, every boolean multiplies the state space, and eventually the bugs are combinations nobody enumerated.',
          },
          {
            type: 'todo',
            text: 'What triggered the evaluation? A flow that had become unmanageable, a new microfrontend starting fresh, or a bug class you kept hitting?',
          },
        ],
      },
      {
        id: 'role',
        heading: 'My role and ownership',
        blocks: [
          {
            type: 'p',
            text: 'I implemented the XState workflows in our React applications, following a team evaluation of the options.',
          },
          {
            type: 'todo',
            text: 'Be precise: did you run the evaluation, contribute to it, or implement its outcome? And which of Redux, React Query, Valtio and Context did you personally implement? "I implemented the outcome of a team evaluation" is still a strong sentence.',
          },
        ],
      },
      {
        id: 'constraints',
        heading: 'Constraints',
        blocks: [
          {
            type: 'ul',
            items: [
              'A team that has to maintain this, so novelty has a real cost',
              'Multiple microfrontends, so a choice made in one should not force the others',
              'Existing code in existing tools — nothing greenfield',
            ],
          },
          {
            type: 'todo',
            text: 'Any of: bundle size, SSR compatibility, devtools and debuggability, testability?',
          },
        ],
      },
      {
        id: 'approach',
        heading: 'Approach and technical decisions',
        blocks: [
          { type: 'h3', text: 'Why XState won for workflow-driven flows' },
          {
            type: 'todo',
            text: 'Which of these were the actual reasons: making invalid states unrepresentable, the statechart as a shared artifact between engineering and product, testability of transitions independent of the UI, the visualizer, async invocation and cancellation, guards and hierarchical states?',
          },
          { type: 'h3', text: 'Why not XState everywhere' },
          {
            type: 'p',
            text: 'The most persuasive part of the argument. The honest answer — learning curve, verbosity for simple cases, and the fact that most state is not a workflow — is what separates an engineer from an advocate.',
          },
          { type: 'h3', text: 'React Query for server state' },
          {
            type: 'p',
            text: 'Server state and client state are different problems. A lot of historical Redux complexity came from using a client-state tool to cache server data. Naming that distinction out loud changes how the rest of the decisions read.',
          },
          { type: 'h3', text: 'Redux, Valtio and Context where each fits' },
          {
            type: 'p',
            text: 'Redux where it was already the right answer: large shared client state, established devtools workflow, existing team fluency. Valtio where the ceremony was not worth it — proxy-based mutable state for local, self-contained cases. Context for what it is actually for: dependency injection of stable values, not state management.',
          },
          { type: 'h3', text: 'The selection heuristic' },
          {
            type: 'p',
            text: 'Is this server data, shared client state, a workflow with rules about what can happen next, or just a value that needs to reach a few components? Four questions, four answers.',
          },
          {
            type: 'note',
            text: 'Diagram to add: a statechart of an illustrative multi-step flow — a generic registration wizard with validation, an async submit that can fail, retry and back-navigation. Draw it as a teaching example, not your employer’s machine.',
          },
        ],
      },
      {
        id: 'outcome',
        heading: 'Outcome',
        blocks: [
          {
            type: 'todo',
            text: 'Pick what is true: the flow shipped and the state model held; a class of bug stopped occurring; the statechart became a shared reference in team conversations; onboarding got easier because the machine documented the flow.',
          },
        ],
      },
      {
        id: 'lessons',
        heading: 'Lessons and next iteration',
        blocks: [
          {
            type: 'todo',
            text: 'Would you use XState v5 differently? Is there a flow you would migrate now, or one you would migrate away from? Where has per-microfrontend freedom cost you consistency? What would you standardise if you started over?',
          },
        ],
      },
    ],
  },

  {
    slug: 'nami',
    sections: [
      {
        id: 'context',
        heading: 'Context',
        blocks: [
          {
            type: 'p',
            text: 'Finder is fine until it is not. If you work across local directories, git repositories and remote hosts in the same hour, you end up with Finder, a terminal, a git client and an SFTP app all open, all showing different views of overlapping things.',
          },
        ],
      },
      {
        id: 'problem',
        heading: 'Problem',
        blocks: [
          {
            type: 'p',
            text: 'File management, terminal, version control and remote access are one workflow served by four applications, none of which knows what the others are showing.',
          },
          {
            type: 'todo',
            text: 'Your own trigger. The specific moment you decided to build it is the best opening line this case study can have — what were you actually doing when Finder failed you?',
          },
        ],
      },
      {
        id: 'role',
        heading: 'My role and ownership',
        blocks: [
          {
            type: 'p',
            text: 'Sole designer and developer. Every decision — product, interaction, visual, architectural — is mine, which is the point of including it here.',
          },
        ],
      },
      {
        id: 'constraints',
        heading: 'Constraints',
        blocks: [
          {
            type: 'ul',
            items: [
              'It has to feel native. A file manager that feels like a web page in a window has already lost.',
              'It has to stay fast on large directories, which rules out naive rendering.',
              'Dense information — path, size, permissions, git status, selection, remote state — in a layout that stays readable.',
              'Keyboard-first. Anyone who wants a dual-pane file manager navigates by keyboard.',
              'Built in spare time, so scope discipline is a constraint, not a preference.',
            ],
          },
        ],
      },
      {
        id: 'approach',
        heading: 'Approach and technical decisions',
        blocks: [
          { type: 'h3', text: 'Tauri 2 over Electron' },
          {
            type: 'todo',
            text: 'State the actual reasoning — binary size, memory footprint, the system webview, Rust for filesystem operations — and publish the numbers. Tauri-versus-Electron binary size and memory are things you can measure yourself, and they would be the only hard performance figures anywhere in your application materials.',
          },
          { type: 'h3', text: 'The dual-pane model' },
          {
            type: 'p',
            text: 'Two panes rather than tabs or a sidebar, because comparison and movement between locations is the core operation.',
          },
          { type: 'h3', text: 'The synced terminal' },
          {
            type: 'todo',
            text: 'Does the terminal follow the active pane’s directory, does the pane follow the terminal’s working directory, or both? The bidirectional case is genuinely hard and worth explaining — this is your most interesting interaction decision.',
          },
          { type: 'h3', text: 'Git status without clutter' },
          {
            type: 'p',
            text: 'Surfacing repository state in a list already carrying five other pieces of information per row is a typography and information-hierarchy problem before it is an engineering one.',
          },
          {
            type: 'todo',
            text: 'Remote hosts: which protocol, and how do you handle latency in a UI expected to feel instant — optimistic rendering, skeletons, prefetch? And keeping it fast: virtualised lists, work in Rust rather than the webview, debounced watchers, incremental loading?',
          },
          {
            type: 'note',
            text: 'Screenshots required: two or three, light and dark, well-cropped, showing dual panes with the terminal open and git status visible. Without a visual this case study cannot do its job.',
          },
        ],
      },
      {
        id: 'outcome',
        heading: 'Outcome',
        blocks: [
          {
            type: 'todo',
            text: 'Current state honestly — usable daily, or alpha? Then measure: cold start, time to render a 10,000-file directory, memory at rest, binary size. These are easy to obtain, entirely yours to publish, and would be the only hard performance numbers in your whole application.',
          },
        ],
      },
      {
        id: 'lessons',
        heading: 'Lessons and next iteration',
        blocks: [
          {
            type: 'todo',
            text: 'What surprised you about Tauri 2? What did you over-build? What is next — file previews, tabs, plugin support, a proper release?',
          },
        ],
      },
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
