"use client";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { ChipRow } from "@components/ui";

interface TechStackProps {
  stack: Record<string, string[]>;
  workingStyle: string[];
}

export function TechStack({ stack, workingStyle }: TechStackProps) {
  const { t } = useTranslation();
  const groups = Object.entries(stack);

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid xs={12} md={7}>
        <Paper
          elevation={0}
          sx={(theme) => ({
            p: { xs: 2, sm: 3 },
            height: "100%",
            borderRadius: { xs: 3, md: 4 },
            border: "1px solid rgba(255,255,255,0.10)",
            backgroundColor: theme.palette.background.paper,
          })}
        >
          <Typography variant="h5" component="h3">
            {t("techStack.stack.title")}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {t("techStack.stack.description")}
          </Typography>

          <Divider sx={{ my: 2, opacity: 0.25 }} />

          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            {groups.map(([label, items]) => (
              <Grid key={label} xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ textTransform: "capitalize", mb: 0.5 }}>
                  {t(`techStack.categories.${label}`, label)}
                </Typography>
                <ChipRow items={items} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>

      <Grid xs={12} md={5}>
        <Paper
          elevation={0}
          sx={(theme) => ({
            p: { xs: 2, sm: 3 },
            height: "100%",
            borderRadius: { xs: 3, md: 4 },
            border: "1px solid rgba(255,255,255,0.10)",
            backgroundColor: theme.palette.background.paper,
          })}
        >
          <Typography variant="h5" component="h3">
            {t("techStack.howIWork.title")}
          </Typography>

          <Divider sx={{ my: 2, opacity: 0.25 }} />

          <Stack component="ul" sx={{ pl: { xs: 2, sm: 2.2 }, m: 0, gap: 1 }}>
            {workingStyle.map((x) => (
              <Typography key={x} component="li" variant="body2" color="text.secondary">
                {x}
              </Typography>
            ))}
          </Stack>

          <Box sx={{ mt: 2.5 }}>
            <Typography variant="body2" color="text.secondary">
              {t("techStack.howIWork.description")}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
