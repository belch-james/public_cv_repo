import type { ThemeOptions } from "@mui/material/styles";

/**
 * Typography Scale (Responsive)
 * -----------------------------
 * Desktop / Mobile
 * h1: 40px / 28px - Page titles (one per page)
 * h2: 32px / 24px - Major section headers
 * h3: 28px / 22px - Subsection headers
 * h4: 24px / 20px - Card/panel titles
 * h5: 20px / 18px - Supporting headings, bylines
 * h6: 18px / 16px - Minor headings, card subtitles
 * subtitle1: 16px - Emphasized body, section labels
 * subtitle2: 14px - Small labels, overlines
 * body1: 16px - Primary body text
 * body2: 14px - Secondary body text
 * caption: 12px - Helper text, metadata
 * overline: 12px - Uppercase labels
 *
 * Mobile Considerations:
 * - Minimum touch target: 44px
 * - Input font-size >= 16px to prevent iOS zoom
 * - Consistent 16px outer padding on mobile
 */
export const typography: ThemeOptions["typography"] = {
  fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  h1: {
    fontSize: "1.75rem", // 28px mobile
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    "@media (min-width: 600px)": {
      fontSize: "2.5rem", // 40px desktop
    },
  },
  h2: {
    fontSize: "1.5rem", // 24px mobile
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    "@media (min-width: 600px)": {
      fontSize: "2rem", // 32px desktop
    },
  },
  h3: {
    fontSize: "1.375rem", // 22px mobile
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: "-0.015em",
    "@media (min-width: 600px)": {
      fontSize: "1.75rem", // 28px desktop
    },
  },
  h4: {
    fontSize: "1.25rem", // 20px mobile
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    "@media (min-width: 600px)": {
      fontSize: "1.5rem", // 24px desktop
    },
  },
  h5: {
    fontSize: "1.125rem", // 18px mobile
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "-0.005em",
    "@media (min-width: 600px)": {
      fontSize: "1.25rem", // 20px desktop
    },
  },
  h6: {
    fontSize: "1rem", // 16px mobile
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0",
    "@media (min-width: 600px)": {
      fontSize: "1.125rem", // 18px desktop
    },
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0",
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.7,
    letterSpacing: "0",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.7,
    letterSpacing: "0",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
    textTransform: "none",
  },
};
