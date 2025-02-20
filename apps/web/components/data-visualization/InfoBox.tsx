"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { TopicKeys, TOPICS } from "@/constants/topics";
import { TOPICS_BY_WEEKS } from "./InfoBoxMocks";

type InfoBoxProps = {
  topic: TopicKeys;
  week?: number;
};

type InfoBoxState = {
  title: string;
  body: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ week, topic }) => {
  const [{ title, body }, setInfoBoxState] = useState<InfoBoxState>({
    title: "",
    body: "",
  });
  useEffect(() => {
    const title = TOPICS[topic].title;
    const body = TOPICS_BY_WEEKS[topic].response;

    setInfoBoxState({ title, body });
  }, [week, topic]);

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
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Box>
    </Box>
  );
};

export default InfoBox;
