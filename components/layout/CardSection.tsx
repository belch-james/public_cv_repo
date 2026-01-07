"use client"

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import type { PaperProps } from "@mui/material/Paper";
import { TitleBar } from "./TitleBar";
import type { TitleBarProps } from "./TitleBar";

export interface CardSectionProps extends Omit<TitleBarProps, "title"> {
  title: string;
  children: ReactNode;
  paperProps?: PaperProps;
}

export const CardSection = ({
  title,
  children,
  paperProps,
  ...titleProps
}: CardSectionProps) => {
  const { sx: paperSx, ...restPaperProps } = paperProps ?? {};

  return (
    <Paper
      elevation={0}
      {...restPaperProps}
      sx={{
        p: { xs: 1.5, sm: 2, md: 3 },
        borderRadius: { xs: 2, md: 3 },
        border: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
        minWidth: { xs: "100%", sm: 275 },
        ...paperSx,
      }}
    >
      <Box sx={{ px: { xs: 0.5, sm: 1, md: 1.5 } }}>
        <TitleBar title={title} {...titleProps} />
        {children}
      </Box>
    </Paper>
  );
};
