import React from "react";
import { View, Text } from "@react-pdf/renderer";
import type { WorkExperience } from "@data/types/cv_types";
import { styles } from "./pdfStyles";
import { formatDateRange } from "./pdfUtils";

interface ExperienceSectionProps {
  experiences: WorkExperience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Experience</Text>
    </View>

    {experiences.map((exp, idx) => (
      <View key={idx} style={styles.experienceJob} wrap={false}>
        <View style={styles.experienceTitleRow}>
          <Text style={styles.experienceTitle}>
            {exp.title} • {exp.name}
          </Text>
          <Text style={styles.experienceMeta}>
            {formatDateRange(exp.date)}
          </Text>
        </View>
        {exp.achievements.map((line, j) => (
          <View key={j} style={styles.bulletRow}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>{line}</Text>
          </View>
        ))}
      </View>
    ))}
  </View>
);