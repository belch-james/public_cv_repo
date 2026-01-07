"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface BulletListProps {
  title?: string;
  items: string[];
}

export function BulletList({ title, items }: BulletListProps) {
  return (
    <Box>
      {title && (
        <Typography variant="subtitle2">
          {title}
        </Typography>
      )}
      <Stack component="ul" sx={{ pl: 2.2, mt: title ? 1 : 0, mb: 0, gap: 0.75 }}>
        {items.map((x) => (
          <Typography key={x} component="li" variant="body2" color="text.secondary">
            {x}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
