import { Box, Stack } from "@mui/material";
import { NameBar } from "./NameBar";
import { ContactInfo } from "./ContactInfo";
import { DownloadCvButton } from "./DownloadCvButton";

export const Header = () => {
  return (
    <Box mb={{ xs: 3, md: 4 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={{ xs: 2, md: 3 }}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
      >
        <Box
          width={{ xs: "100%", md: "auto" }}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          alignSelf={{ xs: "flex-start", md: "center" }}
        >
          <NameBar />
          {/* <DownloadCvButton
            sx={{
              mt: { xs: 1, md: 0 },
              display: "flex",
              justifyContent: "flex-start",
              position: { xs: "relative", md: "absolute" },
              top: { md: "calc(100% + 8px)" },
              left: 0,
            }}
          /> */}
        </Box>
        <Box
          width={{ xs: "100%", md: "auto" }}
          maxWidth={{ xs: "100%", md: 360 }}
          ml={{ xs: 0, md: 3 }}
          flexShrink={0}
        >
          <ContactInfo shortAddress obfuscateEmail />
        </Box>
      </Stack>
    </Box>
  );
};
