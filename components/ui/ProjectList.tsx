import { Box, Divider, Stack, Typography } from "@mui/material";
import type { WorkExperience } from "@data/types/cv_types";

export interface ProjectListProps {
  workType: WorkExperience[];
  showIcon?: boolean;
  iconSrc?: string;
}

export const ProjectList = ({ workType, showIcon = false, iconSrc }: ProjectListProps) => {
  if (!workType.length) return null;

  return (
    <Box component="section" sx={showIcon ? undefined : { py: 1 }}>
      <Stack spacing={2.5} divider={<Divider />}>
        {workType.map((project) => (
          <Box key={project.name}>
            {/* Top row: name + date */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 0.5, sm: 1 }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography
                variant="subtitle2"
                color="text.primary"
                sx={{ fontWeight: 600 }}
              >
                {project.name}
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center">
                {showIcon && iconSrc && (
                  <Box
                    component="img"
                    src={iconSrc}
                    alt="Calendar"
                    sx={{ width: 16, height: 16 }}
                  />
                )}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontStyle: "italic",
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                  }}
                >
                  {project.date.start} to {project.date.end ?? "Present"}
                </Typography>
              </Stack>
            </Stack>

            {/* Bullets */}
            <Box
              component="ul"
              sx={{
                pl: "1.1rem",
                mt: 1,
                mb: 0,
                listStylePosition: "outside",
                "& li": { lineHeight: "1.25rem", mb: 0.75 },
              }}
            >
              {project.achievements.map((achievement) => (
                <li key={achievement}>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    {achievement}
                  </Typography>
                </li>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
