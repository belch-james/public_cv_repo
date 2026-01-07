# Next CV

Personal CV + landing site powered by Next.js 14, Material UI, and a fully typed content layer. Edit the data, rerun the PDF generator, deploy—done.

## Stack Snapshot
- Next.js App Router + React 18
- Material UI v5 themed via `/theme`
- TypeScript everywhere, Jest + Testing Library for UI flow coverage
- Turnstile-secured PDF download endpoint

## Requirements
- Node.js ≥ 20, npm ≥ 10
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` for CAPTCHA checks

## Commands
| Command | What it does |
| --- | --- |
| `npm run dev` | Start Next.js + regenerate the PDF before boot |
| `npm run build` | Production build (precompiles the PDF first) |
| `npm run start` | Serve `.next` (also refreshes the PDF) |
| `npm run test` | Jest + Testing Library |
| `npm run generate:cv` | Manually rebuild `generated/pdf/james_belch_cv.pdf` |

## How the App Fits Together
```
User
├─ /        → landing, latest posts, CTA tiles
├─ /cv      → data-driven CV view (features/cv)
└─ /api/pdf → Turnstile-verifies token, streams precompiled PDF
        ^
        | (DownloadCvButton + TurnstileWidget)
```

## Project Layout
- `app/` – App Router entries, including `/cv` and `/api/pdf`.
- `components/` – Shared UI + Turnstile widget.
- `features/cv/` – React PDF document, PDF-specific styles, icons, and the CV header/body slices.
- `data/` – Versioned content (`cv_data.ts`, hero copy, featured posts).
- `generated/pdf/` – Build artefacts (ignored except the CV PDF).

## Data & Content
- Update CV sections in `data/cv_data.ts`; everything else pulls from there.
- Supporting copy (hero, featured posts, poems) lives alongside the features that render it.
- SVG/icons for the PDF sit in `features/cv/assets/icons/`; overwrite icons there if you need variants.

## PDF Generation Pipeline
The PDF is precompiled so the API route can simply read the file. The flow is:
```
data/cv_data.ts
      │
      ▼
features/cv/pdf (React PDF components)
      │
      ▼
scripts/generate_pdf.tsx ──> generated/pdf/james_belch_cv.pdf
                                       │
                                       ▼
                               GET /api/pdf response
```
- `npm run generate:cv` deletes any existing PDF and writes a fresh one.
- Hooks (`predev`, `prebuild`, `prestart`) ensure the script runs automatically before any dev server, build, or start command.
- More implementation notes live in `PDF_GENERATION.md`.

## Turnstile-Protected Download Flow
```
DownloadCvButton
   ├─ renders TurnstileWidget (invisble)
   └─ submits token -> /api/pdf -> verifies via TURNSTILE_SECRET_KEY -> streams PDF
```
Missing env vars will skip rendering the widget and log a warning, so set them in `.env.local` for local work.

## Testing & QA
```bash
npm run test
```
Tests run in jsdom; prefer user-oriented assertions and colocate specs under `__tests__/`.

## Deployment
1. `npm run build`
2. `npm run start` (or deploy to Vercel/Docker)
3. Confirm `/api/pdf` serves the freshly generated file.

## Contributing
1. Branch off `main`.
2. Keep edits typed and colocated with their feature slice.
3. Regenerate the PDF if you touched CV data/styles.
4. Run the test suite before opening a PR.

## License
MIT
