# Phase 7 — Final Consistency Check and Action Plan

Audited together: the Phase 2 résumé, the Phase 3 LinkedIn pack, the Phases 4–6 website strategy, your **currently live** LinkedIn profile, your **currently live** website, and your GitHub.

---

## 1. The shared positioning statement

> **Senior frontend engineer with nine years building web applications — architecture, design systems, and choosing the right state model for the problem — with an unusually strong background in explaining technical work.**

**How each surface expresses it without repeating the others:**

| Surface | Expression | Register |
|---|---|---|
| **Résumé** | "Senior frontend engineer with nine years building web applications — the last seven in React… Implemented state management across microfrontends following a team evaluation…" | Compressed, third-person-implied, scannable |
| **LinkedIn headline** | "React & TypeScript, design systems, and picking the right state model for the problem" | Searchable, slightly opinionated |
| **LinkedIn About** | "The problem I find most interesting is state… the useful skill isn't any one of them — it's knowing which one a given problem actually needs" | First-person, conversational, makes an argument |
| **Site hero** | "Senior frontend engineer. I build the architecture underneath the interface." | Declarative, editorial |
| **Site About** | "Pick the tool the problem needs" (as one of four working principles) | Principle, not pitch |

The idea is identical across all five. The **wording is different every time**, which is what makes a recruiter reading all three think *consistent* rather than *copy-pasted*.

⚠️ **The two closest pairs — vary one of each if you want more separation:**
- LinkedIn headline "picking the right state model for the problem" vs. Site About "Pick the tool the problem needs." Close enough to notice. Consider changing the site principle to **"Match the tool to the shape of the state."**
- "nine years" appears verbatim in the résumé summary, the site hero and the site About. Fine in two places; drop it from the site About and let the hero carry it.

---

## 2. The five strongest proof points across all materials

Ranked by how much each moves *this specific* hiring decision.

**1. Five state-management solutions across microfrontends, with a selection rationale.**
XState, which you implemented after a team evaluation chose it for workflow-driven flows, plus Redux, React Query, Valtio and React Context running where each fit better. `[NEED CONFIRMATION: which of the other four you personally implemented — see the Phase 2 audit, item C16.]` Direct match to the JD's preferred qualification — *"Experience building highly complex interactive tools, including state management."* Most senior applicants have shipped one. **Appears in:** résumé bullet 3, LinkedIn About and experience, site case study 2, homepage card 2.

**2. A 40+ component design system, one library built from scratch.**
Direct match to a named responsibility — *"Utilize, maintain, and extend our design systems."* Your most concrete number and the only quantity in your summary. **Appears in:** résumé bullet 2, LinkedIn About and experience, site case study 1, homepage card 1.

**3. Greenfield platform frontend with stack selection and architecture ownership.**
Answers the levelling question the CA$172–258k band forces a screener to ask. **Appears in:** résumé bullet 1, LinkedIn About and experience, site case study 1.

**4. Progressive delivery through LaunchDarkly and Datadog feature flags with context-targeted rollout.**
Your honest bridge to *"integrate our web platform with self-serve authoring and experimentation."* Claims the delivery mechanism, never the measurement. **Appears in:** résumé bullet 4, LinkedIn experience, site About.

**5. Nami — a native macOS file manager built solo in Tauri 2.**
Your only craft artifact, your only interaction-design evidence, and — once you measure it — your only publishable performance numbers. **Appears in:** résumé Selected Projects, LinkedIn Featured, site case study 3.

*Sixth, and undervalued: your consulting and teaching years — Prosperi, UCL and the Microsoft Innovation Center between 2012 and 2016, plus 1,000+ people trained — sitting behind the JD's first-listed responsibility (pairing, mentoring, culture) and its "excellent verbal and written communication" minimum. It's a supporting argument rather than a headline, which is why it lives in LinkedIn's About and the site's About but not in the résumé summary.*

---

## 3. Inconsistencies, unsupported claims, and duplicated wording to fix

### A. Factual contradictions between live surfaces — fix these first

| # | Issue | Where | Fix |
|---|---|---|---|
| A1 | **binnj shown as your current employer** | Live website | Change to "Jan 2019 – Nov 2021" and add ASICS Apps as current. **Highest-severity item in this audit.** |
| A2 | **ASICS Apps appears nowhere on your website** | Live website | Add it. Nearly five years and your best work are currently invisible. |
| A3 | **Sport-Travel start date: May 2017 (site) vs September 2017 (résumé and LinkedIn)** | Live website | Standardize on **September 2017**. Date conflicts across public surfaces are a background-check flag. |
| A4 | **"Full-stack web developer" (site) vs "Senior Frontend Engineer" (everywhere else)** | Live website | Replace the hero tagline. Your site currently positions you as something you're not applying to be. |
| A5 | **Duplicate LinkedIn entries** — Sport-Travel twice, Prosperi twice | Live LinkedIn | Delete one of each. |
| A6 | **Employer name varies:** "Asics Apps" (résumé), "Race Roster / Asics Apps" (LinkedIn headline), absent (site) | All three | Standardize: company field **ASICS Apps**, display as **ASICS Apps (Race Roster)**. Capital ASICS everywhere. |
| A7 | **Fanshawe credential name:** "Internet Application and Web Development" (old résumé, site) vs "Internet Applications and Web Development" (new résumé) | Résumé | Use whatever your actual diploma says, then match it everywhere. |
| A8 | **Prosperi title:** "Project Management Consultant" (résumé) vs "Project Management Consultant/Instructor" (LinkedIn) | Minor | Harmless, but pick one. |

### B. Unsupported claims currently live — remove before a recruiter reads them

**These are on your live LinkedIn right now.** By your own Phase 1 answers, you cannot support them. Each is a trap in a technical screen, because the interviewer will ask.

| # | Live claim | Problem | Replace with |
|---|---|---|---|
| **B1** | *"Delivered pixel-perfect, accessible, and responsive UIs… while **adhering to WCAG accessibility standards**"* | You told me you have **no accessibility proof**. This claims formal standards compliance. **The single most dangerous line in your materials** — a Stripe interviewer asking "which WCAG level, and how did you verify?" would get no answer. | "Built responsive UIs on accessible component primitives (Radix UI, Material UI), using semantic HTML and keyboard-operable interaction patterns." True, specific, defensible. |
| **B2** | *"…resulting in improved user responsiveness and **reduced time-to-interactive**"* | Names a specific metric you cannot produce. | Remove the outcome clause. State the work. |
| **B3** | *"…increasing code efficiency and **minimizing data-fetching overhead**"* | Unmeasured outcome. | Remove the clause. |
| **B4** | *"…consistently **meeting code coverage standards**"* | Only true if a real enforced threshold exists. | Keep only if CI enforces one; otherwise "maintained test coverage across complex UI workflows." |
| **B5** | *"…**significantly improving team productivity**"* (AI tooling) | Unmeasured, and it's the AI over-emphasis problem in one phrase. | Cut. |
| **B6** | *"Provided technical **mentorship to junior and mid-level developers**"* and *"**Led** knowledge-sharing sessions"* (binnj) | Your answers described the more modest "code review, technical decision-making, onboarding support." Your résumé now uses the modest framing while LinkedIn uses the stronger one. | **Pick the true one and make both match.** If you genuinely mentored, keep it and put it back on the résumé. If it's closer to onboarding and review, soften LinkedIn. Two documents claiming different leadership levels is worse than either claim alone. |
| **B7** | *"creating awesome and effective websites for **companies of all sizes around the globe**"* | Unsupported by your history — three Ontario employers. | Replaced in the Phase 4 hero copy. |
| **B8** | *"improving their grades in **25% average**"* (Peer Tutor, site) | Unverifiable. | Removing the Peer Tutor entry from the site handles it. |
| **B9** | *"**8+ years** of experience"* | Now understates you — it's nine. | Fixed in the new résumé. |

### C. Claims correctly absent everywhere — keep them absent

Verified across all four deliverables and all three live surfaces:

- ❌ A/B testing or experimentation ownership — **absent**
- ❌ Animation, motion, or creative-technology work — **absent**
- ❌ CMS or self-serve authoring — **absent**
- ❌ WCAG compliance or accessibility audits — **absent from all new material** (still live on LinkedIn — see B1)
- ❌ Performance percentages or Core Web Vitals figures — **absent**
- ❌ User, traffic, or revenue scale attributed to your work — **absent**
- ❌ React Native, Expo, Supabase, self-hosted infrastructure — **absent** (unverified, low relevance)
- ❌ Race Roster's public "millions of athletes" framing as your own metric — **absent**. You flagged this correctly yourself; it stayed out.

### D. Duplicated wording between surfaces

| Phrase | Appears in | Verdict |
|---|---|---|
| "40+ components" | Résumé, LinkedIn, site | ✅ Fine — it's a fact, not a phrasing |
| "XState, Redux, React Query, Valtio, React Context" | All three | ✅ Fine — a list of tools |
| "from scratch" | Résumé b1 & b2, LinkedIn, site card 1 | ⚠️ Four times. Vary one to "from zero" or "greenfield" |
| "the right state model for the problem" | LinkedIn headline, site About | ⚠️ See §1 — vary the site principle |
| "Selected and implemented" | *(removed)* | ✅ Corrected to "Implemented… following a team evaluation" after the accuracy audit — your answer said the team chose XState, not you |
| "nine years" | Résumé, site hero, site About | ⚠️ Drop from site About |
| "ships behind feature flags" | Résumé b4, LinkedIn About, site About | ✅ Fine — differently phrased each time |

### E. Numeric consistency

| Figure | Correct value | Check |
|---|---|---|
| Total experience | Sep 2017 → Aug 2026 = **8 yr 11 mo** | "Nine years" is fine; "nearly nine" if you want to be conservative |
| React experience | Jan 2019 → Aug 2026 = **7 yr 7 mo** | "Seven years" ✅ |
| ASICS tenure | Nov 2021 → Aug 2026 = **4 yr 9 mo** | ⚠️ Site hero draft says "the last five at ASICS Apps." Change to **"nearly five."** LinkedIn message B already says "almost five" ✅ |
| Design system | **40+ components** | ✅ Consistent |
| Prosperi | $160,000+ revenue, 33% fewer change requests, 1,000+ trained | ✅ Consistent with your existing materials |

### F. One thing to understand before an interview

Your new résumé says **"Senior Frontend Engineer"** under your name, while the ASICS entry says **"Senior Frontend Developer."** This is deliberate and correct: the tagline describes what you do and matches how the market searches; the employment entry preserves your actual title. Nothing is misrepresented, and a background check will confirm the title exactly as written.

Just be aware of it, so if a recruiter asks "is your title Engineer or Developer?" you answer without hesitation: *"Developer is the title on the books; Engineer is how the role is usually described elsewhere."*

---

## 4. The five highest-impact changes for getting a first interview

**1. Make your website stop contradicting your résumé. (30 minutes, before you submit.)**
Right now a reviewer who clicks your site sees binnj listed as your current employer, no ASICS Apps anywhere, and "full-stack web developer creating awesome and effective websites." Your résumé says you've been a Senior Frontend Developer at ASICS since November 2021. One of those documents is wrong, and the reviewer doesn't know which.

For a Web Presence team, this isn't a stale-website problem — it's a work sample. **If you cannot fix it before submitting, remove the URL from your résumé and LinkedIn.** No website beats a contradictory one.

**2. Strip the unsupported claims from your live LinkedIn. (30 minutes, before you submit.)**
Specifically B1 — *"pixel-perfect, accessible… adhering to WCAG accessibility standards."* You told me you have no accessibility evidence. That sentence invites a question you can't answer, at a company that lists accessibility testing as a preferred qualification. B2 through B5 are the same class of problem. These are live right now on the page a recruiter screens from.

**3. Lead with state architecture, design systems, and greenfield ownership — in that order, everywhere. (Already done in the deliverables.)**
Your old materials led with "engineered scalable web applications" and AI tooling. The new ones lead with three things that map directly onto named JD requirements and that most applicants can't claim. This is the difference between a résumé that reads as *a senior React developer* and one that reads as *this specific role*.

**4. Add a LinkedIn About section and fix the headline. (30 minutes.)**
You appear to have no About section, and your headline — "Senior Frontend Developer at Race Roster / Asics Apps" — contains no stack keyword at all. For recruiter search that's a significant, silent cost. The About section is also the only place where your teaching background can be reframed as an engineering strength instead of sitting at the bottom of your profile looking like a career you left.

**5. Publish the state-per-microfrontend case study before your first conversation. (One weekend.)**
This is the highest-value single artifact you can create. It's your strongest JD match, it needs no employer screenshots, it's safe to publish, and it gives your recruiter follow-up something new to carry. Write this one before you write anything else on the site.

---

## 5. Action plan

### TODAY — before you submit

Roughly two hours. Everything here is a factual correction or a removal; nothing requires new work.

| Done | Task | Time |
|---|---|---|
| ☐ | **Decide the `nesto` question.** Cleared to feature → link it. Not cleared or unsure → make the repo private and take down both Vercel deploys. Don't leave it ambiguous. | 20 min |
| ☐ | **Website:** change binnj to "Jan 2019 – Nov 2021"; add an ASICS Apps entry as current; correct Sport-Travel to September 2017 | 30 min |
| ☐ | **Website:** replace the hero tagline with the Phase 4 positioning line | 10 min |
| ☐ | **Website:** remove the Facebook and Twitter icons and your phone number | 10 min |
| ☐ | **Website:** replace the résumé download with the new PDF | 10 min |
| ☐ | **LinkedIn:** delete the duplicate Sport-Travel and Prosperi entries | 10 min |
| ☐ | **LinkedIn:** remove unsupported claims B1–B5 from the ASICS description | 15 min |
| ☐ | **LinkedIn:** update the headline (option C from Phase 3) | 5 min |
| ☐ | **LinkedIn:** add the About section | 10 min |
| ☐ | **Résumé:** fill in the microfrontend count `[ADD METRIC M2]` and resolve "across teams" vs "across the application" `[C1]` | 10 min |
| ☐ | **Apply on Stripe's careers site** — the LinkedIn posting says responses are managed off LinkedIn | 20 min |

**Gate:** do not submit until the website no longer contradicts your résumé — either fixed, or the link removed from both documents.

### THIS WEEK — after submitting

| Done | Task | Time |
|---|---|---|
| ☐ | **LinkedIn:** rewrite the four experience descriptions using the Phase 3 copy | 45 min |
| ☐ | **LinkedIn:** fix skills order — pin React, TypeScript, Design Systems; bury the project-management skills | 20 min |
| ☐ | **LinkedIn:** ask 3–4 ASICS colleagues to endorse React, TypeScript and Design Systems | 15 min |
| ☐ | **GitHub:** add a profile README linking your site; archive the 2018 Vue repos | 45 min |
| ☐ | **Nami:** take 2–3 screenshots in both themes, and measure binary size, cold start and memory | 2 h |
| ☐ | **Write case study 2 — state per microfrontend** — 700–1,100 words plus an illustrative statechart | 5 h |
| ☐ | **Scaffold the new Next.js site** using the Part Six build prompt | 5 h |
| ☐ | **Send the Phase 3 connection note** to the Stripe recruiter, if you can identify them | 15 min |

### BEFORE THE FIRST-ROUND CONVERSATION

| Done | Task |
|---|---|
| ☐ | New site live with the homepage, the work index, and case studies 1–3 |
| ☐ | Lighthouse and axe passing at the Part Five budgets, with the numbers published on the site |
| ☐ | LinkedIn Featured section linking the site and Nami |
| ☐ | Rehearse the three stories below out loud, once each |

**The three stories to have ready** — these are the questions this JD guarantees:

**"Tell me about a complex interactive thing you built."** → The XState flow. Which flow, what made the state space unmanageable, why a statechart won, what you'd choose now. Land the four-question selection heuristic from case study 2. *This is your best answer; make sure it's your most polished.*

**"Have you done A/B testing?"** → *"Not measurement-side. I own the delivery mechanism — every feature ships behind a LaunchDarkly or Datadog flag with context rules, so we control who sees what and when. I haven't owned the experiment design or the analysis, and that's a part of the job I'd want to grow into."* Direct, no hedging, no overclaim. **This answer is stronger than a vague yes**, because the follow-up to a vague yes is a question you can't answer.

**"How much animation and interaction work have you done?"** → Don't soften it. *"Not much. My interaction complexity has lived in state and flow rather than in motion. It's the area I'd be learning fastest in this role."* Then redirect to what you can show — Nami's dense keyboard-driven interface, the information-hierarchy problem of git status in a file list. **The honest answer plus real adjacent evidence beats a stretched claim**, and this team will detect a stretched claim on craft faster than on anything else.

---

## 6. Two things I'd want you to be clear-eyed about

**This is a genuine stretch application, and it's worth making.** You clear the minimums comfortably — nine years, React depth, senior title, Canada-based. Where you're strong (state architecture, design systems, greenfield ownership, progressive delivery) you're *specifically* strong in ways that match named requirements. Where you're weak — visual craft, motion, experimentation, marketing-site experience — you're weak on things this particular pod weighs heavily. A realistic read is that your materials get you a fair hearing, and the portfolio decides whether it goes further. Which is exactly why the site matters more here than it would for almost any other role.

**Everything in these four documents is reusable.** The résumé, the LinkedIn profile and the case studies aren't Stripe-specific — they're a substantially stronger version of your professional presence for every senior frontend role you apply to. If this one doesn't convert, you're still meaningfully better positioned than you were on Friday. The only Stripe-specific choices were the ordering of your résumé bullets and the emphasis on craft, and both are a ten-minute adjustment for the next application.
