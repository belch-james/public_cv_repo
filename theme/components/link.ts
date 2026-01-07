import type { Components, Theme } from "@mui/material/styles";

export const MuiLink: Components<Theme>["MuiLink"] = {
  styleOverrides: {
    root: {
      display: "inline-block",
      padding: "4px 0",
    },
  },
};
