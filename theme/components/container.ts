import type { Components, Theme } from "@mui/material/styles";

export const MuiContainer: Components<Theme>["MuiContainer"] = {
  styleOverrides: {
    root: {
      paddingLeft: 16,
      paddingRight: 16,
      "@media (min-width: 600px)": {
        paddingLeft: 24,
        paddingRight: 24,
      },
    },
  },
};
