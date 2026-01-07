import { Box, Divider, Stack, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material/Typography";

export interface TitleBarProps {
  title: string;
  variant?: TypographyProps["variant"];
  textAlign?: TypographyProps["align"];
  fontWeight?: TypographyProps["fontWeight"];
  includeDot?: boolean;
  showDivider?: boolean;
}

// Map variant to semantic HTML element
const variantToComponent: Record<string, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  overline: "h3",
  subtitle1: "h3",
  subtitle2: "h3",
};

export const TitleBar = ({
  title,
  variant = "overline",
  textAlign = "left",
  fontWeight,
  includeDot = true,
  showDivider = true,
}: TitleBarProps) => {
  const component = variantToComponent[variant as string] ?? "h3";

  return (
    <Box component="header" sx={{ mb: 1.5 }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <Typography
          variant={variant}
          component={component}
          align={textAlign}
          sx={{
            ...(fontWeight && { fontWeight }),
            minWidth: 0,
            whiteSpace: { xs: "normal", md: "nowrap" },
            flexShrink: 0,
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};
