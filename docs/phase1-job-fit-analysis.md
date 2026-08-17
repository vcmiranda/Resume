# Phase 1 — Job-Fit and Positioning Analysis

**Candidate:** Vitor Miranda
**Target role:** Frontend Engineer, Expansion — Stripe (Web Presence & Platform)
**Location:** Toronto office or remote within Canada (56+ km from a Stripe office)
**Comp:** CA$172,000 – CA$258,000
**Analysis date:** 16 August 2026

---

## 0. What this role actually is (read this first)

This is not a standard senior product-frontend role. Read the team description carefully:

> "The **Presence** pillar creates industry-leading designs for Stripe's front door surfaces... The **Platform** pillar builds the internal machinery that powers these surfaces... We want to make every pixel count, we want it to be enthralling."

The **Expansion pod** works on **stripe.com itself** — acquisition journeys, conversion, interactive marketing tools. The job title says "Frontend Engineer" but the discipline is closer to **creative technology / growth engineering with a craft bar**. The minimum requirement is literally *"5+ years of relevant web front-end development **or creative technology** experience"* and *"Passion for engineering solutions focused around **growth hacking & enablement**."*

Three consequences that shape everything below:

1. **Your portfolio site is not a nice-to-have here — it is a primary screening artifact.** For a team whose product *is* a marketing website, the hiring manager will open `vcmiranda.me` and treat it as your work sample. In its current state it is the single biggest risk to your candidacy (details in §3).
2. **Visual and interaction craft is weighted as heavily as engineering.** "Typography, layout, balance, proportion," "interactions, animation, performance." Your evidence base is strong on architecture, testing, and accessibility, and near-silent on motion and visual craft.
3. **Your product-app experience is transferable but not on-the-nose.** ASICS Apps / Race Roster is a product engineering context. The Expansion pod is a conversion-and-content context. You need to bridge that deliberately rather than hope a recruiter does it for you.

---

## 1. Hiring-priority map

| Requirement or responsibility | Evidence from the job description | Importance | Evidence from your experience | Gap or clarification needed |
|---|---|---|---|---|
| 5+ years frontend web development or creative technology | Minimum requirement, stated first | **Must-have** | ~9 years since Sep 2017 (Sport-Travel → binnj → ASICS Apps); ~4 yr 10 mo at senior level | None. Clear pass. Update résumé summary from "8+" to "9 years" or drop the count and let dates speak. |
| React proficiency | Minimum ("relevant"), and preferred with a specific lens: *"with a focus on interactions, animation, performance"* | **Must-have** | React across all three dev roles; React + Remix + Vite at ASICS Apps; React 19 + TS in `nesto` | React depth: strong. **Interactions and animation: no evidence anywhere.** This is your #1 substantive gap. |
| Writing clear, elegant code in a team environment | Minimum requirement | **Must-have** | Code reviews, code standards enforcement, mentorship, naming-convention standardization, component libraries (LinkedIn experience section) | Needs to be shown, not asserted. A public repo with genuinely elegant code beats a bullet. `nesto` partially does this. |
| Excellent verbal and written communication | Minimum requirement | **Must-have** | Trained 1,000+ professionals; college instructor; peer tutor; technical documentation; Storybook docs; mentorship | Genuinely strong and under-used. Currently buried in the 2011–2016 section where it reads as "former PM," not "engineer who communicates well." |
| Passion for growth hacking & enablement | Minimum requirement | **Strong preference** (it's in minimums but is a signal, not a credential) | Client-facing PoCs at binnj "to improve UX and increase platform adoption"; Race Roster is a conversion-driven registration product | `[NEED CONFIRMATION]` — have you ever worked on signup/registration conversion, funnels, landing pages, or pricing pages? Race Roster registration flows would be a direct hit if you touched them. |
| Build beautiful, best-in-class end-user experiences | Responsibility | **Must-have** | "Pixel-perfect, accessible, responsive UIs" (LinkedIn); Radix UI, MUI | The claim exists; the *proof* does not. No public artifact currently demonstrates visual quality. |
| Utilize, maintain, and extend design systems | Responsibility | **Must-have** | Storybook component libraries "across multiple teams" at ASICS Apps; Radix UI, MUI, React Spectrum, Stitches | `[NEED CONFIRMATION]` — were you a consumer, a contributor, or an owner/maintainer? How many components, how many consuming teams/apps? This is a top-3 bullet if you owned it. |
| Building highly complex interactive tools, including state management | Preferred qualification | **Strong preference** | **XState** (résumé + LinkedIn) and Redux | XState is a strong, differentiating signal — it's the state-machine tool you reach for in genuinely complex interactive UI. `[NEED CONFIRMATION]` — what did you build with it? This could become your strongest single story. |
| Design fundamentals: typography, layout, balance, proportion | Preferred qualification | **Strong preference** | Adobe Photoshop/Illustrator (website skills list); "pixel-perfect" claim | Weak. And the current portfolio actively argues *against* it. Fixable through the rebuild rather than through claims. |
| Interactions and animation | Preferred qualification | **Strong preference** | None found | **Real gap.** No Framer Motion / Motion, GSAP, CSS view transitions, Canvas, WebGL, Three.js, Lottie, or scroll-driven work in any material. |
| Performance | Preferred qualification + Platform pillar mandate ("fast, stable") | **Strong preference** | Lighthouse + Datadog monitoring; Vite; Remix SSR; "reduced load time" | Directionally right, **zero numbers**. `[ADD METRIC]` — LCP/INP/CLS before-and-after, bundle size reduction, TTI. This is the cheapest credibility upgrade available to you. |
| A/B testing / experimentation | Preferred qualification; also a responsibility ("integrate our web platform with self-serve authoring and **experimentation**") | **Strong preference** | None found | **Real gap.** Do not claim it without evidence. If Race Roster ran feature flags or experiments (LaunchDarkly, Optimizely, Statsig, GrowthBook, homegrown) and you touched them, that is worth a bullet. |
| Synthetic monitoring | Preferred qualification | **Nice-to-have** | Datadog (Datadog offers Synthetic Monitoring) | `[NEED CONFIRMATION]` — did you use Datadog Synthetics/RUM specifically, or only dashboards and APM? Only claim the specific product you used. |
| Accessibility testing | Preferred qualification | **Nice-to-have → strong preference** | WCAG adherence claimed; Radix UI (accessibility-first primitives); React Spectrum | `[NEED CONFIRMATION]` — automated (axe, Pa11y, Lighthouse a11y, jest-axe) or manual (screen reader, keyboard audits)? Which WCAG level? Any audit you led? |
| Self-serve authoring (CMS / content platform integration) | Responsibility | **Strong preference** | None found | **Real gap.** No CMS experience visible (Contentful, Sanity, Storyblok, headless WP, MDX-based authoring). Your portfolio rebuild is a legitimate, honest way to gain a small piece of this. |
| Pairing and mentoring; building a culture of excellence | Responsibility, listed **first** | **Strong preference** | Mentorship at ASICS Apps and binnj; peer tutor; college professor; trained 1,000+; managed a 4-person dev team at Microsoft Innovation Center | **Your strongest non-obvious asset.** Currently scattered and under-framed. |
| Cross-functional work with design + engineering | Throughout ("collaborating across design and engineering teams") | **Must-have** | Agile cross-functional teams with designers, backend, QA (LinkedIn) | `[NEED CONFIRMATION]` — do you work directly from Figma? Do you push back on / co-design with designers? That specific dynamic is what this team is asking about. |
| Based in Canada, remote-eligible (56+ km from a Stripe office) | Location requirement | **Must-have** | London, Ontario — ~170 km from Toronto | Clear pass. Say "London, Ontario, Canada" on the résumé, not just "Canada." |
| Product-driven tech company context | Implied by team ("product-driven tech companies" appears in the sibling posting) | **Strong preference** | ASICS Apps / Race Roster — consumer fitness + event registration at scale | `[ADD METRIC]` — MAU, registrations processed, traffic, peak-load events. Race Roster handles race registration spikes; that is a great scale story if you can share a public or non-confidential figure. |

---

## 2. ATS and recruiter analysis

### Top 15 ATS keywords and phrases, ranked

Ranked by a combination of JD prominence, screening weight, and how defensible each is for you.

| # | Keyword / phrase | Why it ranks here | Safe for you to use? |
|---|---|---|---|
| 1 | **React** | Named explicitly in preferred quals; the non-negotiable stack term | Yes — 3 roles, ~7 years |
| 2 | **Frontend engineer / front-end development** | Exact title match; recruiters search the literal string | Yes |
| 3 | **TypeScript** | Universal senior-frontend screen; in your stack and `nesto` | Yes |
| 4 | **Design systems** | A named responsibility ("utilize, maintain, and extend our design systems") | Yes — scope it honestly |
| 5 | **Performance** / **web performance optimization** | Named preferred qual + Platform pillar mandate | Yes — but attach a number |
| 6 | **State management** | Named preferred qual, tied to "highly complex interactive tools" | Yes — Redux, XState |
| 7 | **Accessibility / WCAG** | Named preferred qual (accessibility testing) | Yes — scope it honestly |
| 8 | **Component library** | The concrete form of "design systems" | Yes — Storybook |
| 9 | **Interactions and animation** | Named preferred qual, verbatim phrasing | **No — not yet.** Do not include until you have real evidence |
| 10 | **A/B testing / experimentation** | Named preferred qual *and* a responsibility | **No — unless confirmed.** Highest-value keyword you probably can't yet claim |
| 11 | **Server-side rendering (SSR)** | Core to any fast marketing-site platform | Yes — Remix |
| 12 | **Storybook** | Direct proxy for design-system maturity | Yes |
| 13 | **Mentoring / pairing / code review** | The *first* listed responsibility | Yes — strongly |
| 14 | **Core Web Vitals (LCP, INP, CLS)** | The measurable form of "performance"; ATS and humans both scan for it | `[NEED CONFIRMATION]` — only if you actually tracked them |
| 15 | **Cross-functional collaboration with design** | Recurring theme; recruiter phone-screen question | Yes |

**Runners-up worth including if space allows:** Vite, Jest/Vitest, React Testing Library, GraphQL, REST, Node.js, Datadog, Lighthouse, CI/CD, Git, Agile.

**Deliberately excluded** (present in your current résumé but noise for *this* application): Angular/AngularJS, Vue.js, Power BI, SSAS, SSRS, MS Project, Trello, Bootstrap, Knex.js, MySQL. Also **de-prioritize the AI-tools block** — see §3.

### Top 5 technical capabilities the role requires

1. **React at depth, specifically for interaction-heavy UI** — not CRUD screens. Custom interactive tools, animation, gesture, transitions, perceived performance.
2. **Design-system engineering** — building, maintaining, versioning, and extending shared component primitives that other teams consume, and knowing when to break out of the system.
3. **Web performance on a high-traffic public site** — measured, not asserted. Core Web Vitals, bundle discipline, SSR/streaming, image and font strategy, third-party script cost.
4. **Complex client state** — state machines/statecharts for multi-step, branching, interruptible flows. This is exactly what XState is for and exactly what conversion tools need.
5. **Platform integration: authoring + experimentation** — wiring a site to a CMS so non-engineers can ship content, and to an experimentation system so changes can be measured.

### Top 5 product, leadership, collaboration, and communication signals

1. **Mentoring and pairing** — listed as the *first* responsibility, ahead of building anything. Stripe is telling you the team optimizes for raising the bar collectively.
2. **Working fluently with designers** — this pod sits next to design. They want someone who reads a Figma file and improves it, not someone who implements it literally and files a ticket.
3. **Commercial instinct** — "growth hacking & enablement," "driving conversion." They want an engineer who asks what the change is supposed to do to the funnel.
4. **Written communication** — explicit minimum. In practice: design docs, RFCs, PR descriptions, documentation.
5. **Craft ownership / taste** — "make every pixel count." The willingness to say "this isn't good enough yet" about your own work.

### Likely recruiter screening criteria

- **Hard filters:** 5+ years frontend; Canada-based; 56+ km from a Stripe office (London ON passes); work authorization in Canada.
- **30-second scan:** Does the résumé say React and TypeScript in the top third? Is the current title senior? Is there a portfolio link, and does it load and look good?
- **Portfolio click-through:** For *this* team specifically, this is near-certain. A recruiter for the Web Presence team will open your site. Assume it happens within 60 seconds of opening your résumé.
- **Company-brand check:** ASICS is a recognizable global brand — that helps. "Race Roster" alone does not travel outside Canada. Write it as **ASICS Apps (Race Roster)** so you get both the brand recognition and the product context.
- **Tenure and stability:** 4 yr 10 mo current tenure reads well.
- **Levelling sanity check:** They are hiring at a band topping CA$258k. The recruiter is asking "is this person operating at Stripe senior/staff scope?" Your materials currently do not answer that, because they contain no scale and no metrics.

### Likely hiring-manager concerns and interview themes

| Concern | Why they'll have it | How you address it honestly |
|---|---|---|
| **"Does this person have taste?"** | The portfolio is the evidence, and right now it argues no | Rebuild the site. This is Phases 4–6 and it is not optional for this application. |
| **"Have they built anything genuinely interactive?"** | Every bullet describes app features, testing, and tooling — none describes an interactive experience | Find and write up the most interaction-complex thing you've built (likely the XState work). |
| **"Do they think about conversion, or only about tickets?"** | Nothing in your materials mentions a business or funnel outcome from frontend work | Prepare one story where a frontend decision changed a user or business outcome. |
| **"Career-changer risk"** | Your quantified achievements are all from a 2011–2016 project-management career; your engineering bullets have none | Push PM history down and compress it; add engineering metrics. |
| **"AI-tooling résumé"** | Your current résumé has a dedicated "AI Development Tools" skills line, an AI sentence in the summary, and 2 of 7 ASICS bullets about AI tooling | At a company that judges craft, "I use Cursor" is table stakes, not a differentiator. Cut to one bullet at most. |
| **"Marketing-site experience?"** | Their entire surface area is a public marketing site with a CMS and experiments | Be straightforward that this is new, and show you understand the constraints (SEO, i18n, edge caching, content velocity, non-engineer authoring). Your rebuilt portfolio is a small honest proof. |
| **Levelling / scope** | High comp band | Prepare scale numbers: users, traffic, team size, number of consuming apps, incidents. |

**Likely interview themes:** a craft/portfolio walkthrough; a React interaction or animation exercise; a performance debugging exercise; a design-system API design discussion; a "how would you test a change to a pricing page" experimentation conversation; a collaboration/mentorship behavioural round.

### Requirements you should NOT claim without stronger evidence

Do not put any of these on the résumé, LinkedIn, or site until you can point to a specific thing you did:

1. **A/B testing, experimentation, feature-flag-driven development**
2. **Animation, motion design, or creative technology** (WebGL, Canvas, GSAP, Framer Motion, scroll-driven interactions)
3. **CMS / self-serve authoring / content platform** work
4. **Growth engineering or conversion-rate optimization ownership**
5. **Synthetic monitoring** — unless you specifically used Datadog Synthetics or similar
6. **Design-system *ownership*** — say "contributed to" or "maintained" unless you were the owner
7. **Any performance improvement stated as a percentage** you cannot source
8. **React Native, Expo, Supabase, self-hosted infrastructure** — you listed these in your background notes, but they appear in **neither your résumé nor your LinkedIn**. `[NEED CONFIRMATION]` on where each came from (work? side project? which one?). They also have low relevance to this specific role; if the evidence is thin, leave them off this application rather than padding.
9. **"Pixel-perfect"** — as an unsupported adjective it invites the exact scrutiny you can't yet survive. Earn it with the portfolio, then let the portfolio say it.

---

## 3. Candidacy assessment

### Strongest matches

- **Seniority and tenure are unambiguous.** ~9 years, ~5 of them senior, at a recognizable global brand (ASICS). You clear the 5+ minimum with room.
- **React + TypeScript + modern tooling is current, not legacy.** Remix/SSR, Vite, React 19 in `nesto`. Many candidates with 9 years are still on Webpack and class components. You are not.
- **XState is a genuine differentiator.** The JD asks for "highly complex interactive tools, including state management." Most applicants will answer "Redux" or "Zustand." Statecharts signal that you've hit problems where ad-hoc state broke down. **This is the single most under-exploited asset in your materials.**
- **Testing discipline is real and specific.** Jest, Vitest, RTL, coverage standards. Stripe's frontend org cares about this.
- **Design-system and documentation work.** Storybook component libraries used across multiple teams maps directly onto a named responsibility.
- **Accessibility awareness.** Radix UI and React Spectrum are accessibility-first choices; using them is a meaningful signal, not a keyword.
- **Small, human hook:** you integrated Stripe payments at Sport-Travel. It's an eight-year-old bullet, but it's true, it's specific, and it's a nice one-line note in a cover letter or recruiter message.

### Transferable strengths

- **Teaching and mentorship at unusual depth.** College professor, 1,000+ people trained, peer tutor, team lead, current mentor to junior/mid devs. The first listed responsibility on this JD is *"pairing, mentoring, and continually building a culture of excellence."* Almost no other applicant will have a decade of formal teaching behind that claim. This is your best differentiator after XState — but only if you reframe it as *engineering leadership*, not *former PM career*.
- **Commercial and stakeholder fluency.** You've owned revenue, risk, and stakeholder alignment. "Growth hacking & enablement" is asking whether you understand why a page exists. You do — you just describe it in PMO vocabulary rather than product vocabulary.
- **Registration/event product context.** Race Roster is a high-intent, conversion-critical, spiky-traffic product. That is structurally similar to acquisition surfaces. Mine it.
- **Client-facing PoC work at binnj** — "improve UX and increase platform adoption" is the closest thing in your history to Expansion-pod work.

### Real gaps

Stated plainly, because you can't fix what you're soft on:

1. **Visual and interaction craft has no supporting evidence.** For this specific team, this is the decisive gap. Not "no animation library on the résumé" — no artifact anywhere that shows you can make something beautiful.
2. **Your portfolio actively damages you right now.** `vcmiranda.me` says *"I'm a Canada based full-stack web developer, creating awesome and effective websites for companies of all sizes around the globe"*, lists binnj as your **current** job (you left in Nov 2021), has **no ASICS Apps entry at all**, contains **no projects section**, requires JavaScript to render anything, and is built on a template aesthetic with Material icons and a contact form. A Web Presence hiring manager opening this will conclude you don't sweat the details of a public web surface — which is the entire job. **Treat fixing this as a hard prerequisite to applying, not a follow-up.**
3. **Zero quantified engineering impact.** Every number in your materials comes from 2011–2016 PMO work. Nine years of engineering with no metrics reads as either "didn't measure" or "didn't own outcomes."
4. **No experimentation or CMS experience.** Two named parts of the role.
5. **No marketing-site / public-web experience.** You've built product apps behind auth. Public marketing surfaces have different constraints (SEO, i18n, content velocity, edge caching, third-party scripts, conversion measurement).
6. **Public GitHub is thin and mostly stale.** Public repos are dominated by old Vue coursework — `Grade4Us` (archived), `list-data`, `SportsTripPlanner`, `S-expression-calculator`, `BIBlog_VanillaJS`, forks. The strong recent work (`forma`, `nami`, `gym-class-booker`, `AI-Notes-Sync`) is **private**. Your public GitHub currently misrepresents you downward.
7. **LinkedIn hygiene problems.** Duplicate entries (Sport-Travel appears twice, Prosperi appears twice), no visible About section, and skills not surfacing. Duplicates read as carelessness on the exact profile a recruiter screens from.

### What to emphasize

1. **Complex interactive state** — XState, multi-step flows, statecharts. Lead with this; it's the sharpest JD match nobody else will have.
2. **Design systems and component library work** with real scope numbers.
3. **Performance with numbers** — Core Web Vitals, bundle size, SSR/Remix decisions and their measured effect.
4. **Mentoring, pairing, code review, raising the bar** — matched to the first-listed responsibility, backed by a genuine teaching career.
5. **Accessibility as engineering practice**, not a compliance checkbox.
6. **Canada + remote-eligible + long tenure at a global brand.**

### What to de-emphasize, remove, or clarify

| Item | Action | Why |
|---|---|---|
| "Results-driven" summary opener | **Remove** | Empty, and you flagged it yourself as a banned phrase |
| The AI-tooling block (a skills line + a summary sentence + 2 of 7 ASICS bullets) | **Compress to 1 bullet, max; drop the skills line** | At a craft-first team it reads as process over outcome, and it's now table stakes |
| Angular, AngularJS, Vue.js | **Move to a single "Also worked with" line or cut** | Not this role's stack; dilutes React signal |
| Power BI, SSAS, SSRS, MS Project, Trello | **Cut from the résumé entirely** | Pulls the narrative toward a PM career |
| Prosperi PM role | **Keep, compress to 2 lines** | Don't hide it — it explains your timeline and supports communication/leadership. Just don't let it own the metrics. |
| "Pixel-perfect" | **Remove until the portfolio earns it** | Unsupported adjective on a craft-judged application |
| Bootstrap, Knex.js, MySQL, Express | **Cut or demote** | Not relevant here |
| Facebook and Twitter icons on the portfolio | **Remove** | Neither helps; keep GitHub, LinkedIn, email |
| binnj listed as "Current" on your site | **Fix immediately** | Factually wrong by ~5 years; a recruiter who notices will assume the rest is unreliable |
| Duplicate LinkedIn roles | **Delete the duplicates** | Sloppiness on your primary screening surface |
| Résumé/site date conflict on Sport-Travel (résumé + LinkedIn say Sep 2017; site says May 2017) | **Standardize on Sep 2017** | Any conflict across surfaces is a background-check flag |
| "Race Roster" vs "ASICS Apps" naming | **Standardize as "ASICS Apps (Race Roster)"** everywhere | Global brand recognition + product context in one string |

### One-sentence professional positioning statement

> **Senior frontend engineer with nine years building React and TypeScript interfaces — specializing in complex interactive state, design systems, and measurable web performance — who mentors the engineers around him as deliberately as he builds.**

Working variants to test in Phase 3, all supportable by your current evidence:

- *Short:* "Senior frontend engineer building fast, accessible React interfaces — and the design systems and teams behind them."
- *Craft-forward (use only once the portfolio backs it):* "Senior frontend engineer who builds interfaces where the interaction detail, the performance budget, and the accessibility tree all get the same attention."

---

## 4. Questions for you

Answer as many as you can, in any order and any level of detail. Short answers are fine — I'd rather have four honest sentences than a polished paragraph. Anything you skip stays marked `[NEED CONFIRMATION]` rather than getting invented.

**Impact and metrics**

1. **Performance:** For any performance work at ASICS Apps — what was the before-and-after? Any number at all: LCP, INP, TTI, bundle size in KB, Lighthouse score, page-load seconds, build time. Even "roughly, from about X to about Y" is usable if you're comfortable standing behind it. And which specific change caused it (Remix SSR migration? Vite migration? code-splitting? image strategy?).

2. **Scale:** What scale does the product you work on operate at? Monthly active users, registrations processed, concurrent users during a race-registration open, page views, number of events on the platform. If exact figures are confidential, is there a **publicly stated** number from ASICS or Race Roster marketing you can point to instead?

**Complex interactive state — likely your strongest story**

3. **XState:** What did you build with XState? What was the flow (registration? checkout? a multi-step wizard? something with branching, retries, or interruption)? Why did a state machine win over Redux/Context there, and what specifically got better afterwards? *This is the question I most want answered — it's your closest match to "highly complex interactive tools, including state management."*

**Design systems**

4. **Ownership and scope:** For the Storybook component library — were you a contributor, a maintainer, or the owner? Roughly how many components, how many apps or teams consumed it, and did you handle versioning/releases? Did you design any component APIs from scratch, and is there a trade-off you remember arguing about?

**The two named gaps**

5. **Experimentation:** Has your team ever run A/B tests, feature flags, or staged rollouts — LaunchDarkly, Optimizely, Statsig, GrowthBook, or something homegrown? Did you build against it, even just gating a feature? A "no" here is completely fine and useful; I'll route around it.

6. **Animation and interaction:** Have you built *anything* with meaningful motion — Framer Motion / Motion, GSAP, CSS transitions or view transitions, scroll-driven effects, Canvas, WebGL, Lottie, SVG animation? Work, side project, or experiment all count. If the answer is genuinely none, say so and I'll build a targeted, honest plan for the portfolio instead of faking it.

**Ownership and leadership**

7. **A thing you personally owned end-to-end:** Name one feature or system at ASICS Apps you owned from technical design through ship. What decision was yours, what was the hardest trade-off, and what happened after it shipped?

8. **Mentorship, concretely:** How many engineers have you mentored or onboarded at ASICS Apps? Do you run code review for the team, lead any recurring practice (guild, brown-bag, frontend chapter), or have you led hiring/interviewing? Team size and your position in it?

**Cross-functional and craft**

9. **Working with designers:** How does design hand off to you — Figma files, design tokens, a shared system? Do you have influence at the design stage, or do you receive finished comps? Any example of you proposing a design change that got adopted?

10. **Accessibility:** How deep does it go — automated checks in CI (axe, jest-axe, Lighthouse), manual keyboard and screen-reader testing, a formal WCAG level target, or an audit you ran? Did you fix anything specific you're proud of?

**Portfolio evidence**

11. **What can you show publicly?** Three parts:
    (a) Is `nesto` a take-home assignment for the company Nesto? If so, are you comfortable featuring it publicly, and are you allowed to? It's technically your strongest public artifact — React 19, TypeScript, Vite, Tailwind, i18n, Vitest, Storybook, live demo, Lighthouse — and would carry a case study well.
    (b) `forma` (Fitness Coach Client-Management SaaS), `nami` (Tauri 2 macOS file manager), `gym-class-booker`, and `AI-Notes-Sync` are private. What state are they in, and could any be made public or at least documented and screenshotted? `forma` sounds like your best "real product I built and own" story; `nami` shows range.
    (c) Is there **anything** from ASICS Apps you can show publicly — a public-facing page you built, a screenshot you're cleared to share, a public Race Roster URL you worked on? If the answer is no, I'll design the case study around described work with no confidential detail.

12. **Two calibration questions:**
    (a) What's your realistic timeline — are you applying this week, or do you have 2–3 weeks to rebuild the portfolio first? This changes my whole recommendation, because I'd normally tell you not to submit until the site is fixed.
    (b) Do you have Canadian citizenship or PR (i.e., no sponsorship needed)? Worth stating plainly if so, and worth knowing if not.

---

### Two things you can fix today, before answering anything

1. **Delete the duplicate LinkedIn entries** — "Sport-Travel Inc. / Full Stack Engineer" duplicates "SPORT TRAVEL LTD.", and "Prosperi Technology / Project Management Consultant" duplicates "Prosperi Tecnologia."
2. **Correct or take down the binnj "Current" line on your site.** It's the one factual error currently visible to anyone who checks.

---

## Source materials reviewed

- Job posting: [Frontend Engineer, Expansion — Stripe Careers (7644950)](https://stripe.com/jobs/listing/frontend-engineer-expansion/7644950) and the [LinkedIn posting](https://www.linkedin.com/jobs/view/4454554266/)
- Résumé: `VitorMirandaResumeCurrent.pdf` (uploaded)
- [LinkedIn profile — experience detail](https://www.linkedin.com/in/vcmiranda/details/experience/)
- [vcmiranda.me](https://www.vcmiranda.me/) — full rendered content
- [github.com/vcmiranda](https://github.com/vcmiranda) — public and private repository listing; [nesto](https://github.com/vcmiranda/nesto) README
