import React, { JSX } from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import type { CvData } from "@data/types/cv_types";
import { styles } from "./pdfStyles";
import { buildCityProvince, withHttp } from "./pdfUtils";
import {
  MailIconSvg,
  MapPinIconSvg,
  LinkIconSvg,
  GithubIconSvg,
  PhoneIconSvg,
  PdfIconProps,
} from "@features/cv/assets/icons/pdfIcons";

type ContactIconComponent = (props?: PdfIconProps) => JSX.Element;

interface ContactEntryConfig {
  key: string;
  label: string;
  Icon: ContactIconComponent;
  href?: string;
}

interface ContactRowProps {
  data: CvData;
}

export const ContactRow: React.FC<ContactRowProps> = ({ data }) => {
  const emailHref = data.contactInfo.email
    ? `mailto:${data.contactInfo.email}`
    : null;
  const siteHref = withHttp(data.links.url);
  const githubHref = withHttp(data.links.github);
  const cityProv = buildCityProvince(data);

  const contactEntries = [
    data.contactInfo.email && {
      key: "email",
      label: data.contactInfo.email,
      Icon: MailIconSvg as ContactIconComponent,
      href: emailHref ?? undefined,
    },
    data.links.github && {
      key: "github",
      label: data.links.github,
      Icon: GithubIconSvg as ContactIconComponent,
      href: githubHref ?? undefined,
    },
    data.links.url && {
      key: "website",
      label: data.links.url,
      Icon: LinkIconSvg as ContactIconComponent,
      href: siteHref ?? undefined,
    },
    cityProv && {
      key: "location",
      label: `${cityProv}, ${data.contactInfo.country ?? ""}`.trim(),
      Icon: MapPinIconSvg as ContactIconComponent,
    },
    data.contactInfo.phone && {
      key: "phone",
      label: data.contactInfo.phone,
      Icon: PhoneIconSvg as ContactIconComponent,
    },
  ].filter(Boolean) as ContactEntryConfig[];

  return (
    <View style={styles.contactRow}>
      {contactEntries.map((entry) => (
        <View key={entry.key} style={styles.contactItem}>
          <View style={styles.contactIconWrapper}>
            <entry.Icon />
          </View>
          {entry.href ? (
            <Link src={entry.href} style={styles.contactLink}>
              {entry.label}
            </Link>
          ) : (
            <Text style={styles.contactEntry}>{entry.label}</Text>
          )}
        </View>
      ))}
    </View>
  );
};
