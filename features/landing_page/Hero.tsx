"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import type { HeroData } from "@data/types/hero_types";

interface HeroProps {
  post: HeroData;
}

export function Hero({ post }: HeroProps) {
  const { t } = useTranslation();
  const [typewriterEnabled, setTypewriterEnabled] = useState(false);
  const [typewriterSession, setTypewriterSession] = useState(0);
  const backgroundLayers = ["linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))"];
  if (post.backgroundImage) {
    backgroundLayers.push(`url(${post.backgroundImage})`);
  }

  const typedTitle = useTypewriter(post.title, 45, 150, typewriterEnabled, typewriterSession);
  const typedDescription = useTypewriter(post.description, 22, 500, typewriterEnabled, typewriterSession);
  const hasTypedContent = typedTitle.length > 0 || typedDescription.length > 0;
  const primaryButtonLabel = typewriterEnabled
    ? t("landing.typewriter.stop")
    : hasTypedContent
      ? t("landing.typewriter.resume")
      : t("landing.typewriter.start");

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.900",
        color: "#fff",
        mb: { xs: 4, md: 6 },
        borderRadius: { xs: 3, md: 4 },
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 6 },
        backgroundImage: backgroundLayers.join(","),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: { xs: "auto", md: 450 },
        overflow: "hidden",
      }}
    >
      {post.backgroundImage && post.imageText && (
        <Box component="span" sx={{ display: "none" }}>
          {post.imageText}
        </Box>
      )}

      <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} alignItems="center">
        {post.avatarSrc && (
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src={post.avatarSrc}
                alt={post.avatarAlt ?? t("aria.profilePicture")}
                sx={{
                  width: { xs: 140, sm: 180, md: "100%" },
                  maxWidth: 320,
                  aspectRatio: "1 / 1",
                  height: "auto",
                  border: { xs: "3px solid #fff", md: "4px solid #fff" },
                  boxShadow: "0 10px 35px rgba(0,0,0,0.45)",
                }}
              />
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={post.avatarSrc ? 8 : 12}>
          <Box
            sx={{
              position: "relative",
              pr: { md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h1" component="h1" color="inherit">
              {post.title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              sx={{
                whiteSpace: "pre-line",
                mt: { xs: 1.5, md: 2 },
              }}
            >
              {post.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export type { HeroData } from "@data/types/hero_types";

function useTypewriter(
  text: string,
  speed = 40,
  startDelay = 0,
  isActive = true,
  resetToken = 0,
) {
  const [output, setOutput] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    if (!text) {
      setOutput("");
      return;
    }

    indexRef.current = 0;
    setOutput("");
  }, [text, resetToken]);

  useEffect(() => {
    if (!text || !isActive) {
      return;
    }

    let delayHandle: ReturnType<typeof setTimeout> | null = null;
    let intervalHandle: ReturnType<typeof setInterval> | null = null;

    delayHandle = setTimeout(() => {
      intervalHandle = setInterval(() => {
        indexRef.current = Math.min(indexRef.current + 1, text.length);
        setOutput(text.slice(0, indexRef.current));

        if (indexRef.current >= text.length && intervalHandle) {
          clearInterval(intervalHandle);
        }
      }, speed);
    }, startDelay);

    return () => {
      if (delayHandle) clearTimeout(delayHandle);
      if (intervalHandle) clearInterval(intervalHandle);
    };
  }, [text, speed, startDelay, isActive, resetToken]);

  return output;
}
