"use client";

import Typography, { type TypographyProps } from "@mui/material/Typography";
import { forwardRef } from "react";
import { formatLabel, isVariableLike } from "./formatLabel";

/**
 * Allowed typography variants mapped to their semantic HTML elements.
 */
const variantToComponent: Record<AppTypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
};

/**
 * Typography variants available in the design system.
 */
export type AppTypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline";

export interface AppTypographyProps extends Omit<TypographyProps, "variant"> {
  /**
   * The typography variant to use.
   */
  variant?: AppTypographyVariant;

  /**
   * Override the default HTML element.
   */
  component?: React.ElementType;

  /**
   * Automatically format variable-like strings (snake_case, camelCase)
   * @default false
   */
  autoFormat?: boolean;

  /**
   * Style for autoFormat: "title" for Title Case, "sentence" for Sentence case.
   * @default "title"
   */
  formatStyle?: "title" | "sentence";
}

/**
 * AppTypography - A wrapper around MUI Typography that enforces
 * consistent variant usage and semantic HTML structure.
 *
 * @example
 * // Page title (renders as h1)
 * <AppTypography variant="h1">Welcome</AppTypography>
 *
 * // Section header (renders as h2)
 * <AppTypography variant="h2">About Me</AppTypography>
 *
 * // Auto-format variable-like text
 * <AppTypography variant="h4" autoFormat>next_cv</AppTypography>
 * // Renders: "Next CV"
 */
export const AppTypography = forwardRef<HTMLElement, AppTypographyProps>(
  function AppTypography(
    {
      variant = "body1",
      component,
      autoFormat = false,
      formatStyle = "title",
      children,
      ...props
    },
    ref
  ) {
    const semanticComponent = component ?? variantToComponent[variant];

    // Process children if autoFormat is enabled
    let processedChildren = children;
    if (autoFormat && typeof children === "string" && isVariableLike(children)) {
      processedChildren = formatLabel(children, formatStyle);
    }

    return (
      <Typography
        ref={ref}
        variant={variant}
        component={semanticComponent}
        {...props}
      >
        {processedChildren}
      </Typography>
    );
  }
);

export default AppTypography;
