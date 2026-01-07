import type { Components, Theme } from "@mui/material/styles";

export const MuiChip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: {
      minHeight: 32,
    },
  },
};
