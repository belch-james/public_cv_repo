"use client";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import type { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import { data } from "@data/cv_data";

interface AddressProps {
  shortAddress?: boolean;
}

const Address = ({ shortAddress = false }: AddressProps) => {
  return (
    <div>
      {shortAddress ? (
        <ListItem disablePadding>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: "body2" }}>
            {data.contactInfo.city}, {data.contactInfo.province},{" "}
            {data.contactInfo.country}
          </ListItemText>
        </ListItem>
      ) : (
        <div>
          <ListItem disablePadding>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ variant: "body2" }}>
              {data.contactInfo.street_address},
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>{/* {leave empty} */}</ListItemIcon>
            <ListItemText primaryTypographyProps={{ variant: "body2" }}>
              {data.contactInfo.city}, {data.contactInfo.country},
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>{/* {leave empty} */}</ListItemIcon>
            <ListItemText primaryTypographyProps={{ variant: "body2" }}>
              {data.contactInfo.postal_code}
            </ListItemText>
          </ListItem>
        </div>
      )}
    </div>
  );
};

interface ContactInfoProps extends AddressProps {
  obfuscateEmail?: boolean;
}

const linkProps = (href: string): MuiLinkProps & { href: string } => ({
  href,
  underline: "hover",
  color: "inherit",
  target: "_blank",
  rel: "noopener noreferrer",
});

const normalizeUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
};

const getObfuscatedEmail = () => {
  const email = data.contactInfo.email;
  if (!email) return "";
  const [local, domain] = email.split("@");
  if (!domain) return email;
  const obLocal =
    local.length <= 2 ? `${local[0]}*****` : `${local.slice(0, 2)}*****`;
  return `${obLocal}@${domain}`;
};

export const ContactInfo = ({
  shortAddress,
  obfuscateEmail = false,
}: ContactInfoProps) => {
  const { t } = useTranslation();
  const emailDisplay = obfuscateEmail
    ? getObfuscatedEmail()
    : data.contactInfo.email;

  return (
    <Box textAlign="left">
      <List
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          "& .MuiListItem-root": {
            justifyContent: "flex-start",
            textAlign: "left",
            py: { xs: 0.5, sm: 0.25 },
          },
          "& .MuiListItemIcon-root": {
            minWidth: { xs: 28, sm: 32 },
            justifyContent: "center",
          },
          "& .MuiListItemText-root": {
            textAlign: "left",
            "& .MuiTypography-root": {
              wordBreak: "break-word",
              overflowWrap: "break-word",
            },
          },
        }}
      >
        <Box mt="2.5px">
          <ListItem disablePadding>
            <ListItemIcon>
              <EmailIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                obfuscateEmail ? (
                  <Box component="span" sx={{ fontSize: "0.875rem" }}>
                    {emailDisplay}{" "}
                    <Box component="span" sx={{ opacity: 0.7 }}>
                      {t("cv.contactInfo.emailHidden")}
                    </Box>
                  </Box>
                ) : (
                  <MuiLink {...linkProps(`mailto:${data.contactInfo.email}`)}>
                    {emailDisplay}
                  </MuiLink>
                )
              }
            />
          </ListItem>
        </Box>
        <Box mt="2.5px">
          <ListItem disablePadding>
            <ListItemIcon>
              <GitHubIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <MuiLink {...linkProps(normalizeUrl(data.links.github))}>
                  {data.links.github}
                </MuiLink>
              }
            />
          </ListItem>
        </Box>
        <Box mt="2.5px">
          <ListItem disablePadding>
            <ListItemIcon>
              <LinkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <MuiLink {...linkProps(normalizeUrl(data.links.url))}>
                  {data.links.url}
                </MuiLink>
              }
            />
          </ListItem>
        </Box>
        <Box mt="2.5px">
          <Address shortAddress={shortAddress} />
        </Box>
      </List>
    </Box>
  );
};
