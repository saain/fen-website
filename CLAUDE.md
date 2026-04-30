# CLAUDE.md — fen website

This file is auto-loaded by Claude Code and Cowork at the start of every session in this repo. Read it. Follow it. If something here is wrong or stale, fix this file as part of your change.

## What this project is

**fen** is a bilingual (English + Dhivehi/RTL) editorial site about evidence-based natural health, aimed at a Maldivian audience. Built with Next.js 14 (app router, JS not TS), deployed on Vercel via GitHub auto-deploy on push to `main`.

## Repo layout

```
src/app/
  layout.js              # Minimal root layout, loads globals.css
  globals.css            # ALL styles — fonts, palette, .nav, .evidence-tag, .newsletter-btn, RTL overrides
  page.js                # Home page. Holds en + dv content objects with ARTICLES arrays
  about/page.js          # About page
  articles/
    magnesium/page.js    # ⭐ CANONICAL ARTICLE TEMPLATE
    omega-3/page.js      # English-only example
    sunlight/page.js     # Bilingual example
public/fonts/            # Faruma.ttf, MV_Waheed.otf, aammufk.ttf (Dhivehi fonts)
```

## ⭐ The single most important rule

**`src/app/articles/magnesium/page.js` is the canonical article template.** When creating any new article, copy this file and replace only the content (the `en` and `dv` data objects + the `refs` array). Do not rewrite the layout. Do not invent new colors. Do not change the nav, the takeaway box, the evidence box, the references list, the disclaimer, or the CTA — these live inside `MagnesiumArticleInner` and they are deliberately consistent across every article on the site.

If a design change is wanted, change it in **magnesium first**, then propagate to every other article in the same commit. The site does not have a shared `<Article>` component (yet); consistency is enforced by humans copying from magnesium. Treat it as the source of truth until that's refactored.

## How to add a new article

1. `cp src/app/articles/magnesium/page.js src/app/articles/<slug>/page.js`
2. Rename the two functions: `MagnesiumArticleInner` → `<Slug>ArticleInner`, `MagnesiumArticle` → `<Slug>Article`.
3. Replace the `en` and `dv` content objects with the new article's text (keep ALL keys — `back`, `tag`, `category`, `title`, `subtitle`, `date`, `readTime`, `refCount`, `keyTitle`, `keys`, `s1t`/`s1`/`s1e` … through however many sections, `refsTitle`, `disc`, `discL`, `ctaT`, `ctaD`, `ctaB`).
4. Replace the `refs` array. Use the format `{ text: '...', url: 'https://...' }` if you want clickable links (sunlight does this) — otherwise plain strings (magnesium does this).
5. Add the article to **both** language arrays in `src/app/page.js`:
   - `en.articles` array (around line 50)
   - `dv.articles` array (around line 117)
   Both entries need the same `id` and `slug`. Forgetting one means the article won't appear when the user is in that language. **This is a recurring mistake — do not skip it.**
6. Verify locally: `npm run dev` then click through both languages.

If sections are added or removed (magnesium has 8 + a custom table; sunlight has 9), only the `<Sec>` calls and the corresponding `s{N}t`/`s{N}`/`s{N}e` keys change — the surrounding scaffolding (nav, takeaway box, refs, disclaimer, CTA) stays identical to magnesium.

## Bilingual handling

- Two content objects per article: `const en = { ... }` and `const dv = { ... }`.
- Active object selected with `const c = lang === 'en' ? en : dv;` and `const isRtl = lang === 'dv';`.
- `<div dir={isRtl ? 'rtl' : 'ltr'}>` wraps the whole page.
- Language preference persists in `sessionStorage` under key `fen-lang`. Read it in `useEffect` so the choice carries across pages within a session.
- Dhivehi font stack: body `'Faruma','MV Waheed',Tahoma,sans-serif`, headings `'MVWaheed','Faruma','MV Waheed',Tahoma,sans-serif`. English uses `'DM Sans',sans-serif` body and `'Instrument Serif',serif` headings.
- Dhivehi runs at larger font sizes and taller line-heights — body `lineHeight: 2.3` vs English `1.85`; headings `1.7` vs `1.15`. Use the `isRtl ? X : Y` ternary throughout, the way magnesium does.
- The references list always stays LTR + DM Sans, even in Dhivehi mode (`direction: 'ltr', textAlign: 'left'`), because URLs and citations are English text.
- The home `<a>` link in the nav swaps to `'ފުރަތަމަ ←'` in Dhivehi.

## Design tokens (snapshot — magnesium is the live source)

These are accurate as of the last edit but **do not maintain this list as the canonical reference**. Read `magnesium/page.js` if there's any doubt; if it disagrees with this file, magnesium wins.

Palette:
- Evidence tag (top-of-article badge): `#2d6a4f` (rich green)
- CTA box bg (bottom-of-article newsletter call-to-action): `#4A5C42` (muted olive-green) with `borderRadius: 12`
- Takeaway box accent — `TEAL` constant in code (heading colour + 4px border on the Key Takeaways box + table headers): `#4A5C42` warm-off / `#A03A18` warm-on
- Footer dot accent: `#52b788`
- Body text: `#3A3A3C` (warm-mode `#3D1A10`)
- Page bg: `#FAF8F4` (warm-mode `#FCE4D0`)
- Nav bar bg (from globals.css `.nav`): `rgba(237, 241, 236, 0.88)` — **light**, so all nav button text must be dark (`#2D3530`, `rgba(45,53,48,0.65)`), never light (`rgba(237,244,255,…)`). Light text on the light nav is invisible — this has bitten us multiple times.

⚠️ **Two greens, do not mix them up:** `#2d6a4f` (evidence tag) and `#4A5C42` (CTA + TEAL accent) look similar in code but are perceptibly different on screen. The Key Takeaways heading and the CTA box must be `#4A5C42`. The "Strong Evidence" pill at the top must be `#2d6a4f`. Older versions of articles used `#0D7A6A` (true teal) for the takeaway accent — that is the OLD value; if you see it in any new file you're writing, replace it with `#4A5C42`.

Nav buttons (Blue Light Blocker + language toggle):
- Visible bg: `rgba(45,53,48,0.07)`
- Border: `1.5px solid rgba(45,53,48,0.30)` (lang) or `1px solid rgba(45,53,48,0.28)` (blue light)
- Text: `#2D3530`
- Blue Light label uses `<span className="toggle-label">` so globals.css can hide it on small screens; in Dhivehi the label is `'ނޫ އަލި ހުރަސް'`.

The "Blue Light Blocker" is a per-user warm-palette toggle (sepia-shifted reading mode). It persists in `localStorage` under key `fen-warm`. Every article supports it; do not strip it.

## Deploy flow

1. Edit files in `src/`.
2. `git add <files> && git commit -m "..."`
3. `git push` (origin = `main`)
4. Vercel detects the push and auto-deploys. Live in ~1–2 min at the production URL.

There is no `vercel.json` and no local `vercel` CLI link — the integration is GitHub-based. Don't try to run `vercel --prod` from the repo; just push.

If a `.git/index.lock` blocks a commit, `rm -f .git/index.lock` first. If running inside a sandbox that can't write to `.git`, the user must run the git commands themselves on their host machine — Edit/Read tools work on the mount but `.git` writes can fail silently.

## Security: do NOT embed PATs in the git remote URL

The current remote is set as `https://saain:ghp_...@github.com/saain/fen-website.git` — the GitHub personal access token is in the URL. This is logged in shell history, visible to anyone who runs `git remote -v`, and gets copied any time the repo is cloned. **Rotate that token at https://github.com/settings/tokens, then use one of:**
- macOS Keychain: `git config --global credential.helper osxkeychain`, push once, enter the new token when prompted, never appears in URLs again.
- SSH remote: `git remote set-url origin git@github.com:saain/fen-website.git` and add an SSH key to GitHub.

Until this is rotated, do not paste git remote output into any chat, screenshot, or document.

## Common pitfalls (things that have actually gone wrong)

- **Article styling drifts from magnesium.** Articles have ended up with their own one-off colors: `#5A7A5A` for evidence tag (should be `#2d6a4f`), `#0D7A6A` for the takeaway TEAL accent (should be `#4A5C42`), `#00C4A0` for footer dot (should be `#52b788`). Always copy from magnesium; don't carry forward old colors from existing files. **Sanity check** by diffing the hex colors used: `diff <(grep -oE "#[0-9a-fA-F]{3,8}" articles/<new>/page.js | sort -u) <(grep -oE "#[0-9a-fA-F]{3,8}" articles/magnesium/page.js | sort -u)` — output should be empty.
- **Light-on-light nav text.** The nav background was changed to a light pale-green; any nav text in `rgba(237,244,255,…)` (the old dark-nav color) becomes invisible. All nav text must use `rgba(45,53,48,…)` or `#2D3530`.
- **Forgetting to add an article to both `en.articles` and `dv.articles`.** The new article won't appear in one of the languages. Always update both.
- **Forgetting the Dhivehi label on the Blue Light button.** Magnesium uses `{isRtl ? 'ނޫ އަލި ހުރަސް' : 'Blue Light Blocker'}`. Don't ship English-only.
- **Adding only one language.** Every new article must have both `en` and `dv` content objects, the language toggle button, and `dir={isRtl ? 'rtl' : 'ltr'}`. The site treats Dhivehi as a first-class language, not an afterthought.

## When working on this repo, in priority order

1. **Read magnesium first** if creating or modifying any article — it's the source of truth.
2. **Match magnesium exactly** for nav, takeaway box, evidence box, references, disclaimer, CTA. Only the content objects and section count vary between articles.
3. **Both languages, every time** — content objects, home-page registration, nav labels.
4. **Push to deploy** — there is no preview workflow set up here; commits to `main` go straight to production. If unsure, ask the user before pushing.
5. **Update this file** if any rule above changes. A stale CLAUDE.md is worse than no CLAUDE.md.
