"use client";

import { Box } from "@mui/material";
import NameAndBirthday from "@/components/child/NameAndBirthday";

export default function BabyWeeksTracker() {
  return (
    <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
      <NameAndBirthday />
    </Box>
  );
}
