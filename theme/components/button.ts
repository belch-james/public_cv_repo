import type { Components, Theme } from "@mui/material/styles";

export const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      borderRadius: 999,
      minHeight: 44,
      paddingLeft: 16,
      paddingRight: 16,
    },
    sizeSmall: {
      minHeight: 36,
      paddingLeft: 12,
      paddingRight: 12,
    },
  },
};
