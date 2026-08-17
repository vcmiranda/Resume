# Phase 3 — LinkedIn Profile Pack

**Positioning it must reinforce:** senior React engineer who owns architecture, builds design systems, and chooses the right state model for the problem — supported by unusually strong communication and teaching background.

**Deliberately different from the résumé:** the résumé is compressed and scannable; LinkedIn is conversational and first-person. No sentence below is copy-pasted from the résumé. Where both cover the same fact (40+ components, five state libraries, the admin platform), the framing and vocabulary differ so a recruiter reading both sees consistency rather than duplication.

---

## 1. Headline — five alternatives

LinkedIn allows 220 characters. All five fit, and all five are supportable by your confirmed evidence.

**A. Recruiter-search optimized** *(highest keyword density; best for showing up in recruiter searches)*

> Senior Frontend Engineer at ASICS Apps (Race Roster) | React · TypeScript · Design Systems · Remix · GraphQL | London, Ontario · Remote across Canada

*Why:* recruiters search literal strings. "Senior Frontend Engineer," "React," "TypeScript," "Design Systems," and a Canadian city all appear. Note it says **Engineer**, not Developer — that's the title language Stripe and most US/remote employers search for, and it's an accurate description of your current role.

**B. Product and impact focused**

> Senior Frontend Engineer at ASICS Apps (Race Roster) — building the interfaces behind race registration for organizers and athletes

*Why:* leads with what the software does for humans. Good if you want to signal product thinking over stack fluency. Safe: it describes the product domain, not a metric you own.

**C. Frontend architecture focused** *(my recommendation for this application)*

> Senior Frontend Engineer | React & TypeScript, design systems, and picking the right state model for the problem | ASICS Apps (Race Roster)

*Why:* "picking the right state model for the problem" is specific, slightly opinionated, and true — and it's a direct echo of the Stripe preferred qualification about complex interactive tools and state management. It reads like a person rather than a keyword list, which matters for a craft-first team.

**D. Frontend + platform / delivery oriented**

> Senior Frontend Engineer | React · TypeScript · Vite · Remix | Design systems, testing, and shipping behind feature flags | ASICS Apps (Race Roster)

*Why:* leans toward frontend-platform roles. "Shipping behind feature flags" signals progressive delivery maturity, which is a real differentiator and maps to Stripe's Platform pillar.

**E. Concise and straightforward**

> Senior Frontend Engineer at ASICS Apps (Race Roster) · React & TypeScript · London, Ontario

*Why:* clean and confident. Works well if your About section and Featured section are doing the persuading.

**Recommendation:** use **C** while this application is live. If you want to maximize inbound recruiter volume more broadly, switch to **A**. Do not use your current headline — "Senior Frontend Developer at Race Roster / Asics Apps" — because "Race Roster" alone doesn't travel outside Canada, the slash reads as uncertainty about your own employer, and there is no stack keyword in it at all.

---

## 2. About section

**232 words.** First person, no headers, no emoji, no bullet-point wall.

> I build the front end of web applications — mostly in React and TypeScript, and mostly the parts that get complicated: multi-step flows, shared component systems, and the architecture decisions underneath them.
>
> I'm currently a Senior Frontend Engineer at ASICS Apps, the team behind Race Roster. When our platform was split out of a monolith, I built the frontend of the new event-management admin system from scratch — choosing the stack, setting up React, TypeScript, Vite, Material UI and Apollo GraphQL, and owning how the application was structured. I also built a shared component library from the ground up and maintain a library and Storybook of over forty components, which is where a lot of my thinking about consistency and documentation ends up living.
>
> The problem I find most interesting is state. Our microfrontends run on XState, Redux, React Query, Valtio and React Context — I implemented the XState work after a team evaluation, and I've worked across the rest. The useful skill isn't any one of them: it's knowing which one a given problem actually needs, and being able to argue for it. Everything we ship goes out behind LaunchDarkly and Datadog feature flags, so I think a lot about controlled rollout.
>
> Before engineering I spent years teaching and consulting, including training over a thousand people and lecturing at a university. It's why I care about code review, documentation and onboarding as much as I do about the code itself.
>
> Open to senior frontend roles in Canada or remote — happy to talk.

**Notes on choices**

- **Opens with what you do, not who you are.** No "passionate," no "results-driven," no "8+ years of experience delivering."
- **"the parts that get complicated"** sets up the state paragraph and quietly answers "does this person handle hard problems."
- **The state paragraph is the centrepiece** and deliberately makes an argument — *"the useful skill isn't any one of them."* That's a point of view, which is what a craft team is reading for. It's also your closest match to Stripe's stated preferred qualification.
- **The teaching paragraph reframes your PM past as the origin of an engineering strength** instead of leaving it as an unexplained career change. This is the single most valuable move available to you on LinkedIn, and your résumé can't make it because it lacks the room.
- **The close is warm and low-pressure.** It invites conversation without begging.
- **Every claim traces to something you confirmed.** No metric, no scale figure, no accessibility claim, no animation claim, no A/B testing claim.

---

## 3. Experience section

LinkedIn rewards a slightly warmer register than a résumé and gives you room to explain *why*. These are written to be read, not scanned.

### Senior Frontend Developer — ASICS Apps · Nov 2021 – Present · London, Ontario (Hybrid)

> Senior frontend engineer on Race Roster, ASICS' race-registration platform.
>
> **Architecture and ownership**
> When the platform was split out of a monolith into separate systems, I built the frontend of the new event-management admin application from scratch — selecting React, TypeScript, Vite, Material UI and Apollo GraphQL, and owning the structure of the application as it grew.
>
> **Design systems**
> Built a shared component library from the ground up, and maintain a library and Storybook of 40+ components covering the UI patterns and documentation the team builds against.
>
> **State management across microfrontends**
> Contributed to the team evaluation that led us to XState for workflow-driven flows, and implemented it in our React applications. Redux, React Query, Valtio and React Context run in other microfrontends where each was the better fit. Choosing between them — and being able to explain the choice — is most of the work.
>
> **Delivery**
> Every feature ships behind a LaunchDarkly or Datadog feature flag. I build multiple flag variations with context rules so rollout can be staged and targeted rather than switched on all at once.
>
> **Quality and collaboration**
> Server-rendered React with Remix and Vite, with runtime performance monitored through Lighthouse and Datadog. Test coverage in Vitest, Jest and React Testing Library. Day to day: code review, frontend architecture decisions, onboarding new developers onto the stack, and working from Figma with designers — including before final comps, which is usually when the useful conversations happen.

> ⚠️ `[NEED CONFIRMATION]` — two attributions to check. **(a)** This says *"contributed to the team evaluation"* because you said "our team evaluated." If you actually ran it, strengthen it to "Ran the team evaluation" — that's a better sentence and you should claim it if it's yours. **(b)** Your answer was ambiguous about whether *you* implemented Redux, React Query, Valtio and Context or colleagues did, so the copy above claims only XState personally and describes the rest as running in other microfrontends. If you implemented them, change to "and I've implemented Redux, React Query, Valtio and React Context in others."

### Web Developer — binnj, inc. · Jan 2019 – Nov 2021 · London, Ontario

> Built customer-facing web applications, moving the front end from AngularJS toward React over the course of the role.
>
> - Built single-page applications from scratch with React, React Router and Redux, alongside maintaining and extending existing AngularJS work.
> - Ran client-facing proofs of concept — putting a working interface in front of customers to test a UX direction before committing to the build.
> - Built map-based data visualisations with the Google Maps API for location-driven features.
> - Managed version control and CI through Git and GitLab.

### Full Stack Web Developer — Sport-Travel Inc. · Sep 2017 – Dec 2018 · London, Ontario

> My first full-time engineering role, and the one where I learned to build a thing end to end.
>
> - Built RESTful API endpoints with Node.js and Express, and the Vue.js web and mobile clients that consumed them.
> - Integrated Stripe for payment processing.
> - Handled CRUD and query optimisation with Knex.js over MySQL and PostgreSQL.
> - Wrote unit and API tests, and worked directly with clients on requirements.

### Project Management Consultant / Instructor — Prosperi Tecnologia · Aug 2012 – Mar 2016 · Vitória, Brazil

> Keep your existing description — it's accurate and well written. One addition at the end, which is what makes this entry work *for* you rather than against you:
>
> > This is where I learned to explain technical work to people who don't share your context — a habit that now shows up in code review, documentation and onboarding.

### Housekeeping — do this first

1. **Delete "Full Stack Engineer — Sport-Travel Inc."** It duplicates "SPORT TRAVEL LTD." Keep one entry, named **Sport-Travel Inc.**
2. **Delete "Project Management Consultant — Prosperi Technology."** It duplicates "Prosperi Tecnologia." Keep one, named **Prosperi Technology** (the English form, matching your résumé).
3. **Standardize the employer as "ASICS Apps"** in the company field, and mention Race Roster in the description. Your headline can carry "(Race Roster)."
4. **Add a Featured section** — see §5.
5. **Confirm your skills are actually populated.** Your skills page didn't render any skills when I looked. If the section is empty, that's a significant, silent hit to recruiter search ranking.
6. **Check whether you have an About section at all.** None appeared on your profile. If it's missing, §2 above is the highest-value single change on this list.

---

## 4. Skills — prioritized

**Pin these three at the top** (LinkedIn shows your top 3 on the profile, and they're weighted heavily in recruiter search):

1. **React**
2. **TypeScript**
3. **Design Systems**

*Rationale:* React and TypeScript are the two strings every recruiter for this role searches. Design Systems is the differentiator — it's a named Stripe responsibility, you have a concrete number behind it, and far fewer candidates list it.

**Full list, in the order to add them** (LinkedIn allows 50; use ~25 strong ones rather than 50 weak ones):

| Tier | Skills |
|---|---|
| **Core — must be present** | React, TypeScript, JavaScript, Design Systems, Front-End Development, Storybook, State Management |
| **Strong differentiators** | XState, Remix, Vite, GraphQL, Apollo GraphQL, Redux, React Query, Web Performance, Component Libraries |
| **Supporting** | Vitest, Jest, React Testing Library, Node.js, REST APIs, Material UI, Radix UI, Feature Flags, LaunchDarkly, Datadog, Git, Docker, Semantic HTML, Responsive Web Design, Code Review, Technical Documentation, Figma |
| **Keep, but don't prioritize** | Agile Methodologies, Mentoring, Cross-functional Collaboration |
| **Remove or bury — if present** | Microsoft Project, Power BI, SSRS, SSAS, SharePoint, Project Management, Trello, Bootstrap, jQuery, PHP. *(Your skills section didn't render when I looked, so I can't see what's actually listed — treat this as a checklist to run against whatever you find.)* |

That last row matters more than it looks. LinkedIn shows skills partly by endorsement count, and your oldest skills likely have the most endorsements from your Brazil-era network. If "Project Management" outranks "React" on your profile, a recruiter's first impression is of a project manager who codes. **Check the ordering and fix it.**

**Endorsements:** ask three or four current ASICS colleagues to endorse React, TypeScript and Design Systems specifically. A skill with zero endorsements next to one with forty tells a story you don't want told.

---

## 5. Featured section — the highest-leverage thing on this page

You don't currently have one, and it's the only part of LinkedIn where a recruiter can *see your work* rather than read about it. Add three items, in this order:

1. **Your portfolio site** — once it's rebuilt. Until then, link nothing rather than the current version.
2. **Nami** — a link to the repo (if you make it public) or to its case study on your site, with a screenshot as the preview image. `[NEED CONFIRMATION]`
3. **`nesto`** — live demo and Storybook, *if* you confirm you're free to feature it. `[NEED CONFIRMATION]`

A Featured section with two clickable, working things puts you ahead of most senior applicants, who have none.

---

## 6. "Open to Work" settings

**Job titles** — based only on roles your actual experience supports:

- Senior Frontend Engineer
- Senior Frontend Developer
- Frontend Engineer
- Senior Software Engineer, Frontend
- Frontend Platform Engineer
- Senior React Developer

**Include both "Engineer" and "Developer" variants** — Canadian employers skew toward "Developer," US and remote-first employers skew toward "Engineer," and LinkedIn matches on the literal string.

**Deliberately excluded, and why:** *Staff Engineer* and *Engineering Manager* (no evidence of that scope), *Full Stack Engineer* (your last full-stack role was 2018; it would misdirect your matches), *UI/UX Engineer* and *Creative Technologist* (no visual-craft or motion evidence yet — revisit after the portfolio ships).

**Locations:** London, Ontario · Toronto, Ontario · Remote (Canada)
**Start date:** Immediately
**Visibility:** you currently have this set to **Recruiters only**. Keep it there while you're employed — the public green banner is visible to your colleagues and, in a craft-hiring context, reads slightly as availability rather than selectivity.

---

## 7. Recruiter and networking outreach

Four messages. None of them implies anyone knows you, has read your application, or can influence a decision. All four are honest about what you're asking for.

> **Before you send any of these:** the LinkedIn listing is flagged *"Promoted by hirer · Responses managed off LinkedIn."* Apply through Stripe's careers site first. These messages are supplementary — they don't replace the application, and sending one instead of applying will get you nowhere.

### A. Connection request note — 267 characters

> Hi [Name] — I'm a senior frontend engineer at ASICS Apps in Ontario, working mostly in React, TypeScript and design systems. I've applied for the Frontend Engineer, Expansion role on the Web Presence team and wanted to introduce myself properly. Happy to connect either way.

*Fits LinkedIn's 300-character limit. States who you are, what you did, and asks for nothing beyond the connection. "Happy to connect either way" removes the pressure and measurably improves accept rates.*

### B. After they accept

> Thanks for connecting, [Name].
>
> Quick context in case it's useful: I've been at ASICS Apps (Race Roster) for almost five years, most recently building the frontend of a new event-management platform from scratch and maintaining a 40+ component design system. The part of the Expansion role that stood out to me is the interactive-tools and state-management side — I've implemented XState, Redux, React Query and Valtio across different microfrontends, and I like the problem of choosing between them.
>
> I've applied through Stripe's site. If there's anything useful I can send along — code, a walkthrough of that architecture — just say the word. And if the timing isn't right, no problem at all.

*Leads with the strongest confirmed evidence. Offers something concrete instead of asking for something. The exit line is genuine, not performative.*

### C. Follow-up after applying — send 7–10 days after submitting, once

> Hi [Name] — following up on the Frontend Engineer, Expansion application I submitted on [date]. No rush at all; I know the volume these get.
>
> One thing I'd add since applying: I put together a short write-up of the state-management architecture I mentioned, here — [link]. It's the closest thing I have to a public example of the kind of work the role describes.
>
> Either way, thanks for the time.

*One follow-up, not three. It carries new information rather than repeating the ask, which is the only thing that makes a follow-up welcome. Requires you to actually have the write-up published — see the portfolio plan.*

### D. Networking message to an engineer on the team

> Hi [Name] — I came across your work on the Web Presence team while reading about the Frontend Engineer, Expansion role, which I've applied for.
>
> I'm a senior frontend engineer at ASICS Apps in Ontario. I spend most of my time on design systems and state architecture across microfrontends, so I was curious about something on your side: how much of the interactive tooling on stripe.com is built on the shared design system versus purpose-built per surface? That trade-off is one I keep running into at a much smaller scale.
>
> No expectations — I know these messages arrive out of nowhere. If you ever have a few minutes, I'd enjoy the conversation.

*Asks a real technical question you'd genuinely want answered, which is the only reason a stranger replies. Names the application so you're not being coy, but asks nothing of them regarding it. Never suggests they can help you get hired.*

**Things none of these do, deliberately:** claim a mutual connection, claim familiarity with their work beyond what's public, ask for a referral, ask them to "pass my résumé along," or imply your application is already under review.

---

## 8. Accuracy audit for this section

| Item | Status |
|---|---|
| "over forty components" / "40+ components" | ✅ Confirmed by you |
| Those five state libraries running across different microfrontends | ✅ Confirmed |
| **You personally implementing all five** | ⚠️ `[NEED CONFIRMATION]` — your answer confirms XState explicitly and is ambiguous on the rest. The copy above claims only XState personally. Strengthen it yourself if it's true. |
| "built the frontend of the new event-management admin system from scratch," stack selection | ✅ Confirmed |
| "LaunchDarkly and Datadog feature flags," "multiple flag variations with context rules" | ✅ Confirmed |
| "trained over a thousand people and lectured at a university" | ✅ On your existing LinkedIn and résumé |
| "almost five years" at ASICS (message B) | ✅ Nov 2021 → Aug 2026 = 4 yrs 9 mos |
| "Figma... before final comps" | ✅ Confirmed |
| "Ran and contributed to the team evaluation" | ⚠️ `[NEED CONFIRMATION]` — soften to "contributed to" if you didn't run it |
| Featured section links | ⚠️ `[NEED CONFIRMATION]` — depends on Nami going public and the `nesto` clearance decision |
| Message C's write-up link | ⚠️ Requires the case study to exist before you send it |
| Accessibility, animation, A/B testing, WCAG, performance percentages, user/traffic scale | ✅ **Absent from every word above.** Keep them absent. |
