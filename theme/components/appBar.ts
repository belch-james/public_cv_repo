import type { Components, Theme } from "@mui/material/styles";

export const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  styleOverrides: {
    root: {
      backgroundImage: "none",
      backgroundColor: "#111827",
    },
  },
};
