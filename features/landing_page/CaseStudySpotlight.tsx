"use client";

import NextLink from "next/link";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { BulletList } from "@components/ui";
import type { CaseStudyData } from "@data/types/portfolio_types";

interface CaseStudySpotlightProps {
  data: CaseStudyData;
}

export function CaseStudySpotlight({ data }: CaseStudySpotlightProps) {
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
            {data.title}
          </Typography>
          {data.subtitle && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {data.subtitle}
            </Typography>
          )}

          <Divider sx={{ my: { xs: 2, md: 2.5 }, opacity: 0.25 }} />

          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            <Grid xs={12} sm={6}>
              <BulletList title={t("caseStudy.challenge.title")} items={data.challenge} />
            </Grid>
            <Grid xs={12} sm={6}>
              <BulletList title={t("caseStudy.approach.title")} items={data.approach} />
            </Grid>
            <Grid xs={12}>
              <BulletList title={t("caseStudy.impact.title")} items={data.impact} />
            </Grid>
          </Grid>

          <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>
            {data.stack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{ borderRadius: 999, border: "1px solid rgba(255,255,255,0.10)" }}
              />
            ))}
          </Stack>

          {data.links?.length ? (
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>
              {data.links.map((l) => (
                <Button
                  key={l.href + l.label}
                  component={NextLink}
                  href={l.href}
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: 999, textTransform: "none", fontWeight: 900 }}
                >
                  {l.label}
                </Button>
              ))}
            </Stack>
          ) : null}
        </Grid>

        <Grid xs={12} md={5}>
          {/* Visual anchor panel - hidden on mobile, shown on tablet/desktop */}
          <Box
            sx={(theme) => ({
              display: { xs: "none", sm: "block" },
              height: "100%",
              minHeight: { sm: 200, md: 260 },
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.10)",
              background: `radial-gradient(1200px circle at 0% 0%, ${theme.palette.primary.main}22, transparent 45%),
                           radial-gradient(900px circle at 100% 30%, ${theme.palette.secondary.main}22, transparent 50%),
                           linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))`,
            })}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
