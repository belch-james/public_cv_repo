"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { WorkExperience } from "@data/types/cv_types";

interface ExperienceProps {
  workType: WorkExperience[];
}

export const Experience = ({ workType }: ExperienceProps) => {
  const { t } = useTranslation();

  if (!workType.length) return null;

  return (
    <Box component="section" sx={{ py: 1 }}>
      <Stack spacing={2.5} divider={<Divider />}>
        {workType.map((role) => {
          const dateRange = `${role.date.start} to ${
            role.date.end ? role.date.end : t("cv.dates.present")
          }`;

          return (
            <Box
              key={`${role.name}-${role.title}-${role.date.start}`}
              sx={{ width: "100%" }}
            >
              {/* Title + company + location + dates */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  gap: 0.5,
                }}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 600 }}
                  >
                    {role.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {role.name}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontStyle: "italic" }}
                >
                  {dateRange}
                </Typography>
              </Box>

              {/* Achievements */}
              <Box
                component="ul"
                sx={{
                  listStylePosition: "outside",
                  pl: "1.1rem",
                  mt: 1,
                  mb: 0,
                  "& li": { lineHeight: "1.25rem", mb: 0.75 },
                }}
              >
                {role.achievements.map((achievement) => (
                  <li key={achievement}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                    >
                      {achievement}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
