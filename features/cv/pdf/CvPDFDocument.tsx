import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";
import type { CvData, WorkExperience } from "@data/types/cv_types";
import { styles } from "./pdfStyles";
import { Section } from "./Section";
import { ExperienceSection } from "./ExperienceSection";
import { CvHeader } from "./CvHeader";
import { formatTechnologies } from "./pdfUtils";

export interface CvPdfDocumentProps {
  data: CvData;
}

export const CvPdfDocument: React.FC<CvPdfDocumentProps> = ({ data }) => {
  // ORDER:
  // 1) Summary
  // 2) Technologies
  // 3) Experience (jobs + pastWork)
  // 4) Education

  const summarySection = {
    title: "Summary",
    bullets: [data.summary],
  };

  const technologiesSection = {
    title: "Technologies",
    bullets: formatTechnologies(data.technologies),
  };

  const allExperiences: WorkExperience[] = [...data.jobs, ...data.pastWork];

  const educationSection = {
    title: "Education",
    bullets: [
      `${data.education.college} — ${data.education.degree}`,
      ...data.education.bullets,
    ],
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <CvHeader data={data} />
        <Section
          title={summarySection.title}
          bullets={summarySection.bullets}
        />
        <Section
          title={technologiesSection.title}
          bullets={technologiesSection.bullets}
        />
        <ExperienceSection experiences={allExperiences} />
        <Section
          title={educationSection.title}
          bullets={educationSection.bullets}
        />
      </Page>
    </Document>
  );
};

export function makePdfDocument(data: CvData) {
  return <CvPdfDocument data={data} />;
}
