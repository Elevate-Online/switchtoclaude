# How to Generate the OG Image

You have three options to create the `public/og-image.png` file:

## Option 1: Screenshot the HTML Template (Easiest)

1. **Open the template:**
   ```bash
   open og-image-template.html
   ```
   (Or just double-click `og-image-template.html`)

2. **Take a screenshot at exact dimensions:**

   **Method A - Using Browser DevTools:**
   - Open DevTools (F12 or Cmd+Option+I)
   - Toggle device toolbar (Cmd+Shift+M or Ctrl+Shift+M)
   - Set dimensions to: **1200 x 630**
   - Right-click the preview → "Capture screenshot" or use a screenshot tool

   **Method B - Using macOS Screenshot:**
   - Press Cmd+Shift+4, then Spacebar
   - Click on the browser window
   - Resize browser to show exactly 1200x630px content

   **Method C - Using Browser Extension:**
   - Install "GoFullPage" or "Awesome Screenshot"
   - Capture at exact dimensions: 1200x630

3. **Save the file:**
   - Save as: `og-image.png`
   - Move to: `public/og-image.png`

---

## Option 2: Use Figma/Canva (Professional)

### Figma:
1. Create a new frame: 1200 x 630px
2. Use these specs:
   - **Background**: Linear gradient from #1a1d21 to #212529 (135deg)
   - **Headline**: Inter, 72px, 800 weight, white (#ffffff)
   - **"Claude" text**: Color #D97757
   - **Subheadline**: Inter, 32px, 400 weight, rgba(255,255,255,0.8)
   - **Domain**: "switchtoclaude.com" at bottom-left, Inter 28px, #D97757
   - **Badge**: "Free Guide" at bottom-right, with border #D97757
3. Export as PNG → `public/og-image.png`

### Canva:
1. Create custom size: 1200 x 630px
2. Use dark background (#212529)
3. Add text following the design in `og-image-template.html`
4. Download as PNG → `public/og-image.png`

---

## Option 3: Use an AI Image Generator

Use Claude, ChatGPT, or Midjourney with this prompt:

```
Create a 1200x630px social media card with:
- Dark background (gradient from #1a1d21 to #212529)
- Large white headline: "Switch from ChatGPT to Claude — Without Starting Over"
- Highlight "Claude" in orange (#D97757)
- Subheadline in light gray: "Free migration guide with exact prompts to preserve everything ChatGPT knows about you"
- Bottom left: "switchtoclaude.com" in orange
- Bottom right: Badge saying "Free Guide" with orange border
- Clean, modern, typographic design
- No photos, just text and shapes
```

Then save as `public/og-image.png`

---

## Verify It Worked

After creating `public/og-image.png`:

1. Check the file exists:
   ```bash
   ls -lh public/og-image.png
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Test locally:
   ```bash
   npm run dev
   ```

4. Share a page URL in Slack or use a tool like https://www.opengraph.xyz/ to preview

---

## Current Status

- ✅ Metadata configured (references `/og-image.png`)
- ⏳ **Need to create:** `public/og-image.png` (1200x630px)
- ✅ Favicon already created (`app/icon.svg`)

Once you create the PNG file, you're done!
