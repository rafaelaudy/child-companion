import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ChildHeader = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">Name of the Child</Typography>
        <Typography variant="body1">Luca</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">Date of Birth / Weeks</Typography>
        <Typography variant="body1">January 1, 2020 / 15 Weeks</Typography>
      </Box>
    </Stack>
  );
};

export default ChildHeader;
