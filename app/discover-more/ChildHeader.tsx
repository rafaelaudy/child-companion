"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Select,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

const ChildHeader = () => {
  const [topic, setTopic] = useState("1");
  const [nextWeeks, setNextWeeks] = useState("4");

  const handleWeekChange = (event: SelectChangeEvent) => {
    setNextWeeks(event.target.value as string);
  };

  const handleTopicChange = (event: SelectChangeEvent) => {
    setTopic(event.target.value as string);
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">Name of the Child</Typography>
        <Typography variant="body1">Luca</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">
          What would you like to try in the next X weeks?
        </Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select value={topic} label="topic" onChange={handleTopicChange}>
            <MenuItem value={1}>Drawing</MenuItem>
            <MenuItem value={2}>Play ball</MenuItem>
            <MenuItem value={3}>Count</MenuItem>
            <MenuItem value={4}>Introduce words</MenuItem>
            <MenuItem value={8}>Potty train</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={nextWeeks}
            label="nextWeeks"
            onChange={handleWeekChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={8}>8</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default ChildHeader;
