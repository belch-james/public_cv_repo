"use client";

import { useRef, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import {
  TurnstileWidget,
  type TurnstileWidgetHandle,
} from "@components/TurnstileWidget";

interface DownloadCvButtonProps {
  sx?: SxProps<Theme>;
}

export const DownloadCvButton = ({ sx }: DownloadCvButtonProps) => {
  const { t } = useTranslation();
  const turnstileRef = useRef<TurnstileWidgetHandle | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [shouldDownload, setShouldDownload] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownloadClick = () => {
    setError(null);

    if (!turnstileRef.current) {
      setError(t("errors.turnstileNotReady"));
      return;
    }

    setShouldDownload(true);
    setIsDownloading(true);
    turnstileRef.current.execute();
  };

  const handleVerified = async (token: string) => {
    if (!shouldDownload) {
      turnstileRef.current?.reset();
      return;
    }

    try {
      const response = await fetch("/api/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error(t("errors.downloadFailed"));
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "james-belch-cv.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (downloadError) {
      setError(
        downloadError instanceof Error
          ? downloadError.message
          : t("errors.downloadUnknown"),
      );
    } finally {
      setIsDownloading(false);
      setShouldDownload(false);
      turnstileRef.current?.reset();
    }
  };

  const handleExpire = () => {
    setIsDownloading(false);
    setShouldDownload(false);
    turnstileRef.current?.reset();
  };

  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        justifyContent: "center",
        "@media print": { display: "none" },
        ...(sx ?? {}),
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Button
          variant="outlined"
          disabled={isDownloading}
          onClick={handleDownloadClick}
        >
          {isDownloading
            ? t("actions.preparingCv")
            : t("actions.downloadCv")}
        </Button>

        {error && (
          <Typography variant="caption" color="error">
            {error}
          </Typography>
        )}

        <Box sx={{ display: "none" }}>
          <TurnstileWidget
            ref={turnstileRef}
            action="download-cv"
            onVerify={handleVerified}
            onExpire={handleExpire}
          />
        </Box>
      </Stack>
    </Box>
  );
};
