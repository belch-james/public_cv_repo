"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export interface PageSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageSection({ id, title, subtitle, children }: PageSectionProps) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2">
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1, maxWidth: 900 }}
          >
            {subtitle}
          </Typography>
        )}

        <Divider sx={{ mt: { xs: 2, md: 2.5 }, opacity: 0.25 }} />
        <Box sx={{ mt: { xs: 2.5, md: 3.5 } }}>{children}</Box>
      </Container>
    </Box>
  );
}
