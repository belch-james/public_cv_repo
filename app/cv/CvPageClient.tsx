"use client";

import type { ReactNode } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import { Header } from "@features/cv/components/Header/Header";
import { Section } from "@features/cv/components/Common/Section";
import { TechSkills } from "@features/cv/components/Body/TechSkills";
import { Experience } from "@features/cv/components/Body/Experience";
import { Education } from "@features/cv/components/Body/Education";
import { data } from "@data/cv_data";

interface SectionConfig {
  key: string;
  titleKey: string;
  content: ReactNode;
}

export function CvPageClient() {
  const { t } = useTranslation();

  const sections: SectionConfig[] = [
    {
      key: "technical-skills",
      titleKey: "cv.sections.technicalSkills",
      content: <TechSkills />,
    },
    {
      key: "technical-experience",
      titleKey: "cv.sections.technicalExperience",
      content: <Experience workType={data.jobs} />,
    },
    {
      key: "work-experience",
      titleKey: "cv.sections.workExperience",
      content: <Experience workType={data.pastWork} />,
    },
    {
      key: "education",
      titleKey: "cv.sections.education",
      content: <Education />,
    },
  ];

  return (
    <Container sx={{ px: { xs: 0, sm: 2, md: 4 }, py: { xs: 2, sm: 4, md: 6 } }}>
      <Grid xs={12} md={8}>
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            borderRadius: { xs: 0, sm: 3, md: 4 },
            mb: { xs: 2, md: 3 },
            mx: { xs: -2, sm: 0 },
            borderLeft: { xs: "none", sm: "1px solid" },
            borderRight: { xs: "none", sm: "1px solid" },
            borderColor: "divider",
          }}
        >
          <Header />
        </Paper>
        <Stack
          spacing={{ xs: 2, md: 3 }}
          divider={<Divider sx={{ borderColor: "divider" }} />}
        >
          {sections.map((section) => (
            <Section
              key={section.key}
              title={t(section.titleKey)}
              variant="h2"
            >
              {section.content}
            </Section>
          ))}
        </Stack>
      </Grid>
    </Container>
  );
}
