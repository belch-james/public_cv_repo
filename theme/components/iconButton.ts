import type { Components, Theme } from "@mui/material/styles";

export const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: {
      minWidth: 44,
      minHeight: 44,
    },
    sizeSmall: {
      minWidth: 36,
      minHeight: 36,
    },
  },
};
