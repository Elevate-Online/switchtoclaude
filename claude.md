# CLAUDE.md — switchtoclaude.com

## Project Overview

This is **switchtoclaude.com** (also served at switchtoclaude.ai) — a free guide and lead magnet site helping people migrate from ChatGPT to Claude. It's part of the Elevate Online content ecosystem, funneling to the paid course at claudeforeveryone.com.

**Owner:** Nicole Patten, Elevate Online
**Stack:** Next.js 14+ (App Router), Tailwind CSS, deployed to Vercel via GitHub
**Domain:** switchtoclaude.com (primary), switchtoclaude.ai (redirect)

---

## What This Site Does

1. **Landing page** (`/`) — Captures email addresses in exchange for the free switching guide + bonus templates. Hero section with the hook, social proof (700K+ QuitGPT movement), 3-step value prop, email capture form, FAQ.

2. **Guide page** (`/guide`) — The full "How to Switch from ChatGPT to Claude" guide. 6-step walkthrough with two copy-paste prompts. This is the core content asset.

3. **Thank you / confirmation page** (`/thanks`) — Post-signup confirmation with guide link + course teaser.

That's it. Three pages. Ship fast.

---

## Design Direction

### Brand & Visual

- **Tone:** Clean, confident, slightly rebellious. This is for people making a values-driven AND practical decision.
- **Color palette:** Dark background (near-black or deep navy) with Claude's orange/coral (#D97757 or similar) as accent. White text. Clean, modern, premium feel.
- **Typography:** Inter or similar clean sans-serif. Large headlines. Generous whitespace.
- **NO:** Stock photos, generic AI imagery, robot illustrations, gradient blobs. Keep it typographic and clean.
- **Inspiration:** Stripe's documentation aesthetic meets a protest movement landing page. Clean but with conviction.

### Layout Principles

- Mobile-first (80%+ traffic will be mobile from LinkedIn/social)
- Single-column for guide content
- Sticky CTA on mobile for landing page
- No navigation menu on landing page (conversion-focused)
- Minimal navigation on guide page (just logo + CTA)

---

## Page-by-Page Spec

### Landing Page (`/`)

**Sections in order:**

1. **Hero**
   - Headline: "Switch from ChatGPT to Claude — Without Starting Over"
   - Subhead: "The free migration guide with exact prompts to extract what ChatGPT knows about you and rebuild it — better — in Claude."
   - Primary CTA: Email capture form (single field + button)
   - Social proof line: "Join 700,000+ people making the switch"

2. **Why People Are Switching** (brief — 3 bullets max)
   - OpenAI's $25M Trump donation
   - GPT-5.2 quality declining
   - Claude is better for real work (not just chat)
   - Optional: Link/reference to #QuitGPT movement

3. **The Problem**
   - "You've trained ChatGPT for months. Your tone. Your context. Your workflows. Starting over feels like losing everything."
   - "This guide fixes that."

4. **What's In The Guide** (3 items)
   - The Migration Prompt — extract everything ChatGPT knows about you
   - The Instructions Generator — turn your ChatGPT context into Claude Project instructions
   - What Claude can do that ChatGPT can't — Projects, Skills, MCP integrations

5. **Who Made This**
   - Brief Nicole bio: "Built by Nicole Patten. Ex-Google engineer (7 years). Runs her entire consulting business using Claude."
   - Photo if available

6. **Final CTA**
   - Email capture form again
   - "Free guide + bonus: skill templates and prompt files"

7. **Footer**
   - Links: Guide | Course (claudeforeveryone.com) | Elevate Online | LinkedIn
   - © 2026 Elevate Online

### Guide Page (`/guide`)

- Full guide content from the markdown file (see `/content/guide.md`)
- Table of contents / step navigation at the top
- Each step as a distinct section with anchor links
- Code blocks for the two main prompts (with copy button)
- Comparison table styled nicely
- Checklist at the end with actual checkboxes (client-side, no persistence needed)
- CTA banner between Step 5 and Step 6: course upsell to claudeforeveryone.com
- Bottom CTA: email signup for course early access

### Thank You Page (`/thanks`)

- "You're in. Check your email."
- Direct link to the guide page
- Teaser for the course: "Want to go deeper? The full course covers Skills, MCP integrations, and building a complete AI operating system."
- Link to claudeforeveryone.com

---

## Technical Implementation

### Email Capture

Use the existing `EmailCaptureModal` component from the Elevate Online site. It already hits the HubSpot Forms API directly (portal `243707817`, form `3890ae7b-c23c-4ce8-ae26-9e8824c1e068`).

**Same form, different source param.** Pass `source="switchtoclaude"` to differentiate from other sites. Filter by source in HubSpot to create separate lists/sequences.

**Reference component:** `src/components/EmailCaptureModal.jsx` from the Elevate Online repo. Copy it into this project and adapt styling to match the dark theme.

**Key adaptations for this site:**
- Restyle for dark background (dark modal or inline form instead of modal — test both)
- Consider an inline form on the landing page (not modal) for less friction — modal on guide page for gated content if desired
- Keep the `source` prop: `source="switchtoclaude"`
- The `webhookUrl` and `webhookData` props are available if you want to trigger n8n workflows on signup

**Form fields:** Name + Email (matching existing component). Could simplify to email-only for even less friction — test it.

**Other sites using this same form:**
- elevateonline.com → `source="elevate"`
- claudeforeveryone.com → `source="claudeforeveryone"` (currently on Formspree — migrate to this component)
- switchtoclaude.com → `source="switchtoclaude"`

### Content Management

- Guide content lives in `/content/guide.md` as markdown
- Render with a markdown-to-JSX library (e.g., `next-mdx-remote`, `react-markdown`, or similar)
- This allows updating guide content without touching React components

### Copy-to-Clipboard

The two main prompts MUST have a prominent "Copy" button. These are the core value of the guide. Use a simple clipboard API implementation with visual feedback ("Copied!").

### SEO

- Title: "Switch from ChatGPT to Claude — Free Migration Guide"
- Meta description: "Extract what ChatGPT knows about you and rebuild it in Claude. Free guide with exact prompts. Join 700,000+ people making the switch."
- OG image: Create a simple branded card (dark bg, white text, headline)
- Canonical: https://switchtoclaude.com
- Sitemap: auto-generate

### Analytics

- Vercel Analytics (built-in)
- Google Analytics if Nicole wants it
- Track: page views, email signups, guide page scroll depth, prompt copy clicks

### Performance

- Target: <2s load time
- No heavy JS libraries
- Optimize images (if any)
- Static generation for all pages (no SSR needed)

---

## File Structure

```
switchtoclaude/
├── CLAUDE.md                  # This file
├── app/
│   ├── layout.tsx             # Root layout, fonts, metadata
│   ├── page.tsx               # Landing page
│   ├── guide/
│   │   └── page.tsx           # Full guide page
│   └── thanks/
│       └── page.tsx           # Post-signup confirmation
├── components/
│   ├── EmailCaptureModal.tsx   # Ported from Elevate site (source="switchtoclaude")
│   ├── EmailCaptureInline.tsx  # Inline version for landing page hero (no modal)
│   ├── CopyButton.tsx          # Copy-to-clipboard for prompts
│   ├── GuideContent.tsx       # Markdown renderer for guide
│   ├── Header.tsx             # Minimal header (logo + CTA)
│   └── Footer.tsx             # Site footer
├── content/
│   └── guide.md               # The full switching guide (markdown)
├── public/
│   ├── og-image.png           # Social sharing image
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Content Files

The full guide content is provided in `/content/guide.md`. Do not rewrite or summarize the guide content — render it as-is with proper formatting.

---

## Key URLs

- **This site:** switchtoclaude.com
- **Course site:** claudeforeveryone.com
- **Main business:** elevateonline.com
- **Nicole's LinkedIn:** linkedin.com/in/npatten

---

## Development Commands

```bash
npm run dev        # Local development
npm run build      # Production build
npm run start      # Start production server
```

---

## Deployment

- Push to GitHub → auto-deploys to Vercel
- Domain: switchtoclaude.com (configure in Vercel dashboard)
- Environment variables: HubSpot API key (if using API approach)

---

## Priority

Ship a working v1 fast. The content is the product. The design just needs to be clean and not get in the way. Perfect is the enemy of live.

**v1 (ship tomorrow):**
- Landing page with email capture
- Guide page with full content
- Thank you page
- Mobile responsive
- Copy buttons on prompts

**v2 (next week):**
- OG image
- Analytics
- SEO optimization
- A/B test headlines

**v3 (later):**
- Downloadable PDF version of guide
- Interactive prompt builder
- Video walkthrough embeds