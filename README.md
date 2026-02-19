# switchtoclaude.com

A free migration guide helping people switch from ChatGPT to Claude without losing their training.

## Overview

**switchtoclaude.com** is a lead magnet site for Elevate Online, funneling to the paid course at claudeforeveryone.com.

- **Stack:** Next.js 15 (App Router), Tailwind CSS, TypeScript
- **Deployed:** Vercel via GitHub
- **Domain:** switchtoclaude.com (primary), switchtoclaude.ai (redirect)

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
```

## Project Structure

```
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Landing page
│   ├── guide/        # Full migration guide
│   └── thanks/       # Post-signup confirmation
├── components/       # Reusable React components
├── content/          # Markdown content (guide.md)
└── public/           # Static assets
```

## Key Features

- Email capture with HubSpot Forms API integration
- Markdown-based guide content with copy-to-clipboard prompts
- Mobile-first responsive design
- Dark theme with Claude orange accents
- SEO optimized

## Environment

No environment variables needed for basic functionality. HubSpot form submission works via their public API.

## Deployment

Push to GitHub → auto-deploys to Vercel. Configure domain in Vercel dashboard.

## Content Updates

To update the guide content, edit `/content/guide.md`. Changes will automatically appear on the `/guide` page.

---

Built by Nicole Patten • [Elevate Online](https://elevateonline.com)
