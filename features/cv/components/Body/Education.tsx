import { Box, Stack, Typography } from "@mui/material";
import { data } from "@data/cv_data";

export const Education = () => {
  const { education } = data;

  return (
    <Box component="section" sx={{ py: 1 }}>
      <Stack spacing={1.5}>
        <Box>
          <Typography variant="subtitle1" fontWeight={650} color="text.primary">
            {education.degree}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            {education.college}
          </Typography>
        </Box>

        {education.bullets?.length > 0 && (
          <Box
            component="ul"
            sx={{
              listStylePosition: "outside",
              pl: "1.1rem",
              mt: 0,
              mb: 0,
              "& li": { lineHeight: "1.25rem", mb: 0.75 },
            }}
          >
            {education.bullets.map((item) => (
              <li key={item}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="span"
                >
                  {item}
                </Typography>
              </li>
            ))}
          </Box>
        )}
      </Stack>
    </Box>
  );
};
