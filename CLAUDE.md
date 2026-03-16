# LowRiskQuotes — Project Guide

## What This Is

A contractor cost estimation web app using Monte Carlo simulation. Originally built as native iOS/Android app called "EstiMate" (still in `/ios/` and `/android/`). The web version lives in `/web/` and is deployed to **lowriskquotes.com** via Vercel.

The web app uses a retro terminal aesthetic matching the whatbreaks/carstat project (`../carstat/`): dark background (#0a0a0a), JetBrains Mono font, ASCII box-drawing UI, amber accent (#f59e0b).

## Repo Structure

```
contractors_app/
├── web/                          # Next.js web app (THE ACTIVE PROJECT)
│   ├── src/
│   │   ├── app/                  # Next.js App Router pages
│   │   │   ├── page.tsx          # English landing page
│   │   │   ├── layout.tsx        # Root layout (Nav, Footer, contexts, GA)
│   │   │   ├── estimate/         # Estimator tool (client component)
│   │   │   ├── results/          # Results display (client component)
│   │   │   ├── about/            # About page
│   │   │   ├── guides/           # English SEO guide pages (14 guides)
│   │   │   │   └── guides.css    # Shared guide styles (ALL locales import this)
│   │   │   ├── tools/            # Interactive calculators
│   │   │   ├── us/               # US English (USD, "bid/remodel/addition")
│   │   │   ├── au/               # Australian English (AUD, "tradie/Colorbond")
│   │   │   ├── ca/               # Canadian English (CAD, freeze-thaw/HST)
│   │   │   ├── de/               # German (EUR)
│   │   │   ├── fr/               # French (EUR)
│   │   │   ├── pl/               # Polish (PLN)
│   │   │   ├── nl/               # Dutch (EUR)
│   │   │   ├── es/               # Spanish (EUR)
│   │   │   ├── pt/               # Portuguese/Brazilian (BRL)
│   │   │   ├── it/               # Italian (EUR)
│   │   │   ├── sv/               # Swedish (SEK)
│   │   │   └── tr/               # Turkish (TRY)
│   │   ├── components/
│   │   │   ├── layout/           # Nav, Footer, ASCIILogo (locale-aware)
│   │   │   ├── ui/               # ASCIIBox, OptionSelector, QuoteCard
│   │   │   ├── estimator/        # Form sections (ProjectDetails, Duration, etc)
│   │   │   ├── results/          # ASCIIHistogram, CostBreakdown, SimulationStats
│   │   │   ├── home/             # RecentEstimates
│   │   │   └── guides/           # MiniEstimator (placeholder)
│   │   ├── context/
│   │   │   ├── RegionContext.tsx  # Currency region (locale-aware defaults)
│   │   │   └── EstimatorContext.tsx # Project + simulation state
│   │   ├── engine/
│   │   │   └── monteCarlo.ts     # Monte Carlo simulation (ported from iOS)
│   │   ├── models/
│   │   │   ├── types.ts          # TypeScript interfaces
│   │   │   ├── constants.ts      # Risk levels, regions, defaults
│   │   │   └── translations.ts   # UI strings for all locales
│   │   ├── services/
│   │   │   ├── storage.ts        # localStorage wrapper
│   │   │   ├── currency.ts       # Intl.NumberFormat currency formatting
│   │   │   ├── project.ts        # Project helpers (create, compute costs)
│   │   │   └── pdf.ts            # jsPDF generation (customer + detailed)
│   │   └── styles/
│   │       ├── variables.css     # CSS custom properties (colours, spacing)
│   │       └── globals.css       # Global reset + terminal aesthetic
│   ├── public/
│   │   ├── sitemap.xml           # 205 URLs across 13 locales
│   │   └── robots.txt            # Points to sitemap
│   ├── next.config.ts            # output: 'export', trailingSlash: true
│   └── package.json
├── ios/                          # Original iOS app (SwiftUI) — not actively developed
├── android/                      # Original Android app (Jetpack Compose) — not actively developed
└── docs/
    └── superpowers/
        ├── specs/                # Design spec
        └── plans/                # Implementation plan
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Rendering | Static export (SSG) — `output: 'export'` |
| Styling | Plain CSS + CSS variables (NO Tailwind) |
| Font | JetBrains Mono (Google Fonts) |
| PDF | jsPDF (client-side) |
| Analytics | Google Analytics 4 (via `NEXT_PUBLIC_GA_ID` env var) |
| Storage | localStorage (no backend, no database) |
| Hosting | Vercel (free tier, auto-deploys from GitHub) |
| Domain | lowriskquotes.com (Cloudflare DNS → Vercel A record) |
| Repo | github.com/physics-star-cat/contractors_app |

## How to Build

```bash
cd web
npm install        # first time only
npm run dev        # local dev server at http://localhost:3000
npm run build      # production build → generates /web/out/ directory
```

## How to Deploy

Vercel auto-deploys on every push to `master`. No manual deployment needed.

```bash
git add web/
git commit -m "description of changes"
git push origin master
# Vercel picks it up automatically
```

If you need to force a redeploy without code changes, go to Vercel dashboard → Deployments → Redeploy.

## Critical SEO Configuration

**DO NOT CHANGE THESE — they prevent the canonical URL problem that killed a previous site:**

1. **`next.config.ts`** has `trailingSlash: true` — generates `/about/index.html` not `/about.html`
2. **Every page** exports `alternates: { canonical: '/path/' }` with trailing slash
3. **All internal links** use trailing slashes: `/estimate/` not `/estimate`
4. **`sitemap.xml`** has all URLs with trailing slashes
5. **Cloudflare proxy is OFF** (grey cloud, DNS only) — Vercel handles SSL

If any of these get out of sync, Google will index duplicate URLs and rankings will tank.

## Adding a New English Guide

1. Create directory: `web/src/app/guides/your-guide-slug/`
2. Create `page.tsx` as a server component:
```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'your title // lowriskquotes',
  description: 'SEO description',
  alternates: { canonical: '/guides/your-guide-slug/' },
}

export default function YourGuidePage() {
  return (
    <div className="guide">
      <h1>title</h1>
      {/* content using ASCIIBox, guide__table, guide__highlight classes */}
      <div className="guide__cta">
        <Link href="/estimate/">[START ESTIMATE]</Link>
      </div>
    </div>
  )
}
```
3. Add URL to `web/public/sitemap.xml`
4. Commit and push

## Adding a New Locale Guide

Same as above but under `web/src/app/{locale}/guides/slug/`. CSS import path is `'../../../guides/guides.css'` (one level deeper than English guides).

## Locales — Current State

| Locale | Pages | Guide CSS Import Path |
|--------|-------|-----------------------|
| `/` (English) | 21 | `'../guides.css'` |
| `/us/` `/au/` `/ca/` | 15 each | `'../../../guides/guides.css'` |
| `/de/` `/fr/` `/pl/` `/nl/` `/es/` | 20 each | `'../../../guides/guides.css'` |
| `/pt/` `/it/` `/sv/` `/tr/` | 10 each | `'../../../guides/guides.css'` |

PT/IT/SV/TR only have 4 guides + tool pages. The main locales (DE/FR/PL/NL/ES) have 14 guides each, matching English.

## Nav and Footer Localisation

Nav (`components/layout/Nav.tsx`) and Footer (`components/layout/Footer.tsx`) detect the locale from the URL path using `usePathname()`. They show translated link labels and disclaimer text. The region picker (currency selector) only appears on English locales (en/us/au/ca).

Translations for nav/footer are hardcoded in those component files, not in `translations.ts`.

## Monte Carlo Engine

Direct port from `ios/RiskEstimator/RiskEstimator/Services/MonteCarloEngine.swift`. Key parameters:

- 1,000-10,000 iterations with convergence detection
- Box-Muller transform with skew (0.7x negative, 1.3x positive)
- Convergence: P80 relative change < 1% across 500-iteration batches
- Outputs: P10/P50/P80/P90/P95, mean, stddev, cost breakdown by category

## Google Analytics

Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in Vercel → Settings → Environment Variables. The gtag script in `layout.tsx` only loads when this env var is set. Requires a redeploy after setting.

## Google AdSense

Placeholder slots exist in guide pages. To activate: add your AdSense script to `layout.tsx` head and replace placeholder divs with actual ad units. Ads should only appear on guide/content pages, NOT on the estimator or results pages.

## Common Issues

**Build fails with "Module not found: guides.css"**
→ Locale guide pages need `import '../../../guides/guides.css'` (3 levels up), not `../../guides/guides.css`

**Cloudflare SSL redirect loops**
→ Cloudflare proxy must be OFF (grey cloud). Vercel handles SSL. If the orange cloud is on, disable it in Cloudflare DNS settings.

**Pages not indexed by Google**
→ Submit sitemap at Google Search Console. Check canonical tags match actual URLs. Ensure `trailingSlash: true` is set.

**English text appearing in locale pages**
→ Check Nav.tsx and Footer.tsx have the locale in their lookup maps. Check the page itself doesn't import English components.
