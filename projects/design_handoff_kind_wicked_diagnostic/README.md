# Handoff: Kind vs. Wicked Environment Diagnostic (Employer Freebie)

## Overview
An 8-question interactive lead-magnet for **Internship Insights Co.** It helps an employer diagnose whether their workplace is a **Kind** environment (clear rules, quick feedback, repeating patterns) or a **Wicked** one (ambiguous, delayed feedback, incomplete rules) — a distinction drawn from the book *Range*. The tool collects a name + company, asks 8 either/or questions, then shows a scored verdict and a tailored "what this means for your interns" readout, ending in a "get your program audited" CTA.

It is a single-screen app with two states: **the quiz** and **the result** (the result replaces the quiz in place; there is no page navigation).

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing the intended look and behavior. They are **not production code to lift directly**. The `.dc.html` file uses an internal templating runtime that will not exist in your codebase; treat it as a spec, not a source file. `index.html` is a self-contained compiled build you can open in any browser to click through the real behavior.

The task is to **recreate this design in your target environment** (React, Vue, Svelte, plain TS, etc.) using its established patterns, component library, and design tokens. If no front-end environment exists yet, pick the most appropriate framework and implement it there. The brand's real design system (colors, type, button/field components) is described under **Design Tokens** below — map these onto your existing system rather than hard-coding one-off values where you already have equivalents.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all specified. Recreate the UI to match, using your codebase's existing primitives (button, text input, card) restyled to these tokens.

---

## Screens / Views

### Shared chrome
- **Header** (hidden on print): full-width white bar, `1px solid --slate` bottom border, `16px 24px` padding. Left-aligned: 36×36 logo mark + wordmark text "Internship Insights Co." in the display font, 800 weight, 16px, `letter-spacing:-0.01em`, color `--ink`.
- **Page background:** a light blue tint (`--bg-blue-tint`, `#EEF5F9`). (Original spec was warm paper `#FBFAF7`; the current prototype uses the blue tint — confirm which you want.)
- **Main column:** centered, `max-width:680px`, padding `40px 24px 56px`.
- **Footer** (hidden on print): full-width white bar, top border `1px --slate`. Two spans, 12px, `--text-muted`: "© 2026 Internship Insights Co. — Unlocking potential through experience." and "Bermuda's only internship transformation firm."

### Screen 1 — Quiz (default / `editing` state)
**Purpose:** capture lead + collect 8 answers.

Layout, top to bottom inside the 680px column:
1. **Eyebrow:** "8-QUESTION DIAGNOSTIC FOR EMPLOYERS" — display font, 11px, 700, uppercase, `letter-spacing:0.18em`. (Prototype currently colors it `--border-strong`; brand default for eyebrows is `--orange-700`.)
2. **H1:** "Is your workplace [Kind] or [Wicked]?" — display font, 38px, 900, `letter-spacing:-0.02em`, `line-height:1.06`. "Kind" is `--blue` (`#5499BB`); "Wicked" is `--orange-600` (`#F08A25`) in the current prototype (brand alt: `--burnt` `#B54A14`). Rest is `--ink`.
3. **Intro paragraph:** `--text-secondary`, 15px, `line-height:1.6`, `margin-bottom:24px`. Copy:
   > Skills develop fast in **kind** environments — clear rules, quick feedback, repeating patterns. They stall in **wicked** ones, where rules are incomplete and feedback is delayed. Knowing which you run is the first step to designing a high-impact internship.
4. **Lead-capture card:** white, `1px --slate` border, `radius:16px`, `shadow-sm`, `padding:20px`, `margin-bottom:22px`. Vertical stack (`gap:16px`) of two text fields: **"Your name"** (placeholder "Jane Smith") and **"Company"** (placeholder "Acme Inc.").
5. **8 question cards** in a vertical stack, `gap:16px`. See **Question card** below.
6. **Submit button** (see Interactions for label logic), full-width, large. Below it, centered hint text 12px `--text-muted`: "Takes about 90 seconds · Instant read · No spam".

#### Question card
White card, `1px --slate` border, `radius:16px`, `shadow-sm`, `padding:22px`. Contains:
- **Header row** (`gap:12px`, align top, `margin-bottom:14px`): a 28×28 circular number badge (`background:--orange`, `--ink` text, display font 800, 14px) + the prompt (display font, 700, 16px, `line-height:1.3`, `--ink`).
- **Pole comparison** — a 2-column grid (`1fr 1fr`, `gap:10px`, `margin-bottom:14px`):
  - **KIND box:** `border:1px --blue-100`, `background:--blue-50`, `radius:10px`, `padding:11px 13px`. Tiny label "KIND" (display 10px 700, `letter-spacing:0.14em`, `--blue-800`) above the kind description (12.5px, `line-height:1.45`, `--text-secondary`).
  - **WICKED box:** `border:1px --burnt-300`, `background:--burnt-100`, same radius/padding. Label "WICKED" in `--burnt`, then the wicked description.
- **Segmented toggle** — a flex row (`gap:8px`) of three equal buttons: **Kind**, **Both**, **Wicked**. Each: `flex:1`, `padding:11px 6px`, `radius:9px`, display font 700 14px, centered, `transition: all .15s cubic-bezier(.4,0,.2,1)`.
  - Unselected: `border:2px --slate`, `background:--white`, text `--text-muted`.
  - Selected **Kind**: `border:2px --blue`, `background:--blue-50`, text `--blue-800`.
  - Selected **Both**: `border:2px --ink`, `background:--slate-50`, text `--ink`.
  - Selected **Wicked**: `border:2px --burnt`, `background:--burnt-100`, text `--burnt-900`.

### Screen 2 — Result (`submitted` state)
**Purpose:** deliver the verdict + drive to the audit CTA. Replaces the quiz in the same column.

1. **Eyebrow:** "YOUR ENVIRONMENT READ" (`--blue-700`).
2. **H2:** "Here's your read, {firstName}." — display font, 28px, 900, `-0.02em`, `--ink`. `{firstName}` = first token of the name field, or "there" if empty.
3. **Verdict hero card** — tinted + accented by result tone (see Scoring). `border:1px <accent>`, `border-left:4px <accent>`, `radius:16px`, `padding:24px`, `background:<tint>`. Contains:
   - "RESULT" reslabel (`--text-muted`).
   - **Verdict** (display 32px 900, `-0.02em`) colored `<accent>`: "Kind environment" / "Mixed environment" / "Wicked environment".
   - **Tagline** (14px, `--text-secondary`) — one line, varies by verdict.
   - **Spectrum bar:** a relative 26px-tall track. The bar is a 12px-tall pill, `background:linear-gradient(90deg, --blue 0%, --orange 55%, --burnt 100%)`. A **marker** dot sits on it: 20×20 circle, white fill, `border:3px <accent>`, `box-shadow:0 1px 5px rgba(14,26,35,.35)`, positioned `left:<pct>%` and centered via `translate(-50%,-50%)`.
   - Under the bar: a flex row with "KIND" (`--blue-800`) left and "WICKED" (`--burnt`) right (display 11px 700, `0.14em`).
   - Caption (13px `--text-muted`): "{pct} / 100 on the wicked scale".
4. **"What this means for your interns" card:** white, `1px --slate`, `radius:16px`, `shadow-sm`, `padding:22px`. Reslabel + implication paragraph (14.5px, `line-height:1.6`, `--text-secondary`), text varies by verdict.
5. **"Next step" CTA card:** `background:--orange-50`, `border:1px --orange`, `border-left:4px --orange`, `radius:16px`, `padding:24px`.
   - Eyebrow "NEXT STEP" (`--orange-700`).
   - Headline (display 20px 800, `--ink`): "Let's build an internship program that fits your environment."
   - Body (14px `--text-secondary`): "We'll audit your current internship program and design the scaffolding your interns actually need."
   - **Primary button**, full-width: "Reach out to get your program audited →" — **destination not yet wired; needs a real URL/action.**
   - Row (hidden on print, `gap:10px`): **outline** button "Print / save summary" (calls `window.print()`), **ghost** button "Start over" (resets to the quiz).

---

## Interactions & Behavior
- **Selecting an answer:** clicking a segment sets that question's answer (`kind` | `both` | `wicked`) and restyles the three segments; only one is active per question.
- **Submit gating & label** (the primary quiz button):
  - No name entered → **disabled**, label "Add your name to continue".
  - Name entered but not all 8 answered → **disabled**, label "Answer all 8 to continue (N / 8)".
  - Name + all 8 answered → **enabled**, label "See my Kind-or-Wicked read →".
- **Submit:** switches to the result state (no scroll jump; renders in place).
- **Print / save summary:** `window.print()`. A print stylesheet hides `.kw-noprint` elements (header, footer, the Print/Start-over row) and forces a white background so the result prints clean.
- **Start over:** clears name, company, and all answers; returns to the quiz.
- **Transitions:** segment + button color/border changes use `.15s cubic-bezier(.4,0,.2,1)`. The spectrum marker/score-bar fill animates on `width`/`left` change (~500ms with the same easing) — decisive, no bounce.
- **Responsive:** single 680px column, comfortable on mobile. On narrow widths the pole-comparison grid can collapse to one column if needed (currently fixed 2-col; make it `minmax(0,1fr)` or stack under ~380px).

## State Management
Minimal local component state:
- `name: string`
- `company: string`
- `answers: Record<questionId, 'kind' | 'both' | 'wicked'>`
- `submitted: boolean`

Derived (recomputed on render, not stored): answered count, `allAnswered`, `canSubmit`, per-verdict `pct`, verdict label/tone/tagline/implication, submit label.

**No network calls exist yet.** Name/company are collected but not sent anywhere. If you need lead capture, POST `{name, company, verdict, pct, answers}` to your form/CRM endpoint on submit.

### Scoring logic (exact)
Each answer maps to a "wickedness" value: `kind → 0`, `both → 50`, `wicked → 100`.
```
pct = round( average of the 8 wickedness values )
verdict = pct < 40  → "Kind environment"   (accent --blue,   tint --blue-50)
          pct > 60  → "Wicked environment" (accent --burnt,  tint --burnt-100)
          else      → "Mixed environment"  (accent --orange, tint --orange-50)
```
The spectrum marker sits at `left: pct%`. Tagline and implication paragraph are chosen by the same three buckets — see **Copy** below.

## Design Tokens
From the Internship Insights Co. design system (CSS custom properties):

**Color**
- Orange (action/emphasis): `--orange-50 #FFF5EA`, `--orange-100 #FFE6CC`, `--orange-200 #FBD2A4`, `--orange #FBA856`, `--orange-600 #F08A25`, `--orange-700 #C96F12`, `--orange-900 #7A4810`
- Blue (trust): `--blue-50 #EEF5F9`, `--blue-100 #D6E7EF`, `--blue #5499BB`, `--blue-700 #3A7995`, `--blue-800 #2C6079`
- Wicked/burnt: `--burnt-100 #FBE9DC`, `--burnt-300 #E8B89A`, `--burnt #B54A14`, `--burnt-900 #7A2F0A`
- Neutrals: `--ink #0E1A23`, `--slate #D3DCE1`, `--slate-50 #F4F7F8`, `--paper #FBFAF7`, `--white #FFFFFF`
- Semantic: `--text-secondary rgba(14,26,35,.70)`, `--text-muted rgba(14,26,35,.55)`, `--border #D3DCE1`, `--border-strong rgba(14,26,35,.18)`, `--bg-blue-tint #EEF5F9`

**Typography**
- Display: **Montserrat** (700/800/900), tight tracking (`-0.02em` on large heads).
- Body: **Raleway** (400–600), `line-height` 1.5–1.65.
- Eyebrows: uppercase, `letter-spacing` 0.14–0.18em.

**Radius:** inputs 8px, buttons/small cards ~9–12px, cards 16px, badges/pills fully round (999px).
**Shadow:** `--shadow-sm` (subtle, cool-tinted `rgba(14,26,35,…)`) on cards.
**Buttons:** orange primary carries **ink** text (not white); blue secondary carries white; display font, 700. Hover = darker fill + 1px lift.

## Copy (exact strings)
**Questions** (prompt · kind pole · wicked pole):
1. How does most of the work get done? · "Work follows a clear, repeatable process — a manual or script gets you to the right answer." · "Work is open-ended — there is no set playbook, and the path gets figured out as you go."
2. What is feedback like on this team? · "Feedback is fast, accurate, and clearly tied to what someone just did (like chess or golf)." · "Feedback is slow, fuzzy, or missing — short-term progress does not always mean real learning."
3. How do new problems usually show up? · "Problems look familiar — we recognise them from past experience and reach for a known fix." · "The best answers come from reframing the problem, often with a fresh outside perspective."
4. How well does past experience predict success here? · "Deep specialist experience is a reliable predictor — more of it usually means better results." · "Experience can backfire — people get locked into familiar tools and over-confident assumptions."
5. How stable is the environment you operate in? · "It is stable — the same patterns hold for years, so what worked before keeps working." · "It shifts fast — what worked last quarter can hit a wall today, forcing constant recalibration."
6. What kind of thinking gets rewarded? · "Deep specialisation — going narrow and mastering one area or system." · "Connecting the dots across areas and repurposing what is already on hand."
7. Where do your best solutions come from? · "Reusing proven methods — if a fix worked once, we apply the same one again." · "Borrowing ideas from unrelated fields to crack problems that look nothing alike."
8. How are decisions typically made? · "By clear rules, where everyone knows what winning looks like." · "Under real uncertainty — we work from best guesses and keep experimenting."

**Verdict taglines**
- Kind: "Clear rules and quick feedback — skills compound fast here."
- Mixed: "Part predictable, part genuinely ambiguous — the mix is the challenge."
- Wicked: "Ambiguity and delayed feedback are the norm — range matters more than repetition."

**Implication paragraphs**
- Kind: "Because the work is predictable and feedback is fast, interns learn quickly through structured, repeatable practice. Lean into a strong onboarding script, well-scoped tasks, and focused skill-building — the environment does a lot of the teaching for you."
- Mixed: "Some of the work is predictable and some is genuinely ambiguous. Match interns to the task: use structured practice for the clear-cut parts, and add milestones and regular check-ins to guide them through the messy ones."
- Wicked: "Because the work is ambiguous and feedback is slow, interns need broad range and comfort with uncertainty. Build in cognitive scaffolding — micro-milestones, a daily check-in, and protected time to explore — so they can navigate the complexity while their skills are still wiring up."

## Assets
- `assets/logo-mark.png` — the lightbulb-person brand mark (36×36 in the header). Part of the Internship Insights Co. brand kit; use your codebase's existing logo asset if you already have it.
- Fonts: **Montserrat** + **Raleway** (Google Fonts / self-hosted). No other images or icons; there are no photos or Lucide icons in this particular screen.

## Files
- `Employer Diagnostic.dc.html` — the annotated design source (templating-runtime spec; read for structure/values, do not ship).
- `index.html` — self-contained compiled build; open in a browser to click through the real interaction, scoring, print, and reset behavior.

## Open items for the developer / product owner
1. **Audit CTA has no destination** — wire "Reach out to get your program audited →" to a booking URL, mailto, or route.
2. **No submission/analytics** — decide whether to persist leads (name/company/result) and fire analytics events on submit.
3. **Background color** — prototype uses `--bg-blue-tint`; brand default is warm `--paper`. Pick one.
4. **"Wicked" accent** — H1 word and pole labels currently mix `--orange-600` and `--burnt`; standardize on the brand "wicked" burnt (`#B54A14`) or confirm the orange.
