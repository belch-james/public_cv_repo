"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface FooterProps {
  title: string;
  description: string;
  links?: { label: string; href: string }[];
}

export function Footer({ title, description, links = [] }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 0 },
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: { xs: "100%", sm: 600 } }}
        >
          {description}
        </Typography>
        {links.length > 0 && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2 }}
            mt={{ xs: 2.5, md: 3 }}
            flexWrap="wrap"
            useFlexGap
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                underline="hover"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  py: { xs: 0.5, sm: 0 },
                  "&:focus-visible": {
                    outline: "2px solid",
                    outlineColor: "primary.main",
                    outlineOffset: 2,
                    borderRadius: 1,
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        )}
        <Typography
          variant="caption"
          color="text.disabled"
          display="block"
          mt={{ xs: 3, md: 4 }}
        >
          © {new Date().getFullYear()} {title}
        </Typography>
      </Container>
    </Box>
  );
}
