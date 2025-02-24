"use client";

import React from "react";
import { Box } from "@mui/material";
import InfoBox from "@/components/data-visualization/InfoBox";
import InfoRow from "@/components/data-visualization/InfoRow";
import { TopicKeys } from "@/constants/topics";
import ChildHeader from "./ChildHeader";
import useChildStore from "@/store/childStore";

const ThisWeek = () => {
  const { weeks, weeksAhead } = useChildStore();

  return (
    <Box sx={{ padding: 3 }}>
      <ChildHeader />

      <InfoRow>
        <InfoBox
          topic={TopicKeys.Future_Developing}
          weeks={weeks}
          nextWeeks={weeksAhead}
        />
        <InfoBox
          topic={TopicKeys.Future_StopTo}
          weeks={weeks}
          nextWeeks={weeksAhead}
        />
      </InfoRow>
    </Box>
  );
};

export default ThisWeek;
