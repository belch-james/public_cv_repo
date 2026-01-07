import { createTheme as muiCreateTheme, type Theme } from "@mui/material/styles";
import { palette, typography, shape } from "./tokens";
import { components } from "./components";

export function createTheme(): Theme {
  return muiCreateTheme({
    palette,
    typography,
    shape,
    components,
  });
}
