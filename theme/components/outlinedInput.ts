import type { Components, Theme } from "@mui/material/styles";

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    input: {
      fontSize: "1rem",
    },
  },
};
