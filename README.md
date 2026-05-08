# Landing V2 — Motion-heavy variant

Sibling project to `degxifi-landing` (v1). Same content, same CTAs, same brand-anonymous framing — but with **scroll-triggered reveals, animated backgrounds, magnetic buttons, count-up tickers, glass-morphism cards**, and a **cursor-following spotlight** in the final CTA.

Use this for an A/B test against v1 to see which variant converts better on Facebook ad traffic.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v4 · `motion` (Framer Motion v11+)

## Run locally

```
cd c:/Users/HP/Downloads/degxifi-landing-v2
bun install        # or: npm install
bun run dev        # or: npm run dev
```

Opens at **http://localhost:3002** (v1 stays on 3001 — both can run side-by-side).

## Build

```
bun run build
```

Outputs static HTML/CSS/JS to `dist/`. Deploy that folder anywhere static (Netlify, Vercel, Cloudflare Pages).

## What's different from v1

| Element | v1 | v2 |
|---|---|---|
| Hero background | Static glow | Animated mesh-gradient (3 floating blobs) |
| Hero headline | All-at-once paint | Word-by-word fade-up reveal |
| Hero eyebrow | Static pill | Gentle vertical bob |
| CTA buttons | Pulsing glow | Pulsing glow **+ magnetic hover** + tap-scale |
| Why-now layout | 3 equal cards | Bento grid (1 tall + 2 small) with **3D tilt-on-hover** |
| Who-it's-for | Plain cards | Glass-morphism cards with **staggered reveal** + icon pulse |
| Trust band | Static labels | **Animated count-up numbers** + aurora-sweep gradient |
| FAQ | CSS max-height transition | Smooth `AnimatePresence` height anim, gradient-pulse border on active |
| Final CTA | Static gradient text | **Animated gradient text** + cursor-following spotlight + spring-bounce buttons |
| Site-wide | Smooth scroll | Smooth scroll **+ scroll-progress bar at top** + `prefers-reduced-motion` gating |

All animations are gated by `prefers-reduced-motion`. If a visitor has motion sensitivity enabled in their OS, the page renders essentially identical to v1.

## Project shape

```
degxifi-landing-v2/
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx                   ← page composition
│   ├── icons.tsx                 ← inlined SVG icons (same as v1)
│   ├── motion-primitives.tsx     ← FadeUp / Stagger / TiltCard / Magnetic / CountUp / etc.
│   └── index.css                 ← Tailwind v4 + theme + keyframes + reduced-motion gate
├── tsconfig.json
├── vite.config.ts
├── package.json
└── .gitignore
```

## Dependency callout

Adds `motion` (~30KB gzipped). Total bundle is still small (~120KB gzipped including React) — fast enough for ad traffic.

## CTA links

Same as v1. Edit at the top of `src/App.tsx`:

```ts
const WHATSAPP_HREF = 'https://chat.whatsapp.com/...'
const TELEGRAM_HREF = 'https://t.me/...'
```

## Deploy alongside v1 for A/B test

Recommended setup:
- v1 → `youngmoneyy.com` (already live via Cloudflare → Vercel)
- v2 → `try.youngmoneyy.com` *or* a different Vercel project entirely (e.g. `landingpage-v2`).

In Facebook Ads Manager, run two ad sets — one pointing at each URL — with identical creative and targeting. After ~48 hours of data, kill the underperformer.

## Editing

- **Headline copy** → `src/App.tsx`, search for `WordReveal`
- **Section copy** → `WHY_NOW`, `WHO_ITS_FOR`, `FAQ` arrays at top of `App.tsx`
- **Numbers in trust band** → search for `<CountUp targetValue=`
- **Animation timings** → `src/motion-primitives.tsx` (component defaults) or `src/index.css` (CSS keyframes)
- **Theme colors** → `@theme` block in `src/index.css`

Save → Vite HMR refreshes the page automatically.
