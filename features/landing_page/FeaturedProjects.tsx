"use client";

import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { formatLabel } from "@components/typography";
import type { ProjectData } from "@data/types/portfolio_types";

interface FeaturedProjectsProps {
  projects: ProjectData[];
}

function ProjectCard({ project }: { project: ProjectData }) {
  const { t } = useTranslation();

  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        height: "100%",
        borderRadius: { xs: 2, sm: 3 },
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: theme.palette.background.paper,
        transition: "transform 180ms ease, border-color 180ms ease",
        "&:hover": {
          transform: { xs: "none", md: "translateY(-3px)" },
          borderColor: { xs: "rgba(255,255,255,0.08)", md: "rgba(255,255,255,0.16)" },
        },
      })}
    >
      {project.image && (
        <Box
          component="img"
          src={project.image}
          alt={project.imageAlt ?? project.title}
          sx={{
            width: "100%",
            height: { xs: 120, sm: 140 },
            objectFit: "cover",
            borderTopLeftRadius: { xs: 8, sm: 12 },
            borderTopRightRadius: { xs: 8, sm: 12 },
          }}
        />
      )}
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h6" component="h3">
          {formatLabel(project.title)}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {project.description}
        </Typography>

        {project.impact && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2">
              {t("projects.card.outcome")}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {project.impact}
            </Typography>
          </Box>
        )}

        <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
          {project.stack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{ borderRadius: 999, border: "1px solid rgba(255,255,255,0.10)" }}
              variant="outlined"
            />
          ))}
        </Stack>
      </CardContent>

      {project.links?.length ? (
        <CardActions
          sx={{
            px: { xs: 2, sm: 3 },
            pb: { xs: 2, sm: 3 },
            pt: 0,
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {project.links.map((l) => (
            <Button
              key={l.href + l.label}
              component={NextLink}
              href={l.href}
              variant={l.label.toLowerCase().includes("case") ? "contained" : "outlined"}
              size="small"
              sx={{ borderRadius: 999, textTransform: "none", fontWeight: 800 }}
            >
              {l.label}
            </Button>
          ))}
        </CardActions>
      ) : null}
    </Card>
  );
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {projects.map((p) => (
        <Grid key={p.title} xs={12} md={6}>
          <ProjectCard project={p} />
        </Grid>
      ))}
    </Grid>
  );
}
