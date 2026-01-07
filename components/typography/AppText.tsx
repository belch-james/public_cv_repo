"use client";

import Typography, { type TypographyProps } from "@mui/material/Typography";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { formatLabel, isVariableLike } from "./formatLabel";

/**
 * Allowed typography variants mapped to their semantic HTML elements.
 */
const variantToComponent: Record<AppTextVariant, React.ElementType> = {
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
export type AppTextVariant =
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

export interface AppTextProps extends Omit<TypographyProps, "variant"> {
  /**
   * The typography variant to use.
   * Mapped to semantic HTML elements automatically.
   */
  variant?: AppTextVariant;

  /**
   * Override the default HTML element.
   * Use sparingly - prefer the automatic semantic mapping.
   */
  component?: React.ElementType;

  /**
   * i18n translation key. When provided, text is fetched from translations.
   * Takes precedence over children if both are provided.
   */
  i18nKey?: string;

  /**
   * Interpolation values for the i18n key.
   */
  values?: Record<string, string | number>;

  /**
   * Fallback text if translation key is missing.
   * Only used when i18nKey is provided.
   */
  defaultText?: string;

  /**
   * Automatically format variable-like strings (snake_case, camelCase)
   * to human-readable text. Only applies to string children.
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
 * AppText - A wrapper around MUI Typography that integrates with i18n
 * and enforces consistent variant usage and semantic HTML structure.
 *
 * @example
 * // Using i18n key
 * <AppText variant="h1" i18nKey="landing.hero.title" />
 *
 * // Using i18n key with interpolation
 * <AppText variant="body1" i18nKey="footer.copyright" values={{ year: 2024, name: "James" }} />
 *
 * // Using plain children (fallback)
 * <AppText variant="h2">Section Title</AppText>
 *
 * // Auto-format variable-like text
 * <AppText variant="h4" autoFormat>next_cv</AppText>
 * // Renders: "Next CV"
 */
export const AppText = forwardRef<HTMLElement, AppTextProps>(
  function AppText(
    {
      variant = "body1",
      component,
      i18nKey,
      values,
      defaultText,
      autoFormat = false,
      formatStyle = "title",
      children,
      ...props
    },
    ref
  ) {
    const { t } = useTranslation();

    // Determine the semantic component
    const semanticComponent = component ?? variantToComponent[variant];

    // Determine content
    let content: React.ReactNode;

    if (i18nKey) {
      // Use i18n translation
      const translated = t(i18nKey, { ...values, defaultValue: defaultText ?? i18nKey });
      content = translated;
    } else if (autoFormat && typeof children === "string" && isVariableLike(children)) {
      // Auto-format variable-like strings
      content = formatLabel(children, formatStyle);
    } else {
      content = children;
    }

    return (
      <Typography
        ref={ref}
        variant={variant}
        component={semanticComponent}
        {...props}
      >
        {content}
      </Typography>
    );
  }
);

export default AppText;
