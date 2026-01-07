import React from "react";
import { Box, Typography } from "@mui/material";

export const Summary = ({ items = [] }) => {
  if (!items.length) {
    return null;
  }

  return (
    <Box
      component="ul"
      sx={{
        listStylePosition: "outside",
        pl: "1.1rem",
        mt: 0,
        mb: 0,
        "& li": { lineHeight: "1.4rem", mb: 0.75 },
      }}
    >
      {items.map((item) => (
        <Typography
          key={item}
          component="li"
          variant="body2"
          color="text.secondary"
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};
