import type { Components, Theme } from "@mui/material/styles";

export const MuiCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: {
    html: {
      overflowX: "hidden",
    },
    body: {
      overflowX: "hidden",
      minHeight: "100dvh",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
    },
    "h1, h2, h3, h4, h5, h6, p": {
      overflowWrap: "break-word",
      wordBreak: "break-word",
    },
  },
};
