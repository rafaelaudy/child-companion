"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { TopicKeys, TOPICS } from "@/constants/topics";
import { useQuery } from "@urql/next";

type InfoBoxProps = {
  topic: TopicKeys;
  weeks?: number | null;
  nextWeeks?: number;
};

const GET_PROMPT = `
  query ($topic: String!, $weeks: Int, $nextWeeks: Int) {
    getPrompt(topic: $topic, weeks: $weeks, nextWeeks: $nextWeeks)
  }
`;

const InfoBox: React.FC<InfoBoxProps> = ({ topic, weeks, nextWeeks }) => {
  const title = TOPICS[topic].title;

  const [{ data }] = useQuery({
    query: GET_PROMPT,
    variables: {
      topic,
      weeks,
      nextWeeks,
    },
  });

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        {title}
      </Typography>

      <Box
        sx={{
          padding: 2,
          paddingLeft: 4,
          maxHeight: "calc(100vh - 300px)",
          minHeight: "300px",
          border: "1px solid #ccc",
          borderRadius: 2,
          overflow: "auto",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: data.getPrompt }} />
      </Box>
    </Box>
  );
};

export default InfoBox;
