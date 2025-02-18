// components/ThisWeek.js
import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ThisWeek = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Name and Date of Birth Row */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">Name of the Child</Typography>
          <Typography variant="body1">John Doe</Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">Date of Birth</Typography>
          <Typography variant="body1">January 1, 2020</Typography>
        </Box>
      </Stack>

      {/* First Title: This week your child will be */}
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        This week your child will be:
      </Typography>
      {/* First Row - Developing and Enjoying Boxes */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ marginTop: 2 }}
      >
        <Box
          sx={{
            flex: 1,
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography variant="subtitle1">Developing:</Typography>
          <Typography variant="body1">Learning to crawl</Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography variant="subtitle1">Enjoying:</Typography>
          <Typography variant="body1">Playing with toys</Typography>
        </Box>
      </Stack>

      {/* Second Title: Maybe you can */}
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Maybe you can:
      </Typography>
      {/* Second Row - Do these activities and Teach Boxes */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ marginTop: 2 }}
      >
        <Box
          sx={{
            flex: 1,
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography variant="subtitle1">Do these activities:</Typography>
          <Typography variant="body1">Play peek-a-boo</Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography variant="subtitle1">Teach:</Typography>
          <Typography variant="body1">Saying simple words</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ThisWeek;
