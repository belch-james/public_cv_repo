# i18n Extraction Report

This document summarizes the internationalization work completed on the codebase.

## Summary

- **Default language**: English (`en`)
- **Supported languages**: English, French (`fr`)
- **Total translation keys**: ~80 keys
- **Components updated**: 15+

## Files Created

| File | Purpose |
|------|---------|
| `lib/i18n.ts` | i18n configuration and initialization |
| `lib/I18nProvider.tsx` | React context provider wrapper |
| `public/locales/en/common.json` | English translations |
| `public/locales/fr/common.json` | French translations |
| `components/typography/AppText.tsx` | i18n-aware typography component |
| `app/LayoutClient.tsx` | Client wrapper for layout with i18n |
| `app/cv/CvPageClient.tsx` | Client wrapper for CV page with i18n |

## Components Updated

### Landing Page (`features/landing_page/`)

| Component | Keys Extracted |
|-----------|----------------|
| `Hero.tsx` | `landing.typewriter.*`, `aria.profilePicture` |
| `FeaturedProjects.tsx` | `projects.card.outcome` |
| `CaseStudySpotlight.tsx` | `caseStudy.*.title` |
| `TechStack.tsx` | `techStack.*` |
| `ContactSection.tsx` | `contact.*`, `actions.viewCv` |

### CV Page (`features/cv/`)

| Component | Keys Extracted |
|-----------|----------------|
| `Experience.tsx` | `cv.dates.present` |
| `ContactInfo.tsx` | `cv.contactInfo.emailHidden` |
| `DownloadCvButton.tsx` | `actions.*`, `errors.*` |

### App (`app/`)

| Component | Keys Extracted |
|-----------|----------------|
| `page.tsx` | `landing.sections.*` |
| `LayoutClient.tsx` | `nav.links.*`, `footer.*` |
| `cv/CvPageClient.tsx` | `cv.sections.*` |

## Translation Key Categories

### Navigation & Structure
- `nav.links.*` - Navigation menu items
- `footer.*` - Footer content and links
- `landing.sections.*` - Section titles and subtitles

### Content Sections
- `projects.*` - Project card content
- `caseStudy.*` - Case study labels and content
- `techStack.*` - Tech stack section content
- `contact.*` - Contact section content
- `cv.*` - CV page sections

### Actions & Errors
- `actions.*` - Button labels (View CV, Download CV, etc.)
- `errors.*` - Error messages for validation and API failures

### Accessibility
- `aria.*` - Screen reader labels

## Migration Notes

1. **Server/Client Split**: The CV page required splitting into server (`page.tsx` with metadata) and client (`CvPageClient.tsx` with translations) components.

2. **Variable Shadowing Fixed**: In `CaseStudySpotlight.tsx`, the map variable `t` was renamed to `tech` to avoid shadowing the translation function.

3. **UI Copy Migration**: `DownloadCvButton.tsx` previously used `@data/ui_text` for strings, now migrated to i18n.

4. **Path Alias Added**: Added `@lib/*` path alias to `tsconfig.json` for cleaner imports.

## Verification

- Build passes successfully
- All components render without translation key warnings
- French translations scaffolded and ready for translation
