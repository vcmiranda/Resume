# Phases 4–6 — Portfolio Website: Strategy, Copy, and Build Plan

**Constraint that shapes everything here:** you're applying this week. A full rebuild takes two to three weeks. So this document runs on **two tracks**:

- **Track A — the 48-hour triage.** The minimum that stops the site from actively costing you the interview. Do this before you submit.
- **Track B — the rebuild.** The real thing, built after you apply, ready in time for the first-round conversation (and useful for every application after this one).

Do not delay the application for Track B. But do not submit with the site as it stands either — for a team whose product *is* a marketing website, it's a work sample whether you intend it to be or not.

---

# PART ONE — Website audit

## What I found

`vcmiranda.me` is a Vue single-page application (source: `github.com/vcmiranda/Resume`) with a full-viewport hero, then About → Contact Details → Experience → Education → Skills → contact form. Nothing renders without JavaScript; the raw HTML serves only *"We're sorry but personalresume doesn't work properly without JavaScript enabled."*

### The four problems, in order of damage

**1. It is factually wrong about your career.** It lists **binnj as your current job** — you left in November 2021. **ASICS Apps does not appear anywhere on the site.** Your five most recent and most relevant years are invisible, and the page instead presents a 2021 snapshot as current. It also dates Sport-Travel as *May 2017*, where your résumé and LinkedIn both say September 2017.

This is the most serious issue and it isn't a design problem. A recruiter who notices it concludes one of two things: you don't maintain your own public surface, or your dates aren't reliable. Both are worse than having no website.

**2. It's a résumé, not a portfolio.** There is **no projects section at all**. Not a weak one — none. The site's entire job is to answer "what has this person built and personally owned," and it answers with a duplicate of your CV. For the Expansion role specifically, a hiring manager arrives looking for evidence of craft and leaves with a bulleted work history they already had.

**3. The positioning is generic and undersells you.** *"I'm a Canada based full-stack web developer, creating awesome and effective websites for companies of all sizes around the globe."* — This describes a freelancer available for hire, not a senior engineer at a global brand. "Companies of all sizes around the globe" isn't supported by your history and reads as filler. "Awesome and effective" is the kind of phrase that makes a craft-focused reviewer stop reading.

**4. The visual direction doesn't match the seniority or the role.** a ligature-based icon font — `keyboard_arrow_down` and `cloud_download` appear as literal text in the page's extracted content, a template-derived layout, a full-viewport hero with a scroll-prompt chevron, a contact form with SUBMIT/CLEAR buttons, and Facebook and Twitter icons in the social row. It reads as a competent 2019 bootcamp-era portfolio. You're applying to a team that says *"we want to make every pixel count."*

### What to retain

| Keep | Why |
|---|---|
| The domain `vcmiranda.me` | Short, personal, already indexed. Don't change it. |
| The four-section mental model (Home / About / Résumé / Contact) | The instinct is right; it just needs Work added and everything else re-weighted. |
| A downloadable résumé | Genuinely useful. Keep it, make it prominent, keep it current. |
| Contact details being easy to find | Correct call. Refine the presentation. |
| The GitHub and LinkedIn links | Keep. |

### What to remove or simplify

| Remove | Why |
|---|---|
| Facebook and Twitter icons | Neither supports the hire. Two fewer ways to leave the page. |
| The contact form | It's the highest-effort, lowest-trust way to reach you, and it needs a backend you don't need to own. Recruiters email. |
| The full-viewport hero and scroll-chevron | Costs you the entire first screen — the ten seconds that matter most — to show a name you already put in the tab title. |
| The full duplicated work history on the homepage | Move to a dedicated page. The homepage should sell, not archive. |
| Material Design icon font | Ligature-based icon fonts are an accessibility and flash-of-unstyled-text liability. Use inline SVG. |
| The Skills list as prose bullets ("Front end development - HTML, CSS (Bootstrap), Javascript, JQuery") | jQuery, Gulp, Photoshop, MS Project, Oracle and Azure on the same list as React actively date you. |
| The Peer Tutor, Microsoft Innovation Center, UCL and Concremat entries | Keep them on LinkedIn where depth is free. On a portfolio they dilute. |
| Phone number displayed publicly | See §6 — you're published on a scraped surface. Email is enough. |

### What's outdated, generic, or not helping

- **Outdated:** the entire employment picture, the skills list, the framing as "full-stack web developer."
- **Generic:** "awesome and effective websites," "companies of all sizes around the globe," "Hard-working Web Developer," "in the least amount of time" (which reads as speed-over-quality — the opposite of the signal you want).
- **Not helping:** *"Solid project management background"* in the second sentence of your About. It's true, but leading with it on a frontend portfolio invites exactly the career-changer doubt you want to close down.

### What's missing

1. **Projects. Any projects.** The single biggest gap.
2. **Case studies** showing decisions, trade-offs, and outcomes — not just screenshots.
3. **Any evidence of visual or interaction craft.**
4. **A clear, current positioning statement.**
5. **Server-rendered content** — nothing is indexable or readable without JS.
6. **A Featured/most-recent employer** — no ASICS anywhere.
7. **Anything clickable and inspectable** — no live demos, no repo links from the site.

### Does the visual direction match the seniority and role?

**No.** And I want to be precise about why, because "make it look better" isn't actionable.

The current site's problem isn't that it's ugly — it's that it makes no visible decisions. Default template spacing, a generic sans at default weights, an icon font, centre-aligned everything, a stock hero. For most engineering roles this is neutral. For **this** role it's a negative signal, because the JD asks for *"understanding of design fundamentals like typography, layout, balance, and proportion"* and your site is the only place they can check.

The good news: the fix is not "become a designer." It's restraint plus deliberate typography plus real spacing discipline. A near-monochrome, well-set, fast, text-forward site with three strong case studies will outperform 90% of animated portfolios for this audience — because it demonstrates editorial judgment, which is what "taste" actually means at a company like Stripe.

---

# PART TWO — Project selection

## Ranked, strongest to weakest for this role

| Rank | Project | What it proves | Feature? |
|---|---|---|---|
| 1 | **Event-management admin platform** (ASICS, greenfield) | Architecture ownership at senior scope; stack selection; building a real system from zero | ✅ Case study |
| 2 | **State architecture across microfrontends** (ASICS) | Direct hit on the JD's "highly complex interactive tools, including state management"; engineering judgment | ✅ Case study |
| 3 | **Nami** — macOS file manager, Tauri 2 | Craft, performance obsession, product taste, ambition beyond the day job; native/systems range | ✅ Case study |
| 4 | **`nesto`** — React 19 mortgage SPA | The only fully public, live, inspectable web artifact you have. Modern stack, i18n, tests, published Storybook | ⚠️ Case study **only if cleared** |
| 5 | **Forma** — trainer client-management SaaS | Product thinking, in-progress work | ➖ One line in About, not a case study |
| 6 | `SportsTripPlanner`, `Grade4Us`, `list-data`, `BIBlog_VanillaJS`, `S-expression-calculator` | Vue/vanilla coursework, 2018-era | ❌ Exclude. Archive on GitHub |
| 7 | Forked repos (`generative-ai-for-beginners`, `api-documentation`, `node-js-sample`) | Nothing | ❌ Exclude |

## The four featured projects, in detail

### 1. Event-management admin platform — ASICS Apps (Race Roster)

**What it proves:** you can be handed a greenfield frontend for a system being carved out of a monolith, choose the stack, own the architecture, and ship it.

**Hiring criteria it supports:** seniority and scope (the levelling question); *"build beautiful, best-in-class end-user experiences to solve complex problems"*; *"utilize, maintain, and extend our design systems"* (the component library lives inside this story).

**Worth featuring:** the split-from-monolith context and why a separate frontend was the right call; the stack-selection reasoning (why Vite, why Apollo over REST, why Material UI rather than building from zero — and where you broke out of MUI); how the component library grew alongside the app to 40+ components; how Storybook served both documentation and development; how you kept the app coherent as it grew.

**What you need to provide:** the number of screens or modules `[ADD METRIC]`; team size and your role in it; one architectural decision you'd defend and one you'd change; whether you can share *any* visual — even a redacted or redrawn wireframe.

**Sensitivity:** **high.** This is internal admin tooling. **No screenshots, no real data, no customer names, no internal metrics, no code.** Write it as an architecture narrative with your own diagram of the shape of the system. This is completely standard and hiring managers read these constantly — a well-written architecture story with no screenshots is more impressive than a screenshot with no thinking.

### 2. Choosing state per microfrontend — ASICS Apps (Race Roster)

**What it proves:** you've worked at the scale where state management stops being a default and becomes a decision, and you can articulate the trade-offs.

**Hiring criteria it supports:** *"Experience building highly complex interactive tools, including state management"* — the most direct match in your entire body of work.

**Worth featuring:** the evaluation you and the team ran; what made XState win for workflow-driven flows (branching, interruption, invalid-state prevention, testability, visualisability); why Redux, React Query, Valtio and Context were each right elsewhere — React Query for server state is a genuinely different axis from client state, and saying so out loud demonstrates the distinction many candidates miss; what you'd choose today; what the microfrontend boundary made easy and what it made hard.

**What you need to provide:** the number of microfrontends `[ADD METRIC]`; which flow the XState machine drove `[NEED CONFIRMATION]`; whether you can publish a **generic, non-proprietary** statechart diagram of a comparable flow (a multi-step registration wizard with validation, retries and back-navigation, built as an illustrative example rather than your employer's actual machine).

**Sensitivity:** **medium.** Talk about patterns and reasoning, not your employer's business logic. An illustrative statechart you draw yourself is safe and is the single best visual asset on your whole site.

**Format note:** consider publishing this as a *writing* piece rather than a project card — an architecture decision record. It's the format senior engineers respect most, and it doubles as the link you attach to the recruiter follow-up in Phase 3, message C.

### 3. Nami — a native macOS file manager

**What it proves:** you build things because the tooling isn't good enough, you care about perceived performance, and you'll go outside the browser to get it right. This is the closest thing you have to a *craft* artifact.

**Hiring criteria it supports:** *"creative technology experience"* (named in the minimums, alongside web frontend); design fundamentals; interaction design — a dual-pane file manager is dense, keyboard-driven, interaction-heavy UI; performance.

**Worth featuring:** why Tauri 2 over Electron (binary size, memory, native feel — you have an opinion here and it's a good one); the dual-pane and synced-terminal interaction model and what problem it solves; how git status and remote hosts are surfaced without clutter; keyboard-first navigation; how you keep it feeling instant on large directories; the information-density problem — a file manager is a hard layout problem and you should say so.

**What you need to provide:** **screenshots.** Two or three, well-cropped, in both light and dark. This is non-negotiable — an unverifiable project is weaker than no project. Plus: current state (usable? alpha?), whether the repo can go public, and whether there's a downloadable build.

**Sensitivity:** none. It's yours.

**Honest caveat:** it's a desktop app, so it doesn't prove *web* craft. Present it as evidence of interaction thinking and performance instinct, not as a web sample. Pair it with a web artifact.

### 4. `nesto` — React 19 mortgage-rate application ⚠️ decision required

**What it proves:** current-stack fluency that a reviewer can verify in thirty seconds — React 19, TypeScript, Vite, Tailwind, React Router 7, i18next, Vitest, Testing Library, ESLint/Prettier, TypeScript strict mode, a **published Storybook**, a **live deploy**, dark/light mode, form validation, and a README with installation, structure, deployment and Lighthouse instructions.

**Hiring criteria it supports:** *"writing clear, elegant code in a team environment"* — this is the only artifact where they can actually check; design-system practice via Storybook; testing; and, notably, an **application flow with state** `[NEED CONFIRMATION: is it multi-step?]`, which rhymes with the Expansion pod's interactive tools.

**Why it's ranked below three ASICS/personal items despite being your best public code:** the clearance question is unresolved.

**The decision you need to make today, before applying:**

- **If it was a take-home for the company Nesto and you're free to share it** (many companies permit this; some explicitly forbid it): feature it. It's your strongest inspectable web sample and I'd put it second on the site, not fourth.
- **If it was a take-home and you're *not* free to share it:** make the repo **private now**, and take down the two Vercel deployments. A publicly hosted take-home using a company's name and brand can read as a boundary problem — the opposite of the signal you want, at a company that thinks hard about trust.
- **If you're unsure:** check the original instructions or email. If you can't determine it, the conservative move is to make it private and not feature it. **Don't leave it in the ambiguous middle**, publicly visible but unlinked from anywhere — that's the only option with no upside.

### Projects to exclude, and why

- **Forma** — genuinely too early. "Currently gathering requirements" is honest but it means there's nothing to show. Mention it in one line in your About ("currently building Forma, a client-management tool for personal trainers") so it reads as active practice, not as a portfolio piece.
- **`SportsTripPlanner`, `Grade4Us`, `list-data`, `BIBlog_VanillaJS`, `S-expression-calculator`** — older Vue and vanilla-JS coursework, predating your React work. On a senior portfolio these subtract. **Archive them on GitHub** so your public profile leads with `dotfiles`, `nesto` (if cleared), and anything you make public.
- **Forks** — no signal.
- **The `Resume` repo (the current site)** — it will be replaced. Archive it once the new site ships.

**One thing worth doing on GitHub itself:** your public profile currently leads with archived Vue coursework while your genuinely interesting work (`nami`, `forma`, `gym-class-booker`, `AI-Notes-Sync`) is private. A recruiter clicking through sees a 2018 engineer. Either make one or two of the good ones public, or **add a profile README** (`github.com/vcmiranda/vcmiranda`) that says what you actually work on and links to your site. The README takes fifteen minutes and it's the highest-leverage GitHub change available to you.

---

# PART THREE — Information architecture

**Principle:** five routes, no more. Every additional page is a place for a recruiter to get lost instead of contacting you. A blog you don't maintain is worse than no blog.

| Page | Audience | Goal | Main message | Sections in order | Primary CTA | Content you need to provide |
|---|---|---|---|---|---|---|
| **Home** `/` | Recruiter (30s) and hiring manager (3 min) | Establish who you are and route to one case study | "Senior frontend engineer — architecture, design systems, and the right state model for the problem" | 1. Identity + positioning line 2. Primary/secondary CTA 3. Credibility line (current role, years, stack) 4. Featured work: 3 project cards 5. About preview 6. Contact | **View my work** → `/work` | Headshot (optional); confirmed positioning line; 3 project card summaries |
| **Work** `/work` | Hiring manager | Present 3–4 projects with enough context to choose one | "Here's what I've built and what I decided" | 1. Short intro line 2. Project list (large cards, not a grid of thumbnails) 3. Note on what isn't shown publicly | Each card → its case study | Per project: title, 1-line summary, role, stack tags, cover image |
| **Case study** `/work/[slug]` | Hiring manager, tech lead | Prove depth of thinking | "This was the problem, this is what I decided and why" | Context → Problem → My role → Constraints → Approach & decisions → Outcome → Lessons & next | **Get in touch** (end) + prev/next project | See §Part Four per project |
| **About** `/about` | Everyone | Make you a person, and explain the career arc before they wonder | "Nine years in, from teaching to engineering" | 1. Longer bio 2. How I work (3–4 points) 3. Current stack 4. Brief personal note 5. Links | **Download résumé** | Confirmed bio; 1–2 personal details |
| **Résumé** `/resume` | Recruiter | Fast download, plus HTML for anyone who won't download | "Everything, in one page" | 1. Download button (top) 2. Full résumé rendered as semantic HTML 3. Last-updated date | **Download PDF** | The PDF from Phase 2 |
| **Contact** — *section, not a page* | Recruiter | Remove all friction | "Email me" | Sits at the bottom of Home, About and every case study | **Email me** (mailto) | Confirmed email |

**On a writing/notes section:** only if the state-architecture piece (Project 2) becomes an article. One excellent article at `/writing/choosing-state-per-microfrontend` beats an empty `/blog`. If you publish one, don't build an index page for it — link it from the work page and the homepage. Add `/writing` only when there are three.

**Routes to explicitly not build:** a services or hire-me page, a testimonials section, a tech-logo wall, a "uses" page, a skills page with bars, a newsletter signup.

---

# PART FOUR — Content

## 4.1 Homepage copy — production-ready

### Hero

**Headline**

> Senior frontend engineer. I build the architecture underneath the interface.

**Supporting paragraph**

> Nine years in web development, nearly five of them at ASICS Apps building Race Roster. I work on the parts that get complicated — greenfield application architecture, design systems, and choosing the right state model for a given flow rather than the one we already had. Based in London, Ontario; working remotely across Canada.

**Primary CTA:** `View my work` → `/work`
**Secondary CTA:** `Download résumé` → `/resume`

*Note: Nov 2021 → Aug 2026 is 4 years 9 months, so "nearly five" is the accurate phrasing. Don't round it up to five anywhere.*

### Credibility line

Directly beneath the CTAs, one line, small, set in a muted tone:

> React · TypeScript · Remix · Vite · GraphQL · XState · Storybook · Vitest

*No logos, no bars, no percentages. A plain list of things you actually use reads as more confident than any visual treatment of it.*

### Featured work — section intro

> **Selected work**
> Three projects, in enough detail to be useful. Two are from my work at ASICS Apps, described without internal specifics; one is my own.

*That second sentence does real work — it pre-empts "why no screenshots" and signals that you understand confidentiality without being asked.*

### Project cards

**Card 1**

> **Building a platform frontend from scratch**
> ASICS Apps (Race Roster) · 2021–present
> When our event-management admin was split out of the monolith, I built its frontend from zero — choosing React, TypeScript, Vite, Material UI and Apollo GraphQL, owning the architecture — and growing a component library alongside it. `[NEED CONFIRMATION: is the 40+ component library the one built for this platform, or a separate shared library? Your answer described two libraries and I can't tell which is which. Name the right one here.]`
> `React` `TypeScript` `Vite` `Apollo GraphQL` `Storybook`
> → Read the case study

**Card 2**

> **Choosing state per microfrontend**
> ASICS Apps (Race Roster) · ongoing
> XState for workflow-driven flows, Redux, React Query, Valtio and Context elsewhere. On how our team evaluated them, why each won where it did, and what I'd choose now.
> `XState` `Redux` `React Query` `Valtio` `Architecture`
> → Read the case study

**Card 3**

> **Nami — a file manager for people who hit the edges of Finder**
> Personal project · Tauri 2, TypeScript
> Dual panes, a synced terminal, git status and remote hosts in one native macOS window, at the speed of the machine underneath. `[NEED CONFIRMATION: your one-line reason for building it. Placeholder — "Built because I kept reaching for four tools to do one job" — replace with what actually happened.]`
> `Tauri 2` `macOS` `Interaction design`
> → Read the case study

**Card 4 — only if `nesto` is cleared**

> **nesto — a mortgage application, end to end**
> Personal project · React 19, TypeScript
> A full rate-comparison and application flow: forms with real-time validation, internationalisation, dark mode, and a published component library. Live demo and source, both public.
> `React 19` `TypeScript` `Vite` `Tailwind` `i18next` `Vitest`
> → Live demo · Storybook · Source

### About preview

> **A short version**
> I came to engineering after years of consulting and teaching — I trained more than a thousand people in software and lectured at a university before I wrote production code for a living. It's why code review, documentation and onboarding aren't chores to me; explaining things carefully is the part of the job I was doing first.
> → More about how I work

### Contact section

> **Let's talk**
> I'm open to senior frontend roles in Canada or remote. If you're hiring, or you just want to argue about state machines, email is the fastest way to reach me.
> **vcmiranda@outlook.com**
> GitHub · LinkedIn · Download résumé

### Footer

> Vitor Miranda — London, Ontario, Canada
> Built with Next.js and deployed on Vercel. Source on GitHub.
> © 2026

*Linking the site's own source is a small, real proof of the "clear, elegant code" minimum requirement. Only do it if you're happy for the code to be read — which, for this application, you should be.*

### Phrases deliberately not used

"Passionate developer," "building the future," "cutting-edge," "I love solving problems," "results-driven," "awesome," "pixel-perfect," "10x," "ninja," "rockstar," "full-stack developer creating websites for companies of all sizes."

---

## 4.2 Case studies

Order for all three: **Context → Problem → My role and ownership → Constraints → Approach and technical decisions → Outcome → Lessons and next iteration.**

Target 700–1,100 words each. Longer than that and nobody finishes; shorter and it reads as a project card with headings.

---

### Case study 1 — Building a platform frontend from scratch

**Title:** Building a platform frontend from scratch
**Slug:** `/work/event-management-platform`

**Summary (1–2 lines for the card and meta description)**
> When our event-management admin was split out of a monolith, I built its frontend from zero — choosing the stack, owning the architecture, and growing a component library alongside it.

**1. Context**
> ASICS Apps builds Race Roster, a race-registration platform used by event organizers and athletes. `[NEED CONFIRMATION — one sentence on what the admin section does for organizers: creating events? managing registrations? reporting? Keep it to what's publicly evident from the product.]`
>
> As part of a platform upgrade, the system was split into separate parts, each with its own repository and deployment. The admin section became its own system. `[NEED CONFIRMATION — what drove the split: release independence, team autonomy, tech debt, scaling?]`

**2. Problem**
> The admin frontend didn't exist yet. There was an existing product to match in behaviour and expectation, a backend to integrate with, and no established frontend foundation in the new repository. `[NEED CONFIRMATION: what actually didn't exist yet — build setup, component conventions, state approach, testing baseline? List only the ones that were genuinely absent.]`
>
> `[NEED CONFIRMATION — what made this genuinely hard? The domain complexity of event management? Migrating users without disruption? Matching legacy behaviour? Timeline? Say the true one; a case study with no difficulty in it reads as a chore log.]`

**3. My role and ownership**
> I built the frontend application from scratch and owned its architecture. I selected the stack and set up the project, then developed the application and its component library as it grew.
>
> `[NEED CONFIRMATION — team context: how many frontend engineers, and were you the first or only one at the start? "I was the first frontend engineer on the new repo" is a strong, specific sentence if it's true.]`

**4. Constraints**
> `[NEED CONFIRMATION — pick the two or three that were real:]`
> - An existing GraphQL API to consume, with a schema shaped by the previous system
> - Feature parity with the section being replaced
> - A small frontend team, so the foundation had to be learnable by people who hadn't built it
> - Timeline pressure from the wider platform split
> - Existing brand and design conventions to stay consistent with

**5. Approach and technical decisions**
> **React and TypeScript** — the team's existing stack, so the choice was about consistency and hiring rather than novelty. Not every decision needs to be interesting.
>
> **Vite over the alternatives.** `[NEED CONFIRMATION — dev-server speed? Simpler config than Webpack? Alignment with other repos?]` For a greenfield repo where developer feedback loop is the thing you'll pay for every day for years, build speed is an architecture decision.
>
> **Apollo GraphQL rather than REST with a fetch layer.** `[NEED CONFIRMATION — was the API already GraphQL, or was that also decided here?]` What Apollo's normalized cache bought — and what it cost. Worth being honest about the cost; every senior reader knows Apollo has one.
>
> **Material UI as the base, extended rather than replaced.** The decision to build on an existing accessible component set rather than from zero, and where the abstraction stopped — which components wrapped MUI, which were built independently, and how you kept consumers from reaching past your layer into MUI directly. `[NEED CONFIRMATION]`
>
> **The component library and Storybook.** How it grew to 40+ components, how Storybook served as both documentation and a development environment, and how you decided what was general enough to promote into the library versus what stayed local to a feature. That promotion criterion is the interesting part and most people don't have one.
>
> **Application structure.** `[NEED CONFIRMATION — feature folders? Route-based splitting? A shared/domain boundary? What convention did you set and did it hold up?]`
>
> **Testing baseline.** What you set up early with Vitest / Jest and React Testing Library, and what you chose *not* to test. `[NEED CONFIRMATION]`
>
> **Suggested diagram:** one clean box-and-arrow of the shape of the system — admin frontend, GraphQL layer, backend services, component library as a shared dependency. Your own drawing, no internal names, no infrastructure detail.

**6. Outcome**
> `[NEED CONFIRMATION — this is the section that most needs your input, and the one most likely to be measurable.]` Honest options that don't require internal metrics:
> - The application shipped and is in production, serving event organizers.
> - The component library reached 40+ components ✅ *confirmed*. Whether it's "the foundation other frontend work builds on" depends on how many teams consume it — `[NEED CONFIRMATION]`, and don't write it until you know.
> - The conventions set at the start `[held up / needed revision]` as the team and app grew.
> - `[ADD METRIC]` — number of screens or modules; time from empty repo to first production release; number of engineers now working in it.
>
> **If you have no numbers you can share, say so plainly:** *"I can't share usage numbers publicly, but I'm happy to talk through them in conversation."* That sentence costs nothing and reads as trustworthy rather than evasive.

**7. Lessons and next iteration**
> `[NEED CONFIRMATION — the most valuable section in the whole document, and the one candidates skip.]` Answer these three honestly:
> - What would you decide differently now?
> - Which decision looked risky and turned out fine, or looked safe and turned out expensive?
> - What's the next thing you'd change in the codebase if you had a free week?
>
> A senior reader trusts a case study with a real regret in it far more than one without. Don't sanitise this.

**Assets to add:** your architecture diagram; a redrawn or heavily genericised wireframe if any visual is permissible `[NEED CONFIRMATION]`; a small non-proprietary code sample showing your component-wrapping pattern (write it fresh — do not paste employer code).

**Sensitivity check before publishing:** no customer names, no internal metrics, no screenshots of the admin UI, no repository or service names, no data, no infrastructure detail, no unreleased roadmap. **When in doubt, cut it — nothing in this case study is worth an awkward conversation with your current employer.**

---

### Case study 2 — Choosing state per microfrontend

**Title:** Choosing state per microfrontend: XState, Redux, React Query, Valtio, Context
**Slug:** `/work/state-per-microfrontend`

> This is your strongest single asset for the Stripe application. Write this one first if you write only one.

**1. Context**
> Our frontend is split across multiple microfrontends `[ADD METRIC — how many]`, each owned and deployed independently. That structure means state management doesn't have to be a single global decision — each surface can use what suits it, at the cost of consistency across the whole.

**2. Problem**
> `[NEED CONFIRMATION — what triggered the evaluation? A flow that had become unmanageable with existing tools? A new microfrontend starting from scratch? Fixing a bug class you kept hitting?]`
>
> The general problem, which you can state confidently: flows with branching paths, asynchronous steps that can fail, back-navigation, and states that shouldn't be reachable are exactly where ad-hoc state management stops scaling. Every guard becomes a boolean, every boolean multiplies the state space, and eventually the bugs are combinations nobody enumerated.

**3. My role and ownership**
> I implemented the XState workflows in our React applications, and have implemented Redux, React Query, Valtio and React Context in others. `[NEED CONFIRMATION — did you run the evaluation, contribute to it, or implement its outcome? Be precise. "I implemented the outcome of a team evaluation" is still a strong sentence.]`

**4. Constraints**
> - A team that has to maintain this, so novelty has a real cost
> - Multiple microfrontends, so a choice made in one shouldn't force the others
> - Existing code in existing tools — nothing greenfield
> - `[NEED CONFIRMATION — bundle size? SSR compatibility? Devtools/debuggability? Testing?]`

**5. Approach and technical decisions**
> **Why XState won for workflow-driven flows.** `[NEED CONFIRMATION — which of these were your actual reasons: making invalid states unrepresentable; the statechart as a shared artifact between engineering and product/design; testability of transitions independent of the UI; the visualizer; handling of async invocation and cancellation; guards and hierarchical states?]`
>
> **Why not XState everywhere.** The most persuasive section of the piece. The honest answer — learning curve, verbosity for simple cases, and the fact that most state isn't a workflow — is what makes you sound like an engineer instead of an advocate.
>
> **React Query for server state.** Worth calling out explicitly that server state and client state are different problems, and that a lot of Redux complexity historically came from using a client-state tool to cache server data. Making this distinction out loud is a strong senior signal.
>
> **Redux where it was already the right answer** — large shared client state, established devtools workflow, existing team fluency.
>
> **Valtio where the ceremony wasn't worth it** — proxy-based mutable state for local, self-contained cases.
>
> **React Context for what it's actually for** — dependency injection of stable values, not as a state manager.
>
> **The selection heuristic.** End with the rule you'd give a colleague. Something like: *is this server data, shared client state, a workflow with rules about what can happen next, or just a value that needs to reach a few components?* Four questions, four answers. **This is the paragraph a Stripe interviewer will remember.**
>
> **Suggested diagram:** a statechart of an *illustrative* multi-step flow — a generic registration wizard with validation, an async submit that can fail, retry, and back-navigation. Draw it yourself as a teaching example. Not your employer's machine.

**6. Outcome**
> `[NEED CONFIRMATION]` Honest options: the flow shipped and the state model held; a class of bug that stopped occurring; the statechart becoming a shared reference in team conversations; onboarding getting easier because the machine documented the flow. Pick what's true.

**7. Lessons and next iteration**
> `[NEED CONFIRMATION]` — Would you use XState v5 differently? Is there a flow you'd migrate now, or one you'd migrate *away* from? Where has the per-microfrontend freedom cost you consistency? What would you standardise if you started over?

**Assets:** your illustrative statechart (SVG, works in dark mode, keyboard-accessible with a text description); one small self-authored code sample of a machine definition; optionally a small comparison table of the five tools by problem type.

**Sensitivity check:** no employer business logic, no real machine definitions, no product-specific flow names. Everything here is generic engineering reasoning — which is exactly what makes it safe *and* what makes it good.

---

### Case study 3 — Nami

**Title:** Nami — a file manager for people who hit the edges of Finder
**Slug:** `/work/nami`

**1. Context**
> Finder is fine until it isn't. If you work across local directories, git repositories and remote hosts in the same hour, you end up with Finder, a terminal, a git client and an SFTP app all open, all showing different views of overlapping things.

**2. Problem**
> `[NEED CONFIRMATION — your own trigger. The specific moment you decided to build it is the best opening line this case study can have. What were you actually doing when Finder failed you?]`
>
> The general problem: file management, terminal, version control and remote access are one workflow served by four applications, none of which knows what the others are showing.

**3. My role and ownership**
> Sole designer and developer. Every decision — product, interaction, visual, architectural — is mine, which is the point of including it here.

**4. Constraints**
> - It has to feel native. A file manager that feels like a web page in a window has already lost. `[NEED CONFIRMATION — is this why Tauri over Electron?]`
> - It has to stay fast on large directories, which rules out naive rendering.
> - Dense information — path, size, permissions, git status, selection, remote state — in a layout that stays readable.
> - Keyboard-first. Anyone who wants a dual-pane file manager navigates by keyboard.
> - Built in spare time, so scope discipline is a constraint, not a preference.

**5. Approach and technical decisions**
> **Tauri 2 over Electron.** `[NEED CONFIRMATION — binary size, memory footprint, the system webview, Rust for filesystem operations?]` State the actual reasoning and, if you have them, the numbers — Tauri-vs-Electron binary size and memory are things you can measure yourself and publish, and they'd be **the only real performance numbers anywhere in your materials.** That alone makes this worth an evening's work.
>
> **The dual-pane model.** Why two panes rather than tabs or a sidebar: comparison and movement between locations is the core operation.
>
> **The synced terminal.** `[NEED CONFIRMATION — does the terminal follow the active pane's directory? Does the pane follow the terminal's cwd? Both?]` This is your most interesting interaction decision — the bidirectional case is genuinely hard and worth explaining.
>
> **Git status without clutter.** How you surface repository state in a list already carrying five other pieces of information per row. This is a typography and information-hierarchy problem, and describing it as one is exactly the *"typography, layout, balance, and proportion"* signal the JD asks for.
>
> **Remote hosts as first-class locations.** `[NEED CONFIRMATION — protocol, and how you handle latency in a UI that's expected to feel instant. Optimistic rendering? Skeletons? Prefetch?]`
>
> **Keeping it fast.** `[NEED CONFIRMATION — virtualised lists? Work in Rust rather than the webview? Debounced watchers? Incremental loading?]`

**6. Outcome**
> `[NEED CONFIRMATION]` — Current state honestly: usable daily by you? Alpha? Are there measurable numbers (cold start, time to render a 10,000-file directory, memory at rest, binary size)? **Measure these.** They're easy to obtain, entirely yours to publish, and they would be the only hard performance figures in your entire application.

**7. Lessons and next iteration**
> `[NEED CONFIRMATION]` — What surprised you about Tauri 2? What did you over-build? What's next: file previews, tabs, plugin support, a proper release?

**Assets — non-negotiable:** 2–3 screenshots, light and dark, well-cropped, showing dual panes with the terminal open and git status visible. A short screen recording would be better still (muted, looping, under 10 seconds, with a `prefers-reduced-motion` fallback to a static image). Without a visual, this case study cannot do its job.

---

### Case study 4 — `nesto` *(only if cleared)*

**Title:** nesto — a mortgage application, end to end
**Slug:** `/work/nesto`

Shorter than the others — 500–700 words — and framed honestly for what it is.

- **Context:** `[NEED CONFIRMATION — take-home, self-directed exercise, or something else? Say so plainly. "Built as a technical exercise" is respectable; discovered-to-be-a-take-home-presented-as-a-product is not.]`
- **Problem:** letting someone compare mortgage rates and complete an application without abandoning the form.
- **Role:** sole developer.
- **Constraints:** `[NEED CONFIRMATION — a fixed/provided API? a time limit? how many languages? I inferred these from the README and none are confirmed.]`
- **Approach:** React 19 with React Router 7; Context plus custom hooks rather than a state library, and why that was proportionate here; i18next with automatic language detection; Tailwind with a documented component set in Storybook; Vitest and Testing Library; TypeScript strict mode; deployed on Vercel with a separately deployed Storybook.
- **Outcome:** working live application and public component library, both linked. `[ADD METRIC — publish your Lighthouse scores. Your README already documents how to run it, so you're one command away from a real number.]`
- **Lessons:** what you'd change with more time — and be specific, because "more tests" is what everyone says.

**Its unique value on the site:** it's the only place a reviewer can read your actual code. Say so directly: *"Source is public if you'd like to read it."*

---

## 4.3 About and contact

### About page — main content

> **About**
>
> I'm a senior frontend engineer in London, Ontario. I've spent nearly five years at ASICS Apps, the team behind Race Roster, working mostly on architecture, design systems and state — the parts of a frontend that decide how easy everything after them is going to be.
>
> I got here indirectly. Before I wrote production code I spent years in project management consulting: delivering enterprise software implementations, training more than a thousand people, and lecturing at a university in Brazil. Then I moved to Canada, retrained at Fanshawe College, and started over as a developer in 2017.
>
> That background shows up in how I work. I'm the person who writes the documentation, who reviews the pull request properly, and who wants the component library to have a rule about what belongs in it. I don't think that's separate from engineering — most of what makes a codebase pleasant to work in a year later is decided by whether anyone bothered to explain it.
>
> **How I work**
>
> - **Architecture before abstraction.** I'd rather establish a convention early than refactor toward one later.
> - **Pick the tool the problem needs.** I've shipped XState, Redux, React Query, Valtio and Context across different microfrontends. Knowing which one a flow actually calls for is worth more than depth in any single one.
> - **Ship it behind a flag.** Everything I build goes out behind a feature flag with context rules, so rollout is a decision rather than an event.
> - **Explain it.** Storybook, documentation, code review, onboarding. It's the part of the job I was doing before I was an engineer.
>
> **Currently**
>
> React, TypeScript, Remix, Vite, GraphQL, XState, Storybook, Vitest. Outside work I'm building **Nami**, a native macOS file manager, and **Forma**, a client-management tool for personal trainers.
>
> **Outside that**
>
> `[NEED CONFIRMATION — two lines, no more. Something real: running or races given where you work, cooking, a place you're from, a hobby you're bad at. If you'd rather skip it, skip it — a fake personal detail is worse than none.]`
>
> **Elsewhere:** GitHub · LinkedIn · Download résumé

**On the personal detail:** keep it to two sentences and make it concrete. "I like travel and technology" adds nothing. "I got into running badly and late, which is a funny thing to admit when you build race-registration software" is memorable, human, and — if true — costs you nothing. Only use it if it's true.

### Contact copy

> **Let's talk**
>
> I'm open to senior frontend roles in Canada or remote — architecture, design systems, or anything where the interface is genuinely hard.
>
> The fastest way to reach me is email. I reply to everything that isn't automated.
>
> **vcmiranda@outlook.com**
>
> GitHub · LinkedIn · Résumé (PDF)

### Email address, contact form, or both?

**Show the email address directly. Don't build a form.**

Reasoning:

- **Recruiters don't use contact forms.** They copy an address into their existing thread. A form adds a step and gives them no record of what they sent.
- **A form is a trust cost.** The sender gets no confirmation and no copy. Yours currently has a SUBMIT and a CLEAR button and no visible confirmation state at all.
- **A form is infrastructure you'd have to own** — endpoint, spam handling, deliverability — on a static site that otherwise needs no backend.
- **Scraping is a manageable risk.** You already publish this address on your résumé and your current site. If you want mitigation, use a `mailto:` link where the address is composed from parts at render time, or simply accept it — the cost of one more spam source is far below the cost of one recruiter not bothering.

**One change worth making:** remove your phone number from the site. It's on your résumé, which is what someone downloads once they're serious. On a public page it invites cold sales calls and offers no benefit a recruiter needs.

**Optional addition:** a small "Currently open to senior frontend roles — last updated August 2026" line near the contact block. It signals availability without the LinkedIn banner, and the date proves the site is maintained. *Only include it if you'll actually update the date.*

---

## 4.4 SEO and social sharing

Everyone searching your name should land on this page and see a senior frontend engineer, not a 2019 full-stack freelancer.

### Home — `/`

| Field | Value |
|---|---|
| **Page title** | Vitor Miranda — Senior Frontend Engineer |
| **Meta description** | Senior frontend engineer in London, Ontario. React, TypeScript, design systems and state architecture. Nine years building web applications, currently at ASICS Apps. (150 chars) |
| **OG title** | Vitor Miranda — Senior Frontend Engineer |
| **OG description** | Architecture, design systems, and choosing the right state model for the problem. Selected work and case studies. |
| **Slug** | `/` |
| **OG image** | 1200×630. Your name, the positioning line, and nothing else. Dark background, one accent. Generate it with `next/og` so it stays in sync with the site. |

### Work — `/work`

| Field | Value |
|---|---|
| **Page title** | Work — Vitor Miranda |
| **Meta description** | Case studies on building a platform frontend from scratch, choosing state management per microfrontend, and building a native macOS file manager. |
| **OG title** | Selected work — Vitor Miranda |
| **OG description** | Three projects, in enough detail to be useful. |
| **Slug** | `/work` |

### Case study 1

| Field | Value |
|---|---|
| **Page title** | Building a platform frontend from scratch — Vitor Miranda |
| **Meta description** | How I built the frontend of an event-management admin platform from zero: stack selection, architecture, and the component system that grew with it. |
| **OG title** | Building a platform frontend from scratch |
| **OG description** | React, TypeScript, Vite, Apollo GraphQL — and the decisions behind each. |
| **Slug** | `/work/event-management-platform` |

### Case study 2

| Field | Value |
|---|---|
| **Page title** | Choosing state per microfrontend — Vitor Miranda |
| **Meta description** | XState, Redux, React Query, Valtio and Context across different microfrontends — why each won where it did, and the heuristic I use to choose. |
| **OG title** | Choosing state per microfrontend |
| **OG description** | Five state solutions, one selection heuristic. |
| **Slug** | `/work/state-per-microfrontend` |

### Case study 3

| Field | Value |
|---|---|
| **Page title** | Nami — a file manager for people who hit the edges of Finder |
| **Meta description** | A native macOS file manager built with Tauri 2 and TypeScript: dual panes, a synced terminal, git status and remote hosts in one window. |
| **OG title** | Nami — a native macOS file manager |
| **OG description** | Dual panes, a synced terminal, git and remote hosts, at the speed of the machine underneath. |
| **Slug** | `/work/nami` |
| **OG image** | Use a real screenshot for this one. |

### About / Résumé / Contact

| Page | Title | Description | Slug |
|---|---|---|---|
| About | About — Vitor Miranda | Senior frontend engineer in London, Ontario. Nine years in web development, after a career in consulting and teaching. | `/about` |
| Résumé | Résumé — Vitor Miranda | Senior frontend engineer. React, TypeScript, design systems. Download as PDF. | `/resume` |

### Structured data

Add JSON-LD. It's cheap and it's what powers a knowledge panel for your name.

- **`Person`** on the homepage — `name`, `jobTitle: "Senior Frontend Engineer"`, `url`, `sameAs: [LinkedIn, GitHub]`, `worksFor: { "@type": "Organization", "name": "ASICS Apps" }`, `address: { addressLocality: "London", addressRegion: "ON", addressCountry: "CA" }`, `knowsAbout: ["React", "TypeScript", "Design Systems", "State Management", "Web Performance"]`.
- **`WebSite`** on the homepage.
- **`Article`** or **`CreativeWork`** on each case study — `headline`, `datePublished`, `author` referencing the Person, `about`.
- **`BreadcrumbList`** on case studies.
- **Skip `JobPosting`, `Review`, `AggregateRating`** — you have nothing legitimate to put in them, and fabricating structured data is both a Google penalty and exactly the kind of thing you've asked me not to invent.

**Also:** a `sitemap.xml` and `robots.txt` (Next.js generates both from `app/sitemap.ts` and `app/robots.ts`), a canonical URL on every page, and — importantly — decide between `vcmiranda.me` and `www.vcmiranda.me` and 301 the other. Right now you're serving `www`; pick one and be consistent so you don't split your own ranking.

---

# PART FIVE — Technical and design plan

## Framework and deployment

**Next.js (App Router) on Vercel, statically rendered.**

- **Why Next.js:** you already know it, it's what the target role's ecosystem uses, and — the actual reason — the App Router gives you static generation, streaming, `next/image`, `next/font` with zero-CLS self-hosting, `next/og` for social images, and file-based metadata without you configuring any of it. Every one of those is a performance or SEO requirement below.
- **Why static:** every page here is content. There is no personalisation, no auth, no database. Statically render all of it, serve from CDN, ship near-zero JavaScript on content pages. This is also the honest answer to *"why did you build your portfolio this way"* in an interview: because the fastest thing you can serve is a file.
- **Why Vercel:** zero-config for Next.js, preview deploys per PR, free tier is sufficient, and its Analytics and Speed Insights are privacy-conscious and cookieless.
- **Alternative worth naming:** Astro would ship even less JavaScript and is arguably the better tool for a content site. **Don't use it here.** You're applying for React roles, your site should be React, and "I used Astro" invites a conversation about a framework you're not being hired for. Next.js is the right call for the audience.
- **Explicitly not:** a CMS-backed setup, a monorepo, a custom server, Docker for deploy. All add operational surface with no benefit for six pages.

## Content strategy

**Hybrid: MDX for case studies, typed TypeScript objects for everything else.**

```
content/
  site.ts             # name, tagline, email, social links, positioning line
  nav.ts              # routes and labels
  projects.ts         # project metadata: slug, title, summary, role, stack[],
                      #   dates, cover image, links, featured order
  about.ts            # bio paragraphs, "how I work" points, current stack
  resume.ts           # structured résumé for the HTML version at /resume
  case-studies/
    event-management-platform.mdx
    state-per-microfrontend.mdx
    nami.mdx
    nesto.mdx         # only if cleared
```

- **Why MDX for case studies:** they're long-form prose that occasionally needs a component — a statechart, a diagram, a callout, a code sample with syntax highlighting, a comparison table. MDX gives you prose-first authoring with a component escape hatch.
- **Why typed TS for structured data:** project metadata is a record, not a document. TypeScript gives you autocomplete and a compile error when you forget a field, which matters more than you'd think when you edit this at 11pm before an application.
- **Why no CMS:** Contentful or Sanity is an account, a schema, a client, an API budget and a build dependency, to manage six pages you edit four times a year. The overhead is the wrong trade. *(If you want CMS experience on your résumé for its own sake — and self-serve authoring is a named Stripe responsibility — get it in a project where it's justified, not by over-engineering this one.)*
- **Non-negotiable:** every editable string lives in `content/`. No copy hard-coded in components. This is also what you'll instruct the coding agent to do in Part Six.

## Component architecture

```
app/
  layout.tsx                    # fonts, theme, skip link, header, footer
  page.tsx                      # home
  work/page.tsx
  work/[slug]/page.tsx          # generateStaticParams from content
  about/page.tsx
  resume/page.tsx
  sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx

components/
  layout/        Header  Footer  SkipLink  ThemeToggle  Container
  ui/            Button  Link  Tag  Prose  Divider  ThemedImage
  sections/      Hero  FeaturedWork  AboutPreview  ContactBlock  CredibilityLine
  work/          ProjectCard  ProjectList  CaseStudyHeader  CaseStudyNav
  mdx/           Figure  Callout  CodeBlock  Statechart  ComparisonTable
                 # registered in mdx-components.tsx

lib/
  content.ts     # typed loaders for content/
  metadata.ts    # buildMetadata(page) — one source of truth for SEO
  analytics.ts   # thin wrapper; single place to change providers
```

**Rules:**

- **Server Components by default.** Only `ThemeToggle` and any interactive MDX component get `'use client'`. If more than three files have that directive, something has gone wrong.
- **No component library.** No MUI, no Chakra, no shadcn. Six pages of bespoke components in Tailwind, built by you. On a portfolio for a craft role, importing a component kit is the wrong answer to "can you build an interface" — and the code is public.
- **One `Prose` component** wrapping `@tailwindcss/typography` with your overrides, so every case study is typographically identical without per-page CSS.
- **`buildMetadata()` in one place.** Every page calls it. Nobody hand-writes an OG tag.

## Typography

For this role, typography *is* the portfolio. Get this right and the site reads as considered even before anyone reads a word.

**Recommended pairing:**

- **Display / headings:** **Instrument Serif** (free, Google Fonts) — a high-contrast serif with real personality, used only at large sizes for the hero and case-study titles.
- **Body / UI:** **Inter** or **Geist Sans** — set at `-0.011em` tracking, `400` weight, and `1.65` line-height for body copy.
- **Code:** **JetBrains Mono** or **Geist Mono**.

**Why a serif display face:** it's the fastest way to signal editorial judgment, it's what most engineer portfolios don't do, and it demonstrates the typography awareness the JD names — without requiring you to be a designer. If a serif feels wrong, the alternative is a **single-family approach**: Geist Sans throughout, with the display sizes set tight (`-0.03em`) and heavy (`600`), which reads modern and confident. Both are defensible; pick one and be consistent.

**Rules:**

- **Measure: 62–72 characters** for body prose. Enforce with `max-width: 34rem` on prose, not with a percentage.
- **A modular scale**, not arbitrary sizes. `0.875 / 1 / 1.125 / 1.375 / 1.75 / 2.25 / 3.5 rem`. Nothing outside the scale.
- **Fluid display sizes** with `clamp()` so the hero works at 375px and 1440px without a breakpoint.
- **Self-host via `next/font`.** No render-blocking font requests, no layout shift, `font-display: swap` handled for you.
- **Two weights maximum per family.** Every extra weight is a download.
- **Tighter tracking as size increases.** Large text set at default tracking is the single most common tell of an untrained eye.

## Colour and dark mode

**Near-monochrome, one accent, both modes first-class.**

```
Light                          Dark
bg        #FCFCFC              #0B0C0E
surface   #F4F4F5              #141518
text      #16181D             #EDEEF0
muted     #5B616B             #9BA1AB
border    #E4E4E7             #26282D
accent    #2C5FF6             #6E97FF
```

- **Why near-monochrome:** colour is the easiest thing to get wrong and the least necessary here. A restrained palette with one accent reads as confident; a colourful portfolio reads as decorated. The content is the interest.
- **One accent, used sparingly:** links, focus rings, the primary CTA. Nowhere else.
- **Implementation:** CSS custom properties on `:root` and `[data-theme="dark"]`, with Tailwind mapped to the variables. Default to `prefers-color-scheme`, offer a toggle, persist in `localStorage`, and set the theme in an inline script before paint to avoid a flash.
- **Contrast:** verify every pair. Body text must clear **7:1** (AAA), muted text and UI must clear **4.5:1**. The accent-on-background pair is the one that usually fails — check both modes. Given that you have no accessibility proof in your work history, **the site itself becoming your accessibility evidence is a deliberate and worthwhile move.**
- **Screenshots need both modes.** A dark-mode screenshot on a light page (or vice versa) is a visible seam. Serve paired images via `<picture>` with `prefers-color-scheme`.

## Visual hierarchy and spacing

- **An 8px base scale.** `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`. Nothing off-scale, ever.
- **Space is the design.** Section rhythm of 96–128px on desktop, 64–80px on mobile, does more for perceived quality than any effect.
- **One column, left-aligned.** Centred body text is hard to read; multi-column layouts on a portfolio are a solution to a problem you don't have.
- **Content width `min(100% - 2.5rem, 64rem)`**, prose narrower at `34rem`. The asymmetry — wide container, narrow prose — is what makes long-form pages feel professionally set.
- **One focal point per screen.** The hero has a headline, a paragraph and two buttons. Nothing else.
- **Proximity carries meaning.** A card's tags belong closer to its title than to the next card. Most "cluttered" layouts are actually spacing-consistency failures.

## Motion

You have no animation experience, and this is not the place to learn in public. **Restraint here is a feature, not a limitation** — and it's defensible in an interview: *"I kept motion minimal because nothing on this site needed it, and I'd rather ship no animation than bad animation."*

- **Allowed:** `150–200ms` colour and opacity transitions on hover and focus; a single fade-and-rise of `8px` over `300ms` on content entering the viewport, **once**, never repeating; smooth scroll for in-page anchors.
- **Forbidden:** scroll-jacking, parallax, animated gradients or backgrounds, staggered letter animations, cursor followers, page-transition overlays, anything that delays content.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for entrances. Never `linear`, never the default `ease`.
- **`prefers-reduced-motion: reduce` disables all of it** — not "shortens," disables. Test it by actually toggling the OS setting.
- **The one place motion would be worth it:** a looping screen recording of Nami. Even there, ship a static image under reduced-motion and never autoplay with sound.

## Images and screenshots

- **`next/image` everywhere**, with explicit `width`/`height` so CLS stays at zero. AVIF with WebP fallback.
- **`priority` on exactly one image** — whatever is in the initial viewport. Everything else lazy-loads.
- **Screenshots at 2× device pixel ratio**, then downscaled. A blurry screenshot on a craft portfolio is a self-inflicted wound.
- **Crop hard.** Show the part that makes the point, not the whole window. Never include your OS menu bar, dock, browser chrome, or notification badges.
- **A consistent frame treatment** — a 1px border at 8px radius, or a subtle shadow, applied identically to every screenshot. Consistency is what makes a set of images look designed.
- **Diagrams as inline SVG**, themed with `currentColor` so they work in both modes, with a `<title>` and `<desc>` and a text alternative beneath. A `<img>` of a diagram that's invisible in dark mode is the most common portfolio bug.
- **Never a stock photo.** Not one.

## Accessibility requirements

Treat these as acceptance criteria, not aspirations. This site is going to be the accessibility evidence your work history currently lacks.

- Semantic landmarks: one `<main>`, real `<header>`/`<nav>`/`<footer>`, `<article>` for case studies.
- One `<h1>` per page; no skipped heading levels.
- A skip-to-content link, visible on focus.
- Every interactive element reachable and operable by keyboard, in a logical order. No positive `tabindex`.
- Visible focus indicators — a 2px accent ring with a 2px offset. **Never `outline: none` without a replacement.**
- Contrast: 7:1 body, 4.5:1 everything else, verified in both themes.
- All images have meaningful `alt`; decorative ones have `alt=""`.
- `prefers-reduced-motion` fully respected.
- `lang="en"` on `<html>`; correct `lang` on any Portuguese proper nouns.
- Zoom to 200% with no horizontal scroll and no clipped content.
- Verify with keyboard-only navigation, VoiceOver, axe DevTools, and Lighthouse — and **write one sentence about it on the site**, because then it's evidence you can point to in an interview.

## Performance requirements

Budgets, to be enforced in CI:

| Metric | Target |
|---|---|
| LCP | < 1.2s (4G, mid-tier mobile) |
| INP | < 100ms |
| CLS | < 0.02 |
| First-load JS (homepage) | **< 60KB gzipped** |
| Total page weight (homepage) | < 400KB |
| Lighthouse Performance | ≥ 98 mobile |
| Lighthouse Accessibility / Best Practices / SEO | 100 |

**How you hit them:** static generation for every route; Server Components by default; `next/font` self-hosting; AVIF images with explicit dimensions; no analytics script over 2KB; no third-party embeds; no icon font; no client-side routing library beyond Next's own.

**Then publish the numbers on the site.** A one-line note — *"Lighthouse 100/100/100/100, 47KB of JavaScript on first load"* — is small, verifiable in one click, and it is the **only hard performance metric you currently have anywhere in your application.** For a role that names performance in its preferred qualifications, that's worth real effort.

## SEO requirements

Per-page unique title and description; canonical URLs; OG and Twitter card tags with a 1200×630 image generated by `next/og`; `sitemap.ts` and `robots.ts`; JSON-LD per §4.4; semantic headings; descriptive link text (never "click here" or a bare URL); a single canonical host (`www` or apex, 301 the other); `next/image` alt text as real content.

## Analytics and privacy-conscious tracking

**Vercel Web Analytics** (cookieless, no personal data, no consent banner required, ~1KB) or **Plausible** (same properties, self-hostable). **Not Google Analytics** — it needs a consent banner in most jurisdictions, and a cookie banner on a six-page portfolio is a bad first impression on a page where you're being judged on judgment.

Events worth tracking — the four site objectives from your brief, and nothing else:

| Event | Fires on |
|---|---|
| `resume_download` | Résumé PDF click, with `location: 'hero' \| 'resume_page' \| 'about' \| 'footer'` |
| `case_study_view` | Case study page view, with `slug` |
| `case_study_complete` | 90% scroll depth on a case study — tells you if anyone finishes |
| `external_link_click` | GitHub / LinkedIn / live demo, with `destination` |
| `contact_click` | Email `mailto:` click, with `location` |

No session recording, no heatmaps, no fingerprinting, no third-party pixels. Put a one-line privacy note in the footer: *"This site uses cookieless analytics. No personal data is collected."* On a portfolio being read by engineers, that line is itself a signal.

## Testing strategy

Proportionate — this is a six-page static site, not an application. But visible testing on a public repo is evidence for the *"clear, elegant code"* minimum requirement.

- **Unit (Vitest + Testing Library):** content loaders, `buildMetadata()`, theme toggle, any date or slug utility. Not every component.
- **Integration (Testing Library):** homepage renders all featured projects from content; case-study page renders from MDX; nav links resolve.
- **E2E (Playwright), five specs only:** home loads and the primary CTA reaches `/work`; a case study opens from a card; the résumé PDF downloads; theme toggle persists across a reload; full keyboard traversal of the homepage reaches every interactive element with a visible focus ring.
- **Accessibility:** `@axe-core/playwright` on every route, failing the build on any violation.
- **Performance:** Lighthouse CI on every PR with the budgets above as hard assertions. This is the piece that makes the numbers you publish trustworthy.
- **Visual regression:** skip it. Not worth the maintenance at this size.
- **CI:** GitHub Actions — typecheck, lint, unit, build, Playwright, axe, Lighthouse CI. Vercel preview deploy per PR.

## Launch checklist

**Content**
- [ ] No factual errors. ASICS Apps present and current; binnj correctly dated as ended Nov 2021; Sport-Travel dated Sep 2017 to match résumé and LinkedIn
- [ ] Every `[NEED CONFIRMATION]` and `[ADD METRIC]` resolved or the sentence removed — **nothing ships with a placeholder**
- [ ] No confidential employer information in any case study
- [ ] `nesto` decision made and acted on
- [ ] Résumé PDF is the current version, and `/resume` matches it
- [ ] Every claim on the site is also true on the résumé and LinkedIn

**Technical**
- [ ] Lighthouse ≥ 98 / 100 / 100 / 100 on mobile
- [ ] Keyboard-only pass on every page, visible focus throughout
- [ ] axe: zero violations on every route
- [ ] Both themes verified, including every image and diagram
- [ ] 375px / 768px / 1440px verified
- [ ] Reduced-motion verified with the OS setting actually on
- [ ] No console errors or warnings
- [ ] All external links work and open appropriately
- [ ] `mailto:` works on desktop and mobile

**Deployment**
- [ ] Custom domain live with valid TLS; one canonical host, the other 301'd
- [ ] `sitemap.xml` and `robots.txt` reachable
- [ ] OG image renders correctly — test in LinkedIn's Post Inspector and Slack
- [ ] 404 page exists and is on-brand
- [ ] Analytics firing, verified in production
- [ ] Repository public and its README explains the stack `[if you're linking it]`

**Distribution**
- [ ] LinkedIn Featured section links the site
- [ ] LinkedIn contact info updated
- [ ] GitHub profile README links the site
- [ ] GitHub old repos archived
- [ ] Résumé PDF links the site
- [ ] Search your own name and confirm the site ranks

---

# PART SIX — Build plan

## Prioritized implementation backlog

**P0 = before you submit the application (Track A, 48 hours). P1 = before a first-round conversation. P2 = polish. P3 = optional.**

| P | Task | Why it matters for interview conversion | Effort | Depends on | Acceptance criteria |
|---|---|---|---|---|---|
| **P0** | **Fix the factual errors on the live site** — change binnj to "Jan 2019 – Nov 2021", add an ASICS Apps entry as current, correct Sport-Travel to Sep 2017 | The site currently contradicts your résumé about where you work. This is the one issue that can cost you the interview outright, and it's a text edit in the existing Vue app | 30 min | — | Live site shows ASICS Apps as current; all dates match résumé and LinkedIn |
| **P0** | **Replace the hero tagline** with the positioning line from §4.1 | "Full-stack web developer creating awesome and effective websites" is the first thing a Stripe reviewer reads about you | 15 min | — | Hero reads as a senior frontend engineer |
| **P0** | **Remove Facebook and Twitter icons; remove the phone number** | Fewer exits, less noise | 10 min | — | Only GitHub, LinkedIn, email remain |
| **P0** | **Update the downloadable résumé** to the Phase 2 PDF | The site currently serves an outdated CV | 10 min | Phase 2 PDF | Download returns the new file |
| **P0** | **Decide the `nesto` question** and act — feature it or make it private | Unresolved either way is the only option with no upside | 20 min | Your answer | Repo is deliberately public-and-featured, or private |
| **P0** | **Add a GitHub profile README** linking your site and describing what you work on; archive the 2018 Vue repos | Recruiters click GitHub. Right now it shows a 2018 engineer | 30 min | — | Profile leads with current work |
| **P0** | **Delete duplicate LinkedIn entries; add the About section; fix skills order** | LinkedIn is the primary screening surface and currently has visible errors | 45 min | Phase 3 | No duplicates; About live; React/TypeScript/Design Systems pinned |
| **P1** | **Scaffold the Next.js site** — App Router, TypeScript, Tailwind, `next/font`, theme system, `content/` directory, CI | Everything else depends on it | 4–6 h | — | `pnpm build` clean; Lighthouse ≥ 95 on an empty homepage |
| **P1** | **Build the layout shell** — Header, Footer, SkipLink, ThemeToggle, Container, focus styles | Sets the typographic and spacing system every page inherits | 4 h | Scaffold | Keyboard traversal works; both themes; zero axe violations |
| **P1** | **Homepage** with hero, credibility line, featured work, about preview, contact | The 10-second test. Highest-traffic page on the site | 5 h | Layout, copy | Answers who/what/built/how-to-contact above the fold on mobile |
| **P1** | **Write case study 2 — state per microfrontend** | Your strongest match to the JD's preferred qualification. **Write this one first** | 4–6 h | Your answers | 700–1,100 words, illustrative statechart, no placeholders |
| **P1** | **Write case study 1 — the platform build** | Your strongest seniority and scope signal | 4–6 h | Your answers | Architecture diagram; no confidential detail |
| **P1** | **Capture Nami screenshots and measure its performance numbers** | Your only visual craft evidence, and the only place you can generate real, publishable performance figures | 2–3 h | — | 2–3 screenshots in both themes; binary size, cold start, memory recorded |
| **P1** | **Write case study 3 — Nami** | Craft, product taste, interaction thinking | 3–4 h | Screenshots | Reads as a product decision, not a tech demo |
| **P1** | **Work index and case-study template** with MDX pipeline | Delivers the case studies | 4 h | Scaffold | Static params from content; prev/next; metadata generated |
| **P1** | **`/resume` page + PDF download** | A named site objective | 2 h | Phase 2 PDF | Download tracked; HTML version matches the PDF |
| **P1** | **`/about` page** | Where the career arc gets explained instead of questioned | 2 h | Copy | Career change addressed in the first three paragraphs |
| **P1** | **Metadata, OG images, sitemap, robots, JSON-LD** | Controls what a recruiter sees when your link is pasted into Slack or LinkedIn | 3 h | Pages | Every page unique; OG verified in LinkedIn Post Inspector |
| **P1** | **Accessibility and performance pass to budget** | Becomes the accessibility and performance evidence your work history lacks | 3 h | All pages | Budgets in the table met; axe clean; keyboard verified |
| **P2** | **Analytics with the five events** | Tells you whether anyone reaches the end of a case study | 1.5 h | Pages | Events firing in production |
| **P2** | **Playwright + axe + Lighthouse CI in GitHub Actions** | Visible testing on a public repo is evidence for "clear, elegant code" | 3 h | Pages | Five specs green; CI fails on regression |
| **P2** | **Publish the Lighthouse numbers on the site** | Your only hard performance metric | 30 min | Perf pass | One verifiable line |
| **P2** | **Make the site repo public with a real README** | Lets them read your actual code | 1 h | Everything | README explains stack and decisions |
| **P2** | **Case study 4 — `nesto`** | Only fully inspectable web artifact | 3 h | Clearance | Live demo, Storybook, source all linked |
| **P3** | **Publish case study 2 as a standalone article** | Gives the recruiter follow-up (Phase 3, message C) something new to carry | 1 h | CS2 | Own URL, own OG image |
| **P3** | **Nami screen recording** with reduced-motion fallback | Motion, done once and done well | 2 h | Nami | <10s loop, static fallback, no autoplay sound |

**Realistic timeline:** P0 is one evening. P1 is 40–50 hours — two to three weeks at a real pace alongside a job. P2 adds a weekend.

---

## A. Design and content brief

*Hand this to a designer, a Figma AI tool, or another assistant.*

---

**Project:** Personal portfolio for Vitor Miranda, senior frontend engineer, London Ontario, Canada.

**Target audience.** Primary: technical recruiters and engineering hiring managers at product-driven technology companies hiring senior frontend engineers in Canada and remote. They spend 10 seconds deciding whether to keep reading and 3 minutes if they do. Secondary: engineers on a hiring panel who will read the code and the reasoning.

**Positioning.** *Senior frontend engineer with nine years building web applications — architecture, design systems, and choosing the right state model for the problem — with an unusually strong background in explaining technical work, from a prior career in consulting and teaching.*

**What the site must accomplish in 10 seconds.** Who he is; what kind of engineer; what he's built and personally owned; how to reach his résumé, GitHub, LinkedIn and email.

**Optimize for four actions**, in priority order: read a case study; download the résumé; visit GitHub or LinkedIn; send an email.

**Content hierarchy.**
1. Name and positioning line
2. Primary CTA (view work) and secondary CTA (download résumé)
3. Stack credibility line — plain text list
4. Three featured project cards
5. Short About preview covering the career arc
6. Contact block with the email address visible

**Page structure.** Home, Work index, three or four case studies, About, Résumé. No blog, no services page, no testimonials.

**Case-study requirements.** Fixed order: Context → Problem → Role and ownership → Constraints → Approach and technical decisions → Outcome → Lessons and next iteration. 700–1,100 words. Two of the case studies describe employer work and **cannot include screenshots, real data, internal metrics, or product specifics** — they are carried by architecture diagrams and written reasoning, so the layout must make a text-heavy page with one or two diagrams look intentional rather than empty.

**Visual direction.** Editorial, near-monochrome, text-forward, generously spaced. Light and dark both first-class. A high-contrast serif display face against a clean sans for body, or a single well-set sans with tight tracking at display sizes. One accent colour, used only for links, focus rings and the primary CTA. 8px spacing scale; a modular type scale; body prose constrained to a 62–72 character measure inside a wider container. Single column, left-aligned. The site should read as *considered* — the impression should be that someone made deliberate decisions and then removed everything else.

**Reference feeling:** a well-set essay or a technical journal — not a design agency showcase, not a SaaS marketing page, not a dashboard.

**Accessibility expectations.** WCAG 2.2 AA minimum, AAA contrast for body text (7:1). Full keyboard operability with visible focus indicators. Semantic HTML with correct landmarks and heading order. `prefers-reduced-motion` fully respected. Usable at 200% zoom. Zero axe violations.

**Performance expectations.** Statically rendered. LCP under 1.2s, CLS under 0.02, under 60KB of JavaScript on first load. Lighthouse 98+ performance, 100 accessibility, best practices and SEO.

**Motion.** Minimal and purposeful only: 150–200ms hover and focus transitions, one 8px fade-and-rise on first scroll into view. Nothing else.

**Things to avoid.** Carousels. Animated or gradient backgrounds. Skill bars or percentage proficiency graphics. Technology logo walls. Testimonials, client logos, awards, or metrics of any kind that aren't verifiably his. Stock photography. Glassmorphism, heavy blurs, neon glows, or any effect that reduces text contrast. Scroll-jacking and parallax. A hero that occupies the full viewport before showing content. Icon fonts. Cookie banners. The words "passionate," "results-driven," "cutting-edge," "building the future," "pixel-perfect," "I love solving problems."

---

## B. Cursor / Claude Code build prompt

*Self-contained. Paste as-is.*

---

> Build a personal portfolio website for a senior frontend engineer. Read this entire prompt before writing code.
>
> ### Absolute rules — these override everything else
>
> 1. **Do not invent content.** Do not write biography, project descriptions, case-study prose, metrics, dates, employer names, testimonials, or achievements. Where real content is not supplied in this prompt, insert a clearly marked placeholder string — `"[PLACEHOLDER: one-line summary for project X]"` — and add the item to a `CONTENT-TODO.md` at the repository root.
> 2. **Never fabricate a number.** No performance percentages, user counts, revenue figures, star counts, years of experience, or Lighthouse scores. If a number is needed and not supplied, write `[ADD METRIC]`.
> 3. **No fake social proof.** No testimonials, client logos, awards, ratings, or "trusted by" sections, even as placeholders.
> 4. **All editable content lives in `/content`.** No user-facing string may be hard-coded in a component. Every heading, label, button text, meta description and paragraph is imported from `/content`. Treat this as an architectural constraint, not a preference.
>
> ### Stack
>
> Next.js 15+ App Router · TypeScript strict · Tailwind CSS · MDX for case studies (`@next/mdx` or `next-mdx-remote`) · `next/font` self-hosted · `next/image` · `next/og` for social images · Vitest + Testing Library · Playwright + `@axe-core/playwright` · Vercel deployment · pnpm.
>
> Do **not** install a component library (no MUI, shadcn, Chakra, Radix themes), an animation library, a CSS-in-JS runtime, an icon font, or a state-management library. Icons are inline SVG. This site needs no client-side state beyond a theme toggle.
>
> ### Project structure
>
> ```
> app/
>   layout.tsx  page.tsx  globals.css
>   work/page.tsx  work/[slug]/page.tsx
>   about/page.tsx  resume/page.tsx
>   sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx
> components/
>   layout/   Header  Footer  SkipLink  ThemeToggle  Container
>   ui/       Button  Link  Tag  Prose  Divider  ThemedImage
>   sections/ Hero  CredibilityLine  FeaturedWork  AboutPreview  ContactBlock
>   work/     ProjectCard  ProjectList  CaseStudyHeader  CaseStudyNav
>   mdx/      Figure  Callout  CodeBlock  ComparisonTable
> content/
>   site.ts  nav.ts  projects.ts  about.ts  resume.ts
>   case-studies/*.mdx
> lib/
>   content.ts  metadata.ts  analytics.ts
> public/
>   resume.pdf  images/
> ```
>
> ### Content model — define these types in `lib/content.ts` and enforce them
>
> ```ts
> type Project = {
>   slug: string
>   title: string
>   summary: string          // 1–2 sentences, card + meta description
>   context: string          // e.g. "ASICS Apps (Race Roster) · 2021–present"
>   role: string
>   stack: string[]
>   featured: boolean
>   order: number
>   cover?: { light: string; dark: string; alt: string }
>   links?: { label: string; href: string }[]
>   hasCaseStudy: boolean
> }
>
> type SiteConfig = {
>   name: string; title: string; positioning: string
>   location: string; email: string
>   social: { github: string; linkedin: string }
>   resumePath: string; canonicalUrl: string
> }
> ```
>
> Case-study MDX frontmatter: `slug`, `title`, `summary`, `publishedAt`, `updatedAt`, `stack[]`, `confidential: boolean`. When `confidential` is true, the template renders a small note: "Written without internal specifics." Do not write that note's text yourself — read it from `content/site.ts`.
>
> ### Routes and required sections
>
> - **`/`** — Hero (h1 positioning headline, supporting paragraph, primary CTA "View my work" → `/work`, secondary CTA "Download résumé" → `/resume`); CredibilityLine (plain comma-separated stack, no logos, no bars); FeaturedWork (heading, intro line, project cards from `content/projects.ts` where `featured`, sorted by `order`); AboutPreview (2 paragraphs + link to `/about`); ContactBlock (heading, one paragraph, `mailto:` link, GitHub/LinkedIn/résumé links).
> - **`/work`** — intro line, then all projects as a **vertical list of large cards**, not a grid of thumbnails.
> - **`/work/[slug]`** — `generateStaticParams` from the MDX files. Header (title, summary, context, role, stack tags, external links), then MDX body in `<Prose>`, then a contact block and prev/next navigation.
> - **`/about`** — bio paragraphs, a "How I work" list, a current-stack line, and a "Download résumé" CTA.
> - **`/resume`** — prominent PDF download button at the top, then the full résumé rendered as semantic HTML from `content/resume.ts`, then a last-updated date.
> - **`/not-found`** — brief, on-brand, links home.
>
> ### Styling
>
> Mobile-first. Breakpoints at 640 / 768 / 1024 / 1280.
>
> Define CSS custom properties on `:root` and `[data-theme="dark"]` for `bg`, `surface`, `text`, `muted`, `border`, `accent`, and map Tailwind's theme to them. Light: `#FCFCFC / #F4F4F5 / #16181D / #5B616B / #E4E4E7 / #2C5FF6`. Dark: `#0B0C0E / #141518 / #EDEEF0 / #9BA1AB / #26282D / #6E97FF`.
>
> Spacing scale: `4 8 12 16 24 32 48 64 96 128` px only. Type scale: `0.875 1 1.125 1.375 1.75 2.25 3.5` rem only. Display sizes use `clamp()` for fluid scaling. Body line-height `1.65`; heading line-height `1.1`; tracking tightens as size increases.
>
> Container: `min(100% - 2.5rem, 64rem)`, centred. Prose: `max-width: 34rem`. Single column, left-aligned throughout.
>
> Theme: default to `prefers-color-scheme`, allow a toggle, persist in `localStorage`, and set `data-theme` in an inline script in `<head>` before paint so there is no flash.
>
> Motion: only 150–200ms colour/opacity transitions on hover and focus, and a single 8px fade-and-rise on first viewport entry using `cubic-bezier(0.22, 1, 0.36, 1)`. Wrap all of it in `@media (prefers-reduced-motion: no-preference)`.
>
> ### Accessibility — treat as build-blocking
>
> Semantic landmarks; exactly one `<h1>` per page; no skipped heading levels; a skip-to-content link visible on focus; full keyboard operability with no positive `tabindex`; a visible 2px accent focus ring with 2px offset on every interactive element (never remove an outline without replacing it); 7:1 contrast for body text and 4.5:1 for everything else in **both** themes; meaningful `alt` on content images and `alt=""` on decorative ones; `lang="en"` on `<html>`; usable at 200% zoom with no horizontal scroll. Zero axe violations on every route.
>
> ### Performance — enforce with Lighthouse CI, fail the build on regression
>
> LCP < 1.2s · INP < 100ms · CLS < 0.02 · first-load JS < 60KB gzipped on `/` · Lighthouse mobile ≥ 98 performance and 100 for accessibility, best practices and SEO.
>
> All routes statically generated. Server Components by default — `'use client'` only in `ThemeToggle` and any genuinely interactive MDX component. `next/font` for self-hosted fonts, two weights maximum per family. `next/image` with explicit dimensions, AVIF with WebP fallback, `priority` on at most one image per page.
>
> ### Metadata and SEO
>
> A single `buildMetadata()` in `lib/metadata.ts` used by every page — no hand-written tags. Per-page unique title and description, canonical URL, OG and Twitter card tags with a 1200×630 image from `next/og`. Generate `sitemap.ts` and `robots.ts`. Add JSON-LD: `Person` and `WebSite` on the homepage, `Article` + `BreadcrumbList` on case studies. **Do not add `Review`, `AggregateRating`, or any structured data you have no real values for.**
>
> ### Analytics
>
> Vercel Web Analytics, behind a thin `lib/analytics.ts` wrapper so the provider can be swapped in one file. Track exactly five events: `resume_download` (with `location`), `case_study_view` (with `slug`), `case_study_complete` (90% scroll), `external_link_click` (with `destination`), `contact_click` (with `location`). No session recording, no heatmaps, no third-party pixels, no cookie banner.
>
> ### Testing
>
> Vitest + Testing Library for content loaders, `buildMetadata()`, and the theme toggle. Five Playwright specs: homepage primary CTA reaches `/work`; a project card opens its case study; the résumé PDF downloads; the theme toggle persists across reload; keyboard-only traversal of the homepage reaches every interactive element with a visible focus ring. Run `@axe-core/playwright` against every route and fail on any violation. GitHub Actions: typecheck → lint → unit → build → Playwright → axe → Lighthouse CI.
>
> ### Deployment
>
> Vercel, static export where possible, preview deploy per pull request, custom domain, one canonical host with the other 301'd.
>
> ### Acceptance criteria — the build is done when all of these pass
>
> 1. `pnpm build` completes with no TypeScript or ESLint errors, strict mode on.
> 2. Every route is statically generated.
> 3. **Zero user-facing strings exist outside `/content`.** Verify by grepping components for quoted prose.
> 4. `CONTENT-TODO.md` lists every placeholder, with its file and line.
> 5. Lighthouse mobile: performance ≥ 98, accessibility 100, best practices 100, SEO 100 — on every route.
> 6. `@axe-core/playwright` reports zero violations on every route.
> 7. Full keyboard traversal of every page, with a visible focus indicator at every stop.
> 8. Both themes render correctly, including all images and diagrams, with no flash on load.
> 9. Layouts verified at 375px, 768px and 1440px.
> 10. With `prefers-reduced-motion: reduce`, no animation runs.
> 11. First-load JS on `/` is under 60KB gzipped.
> 12. Every page has a unique title, description, canonical URL and OG image.
> 13. All five analytics events fire.
> 14. All Playwright specs pass in CI.
> 15. **No fabricated content, metric, testimonial, logo, or date appears anywhere in the repository.**
>
> Start by scaffolding the project and the `/content` directory with fully typed placeholder data, then build the layout shell, then the homepage, then the work and case-study routes, then about and résumé, then metadata, then tests. Ask before adding any dependency not named in this prompt.
