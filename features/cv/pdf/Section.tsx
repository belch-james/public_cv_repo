import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles } from "./pdfStyles";

export interface SectionProps {
  title: string;
  bullets: string[];
  showBullet?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  bullets,
  showBullet = true,
}) => (
  <View style={styles.sectionContainer} wrap={false}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    {bullets.map((line, idx) => (
      <View style={styles.bulletRow} key={idx}>
        <Text style={showBullet ? styles.bulletDot : styles.bulletDotHidden}>
          {showBullet ? "•" : ""}
        </Text>
        <Text style={styles.bulletText}>{line}</Text>
      </View>
    ))}
  </View>
);