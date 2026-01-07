import React from "react";
import { View, Text } from "@react-pdf/renderer";
import type { CvData } from "@data/types/cv_types";
import { styles } from "./pdfStyles";
import { ContactRow } from "./ContactRow";

interface CvHeaderProps {
  data: CvData;
}

export const CvHeader: React.FC<CvHeaderProps> = ({ data }) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.byline}>{data.byline}</Text>
    </View>

    <ContactRow data={data} />
  </View>
);
