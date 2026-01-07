# Next CV

Personal CV + portfolio site powered by Next.js 16, Material UI, and a fully typed content layer. Features a landing page with project showcases, an interactive CV page, and a bot-protected PDF download.

## Features

- **Landing Page** - Hero section, featured projects, case study spotlight, tech stack, and contact info
- **CV Page** - Data-driven resume with instant PDF download
- **Internationalization** - English and French translations via i18next
- **PDF Generation** - Precompiled at build time using React PDF Renderer
- **Bot Protection** - Cloudflare Turnstile secures the PDF download endpoint
- **Responsive Design** - Mobile-first layouts with Material UI

## Stack

- Next.js 16 (App Router) + React 18
- Material UI v5 with token-based theming (`/theme`)
- TypeScript (strict mode)
- Jest + Testing Library
- Docker support (development and production)

## Requirements

- Node.js >= 20, npm >= 10
- Cloudflare Turnstile keys (see Environment Setup)

## Environment Setup

Copy the example file and add your keys:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Turnstile public key
- `TURNSTILE_SECRET_KEY` - Turnstile secret key

Get keys from [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile).

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start dev server (auto-regenerates PDF) |
| `npm run build` | Production build (precompiles PDF) |
| `npm run start` | Serve production build |
| `npm run test` | Run Jest tests |
| `npm run generate:cv` | Manually rebuild PDF |

## Application Routes

```
/           → Landing page (hero, projects, case study, tech stack, contact)
/cv         → Interactive CV view
/api/pdf    → Turnstile-protected PDF download endpoint
```

## Project Layout

```
app/                    Next.js App Router pages and API routes
components/             Shared UI components
features/
├── cv/                 CV page components and PDF renderer
└── landing_page/       Landing page sections
data/                   Typed content (CV, projects, hero copy)
theme/
├── tokens/             Design tokens (palette, typography, shape)
└── components/         MUI component overrides
lib/                    Utilities (i18n config)
public/locales/         Translation files (en, fr)
scripts/                Build scripts (PDF generation)
```

## PDF Generation

The CV PDF is precompiled at build time so downloads are instant:

```
data/cv_data.ts → features/cv/pdf/ → scripts/generate_pdf.tsx → generated/pdf/
```

npm hooks (`predev`, `prebuild`, `prestart`) regenerate the PDF automatically. See `docs/PDF_GENERATION.md` for details.

## Internationalization

Translations live in `/public/locales/{lang}/common.json`. The app detects browser language and falls back to English.

Supported languages:
- English (`en`)
- French (`fr`)

## Docker

```bash
# Development
docker compose up dev

# Production
docker compose up prod

# Tests
docker compose up test
```

## Security

- Pre-commit hooks for secret detection (`.githooks/pre-commit`)
- CI secret scanning via GitHub Actions (`.github/workflows/security.yml`)
- Turnstile bot protection on PDF downloads

Enable the git hook:
```bash
git config core.hooksPath .githooks
```

## Testing

```bash
npm run test
```

Tests use jsdom with React Testing Library. Specs live in `__tests__/`.

## Deployment

1. Set environment variables on your platform
2. `npm run build`
3. `npm run start` (or deploy to Vercel/Docker)

## Contributing

1. Branch off `main`
2. Keep edits typed and colocated with their feature
3. Regenerate the PDF if you touched CV data/styles
4. Run tests before opening a PR

## License

MIT
