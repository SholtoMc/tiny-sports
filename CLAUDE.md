# CLAUDE.md - Tiny Sports

## Project

Not-for-profit marketing website helping Australian community sports clubs with grant writing, brand development, and capacity building.

## Stack

- **Framework:** Next.js 15+ (App Router, React Server Components)
- **UI:** shadcn/ui (New York style) + Tailwind CSS v4
- **CMS:** Keystatic (git-backed markdown, admin at `/keystatic`)
- **Hosting:** Vercel (Hobby plan)
- **Package Manager:** pnpm
- **Language:** TypeScript (strict)

## Commands

| Task       | Command           |
| ---------- | ----------------- |
| Dev server | `pnpm dev`        |
| Build      | `pnpm build`      |
| Lint       | `pnpm lint`       |
| Type check | `pnpm type-check` |
| Format     | `pnpm format`     |

## Structure

```
src/
├── app/           # Next.js App Router pages
├── components/
│   ├── ui/        # shadcn/ui (auto-generated, don't edit directly)
│   ├── layout/    # Header, Footer, MobileNav
│   ├── marketing/ # Hero, services grid, impact stats, CTA
│   ├── grants/    # Grant cards, filters, status badges
│   ├── blog/      # Post cards, content renderer
│   └── shared/    # Contact form, newsletter signup
├── content/       # Keystatic-managed markdown (git-tracked)
├── lib/           # Utilities and content readers
├── styles/        # Global CSS only
└── types/         # TypeScript type definitions
```

## Rules

- Use `lucide-react` for all icons (never inline SVGs)
- All pages must export `metadata` for SEO
- Use Server Components by default; only add `'use client'` when needed
- Content lives in `src/content/` as markdown managed by Keystatic
- Use `cn()` from `@/lib/utils` for conditional class merging
- All interactive elements must have 44px minimum touch targets
- Follow shadcn/ui patterns - don't create custom components when shadcn has one

## Design System

- **Primary:** Teal-green (OKLCH hue ~175) - community + growth
- **Accent:** Warm amber/orange (OKLCH hue ~65) - CTAs
- **Fonts:** Plus Jakarta Sans (headings) + Inter (body)
- **Border radius:** 0.5rem default
- **Tailwind v4:** Use `@theme` in CSS, OKLCH colors

## Content Schema (Keystatic)

- **Grant guides:** title, state, status (open/closed/upcoming), eligibility, deadline, steps, Fair Play checklist
- **Blog posts:** title, date, author, excerpt, body, featured image
- **Site settings:** org name, tagline, social links, contact info
