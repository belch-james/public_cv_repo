import type { Components, Theme } from "@mui/material/styles";

export const MuiTextField: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: {
      "& .MuiInputBase-input": {
        fontSize: "1rem",
      },
    },
  },
};
