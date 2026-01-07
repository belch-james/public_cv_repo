"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

import {
  Hero,
  Section,
  FeaturedProjects,
  CaseStudySpotlight,
  TechStack,
  ContactSection,
} from "@features/landing_page";

import { heroContent } from "@data/hero";
import { featuredProjects } from "@data/projects";
import { spotlightCaseStudy } from "@data/case_study";
import { techStack, workingStyle } from "@data/tech_stack";
import { contactItems, socialItems } from "@data/contact";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Hero post={heroContent} />
      </Container>

      <Section
        id="projects"
        title={t("landing.sections.projects.title")}
        subtitle={t("landing.sections.projects.subtitle")}
      >
        <FeaturedProjects projects={featuredProjects} />
      </Section>

      <Section
        id="case-study"
        title={t("landing.sections.caseStudy.title")}
        subtitle={t("landing.sections.caseStudy.subtitle")}
      >
        <CaseStudySpotlight data={spotlightCaseStudy} />
      </Section>

      <Section
        id="stack"
        title={t("landing.sections.techStack.title")}
        subtitle={t("landing.sections.techStack.subtitle")}
      >
        <TechStack stack={techStack} workingStyle={workingStyle} />
      </Section>

      <Section
        id="contact"
        title={t("landing.sections.contact.title")}
        subtitle={t("landing.sections.contact.subtitle")}
      >
        <ContactSection
          contacts={contactItems}
          social={socialItems}
          primaryCtaHref={contactItems.find((x) => x.label === "Email")?.href || "mailto:you@example.com"}
        />
      </Section>
    </Box>
  );
}
