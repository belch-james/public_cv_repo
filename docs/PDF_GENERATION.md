## CV PDF Generation Overview

This project keeps an up-to-date résumé PDF in `generated/pdf/james_belch_cv.pdf`. The same React data powering `/cv` is rendered server-side with `@react-pdf/renderer`, so typography and content stay consistent. Below is how the system works and how to regenerate artifacts.

### 1. Source of Truth
- `features/cv/pdf/CvPDFDocument.tsx` defines the PDF layout and pulls data from `data/cv_data.ts`.
- Icons used inside the PDF live under `features/cv/assets/icons/` (see `pdfIcons.tsx` for reusable SVG components).

### 2. Build Script – `scripts/generate_pdf.tsx`
1. Imports `makePdfDocument()` (a wrapper around `CvPDFDocument`).
2. Calls `renderToBuffer` from `@react-pdf/renderer` to produce a `Buffer`.
3. Writes the buffer to `generated/pdf/james_belch_cv.pdf`.

Run manually with:
```bash
npm run generate:cv
```

### 3. Automatic Hooks
- `package.json` defines `predev`, `prebuild`, and `prestart` scripts that all run `npm run generate:cv`.
- Any `npm run dev`, `npm run build`, or `npm run start` will regenerate the PDF before Next.js boots.

### 4. API Delivery – `app/api/pdf/route.tsx`
- Only accepts `POST` requests that include a Cloudflare Turnstile token (`token` field).
- Verifies the token server-side using `TURNSTILE_SECRET_KEY`, then streams the precompiled PDF from `public/`.
- Responds to `GET` with a 405 to discourage unauthenticated access.

### 5. Client Flow – `DownloadCvButton`
- Turnstile is invisble so only triggers if found issues
- Sends the token to `/api/pdf`, receives the PDF blob, and triggers the download.

### 6. Environment Variables
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` – required on the client to render the Turnstile widget.
- `TURNSTILE_SECRET_KEY` – required on the server for token verification.

### 7. Updating the PDF Manually
1. Modify any CV data or PDF styling.
2. Run `npm run generate:cv`.
3. Commit both the code changes and the updated `generated/pdf/james_belch_cv.pdf`.

### 8. Troubleshooting
- **Stale PDF**: run `npm run generate:cv` and restart the dev server.
- **Download blocked**: confirm both Turnstile env vars are set and that the client sends the token.
- **CI/CD**: ensure your environment allows writing to `generated/` during the pre-hook phase, or run the script explicitly before deploying.

This process keeps the download experience fast (precompiled file), secure (Turnstile verification), and in sync with the live CV data.
