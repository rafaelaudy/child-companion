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
  const [nextWeeks, setNextWeeks] = useState("4");

  const handleChange = (event: SelectChangeEvent) => {
    setNextWeeks(event.target.value as string);
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">Name of the Child</Typography>
        <Typography variant="body1">Luca</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">
          What will happen in the next X weeks?
        </Typography>
        <FormControl variant="standard">
          <Select value={nextWeeks} label="nextWeeks" onChange={handleChange}>
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
