# Portfolio Resume Revamp â€” Decision Log

Status: **Final** â€” accepted with your words "accept, then proceed with the updates" (session chat, 2026-09-25).

## Goal
Fix the portfolio resume in this repo, positioned as Senior Engineer for both recruiters and direct clients: stronger content via a repeatable bullet formula, add `noted` + n8n/OpenClaw/Discord car automation, refresh look and feel.

## Settled decisions
- D1 â€” Decision record location: `PROJECT.md` in `portfolio1` repo root (accepted by you: "1").
- D2 â€” Audience: both recruiters and direct clients. Positioning: Senior Engineer (broad), not Ionic/Angular-only.
- D3 â€” Bullet formula: action + scope/scale + measurable result in every bullet (XYZ style).
- D4 â€” `noted` (local: `E:/Project/noted`): personal solo skill-demo project, unfinished (PLAN.md: Phase 0 done, Phases 1â€“4 pending). Shared family kitchen board â€” fridge notes, TV reels, photo book. Stack: Next.js + tRPC + Tailwind + Drizzle + Firebase auth + Vercel WebSockets/Redis fan-out + QStash workers. Goal: finish alongside this portfolio redeploy; resume must read ready on arrival.
- D5 â€” Automation proof: n8n + OpenClaw + Discord covering car reminders, maintenance tracking, costs, documents (new-owner assistant). Same OpenClaw setup also scans jobs and hunts bargain sales (FB Marketplace, Carousell, etc.).
- D6 â€” Look and feel: full clean recruiter-friendly redesign (maximize for recruiters now; visual restyle is easy later).
- D7 â€” Boundary: in-place rewrite of `index.html` / `index.css` / `main.js` as one clean recruiter-first page, plus saving `noted` + automation context to memory.

## Unresolved
None.

## Scope contract (accepted)
- In scope: in-place rewrite of `index.html`, `index.css`, `main.js` (Senior Engineer positioning, XYZ bullets, `noted` + automation proof, contact); memory save for `noted`/automation context; this decision record.
- Out of scope: PDF/print stylesheet, any changes inside `E:/Project/noted`, client-styled visual variant, Firebase config/deploy changes.
- Done means:
  - [ ] Page rewritten in place as Senior Engineer, XYZ bullets throughout.
  - [ ] `noted` + automation proof present and accurate to D4/D5.
  - [ ] Clean recruiter-first layout verified in a browser (skim check + working links).
  - [ ] Memory holds `noted` + automation context.
  - [ ] This record marked Final on your acceptance.
- Nothing outside this checklist is a completion dependency. `go` later authorizes only this boundary.

---

# Phase 2 â€” TabLogs current-experience rewrite (grill)

Status: **Final** â€” accepted with your words "accepth and start rewrite" (session chat, 2026-09-25).

## Verified from repos (settled facts, no need to ask)
- Mobile repo `tablogs_mobile_app`: Angular 18.2, Ionic 8, Capacitor 7, `@capawesome/capacitor-live-update` 7.5, PouchDB + crypto-pouch offline.
- `bitbucket-pipelines.yml`: live-update deploys across testing/sandbox/uat/production plus a manual custom run.
- `qa/`: 4 Chrome lanes + emulator lanes (lanes.json), CDP driver, saved Playwright tests, fixtures for 29 record types, perf probes, `mobile-drive` / `mobile-qa-job` skills + `qa-explorer` agent.
- Web repo `tablogs-frontend-angular`: Angular 18.0.2 (Fuse) â€” the web side the app tracks.

## Raw material from you (2026-09-25, to shape into XYZ bullets)
- Merge gatekeeper for other devs; CI/CD; feature/fix/chore/offline/bugs; CouchDB offline backup + recovery.
- Release prep, beta tests, iOS + Android store deploys.
- Auto-QA skill: multi-agent, Chrome + emulator lanes, CDP, loop-and-fix.
- Web-parity Claude routine; Appflow to Capawesome with per-version channeling; version mgmt (delayed + forced update UI).
- TabLogs marketing (current); search-perf call (rejected PDF, upgraded Angular, AI-iterated, zero regressions).
- Unprompted: all-forms perf, offline v1 to v2, more.
- Web migration factory: translations + custom components + Storybook across the web app; Claude Code wrapper digests a component and emits a migrated one (~600 of ~800 over months, output usually 80â€“100% done, human-reviewed). Opus migrates, Sonnet reviews, one loop-back. Started as `tala` TUI (keyboard-only queue view), simplified to component + context + per-component docs + prompt iteration; packaged as a shared repo so the whole team can migrate. (Repos present: `E:/Project/tala`, `E:/Project/share-ui-translate-migrator`; numbers approximate.)

## Settled (Phase 2)
- P2-D1 â€” Framing: de facto mobile lead / release owner. Merge gatekeeper for 2 devs; release cadence 2â€“3Ã-/week.
- P2-D2 â€” App scale (approximate, no prod DB access to verify): hundreds of users, roughly a thousand logs a month. Resume will use soft wording, no hard numbers.
- P2-D3 â€” QA lanes: local implement â†’ agent-verify â†’ review â†’ re-verify loop on every change. Typical run 3 Chrome + 1 emulator lanes (max 2 emu + 4 chrome); capped by local RAM + Claude Code rate limits.
- P2-D4 â€” Offline v2: decomposed the v1 monolith file-by-file to learn it inside-out, then rewrote it (v1 leaked memory, barely worked). Backend isn't offline-capable, so workarounds throughout. Fixed parent/child sync mismatch (temp parent id replaced by real id mid-fix) with a resolve-reference table tracking all table ids â€” sync issues down to almost none. Added local-DB snapshots (user sends or syncs via Couch) so debugging happens without end-user back-and-forth. All unprompted, delivered as a rewrite, not incrementally.
- P2-D5 â€” Marketing-site perf (tablogs.com): brief baseline Jun 17 (mobile 67 / desktop 59, mobile LCP 3.4s, TBT 920ms; context: 36% organic-click drop after Google May 2026 update). Delivered: Angular upgrades to 21.x, lazy per-page loading, hero/image optimization, cache headers, legacy-browser/polyfill removal, GTM replacement, llms.txt, dead-code deletion, exposed-secret removal, hydration fixes (all in git log as jethro). Evidence Jul 21: desktop PageSpeed 94, CWV passed (LCP 1.1s, INP 47ms, CLS 0.05), SEO 100. Mobile after-score + deploy status unconfirmed â€” resume uses desktop numbers only unless confirmed.
- P2-D6 â€” Mobile forms perf: 40 forms, zero-breakage constraint. Root cause was sequential blocking requests before form load. Piloted the fix on a few forms, then ran an agent per form (implement â†’ lane-QA â†’ human review one by one); all 40 reviewed and improved in under 3 days. Result: forms load near-instant.
- P2-D7 â€” Release train (built unprompted, no prior process existed): created iOS + Android deploy steps from scratch (review builds held back so they can be pre-tested); beta via direct Android install + TestFlight. JS-gated live updates driven by a backend version feed with major/minor/mandatory release types â€” each app version only receives its proper update, so JS fixes can't land on stale native shells and break them (e.g. camera/QR native changes). Release creation offers schedule + force toggle; minor shows as banner, mandatory as full-screen forced update.
- P2-D8 â€” Migration factory: wrote the migration plan (70 tickets Ã- ~10 components); personally migrated high-400s (~500 of ~700) via the Opus-migrate / Sonnet-review wrapper (output usually 80â€“100%, human-reviewed). Packaged and shared the repo for the team; team adoption unconfirmed â€” resume claims shared, not adopted.

## Unresolved (Phase 2)
None.

---

# Phase 3 - Accenture experience rewrite (grill)

Status: **Final** - accepted with "yes" plus a tone adjustment (humble, never arrogant; lone-wolf framing; also soften TabLogs) (session chat, 2026-09-25).

## Verified from repos
- None available: no Accenture-related repo exists locally (checked E:/Project). All material comes from the interview.

## Raw material from you
- (received 2026-09-25, distilled into P3-D1)

## Settled (Phase 3)
- P3-D1 - Accenture Sep 2021 to 2024, joined at level 11, promoted to level 10. Project 1 (Magento, beverage brand: L'OR Espresso [heard as "nor expresso", confirm] and Tassimo, millions in revenue): 7-10 person PH/India team where the user, the lowest level among AM-and-above colleagues, became the main guy; adversarial Vaimo counterpart; weekly releases where the user learned safe release habits; flagship win: post-release bug that stopped all checkouts, fixed first in Knockout.js while dozens of Vaimo + Accenture seniors were stuck; closed most tickets by contract end. Project 2 (Ionic/Angular/Capacitor internal tool for Chinese Accenture employees): compliance/security focus; the app survived a company-wide app cull during cost cuts / China exit; user count unknown.
- P3-D2 - Entry shape: two Accenture entries, one per project. Brand confirmed: L'OR Espresso + Tassimo. Dates: start Sep 2021 confirmed ("2021 it is"); proposed split is beverage Sep 2021 to 2022, employee app 2022 to 2024 (user recalls 1 year each; split to confirm at acceptance).
- P3-D3 - Compliance: Accenture security team flagged the issues (mostly routine). Pre-AI era: self-taught every fix via docs and forums, cleared the backlog solo. Training: Magento refresh plus Ionic/Angular learned on the job (Adobe Analytics trained but unused, stays off the resume). Reputation: the AMs' go-to, took every task without hesitation.
- P3-D4 - Tone: humble and factual, never arrogant; lone-wolf framing (works solo, low supervision) over hero language. Applies to the Accenture entries and softens the TabLogs lead bullet.

## Unresolved (Phase 3)
None.

---

# Phase 4 - Full-Stack Developer (Magento and Laravel) rewrite (grill)

Status: **Final** - accepted with "accepth start updating" (session chat, 2026-09-25).

## Verified from repos
- None available: oldest local checkout is Apr 2024 (TabLogs era). Nothing from 2019-2021 exists locally. All material comes from the interview.

## Raw material from you
- (received 2026-09-25, distilled into P4-D1)

## Settled (Phase 4)
- P4-D1 - Employer is Comworks, deliberately unnamed on the resume (user rates this period weakly). Entry stays generic: Full-Stack Developer, Magento and Laravel, Jul 2019 to Sep 2021. Tone: brief and factual, 2 bullets max, no senior stretch.
- P4-D2 - Solo end to end (a pattern across all roles): SSH into servers, manual deployments. Migrated Magento 1 to Magento 2 solo with no AI help; migration and custom modules all worked, craft was rough. Resume frames it as shipped-and-working solo delivery, no elegance claims.

## Unresolved (Phase 4)
None.
