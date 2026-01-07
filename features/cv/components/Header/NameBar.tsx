import { Stack, Typography } from "@mui/material";
import { data } from "@data/cv_data";

export const NameBar = () => {
  return (
    <Stack
      spacing={1}
      alignItems="flex-start"
      justifyContent="center"
      sx={{ textAlign: "left" }}
    >
      <Typography
        variant="h1"
        component="h1"
        color="text.primary"
        sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem" } }}
      >
        {data.name}
      </Typography>
      {data.byline && (
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }}
        >
          {data.byline}
        </Typography>
      )}
    </Stack>
  );
};
