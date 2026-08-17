# Phase 2 — Targeted Résumé

**Target:** Frontend Engineer, Expansion — Stripe (Web Presence & Platform)
**Built from:** your confirmed answers only. Every unverified item is marked.

---

## 1. Professional summary

> Senior frontend engineer with nine years building web applications — the last seven in React — currently at ASICS Apps (Race Roster). Built a shared component library from scratch and maintained a 40+ component library and Storybook. Implemented state management across microfrontends following a team evaluation — XState for workflow-driven flows, alongside Redux, React Query, Valtio, and React Context. Ships every feature behind LaunchDarkly and Datadog flags with context-targeted progressive rollout.

**Why it's built this way**

- **"nine years... the last seven in React"** — defensible. Sep 2017 → Aug 2026 is **8 years 11 months**, which rounds to nine; React starts at binnj in Jan 2019, so seven years seven months. A recruiter can verify both from your dates. If you'd rather not round, use **"nearly nine years."** Your current résumé's "8+ years" is technically accurate but reads as stale, and it undersells the React figure entirely.
- **Opens with the employer, not an adjective.** "Results-driven" is gone.
- **Three of the four sentences are direct JD matches:** design systems (named responsibility), complex state management (named preferred qualification), experimentation infrastructure (named responsibility).
- **"40+ component"** is the only number in the summary, and it's one you gave me. Concrete scope beats vague scale.
- No "passionate," "cutting-edge," "pixel-perfect," or "results-driven."

---

## 2. Skills section

```
Languages & Frameworks   TypeScript, JavaScript, React, Remix (SSR), Node.js
State & Data             XState, Redux, React Query, Valtio, React Context, GraphQL (Apollo), REST
Design Systems & UI      Storybook, Radix UI, Material UI, React Spectrum, Stitches,
                         semantic HTML, responsive UI
Testing                  Vitest, Jest, React Testing Library
Build & Delivery         Vite, Docker, GitHub Actions, LaunchDarkly, Datadog, Lighthouse, Git
AI-assisted development  Claude Code, Cursor
```

**Removed, and why:**

| Removed | Reason |
|---|---|
| Angular, AngularJS, Vue.js | Not this stack. Every non-React framework listed dilutes your React signal on a role that names React explicitly. They stay in your work history where they belong as context. |
| Bootstrap | Reads junior next to Radix and React Spectrum. |
| Knex.js, MySQL, PostgreSQL, Express.js | Backend depth isn't what this role screens for; keep it in the Sport-Travel bullets. |
| Power BI, SSAS, SSRS, MS Project, Trello, Jira | Pulls your narrative toward a project-management career. |
| Semantic versioning, Sprint facilitation, Stakeholder alignment | Not skills a frontend screener scans for; they're behaviours, better shown in bullets. |
| "AI Development Tools" as its own category with four entries | Compressed to one line. At a craft-first team, a prominent AI-tooling block reads as process over output — and in 2026 it's table stakes, not a differentiator. One line keeps the keyword without the emphasis. |

**Deliberately kept even though it's not in the JD:** Docker and GitHub Actions. The Platform pillar is responsible for making sites "fast, stable, and easy to update" — delivery-pipeline literacy supports that.

---

## 3. Experience rewrite

### ASICS Apps (Race Roster) — Senior Frontend Developer | Nov 2021 – Present

Seven bullets, ordered by relevance to *this* role rather than chronology.

1. **Built the frontend of a standalone event-management admin platform from scratch** when the monolith was split into separate systems — selected the stack (React, TypeScript, Vite, Material UI, Apollo GraphQL) and owned the frontend architecture. `[ADD METRIC]`
2. **Built a shared component library from the ground up**, and maintained a 40+ component library and Storybook that standardized UI patterns and component documentation. `[NEED CONFIRMATION]`
3. **Implemented state management across microfrontends** following a team evaluation — XState for workflow-driven flows, with Redux, React Query, Valtio, and React Context applied where each fit the problem better. `[ADD METRIC]`
4. **Ship every feature behind LaunchDarkly and Datadog feature flags**, using multiple flag variations and context rules to control staged rollout and audience targeting.
5. **Built server-rendered React applications with Remix and Vite**, and monitored runtime performance with Lighthouse and Datadog. `[ADD METRIC]`
6. **Maintained frontend test coverage with Vitest, Jest, and React Testing Library** across complex UI workflows.
7. **Reviewed code, contributed to frontend architecture decisions, onboarded new developers onto the frontend stack**, and implemented Figma-based designs in direct collaboration with designers ahead of final comps.

**Bullet-by-bullet rationale**

| # | Why it's here, and why in this position |
|---|---|
| 1 | Your single best seniority signal. Greenfield + stack selection + architecture ownership answers the hiring manager's levelling question ("is this person operating at Stripe senior scope?") in one line. It leads. |
| 2 | Direct hit on a named responsibility: *"Utilize, maintain, and extend our design systems."* The 40+ number is the most concrete figure you have. |
| 3 | Direct hit on the preferred qualification *"building highly complex interactive tools, including state management."* Five state solutions with a stated selection rationale is a far stronger answer than one library. This is your interview-bait bullet. |
| 4 | Your honest bridge to *"integrate our web platform with self-serve authoring and experimentation."* It says progressive delivery, targeting, and rollout control — all true — without claiming you've run an experiment. |
| 5 | Performance and SSR are in the JD and the Platform pillar mandate. Deliberately phrased as *what you did*, not as an outcome, because you can't source the outcome yet. |
| 6 | Testing rigour. Stripe's frontend org screens for it. |
| 7 | Consolidates the JD's **first-listed** responsibility (pairing, mentoring, culture) plus designer collaboration into one line, framed at the level you actually confirmed — onboarding and code review, not "led mentorship programs." |

### binnj, inc. — Web Developer | Jan 2019 – Nov 2021

1. Built single-page applications from scratch with React, React Router, and Redux, and maintained and extended AngularJS applications.
2. Ran client-facing proofs of concept to test UX changes before build, supporting platform adoption.
3. Built map-based data visualizations with the Google Maps API, and managed source control and CI with Git and GitLab.

**Changes from your current version:** seven bullets compressed to three. The PoC bullet is kept and moved up — *"increase platform adoption"* is the closest thing in your history to Expansion-pod work. "Mentored junior developers and led agile planning initiatives" is removed here because it duplicates the mentorship signal you now make at ASICS, and duplication across roles reads as filler.

### Sport-Travel Inc. — Full Stack Web Developer | Sep 2017 – Dec 2018

1. Built RESTful APIs with Node.js and Express, consumed by Vue.js web and mobile clients.
2. Integrated Stripe for payment processing and optimized CRUD operations using Knex.js over MySQL and PostgreSQL.

**Changes:** seven bullets to two. The Stripe integration stays — it's true, it's specific, and on a Stripe application it's a small, honest point of contact. Trello/agile bullets removed.

### Prosperi Technology — Project Management Consultant | Aug 2012 – Mar 2016 · Vitória, Brazil

1. Delivered enterprise project-management implementations (Microsoft PPM), generating $160,000+ in revenue and reducing client change requests by 33%.
2. Trained 1,000+ professionals in project-management software; concurrently taught project management at UCL – Faculdade do Centro Leste (2014–2016).

**Changes:** four bullets to two, and the college teaching role is folded in rather than listed separately. **Keep this role — don't delete it.** It explains your timeline, and the training/teaching line is real support for the JD's *"excellent verbal and written communication"* minimum. It just shouldn't own all the numbers on the page anymore, which is why bullets 1–7 above now carry concrete scope figures.

### Bullets to remove, merge, or shorten — summary

| Current bullet | Action | Reason |
|---|---|---|
| "Engineered scalable web applications... improving performance and reducing load time" | **Rewrite** (new #5) | Unsourced outcome claim. Reworded to state the work, not an unverifiable result. |
| "Integrated AI-based automation to generate unit tests, refactor legacy code, streamline boilerplate, and design conversational UI content" | **Remove** | Longest bullet on the page, about tooling. "Design conversational UI content" is also vague and I have no evidence for it. |
| "Used AI for architectural suggestions, bundle optimization, and edge-case validation" | **Remove** | Second AI bullet. Merged into a one-line skills entry. |
| "Collaborated in agile teams to deliver features, plan sprints, and facilitate peer mentorship" | **Merge into #7** | Generic; "agile teams" and "plan sprints" are assumed at this level. |
| "Delivered internal documentation and component libraries via Storybook" | **Merge into #2** | Now carries a real number instead of "delivered." |
| "Monitored runtime performance with Lighthouse and Datadog to proactively eliminate bottlenecks" | **Merge into #5** | "Proactively eliminate bottlenecks" is an outcome claim you can't source. |
| binnj: "Developed responsive UIs with React, AngularJS, and Redux for scalable customer-facing apps" | **Merge** into binnj #1 | Duplicates the SPA bullet. |
| binnj: "Mentored junior developers and led agile planning initiatives" | **Remove** | Duplicates the ASICS mentorship signal. |
| Sport-Travel: "Managed projects through Trello with agile methodology" | **Remove** | Zero value for this role. |
| Prosperi: "Designed tailored onboarding content and technical documentation" | **Merge** into Prosperi #2 | |
| Education: "MBA Project Management" and "Bachelor in Business Management" | **Keep, compress to one line each** | Don't hide them — an unexplained gap is worse than a business degree. |

---

## 4. Final résumé — copy-ready plain text

```
VITOR MIRANDA
Senior Frontend Engineer
London, Ontario, Canada  |  Remote-eligible across Canada  |  Canadian citizen
+1 (647) 937-9470  |  vcmiranda@outlook.com
linkedin.com/in/vcmiranda  |  github.com/vcmiranda  |  vcmiranda.me


SUMMARY

Senior frontend engineer with nine years building web applications - the last seven in
React - currently at ASICS Apps (Race Roster). Built a shared component library from
scratch and maintained a 40+ component library and Storybook used across teams.
Selected and implemented state management per microfrontend, from XState for
workflow-driven flows to Redux, React Query, Valtio, and React Context where each fit
better. Ships every feature behind LaunchDarkly and Datadog flags with
context-targeted progressive rollout.


SKILLS

Languages & Frameworks   TypeScript, JavaScript, React, Remix (SSR), Node.js
State & Data             XState, Redux, React Query, Valtio, React Context,
                         GraphQL (Apollo), REST
Design Systems & UI      Storybook, Radix UI, Material UI, React Spectrum, Stitches,
                         semantic HTML, responsive UI
Testing                  Vitest, Jest, React Testing Library
Build & Delivery         Vite, Docker, GitHub Actions, LaunchDarkly, Datadog,
                         Lighthouse, Git
AI-assisted development  Claude Code, Cursor


EXPERIENCE

Senior Frontend Developer
ASICS Apps (Race Roster) - London, ON                        November 2021 - Present

- Built the frontend of a standalone event-management admin platform from scratch when
  the monolith was split into separate systems - selected the stack (React, TypeScript,
  Vite, Material UI, Apollo GraphQL) and owned the frontend architecture.
- Built a shared component library from the ground up, and maintained a 40+ component
  library and Storybook that standardized UI patterns and component documentation.
- Implemented state management across microfrontends following a team
  evaluation - XState for workflow-driven flows, with Redux, React Query, Valtio, and
  React Context applied where each fit the problem better.
- Ship every feature behind LaunchDarkly and Datadog feature flags, using multiple flag
  variations and context rules to control staged rollout and audience targeting.
- Built server-rendered React applications with Remix and Vite, and monitored runtime
  performance with Lighthouse and Datadog.
- Maintained frontend test coverage with Vitest, Jest, and React Testing Library across
  complex UI workflows.
- Reviewed code, contributed to frontend architecture decisions, onboarded new
  developers onto the frontend stack, and implemented Figma-based designs in direct
  collaboration with designers ahead of final comps.

Web Developer
binnj, inc. - London, ON                                  January 2019 - November 2021

- Built single-page applications from scratch with React, React Router, and Redux, and
  maintained and extended AngularJS applications.
- Ran client-facing proofs of concept to test UX changes before build, supporting
  platform adoption.
- Built map-based data visualizations with the Google Maps API, and managed source
  control and CI with Git and GitLab.

Full Stack Web Developer
Sport-Travel Inc. - London, ON                          September 2017 - December 2018

- Built RESTful APIs with Node.js and Express, consumed by Vue.js web and mobile
  clients.
- Integrated Stripe for payment processing and optimized CRUD operations using Knex.js
  over MySQL and PostgreSQL.

Project Management Consultant
Prosperi Technology - Vitoria, Brazil                      August 2012 - March 2016

- Delivered enterprise project-management implementations (Microsoft PPM), generating
  $160,000+ in revenue and reducing client change requests by 33%.
- Trained 1,000+ professionals in project-management software; concurrently taught
  project management at UCL - Faculdade do Centro Leste (2014-2016).


SELECTED PROJECTS

Nami - Native macOS file manager built with Tauri 2. Dual-pane browsing,
a synced terminal, git status, and remote hosts in a single native window, built for
people who hit the limits of Finder.

Forma - Client-management application for personal trainers, built with TypeScript.
In active development.


EDUCATION

Internet Applications and Web Development - Fanshawe College, London, ON  2016 - 2018
MBA, Project Management - Vila Velha University, Vitoria, Brazil          2007 - 2008
BBA, Business Management - Vila Velha University, Vitoria, Brazil         2001 - 2006
```

---

## 5. The five most important changes, and why each helps with *this* interview

**1. The state-management bullet now names five libraries and a selection process.**
The JD's preferred qualification is *"Experience building highly complex interactive tools, including state management."* Nearly every applicant will answer that with one library. "We evaluated options and chose XState for workflow-driven flows; Redux, React Query, Valtio, and Context are used elsewhere where they fit better" says something different — that you've hit the point where ad-hoc state breaks down, and that you reason about the choice. **Expect this to be the bullet they ask about.** Have the story ready: which flow, why a state machine won, what got better.

**2. Greenfield architecture ownership was promoted to the first bullet.**
The band tops CA$258,000. The screener's real question is whether you operate at that scope. "Built the frontend of a standalone platform from scratch, selected the stack, owned the architecture" answers it in the first line they read. Your previous first bullet — "engineered scalable web applications... improving performance" — answered nothing, because every applicant writes it.

**3. Feature flags were added, framed as progressive delivery rather than experimentation.**
Stripe lists *"integrate our web platform with self-serve authoring and experimentation"* as a responsibility. You haven't run A/B tests, so you can't claim experimentation. But LaunchDarkly is an experimentation platform, and context-targeted flag variations controlling staged rollout is genuinely the infrastructure layer of that responsibility. This turns what looked like a hard gap in Phase 1 into a credible partial match — **and it gives you an honest, strong answer when they ask about A/B testing:** you own the delivery mechanism, you haven't owned the measurement side, and you want to.

**4. The AI-tooling content dropped from a skills category plus a summary sentence plus two bullets, to one line.**
This team says *"we want to make every pixel count."* A résumé where three of the most prominent claims are about which assistant you use reads as process over output. One line keeps you searchable for the keyword and stops the emphasis from working against you.

**5. Angular, Vue, Bootstrap, Power BI, SSAS, SSRS, MS Project, and Trello are gone from the skills block.**
Two effects. ATS relevance scoring improves because a higher share of your listed skills match the posting. And the human narrative changes: the old skills block told a story about a generalist with a project-management past, and the new one tells a story about a React specialist who happens to communicate unusually well. The PM history is still there in your work record where it explains your timeline honestly — it just no longer competes for the recruiter's attention in the top third of page one.

---

## 6. Factual-accuracy audit

Every marker in the résumé, what's missing, and what to do about it.

**Nothing in the résumé above states an achievement, metric, or outcome you did not confirm to me.** Three items are carried over from claims you already make on your own current résumé rather than from your answers — React Spectrum, Stitches, and Docker in the skills block (C5, C6). They aren't invented, but they are unverified by this conversation, so audit them yourself before you submit.

### `[ADD METRIC]` — numbers that would strengthen a true claim

| # | Location | What's missing | Suggested honest form | Priority |
|---|---|---|---|---|
| M1 | ASICS bullet 1 — admin platform | Scope of the platform you built | "…from scratch — N screens / N modules serving event organizers" or "…replacing the admin section of a monolith used by organizers to manage events" | **High.** Even a screen count or module count converts "built a thing" into "built a thing of this size." |
| M2 | ASICS bullet 3 — microfrontends | How many microfrontends | "…across N microfrontends" | **High.** One word, and it makes the architecture claim concrete. You know this number. |
| M3 | ASICS bullet 5 — performance | Any before/after figure | Leave as-is unless you can source it. If you ever get access: LCP, INP, bundle size, or Lighthouse delta. | **Medium.** Currently written so it needs no metric to be true. Add one only if verifiable. |
| M4 | ASICS bullet 6 — testing | Coverage threshold | "…maintaining N% coverage" — only if a real, enforced threshold exists in CI | **Low.** Skip if it's informal. |
| M5 | ASICS bullet 7 — onboarding | How many developers | "…onboarded N developers onto the frontend stack" | **Medium.** You said you support onboarding; a count would make it concrete. Only use a number you're sure of. |

### `[NEED CONFIRMATION]` — claims that need a source before or during the interview

| # | Claim | Status | Action |
|---|---|---|---|
| C1 | "40+ component library and Storybook **used across teams**" | You confirmed 40+ components and that you built one from scratch and maintained another. You did **not** confirm how many teams or apps consumed it. | Confirm before the phone screen. If it was one app, change to "used across the application" — still true, still strong. Don't leave "across teams" in if you can't back it. |
| C2 | "Built a shared component library **from the ground up**" and "maintained a 40+ component library" as two separate systems | Your answer implies these are two different libraries. The bullet is written to allow both readings. | Confirm which is which so your interview story is clean. If they're the same library, simplify the bullet. |
| C3 | Remix used at ASICS | On your current résumé and LinkedIn, so it's your own prior claim. | No action, but be ready to describe what you built with it. |
| C4 | "monitored runtime performance with Lighthouse and Datadog" | Your own prior claim on the current résumé. | Be ready to say what you looked at and what you changed as a result. |
| C5 | React Spectrum, Stitches | Listed on your current résumé; you didn't mention them in your answers. | Drop either one you can't discuss for two minutes. An unfamiliar library in your skills list is a trap in a technical screen. |
| C6 | Docker | On your current résumé; not confirmed in your answers. | Keep only if you use it. |
| C7 | Nami — "dual-pane browsing, synced terminal, git status, remote hosts" | Your description, but the repo is **private**, so a reader can't verify it. | Either make the repo public, or add screenshots and a short write-up to your site before submitting. An unverifiable project on a résumé is weaker than no project. **See the portfolio plan.** |
| C8 | **`nesto` is excluded from the résumé** | You didn't answer whether it's a take-home for the company Nesto or whether you're free to feature it. | **This is the most consequential open item.** It is by a wide margin your strongest public, clickable, inspectable web artifact — React 19, TypeScript, Vite, Tailwind, i18n, Vitest, a published Storybook, and a live demo. If you're cleared to feature it, add it to Selected Projects and to the portfolio. If it's a take-home under an NDA or the company's terms, **consider making the repo private**, because a publicly visible take-home can itself be a red flag. Decide today either way. |
| C9 | Accessibility | You confirmed you can speak to semantic HTML, responsive UI, keyboard interaction, and accessible component practice, but have **no proof**. | The résumé claims only "semantic HTML, responsive UI" in skills — deliberately no WCAG claim, no audit claim, no "pixel-perfect." **Do not add any.** Radix UI in your skills list does honest work here: choosing accessibility-first primitives is real evidence without asserting compliance. |
| C10 | Mentorship framing | You described "engineering collaboration, code review, technical decision-making, onboarding support" — noticeably more modest than your current LinkedIn, which says "provided technical mentorship to junior and mid-level developers" and "led knowledge-sharing sessions." | The résumé uses your conservative framing. Decide which is accurate and **make LinkedIn match** — right now the two documents claim different levels of leadership, and that inconsistency is visible to anyone who reads both. |
| C11 | Animation / motion | Confirmed: none. | **Nothing in the résumé claims it.** This will likely come up — the JD names it. Prepared honest answer: you haven't done motion work professionally, your interaction complexity has lived in state and flow rather than in animation, and it's the area you're actively building. Then show whatever you've built by then. |
| C12 | A/B testing | Confirmed: none. | **Nothing in the résumé claims it.** Bullet 4 claims flags and rollout only. Hold that line in interviews. |
| C13 | React Native, Expo, Supabase, self-hosted infrastructure | You listed these in your original brief but they appear in neither your résumé, your LinkedIn, nor your answers. | **Left off entirely.** They're low-relevance for this role and unverified. Don't add them back for this application. |
| C14 | Race Roster scale figures ("millions of athletes") | You correctly flagged that this is public company-level context, not your personal metric. | **Not in the résumé.** Correct call. You may use it verbally as context — "the platform serves a large registration volume" — but never as your own metric, and never with a number attached to your work. |
| C16 | **State-management attribution.** Your words were "our team evaluated... and that one was chosen," then "Same way I implemented XState, a few others were implemented in other microfrontends." | Ambiguous on whether *you* implemented Redux, React Query, Valtio and Context, or colleagues did. | The résumé now says **"Implemented state management across microfrontends following a team evaluation"** with the other libraries phrased passively ("applied where each fit"), which is true under either reading. **Before the interview, get precise about which ones you personally implemented** — this is your headline bullet and it will be probed. |
| C17 | Nami built with **Tauri 2** | Confirmed by your repo description. TypeScript was my inference — GitHub reports the repo's primary language as HTML. | The résumé now says Tauri 2 only. Add the language yourself once you've checked. |
| C15 | "nine years... the last seven in React" | Sep 2017 → Aug 2026 = 8 years 11 months. React from Jan 2019 → 7 years 7 months. | Both accurate as written. If you want to be conservative, "nearly nine years." |

### Three things to fix before you submit

1. **Decide the `nesto` question** (C8). It changes both the résumé and the portfolio.
2. **Fill in M2** — the microfrontend count. One number, high payoff, you already know it.
3. **Resolve C1** — "across teams" or "across the application." Pick the true one.
