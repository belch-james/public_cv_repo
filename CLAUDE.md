# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (auto-regenerates PDF first)
npm run build        # Production build (auto-regenerates PDF first)
npm run test         # Run Jest tests
npm run generate:cv  # Manually rebuild generated/pdf/james_belch_cv.pdf
```

## Architecture

This is a Next.js 16 personal CV/portfolio site with a precompiled PDF download feature.

### Data-Driven Content
All content lives in `/data/` as typed TypeScript files. The CV (`cv_data.ts`) is the single source of truth consumed by both:
- Web components (`/features/cv/components/`)
- PDF components (`/features/cv/pdf/`)

### PDF Pipeline
```
data/cv_data.ts → features/cv/pdf/ → scripts/generate_pdf.tsx → generated/pdf/
```
The PDF is precompiled at build time via npm hooks (`predev`, `prebuild`, `prestart`). The `/api/pdf` endpoint streams this file after Turnstile verification.

### Key Directories
- `app/` - Next.js App Router pages and API routes
- `features/` - Domain-scoped modules (cv, landing_page)
- `data/` - Typed content files with interfaces in `data/types/`
- `components/` - Shared UI components
- `theme/` - Material UI theme with tokens in `theme/tokens/`
- `lib/` - Utilities (i18n configuration)

### Path Aliases
```
@app/*       → app/
@features/*  → features/
@data/*      → data/
@components  → components/index.ts
@theme       → theme/index.ts
@lib/*       → lib/
```

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Cloudflare Turnstile public key
- `TURNSTILE_SECRET_KEY` - Cloudflare Turnstile secret key

## Tech Stack

- Next.js 16 (App Router), React 18, TypeScript (strict)
- Material UI v5 + Emotion
- @react-pdf/renderer for PDF generation
- i18next for internationalization (en/fr in `/public/locales/`)
- Jest + Testing Library for tests
