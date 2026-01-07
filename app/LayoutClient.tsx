"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Header, Footer } from "@components";
import { useTranslation } from "react-i18next";
import { data } from "@data/cv_data";
import { I18nProvider } from "@lib/I18nProvider";

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <LayoutContent>{children}</LayoutContent>
    </I18nProvider>
  );
}

function LayoutContent({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  const sections = [
    { title: t("nav.links.home"), url: "/" },
    { title: t("nav.links.cv"), url: "/mote/me" },
    { title: t("nav.links.github"), url: `https://${data.links.github}`, target: "_blank" as const },
    { title: t("nav.links.portfolio"), url: `https://${data.links.url}`, target: "_blank" as const },
  ];

  const footerLinks = [
    { label: t("footer.links.email"), href: `mailto:${data.contactInfo.email}` },
    { label: t("footer.links.github"), href: `https://${data.links.github}` },
    { label: t("footer.links.website"), href: `https://${data.links.url}` },
  ];

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header sections={sections} />
      <Box component="main" sx={{ flex: 1, width: "100%" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4, md: 6 } }}>
          {children}
        </Container>
      </Box>
      <Footer
        title={data.name}
        description={t("footer.description")}
        links={footerLinks}
      />
    </Box>
  );
}
