# Brand — Troven

_Status: approved_

## Snapshot

- **Product**: Troven — Mezo vault explorer and wallet companion
- **Category**: DeFi · technical · serious
- **Palette**: Graphite Reserve (Graphite Reserve)
- **Font Pairing**: Inter (sans) + JetBrains Mono (mono)
- **Gradients**: Not generated yet

## Palette Details — Graphite Reserve

| Token | Light | Dark |
| --- | --- | --- |
| `--background` | `hsl(233 100% 96%)` | `hsl(238 63% 5%)` |
| `--foreground` | `hsl(236 46% 13%)` | `hsl(248 54% 96%)` |
| `--muted` | `hsl(232 28% 60%)` | `hsl(234 28% 66%)` |
| `--muted-foreground` | `hsl(232 26% 35%)` | `hsl(234 18% 82%)` |
| `--card` / `--popover` | `hsl(0 0% 100%)` | `hsl(237 55% 8%)` |
| `--border` / `--input` | `hsl(232 45% 86%)` | `hsl(237 36% 22%)` |
| `--primary` | `hsl(239 100% 69%)` | `hsl(245 94% 76%)` |
| `--primary-foreground` | `hsl(236 61% 18%)` | `hsl(249 72% 15%)` |
| `--secondary` | `hsl(232 47% 92%)` | `hsl(237 30% 18%)` |
| `--secondary-foreground` | `hsl(236 46% 13%)` | `hsl(249 54% 96%)` |
| `--accent` | `hsl(214 86% 62%)` | `hsl(215 88% 66%)` |
| `--accent-foreground` | `hsl(237 58% 16%)` | `hsl(247 70% 12%)` |
| `--destructive` | `hsl(6 84% 58%)` | `hsl(5 84% 52%)` |
| `--destructive-foreground` | `hsl(0 0% 100%)` | `hsl(0 0% 100%)` |
| `--ring` | `hsl(239 100% 69%)` | `hsl(245 94% 76%)` |
| `--chart-*` | Light: `240 60% 60`, `206 72% 50`, `271 77% 65`, `143 55% 45`, `32 80% 60`<br/>Dark: `245 89% 70`, `202 86% 62`, `285 75% 73`, `151 61% 52`, `36 86% 62` |

## Typography

- **Sans**: Inter — primary UI type (`next/font/google`), wired to `--font-sans`
- **Mono**: JetBrains Mono — addresses, numeric readouts (`--font-mono`)
- **Serif**: Not used

Set via `app/layout.tsx` imports and Tailwind font families.

## Tone & Voice

- **Precision-first**: speak with confidence backed by live data; numbers before adjectives.
- **Guardrail language**: reinforce safety, custody, and proof-of-reserve cues.
- **Operational clarity**: action labels are short verbs (“Adjust collateral”, “Transfer NFT”).

## Usage Notes

- Primary gradients and backgrounds must reference tokens, never hex values.
- CTA buttons use `--primary` background with `--primary-foreground` text; secondary buttons use `--secondary` tokens.
- Charts should cycle through the `--chart-*` tokens to stay on-brand.
- If you need a hero gradient, derive it from `--primary` ↔ `--accent`; document the CSS in this file when finalized.

## Assets

- Backup of the previous theme: `app/globals.css.bak`
- Palette preview HTML: `.brand-preview/index.html`
- Typography preview HTML: `.brand-preview/typography.html` (generated after typography step)

_Last updated: 2026-05-07_
