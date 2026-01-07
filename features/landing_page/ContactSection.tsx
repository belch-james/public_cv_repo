"use client";

import NextLink from "next/link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import type { ContactItem, SocialItem } from "@data/types/portfolio_types";

const obfuscateEmail = (email: string) => {
  if (!email.includes("@")) return email;
  const [local, domain] = email.split("@");
  const maskedLocal = local.length <= 2 ? `${local[0]}*` : `${local.slice(0, 2)}***`;
  const parts = domain.split(".");
  const maskedDomain = parts.length >= 2 ? `${parts[0][0]}***.${parts.slice(1).join(".")}` : `${domain[0]}***`;
  return `${maskedLocal}@${maskedDomain}`;
};

interface ContactSectionProps {
  contacts: ContactItem[];
  social: SocialItem[];
  primaryCtaHref?: string;
}

export function ContactSection({
  contacts,
  social,
  primaryCtaHref = "mailto:you@example.com",
}: ContactSectionProps) {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: { xs: 3, md: 4 },
        border: "1px solid rgba(255,255,255,0.10)",
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid xs={12} md={7}>
          <Typography variant="h4" component="h3">
            {t("contact.title")}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {t("contact.description")}
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>
            <Button
              component={NextLink}
              href="/cv"
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: 999,
                textTransform: "none",
                fontWeight: 900,
                maxWidth: { xs: "100%", sm: "auto" },
              }}
            >
              {t("actions.viewCv")}
            </Button>
          </Stack>

          <Divider sx={{ my: 2.5, opacity: 0.25 }} />

          <Stack spacing={1.5}>
            {contacts.map((c) => {
              const isEmail = c.label.toLowerCase() === "email";
              const displayValue = isEmail ? obfuscateEmail(c.value) : c.value;

              return (
                <Stack
                  key={c.label}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 0.25, sm: 1.5 }}
                  alignItems={{ xs: "flex-start", sm: "baseline" }}
                >
                  <Typography variant="subtitle2" sx={{ minWidth: { sm: 90 } }}>
                    {c.label}
                  </Typography>
                  {c.href ? (
                    <Link
                      href={c.href}
                      underline="hover"
                      color="text.secondary"
                      sx={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {displayValue}
                    </Link>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {displayValue}
                    </Typography>
                  )}
                </Stack>
              );
            })}
          </Stack>
        </Grid>

        <Grid xs={12} md={5}>
          <Typography variant="h6" component="h4">
            {t("contact.social.title")}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {t("contact.social.description")}
          </Typography>

          <Stack spacing={1.25} sx={{ mt: 2 }}>
            {social.map((s) => (
              <Button
                key={s.href}
                component={NextLink}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                sx={{
                  justifyContent: "flex-start",
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 800,
                }}
              >
                {s.label}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
