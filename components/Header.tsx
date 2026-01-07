"use client";

import { useState } from "react";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "./types/header_types";

export function Header({ sections }: HeaderProps) {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Mobile hamburger menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label={t("aria.openMenu", "Open navigation menu")}
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop navigation - centered */}
          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={3}>
              {sections.map((section) => (
                <Link
                  key={section.title}
                  component={NextLink}
                  href={section.url}
                  target={section.target ?? "_self"}
                  rel={section.target === "_blank" ? "noopener noreferrer" : undefined}
                  color="text.secondary"
                  underline="none"
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    py: 1,
                    px: 0.5,
                    "&:hover": {
                      color: "text.primary",
                    },
                    "&:focus-visible": {
                      outline: "2px solid",
                      outlineColor: "primary.main",
                      outlineOffset: 2,
                      borderRadius: 1,
                    },
                  }}
                >
                  {section.title}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Spacer for mobile to keep hamburger left-aligned */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flex: 1 }} />
        </Toolbar>
      </AppBar>

      {/* Mobile navigation drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            maxWidth: "80vw",
            bgcolor: "background.paper",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label={t("aria.closeMenu", "Close navigation menu")}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {sections.map((section) => (
              <ListItem key={section.title} disablePadding>
                <ListItemButton
                  component={NextLink}
                  href={section.url}
                  target={section.target ?? "_self"}
                  rel={section.target === "_blank" ? "noopener noreferrer" : undefined}
                  onClick={handleNavClick}
                  sx={{
                    py: 1.5,
                    px: 2,
                    borderRadius: 2,
                    "&:focus-visible": {
                      outline: "2px solid",
                      outlineColor: "primary.main",
                      outlineOffset: -2,
                    },
                  }}
                >
                  <ListItemText
                    primary={section.title}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      variant: "body1",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
