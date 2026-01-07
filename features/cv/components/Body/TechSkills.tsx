"use client";
import { Box, Grid, Typography, Divider, Stack } from "@mui/material";
import { data } from "@data/cv_data";

export const TechSkills = () => (
  <Box component="section" sx={{ py: 2, px: { xs: 0, sm: 1 } }}>
    <Stack spacing={1.5} divider={<Divider />}>
      {data.technologies.map((tech) => (
        <Box
          key={tech.title}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "200px 1fr" },
            columnGap: { xs: 1.5, md: 3 },
            rowGap: { xs: 0.5, md: 1 },
            py: 1.5,
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{ fontWeight: 600 }}
            >
              {tech.title}
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 0.5, md: 1 }}>
            {tech.items.map((item: string) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  </Box>
);
