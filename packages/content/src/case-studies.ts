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
            type: 'p',
            text: 'It is an internal tool, not a customer-facing one. The admin is where our own team manages everything users create on the platform and resolves the problems they run into: supporting the organizations, their events, the financial side, and the questions that come from organizers and participants alike. When support is the product, the people using it are colleagues — which changes what "good" means. Speed and density beat polish, and a wrong answer on screen becomes a wrong answer given to a customer.',
          },
        ],
      },
      {
        id: 'problem',
        heading: 'Problem',
        blocks: [
          {
            type: 'p',
            text: 'The admin frontend did not exist yet. There was an existing product to match in behaviour and expectation, a backend to integrate with, and no established frontend foundation in the new repository. It is still in development: each area is built independently of the others, so the application grows one capability at a time rather than arriving finished.',
          },
          {
            type: 'p',
            text: 'The hard part was not writing screens. A support tool has to expose the whole platform — organizations, events, financials, participants — to people who arrive at it mid-problem, with a customer waiting. Much of the behaviour worth matching had accumulated in the old system over years and was never written down, so the specification was the legacy code and the product itself.',
          },
          {
            type: 'p',
            text: 'Building it section by section makes that harder, not easier. Each area is developed independently, so what holds the application together is convention rather than a single plan: without a shared vocabulary for tables, filters, forms and permissions, independent sections drift into feeling like separate products stitched behind one login. And the foundation had to be laid while feature work was already expected, so anything set early was expensive to reverse.',
          },
        ],
      },
      {
        id: 'role',
        heading: 'My role and ownership',
        blocks: [
          {
            type: 'p',
            text: 'I built the frontend application from the beginning and set up the project. The stack itself was largely inherited: our senior team — which I am part of — had settled it across our other projects, so the decisions made here were the ones underneath that line, about how the application is put together rather than what it is written in.',
          },
          {
            type: 'p',
            text: 'Alongside the code, I am one of the people responsible for how the interface behaves — using the available UI library as the pattern and deciding what a screen does when data is missing, slow, restricted or wrong, which in a support tool is most of the design work. I also worked with the infrastructure team to get CI/CD running on GitHub for the new repository.',
          },
          {
            type: 'p',
            text: 'What later frontend work in that repository stands on — component conventions, folder structure, the shape of the data layer, the pipeline — was set here, and I stayed close to it as other engineers started contributing on top.',
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
              'A GraphQL schema shaped by the previous system. The API was a contract to fit into, not something the new frontend got to design.',
              'A stack already chosen across our other projects. Consistency was the point, so this repository was not the place to relitigate it.',
              'Sections built independently of each other, which puts the weight on shared conventions instead of a single up-front plan.',
              'A foundation that had to be learnable by people who had not built it, which rules out architecture only its author can navigate.',
              'An existing UI library and design conventions, so the pattern layer had to carry them rather than each section re-deciding.',
            ],
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
            text: "Worth saying plainly: almost all of the technology here was pre-defined by our senior team, and adopting it was the right call rather than an interesting one. React and TypeScript were already the team's stack, so the value was consistency — engineers moving between our projects, and patterns that travel with them. Not every decision needs to be a decision.",
          },
          { type: 'h3', text: 'Vite as the build tool' },
          {
            type: 'p',
            text: 'Also inherited, and the part of the inheritance I would have chosen anyway. In a repository where the developer feedback loop is what you pay for every day for years, build speed is an architecture decision rather than a preference.',
          },
          { type: 'h3', text: 'Apollo GraphQL rather than REST with a fetch layer' },
          {
            type: 'p',
            text: 'The API was already GraphQL and Apollo was already the platform standard, so what was open here was how much of the client to lean on. The normalized cache is what earns it: support screens read the same entities from several angles — an organization in a list, in a header, in a detail pane — and normalization means one mutation updates all of them without hand-written invalidation. Types generated from the schema removed a whole class of drift between client and server.',
          },
          {
            type: 'p',
            text: 'The cost is real. The cache is a second source of truth with its own mental model, and its failure mode is not a crash but a stale pane after a mutation — the kind of bug that surfaces in someone else’s feature weeks later. It is also a heavy dependency for screens that fetch once and never change. Worth it for a surface this entity-dense and mutation-heavy; not a default I would carry to a read-only one.',
          },
          { type: 'h3', text: 'Material UI as the base, extended rather than replaced' },
          {
            type: 'p',
            text: 'Building on an existing accessible component set rather than from zero, then deciding where the abstraction stopped: which components wrapped MUI, which were built independently, and how to keep consumers from reaching past that layer. Theming carried the brand so product code never reached for a raw colour or spacing value, and the wrappers narrowed MUI’s very wide prop surface to the few variants the product actually uses — which is what stops twelve subtly different buttons from appearing.',
          },
          { type: 'h3', text: 'The component library and Storybook' },
          {
            type: 'p',
            text: 'Storybook served as both documentation and a development environment: components were built and reviewed in isolation, including the states that are awkward to reach in the running app — loading, empty, error, long content, permission-restricted.',
          },
          {
            type: 'p',
            text: 'The interesting part is the promotion criterion, and with sections built independently it is the main thing keeping them coherent. Something moved into the shared library once it had a third independent consumer and no domain knowledge baked into it; anything that still had to know what an organization or an event was stayed local to its section. Two use cases are a coincidence, and a shared component that understands the domain becomes a place where sections quietly couple to each other.',
          },
          { type: 'h3', text: 'Application structure' },
          {
            type: 'p',
            text: 'Organised by section rather than by file type, with route-based splitting at the section boundary and a shared layer sections may import from but never the reverse. The rule that did the work was the direction of dependency: a section can depend on shared and never on another section, which is what lets each one be built and released without waiting on the rest. Anything two sections genuinely needed either moved down into shared or was lifted into the route composing them. It has held up, with one honest caveat — "shared" attracts things, and keeping it from becoming a second monolith inside the repository takes deliberate pruning.',
          },
          {
            type: 'p',
            text: 'Testing followed the same pragmatism: component behaviour and the shared library were covered first, because that is where a silent break propagates furthest — a shared table used by every section is the highest-leverage thing to hold still. I chose not to test generated GraphQL types or thin presentational wrappers around MUI — those tests assert that a library still works, and they fail for reasons that have nothing to do with the product.',
          },
          {
            type: 'note',
            text: 'Diagram to add: one box-and-arrow of the shape of the system — the internal admin frontend and its independent sections, GraphQL layer, backend services, component library as a shared dependency. Your own drawing, no internal names.',
          },
        ],
      },
      {
        id: 'outcome',
        heading: 'Outcome',
        blocks: [
          {
            type: 'p',
            text: 'The application is in production and in active development, used by our internal team to support organizations, events and the people involved in them. Sections continue to be added independently, and the component library is the foundation they start from — a new section begins with an existing vocabulary instead of re-deciding what a table, a form field or a dialog looks like.',
          },
          {
            type: 'p',
            text: 'I cannot share usage numbers, timelines or team metrics publicly, but I am happy to talk through them.',
          },
        ],
      },
      {
        id: 'lessons',
        heading: 'Lessons and next iteration',
        blocks: [
          {
            type: 'p',
            text: 'The choice that looked conservative and paid off was taking the team’s existing stack wholesale instead of treating a new repository as a licence to re-decide everything. The interesting problems here were never which library to use, and spending the novelty budget elsewhere is what made the section-by-section build workable.',
          },
          {
            type: 'p',
            text: 'The one that looked safe and turned out expensive was leaning on the normalized cache as the default answer for state. It is excellent for server data, and I let it drift into places where a plain fetch or local state would have been clearer. The debugging cost of cache-shaped bugs is paid by whoever touches the section next, not by whoever chose the pattern.',
          },
          {
            type: 'p',
            text: 'What I would decide differently: write the promotion criterion for the shared library down on day one instead of discovering it. Early components moved in because they looked reusable, and a few had to be pulled back out when a second consumer wanted slightly different behaviour. With a free week I would spend it on the seams rather than the surface — make the section/shared boundary fail at build time instead of in review, and cover the awkward support states in Storybook (missing data, restricted permissions, a record in a state nobody expected) so they are designed rather than discovered.',
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
