import React from "react";
import { Box } from "@mui/material";
import InfoBox from "@/components/data-visualization/InfoBox";
import InfoRow from "@/components/data-visualization/InfoRow";
import { TopicKeys } from "@/constants/topics";
import ChildHeader from "@/components/child/ChildHeader";

const ThisWeek = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <ChildHeader />

      <InfoRow>
        <InfoBox topic={TopicKeys.Developing} />
        <InfoBox topic={TopicKeys.Enjoying} />
      </InfoRow>

      <InfoRow>
        <InfoBox topic={TopicKeys.Activities} />
        <InfoBox topic={TopicKeys.Teach} />
      </InfoRow>
    </Box>
  );
};

export default ThisWeek;
