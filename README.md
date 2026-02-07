# Tiny Sports

Helping Australian community sports clubs with grant writing, brand development, and capacity building.

## Tech Stack

- **Next.js 15+** (App Router, React Server Components)
- **shadcn/ui** (New York style) + **Tailwind CSS v4**
- **Keystatic** (git-backed CMS)
- **Vercel** (hosting)
- **TypeScript** (strict)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `pnpm dev`        | Start development server |
| `pnpm build`      | Production build         |
| `pnpm lint`       | Run ESLint               |
| `pnpm type-check` | TypeScript type checking |
| `pnpm format`     | Format with Prettier     |

## Content Management

Content is managed through [Keystatic](https://keystatic.com/) at `/keystatic`. Grant guides and blog posts are stored as markdown files in `src/content/`.

## Deployment

Deployed automatically via Vercel on push to `main`. Preview deploys on PRs.
