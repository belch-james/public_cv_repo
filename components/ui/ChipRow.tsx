"use client";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export interface ChipRowProps {
  items: string[];
}

export function ChipRow({ items }: ChipRowProps) {
  return (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
      {items.map((x) => (
        <Chip
          key={x}
          label={x}
          size="small"
          variant="outlined"
          sx={{ borderRadius: 999, border: "1px solid rgba(255,255,255,0.10)" }}
        />
      ))}
    </Stack>
  );
}
