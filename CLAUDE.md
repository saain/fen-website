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
- Logo dot accent (header `.logo-dot` AND footer `.footer-logo` dot): `#7B6D3E` — the brand "Maldives gold/teal" colour. Used to be inconsistent — footers were on `#52b788` and the home page was on `#00C4A0`; both were wrong. Always `#7B6D3E` so the wordmark dot looks the same in header and footer of every page.
- Body text: `#3A3A3C` (warm-mode `#3D1A10`)
- Page bg: `#FAF8F4` (warm-mode `#FCE4D0`)
- Nav bar bg (from globals.css `.nav`): `rgba(237, 241, 236, 0.88)` — **light**, so all nav button text must be dark (`#2D3530`, `rgba(45,53,48,0.65)`), never light (`rgba(237,244,255,…)`). Light text on the light nav is invisible — this has bitten us multiple times.

⚠️ **Two greens, do not mix them up:** `#2d6a4f` (evidence tag) and `#4A5C42` (CTA + TEAL accent) look similar in code but are perceptibly different on screen. The Key Takeaways heading and the CTA box must be `#4A5C42`. The "Strong Evidence" pill at the top must be `#2d6a4f`. Older versions of articles used `#0D7A6A` (true teal) for the takeaway accent — that is the OLD value; if you see it in any new file you're writing, replace it with `#4A5C42`.

Nav buttons (Blue Light Blocker + language toggle):
- Visible bg: `rgba(45,53,48,0.07)`
- Border: `1.5px solid rgba(45,53,48,0.30)` (lang) or `1px solid rgba(45,53,48,0.28)` (blue light)
- Text: `#2D3530`
- Blue Light label uses `<span className="toggle-label">` so globals.css can hide it on small screens. In Dhivehi the label is `'ނޫ އަލި ހުރަސް'` AND the span needs `fontFamily: isRtl ? "'Faruma','MV Waheed',Tahoma,sans-serif" : "'DM Sans',sans-serif"` — without the override the span inherits the parent button's DM Sans, which has no Dhivehi glyphs and falls back to whatever ugly system font the OS happens to have.

The "Blue Light Blocker" is a per-user warm-palette toggle (sepia-shifted reading mode). It persists in `localStorage` under key `fen-warm`. Every article supports it; do not strip it.

## Dhivehi drop caps (decorative first-letter images)

Some pages use a decorative drop cap on the first paragraph **only in Dhivehi mode** — a hand-drawn image of the opening letter (with its diacritic) that floats to the right of the paragraph and the rest of the text wraps around it. Currently in use:

- `articles/magnesium/page.js` — subtitle paragraph, image of `ތަ`, file `public/dropcap-thaa.png`
- `articles/sunlight/page.js` — subtitle paragraph, image of `ވޭ`, file `public/dropcap-vaavu.png`
- `articles/omega-3/page.js` — subtitle paragraph, image of `ދު`, file `public/dropcap-dhaalu.png`
- `about/page.js` — opening paragraph, image of `އަ`, file `public/dropcap-alifu.png`

### The pattern (copy verbatim, only swap the letter + filename)

```jsx
<p style={{ ...existingStyle, overflow: 'hidden', paddingTop: isRtl && c.X.startsWith('LETTER') ? 24 : 0 }}>
  {isRtl && c.X.startsWith('LETTER') ? (
    <>
      <img
        src="/dropcap-NAME.png"
        alt="LETTER+DIACRITIC"
        style={{
          float: 'right',
          height: 165,            // ~4 lines of text — keep consistent across pages
          width: 'auto',
          maxWidth: '40%',        // safety on narrow viewports
          marginLeft: 18,
          marginTop: -18,         // lifts cap so its bottom sits closer to first body line
          marginBottom: 6,
          shapeOutside: 'url(/dropcap-NAME.png)',  // text hugs the letter contour
          shapeImageThreshold: 0.3,
          shapeMargin: 10,
        }}
      />
      {c.X.slice(2)}    // drop both the letter AND its diacritic — they're in the image
    </>
  ) : (
    c.X
  )}
</p>
```

The `paddingTop: 24` is **not optional** — it cancels out the negative `marginTop` so the diacritic at the top of the image isn't clipped by `overflow: hidden`. We learned this the hard way.

### Image requirements

- **Filename: ASCII only.** `dropcap-thaa.png`, `dropcap-alifu.png`, etc. Never name files with Dhivehi characters — the URL has to be percent-encoded (`%DE%87%DE%A6.png`) and that breaks across servers, CDNs, and CLI tools.
- **Format: transparent PNG.** Opaque images make `shape-outside` silently fall back to the bounding rectangle, so text wraps a square instead of the letter shape.
- **Trim the canvas tight to the letter.** Whitespace in the canvas around the letter expands the bounding box `shape-outside` reads from. The processing script below does this.

### Processing a new image

When the user drops a raw decorative letter image into `public/`, run this Python (PIL is preinstalled in the sandbox) to clean near-zero alpha and crop to the letter:

```python
from PIL import Image
img = Image.open('public/dropcap-NAME-original.png').convert('RGBA')
pixels = img.load()
w, h = img.size
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a < 30:                   # kill near-transparent crumbs
            pixels[x, y] = (0, 0, 0, 0)
bbox = img.getbbox()
m = 6                                # tiny breathing margin
trimmed = img.crop((max(0,bbox[0]-m), max(0,bbox[1]-m),
                    min(w,bbox[2]+m), min(h,bbox[3]+m)))
trimmed.save('public/dropcap-NAME.png', optimize=True)
```

Save the raw upload as `dropcap-NAME-original.png` first as a backup. The `.gitignore` excludes `public/dropcap-*-original.png` from the repo so backups stay local.

### How to add a drop cap to a new page or article

1. User saves the decorative letter image to `public/dropcap-<latin-name>-original.png` (or hands it to you in chat — then you ask them to save it themselves; you can't write binary files).
2. Run the processing script above to produce `public/dropcap-<latin-name>.png`.
3. Find the paragraph the image should attach to (must be in Dhivehi mode, must start with the letter shown in the image).
4. Apply the JSX pattern above. Keep `height: 165` for consistency unless there's a reason to differ.
5. Test in dev: toggle Dhivehi → check (a) the diacritic isn't clipped, (b) text wraps around the letter shape, (c) bottom of image aligns reasonably with the body text below.
6. Commit only the live `dropcap-<name>.png` and the updated page file (the `-original.png` is gitignored).

## Hero image

- File: `public/images/hero.jpg` — referenced by `globals.css` `.hero-cinematic.has-photo::before { background-image: url('/images/hero.jpg') }`. To swap the hero, replace this exact file (the CSS doesn't need to change).
- Currently: **Edvard Munch, *The Sun* (1911)** — public domain, sourced from Artvee. Replaces an earlier Hilma af Klint that was too visually busy behind hero text.
- Target spec from `fen-redesign/docs/image-sourcing-guide.md`: 2000px-wide JPG (or WebP), under ~1 MB. The hero shows at 15% opacity behind text, so quality 70-75 is fine. macOS one-liner: `sips -Z 2000 hero.jpg && sips -s formatOptions 75 hero.jpg`.
- Aesthetic anchor: keep the hero from the same five pillars documented in `fen-redesign/docs/image-sourcing-guide.md` (Klint mystical / Islamic geometric / botanical / symbolist spiritual / Kandinsky). Don't replace with stock photography.
- Always update `CREDITS.md` when swapping the hero. List the new artist, work, year, and source.

## Notion (project tracking + CMS)

This project has a Notion workspace mirroring the site as a lightweight CMS. **When the user asks "update notion" (or anything similar), do all of the following by default**:

1. **Update the affected article rows** in the fen database with: matching Title, normalised `URL Slug` (`/articles/<slug>`), Status `Published` if the article is live, accurate `Publish date`, Content Type `Articles`, and a one-line `Notes` field describing what changed (e.g. "Bilingual EN+DV; drop cap ތަ in DV; live URL: /articles/magnesium"). If the body content in Notion is clearly stale (e.g. still the original CMS template), replace it with the deployed English text.
2. **Prepend a new dated entry** at the top of the **Site Changes** rolling-log page, summarising the session.

Do not create a new "Site Changes" page per session — there is one canonical page that rolls forward.

### Notion locations (read these directly with the notion-fetch tool to refresh)

- **fen database** (the CMS) — `0bc3c672-a270-4fb9-9d2b-2e67832d37e5` — schema: Title, Content Type (Page / Blog Post / Landing Page / Product / Help Doc / Articles), Status (Backlog → Draft → In review → Scheduled → Published), Owner (person), URL Slug (text), Publish date (date), Last updated (auto), Keywords (multi-select), Meta description, SEO title, Notes
- **Site Changes (rolling log)** — `3530ef04-95de-8116-8c4a-db771309847e` — top-of-page intro instructs prepending; each session gets a `## YYYY-MM-DD` heading with bullets for Articles / Visual / Repo hygiene / Open-next sections
- **Article rows in the fen DB**:
  - Magnesium — `14c5c932-f439-42c6-afea-0af493e1333b`
  - Omega-3 — `3410ef04-95de-80b9-84e4-c89c54b884d8`
  - Sunlight — `3510ef04-95de-818f-9503-fc9a542b684c`
- **About fen** (parent for non-article pages like Site Changes) — `3490ef04-95de-8081-8fec-ecb94fecc764`

If any of these IDs ever 404, search the workspace for "fen" (database) or "Site Changes" (page) and update this section.

### What goes in a Site Changes entry

A new dated entry at the top of the rolling log should follow the established structure: `### Articles`, `### About page` (if changed), `### Visual consistency` (if changed), `### Repo hygiene` (if changed), `### Open / next`. Each is a short bullet list. The goal is something the user can scan in 30 seconds to remember what shipped that day. Do not paste full file diffs — describe outcomes, not mechanics.

### What goes in an article row's Notes field

One line. Pattern: `"Bilingual (EN + DV). Drop cap on Dhivehi <subtitle|opening>: <letter>. Live URL: /articles/<slug>. <Anything else worth flagging>."` — e.g. omega-3 currently reads: "Bilingual (EN + DV) — Dhivehi translation added Apr 30 2026. No drop cap (subtitle starts with ދ/daalu — would need a daalu image). Live URL: /articles/omega-3."

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
- **"fen." wordmark renders as ".fen" in RTL.** The brand is `fen<span>.</span>` in source — in RTL pages the dot flips to the left of "fen", which is wrong (it's a brand mark, not localized text). Globals.css forces `direction: ltr` on `.logo` and `.footer-logo` to prevent this. If you ever introduce a new logo placement, give it one of those classes (or its own `direction: ltr`).
- **Adding only one language.** Every new article must have both `en` and `dv` content objects, the language toggle button, and `dir={isRtl ? 'rtl' : 'ltr'}`. The site treats Dhivehi as a first-class language, not an afterthought.
- **Drop cap diacritic getting clipped at the top.** When adding a drop cap, the `<img>` uses `marginTop: -18` to lift the cap, and the parent `<p>` has `overflow: hidden` to contain the float. Without a matching `paddingTop` on the `<p>`, the lifted top of the image (= the diacritic) gets clipped. Always pair them. See the drop-caps section above.
- **Unicode filenames in `public/`.** Files like `އަ.png` in `public/` look fine in Finder but are fragile in URLs (must be percent-encoded). Always rename to ASCII (`dropcap-alifu.png`, `dropcap-thaa.png`) before referencing from `src=`.
- **Opaque drop cap image.** `shape-outside` requires a transparent PNG. An opaque image silently falls back to a rectangle wrap and the user thinks the CSS is broken. If the user reports text "on top of the letter" or "not following the shape," check the image's alpha channel before debugging CSS.

## When working on this repo, in priority order

1. **Read magnesium first** if creating or modifying any article — it's the source of truth.
2. **Match magnesium exactly** for nav, takeaway box, evidence box, references, disclaimer, CTA. Only the content objects and section count vary between articles.
3. **Both languages, every time** — content objects, home-page registration, nav labels.
4. **Push to deploy** — there is no preview workflow set up here; commits to `main` go straight to production. If unsure, ask the user before pushing.
5. **Update this file** if any rule above changes. A stale CLAUDE.md is worse than no CLAUDE.md.
