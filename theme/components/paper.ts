import type { Components, Theme } from "@mui/material/styles";

export const MuiPaper: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: {
      backgroundImage: "none",
      boxShadow: "0 10px 25px rgba(15, 23, 42, 0.55)",
    },
  },
};
