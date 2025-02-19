// components/ThisWeek.js
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import InfoBox from "@/components/data-visualization/InfoBox";
import InfoRow from "@/components/data-visualization/InfoRow";
import { TOPIC_KEYS } from "@/constants/topics";

const ThisWeek = () => {
  return (
    <Box sx={{ padding: 3 }}>
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

      <InfoRow>
        <InfoBox topic={TOPIC_KEYS.DEVELOPING} />
        <InfoBox topic={TOPIC_KEYS.ENJOYING} />
      </InfoRow>

      <InfoRow>
        <InfoBox topic={TOPIC_KEYS.ACTIVITIES} />
        <InfoBox topic={TOPIC_KEYS.TEACH} />
      </InfoRow>
    </Box>
  );
};

export default ThisWeek;
