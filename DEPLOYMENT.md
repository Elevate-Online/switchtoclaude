# Deployment Guide

## Quick Start: Deploy to Vercel from GitHub

### 1. Create GitHub Repository

```bash
# Create a new repository on GitHub.com
# Then push your local repository:

git remote add origin https://github.com/YOUR_USERNAME/switchtoclaude.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `switchtoclaude` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

That's it! Vercel will build and deploy your site automatically.

### 3. Configure Custom Domain

In your Vercel project dashboard:

1. Go to Settings → Domains
2. Add `switchtoclaude.com`
3. Add `switchtoclaude.ai` (will redirect to .com)
4. Follow Vercel's DNS instructions to point your domains

### 4. Environment Variables

No environment variables are required! The HubSpot form integration uses their public API.

If you want to add analytics or other services later:

1. Go to Settings → Environment Variables in Vercel
2. Add any keys you need (e.g., `NEXT_PUBLIC_GA_ID` for Google Analytics)

---

## Auto-Deploy on Push

Vercel automatically deploys:
- **Production**: Every push to `main` branch → switchtoclaude.com
- **Preview**: Every pull request → temporary preview URL

---

## Local Development

```bash
npm install         # Install dependencies
npm run dev         # Start dev server at localhost:3000
npm run build       # Test production build
npm run start       # Run production build locally
```

---

## Updating Content

### Update the Migration Guide

Edit `/content/guide.md` and push to GitHub. Vercel will auto-deploy.

### Update Landing Page Copy

Edit `/app/page.tsx` and push to GitHub.

### Update Email Form Settings

The form submits to HubSpot portal `243707817`, form `3890ae7b-c23c-4ce8-ae26-9e8824c1e068` with `source="switchtoclaude"`.

To change this, edit `/components/EmailCaptureInline.tsx`.

---

## Performance & SEO

- All pages are statically generated at build time
- Lighthouse score should be 95+ across the board
- No environment variables needed
- Fast cold starts, minimal JS bundle

---

## Troubleshooting

**Build fails on Vercel:**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

**Form submissions not working:**
- Verify HubSpot portal and form IDs in `EmailCaptureInline.tsx`
- Check browser console for CORS errors
- Confirm form ID is active in HubSpot

**Domain not connecting:**
- Check DNS propagation (can take 24-48 hours)
- Verify nameservers are pointing to Vercel
- Check Vercel's domain status page

---

## Support

- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- GitHub issues: Create an issue in your repo for tracking

---

Built with Next.js 15, deployed on Vercel, managed through GitHub.
