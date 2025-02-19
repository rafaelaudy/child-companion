import React from "react";
import { Box } from "@mui/material";
import InfoBox from "@/components/data-visualization/InfoBox";
import InfoRow from "@/components/data-visualization/InfoRow";
import { TopicKeys } from "@/constants/topics";
import ChildHeader from "./ChildHeader";

const ThisWeek = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <ChildHeader />

      <InfoRow>
        <InfoBox topic={TopicKeys.Drawing} />
        <InfoBox topic={TopicKeys.Future_Drawing} />
      </InfoRow>
    </Box>
  );
};

export default ThisWeek;
