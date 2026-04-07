# fen. — Evidence-Based Natural Health Platform

A minimal editorial website for natural health awareness, built with Next.js 14.

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

### Option A: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - fen website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fen-website.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click **"Add New Project"**
   - Select your `fen-website` repository
   - Click **"Deploy"** — Vercel auto-detects Next.js settings
   - Your site will be live at `fen-website.vercel.app`

3. **Custom Domain (optional):**
   - In Vercel dashboard → your project → **Settings** → **Domains**
   - Add your domain (e.g., `fen.health` or `fenhealth.com`)
   - Update DNS records as instructed by Vercel

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow the prompts)
vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
fen-website/
├── src/
│   └── app/
│       ├── globals.css    # All styles (fonts, animations, responsive)
│       ├── layout.js      # Root layout with meta tags
│       └── page.js        # Main homepage component
├── public/                # Static assets (add logo, images here)
├── package.json
├── next.config.js
└── README.md
```

## Customization

- **Colors:** Edit CSS variables in `globals.css` (primary green: `#2d6a4f`)
- **Content:** Edit article data in `page.js` (ARTICLES and PILLARS arrays)
- **Fonts:** Currently using Instrument Serif + DM Sans from Google Fonts
- **Images:** Add to `/public/` folder and reference in components

## Next Steps

- Connect to Ghost CMS for dynamic content management
- Add actual newsletter integration (Ghost, Mailchimp, or ConvertKit)
- Add individual article pages with dynamic routing
- Set up analytics (Plausible or Vercel Analytics)
