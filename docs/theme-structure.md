# Theme Structure

This document describes the modular theme architecture for the application.

## Overview

The MUI theme is split into composable modules for maintainability and reusability. The theme system follows a layered architecture:

```
theme/
├── index.ts              # Entry point - exports theme and re-exports tokens
├── createTheme.ts        # Theme builder - composes tokens and components
├── tokens/               # Design tokens
│   ├── index.ts          # Barrel export for all tokens
│   ├── palette.ts        # Color definitions
│   ├── typography.ts     # Typography scale and variants
│   └── shape.ts          # Border radius and shape tokens
└── components/           # Component style overrides
    ├── index.ts          # Barrel export for all components
    ├── cssBaseline.ts    # Global CSS resets
    ├── paper.ts          # Paper component styling
    ├── appBar.ts         # AppBar component styling
    ├── button.ts         # Button component styling
    ├── iconButton.ts     # IconButton component styling
    ├── link.ts           # Link component styling
    ├── chip.ts           # Chip component styling
    ├── textField.ts      # TextField component styling
    ├── outlinedInput.ts  # OutlinedInput component styling
    └── container.ts      # Container component styling
```

## Usage

### Standard Usage

Import the pre-built theme for typical use cases:

```typescript
import { theme } from "@theme";

// Use in ThemeProvider
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### Accessing Tokens

Tokens can be imported directly for use outside of MUI components:

```typescript
import { palette, typography, shape } from "@theme";

// Use palette colors
const primaryColor = palette.primary?.main;

// Reference typography settings
const fontFamily = typography.fontFamily;
```

### Custom Theme Variants

For advanced use cases, use the theme builder:

```typescript
import { createTheme } from "@theme";

const customTheme = createTheme();
```

## Token Modules

### Palette (`tokens/palette.ts`)

Defines the color scheme:

| Token | Value | Purpose |
|-------|-------|---------|
| `mode` | `"dark"` | Dark mode theme |
| `primary.main` | `#7dd3fc` | Primary brand color (sky blue) |
| `secondary.main` | `#f472b6` | Secondary accent color (pink) |
| `background.default` | `#0b1120` | Page background |
| `background.paper` | `#111827` | Card/surface background |
| `text.primary` | `#f8fafc` | Primary text color |
| `text.secondary` | `#cbd5f5` | Secondary text color |
| `divider` | `rgba(148, 163, 184, 0.24)` | Divider lines |

### Typography (`tokens/typography.ts`)

Responsive typography scale:

| Variant | Mobile | Desktop | Purpose |
|---------|--------|---------|---------|
| `h1` | 28px | 40px | Page titles |
| `h2` | 24px | 32px | Section headers |
| `h3` | 22px | 28px | Subsection headers |
| `h4` | 20px | 24px | Card titles |
| `h5` | 18px | 20px | Supporting headings |
| `h6` | 16px | 18px | Minor headings |
| `subtitle1` | 16px | 16px | Emphasized body text |
| `subtitle2` | 14px | 14px | Small labels |
| `body1` | 16px | 16px | Primary body text |
| `body2` | 14px | 14px | Secondary body text |
| `caption` | 12px | 12px | Helper text |
| `overline` | 12px | 12px | Uppercase labels |

### Shape (`tokens/shape.ts`)

Border radius and shape definitions:

| Token | Value | Purpose |
|-------|-------|---------|
| `borderRadius` | `12` | Default border radius (px) |

## Component Overrides

Each component override file exports a typed object that customizes MUI component styling:

### MuiCssBaseline
- Prevents horizontal overflow on html/body
- Sets `min-height: 100dvh` for proper viewport height
- Ensures images are responsive
- Adds word-breaking for headings and paragraphs

### MuiButton
- Pill-shaped buttons (`borderRadius: 999`)
- 44px minimum height for touch targets
- 36px height for small variant

### MuiIconButton
- 44px minimum dimensions for touch targets
- 36px for small variant

### MuiPaper
- Removes default background image
- Custom shadow: `0 10px 25px rgba(15, 23, 42, 0.55)`

### MuiContainer
- 16px padding on mobile
- 24px padding on tablet and above

### MuiTextField / MuiOutlinedInput
- 16px font size to prevent iOS auto-zoom

## Adding New Components

To add a new component override:

1. Create a new file in `theme/components/`:

```typescript
// theme/components/newComponent.ts
import type { Components, Theme } from "@mui/material/styles";

export const MuiNewComponent: Components<Theme>["MuiNewComponent"] = {
  styleOverrides: {
    root: {
      // styles
    },
  },
};
```

2. Add it to the components barrel export:

```typescript
// theme/components/index.ts
import { MuiNewComponent } from "./newComponent";

export const components: Components<Theme> = {
  // ...existing components
  MuiNewComponent,
};
```

## Best Practices

1. **No circular dependencies**: Tokens should not import from components or theme builder
2. **Type safety**: All modules use MUI's type system (`ThemeOptions`, `Components<Theme>`)
3. **Single responsibility**: Each file handles one token or component
4. **Barrel exports**: Use index.ts files for clean imports
5. **Documentation**: Keep this file updated when adding new tokens or components
