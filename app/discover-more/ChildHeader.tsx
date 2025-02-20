"use client";

import { MenuItem, Typography, Box, Select, FormControl } from "@mui/material";
import NameAndBirthday from "@/components/child/NameAndBirthday";
import useChildStore from "@/store/childStore";

export default function BabyWeeksTracker() {
  const { weeksAhead, topic, setWeeksAhead, setTopic } = useChildStore();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        columnGap={2}
        mb={2}
        flexWrap="wrap"
      >
        <NameAndBirthday />
      </Box>
      <Box display="flex" alignItems="center" columnGap={2} flexWrap="wrap">
        <Typography variant="h6">Tell me about</Typography>

        <FormControl variant="standard">
          <Select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            label="Topic to Explore"
            displayEmpty
          >
            <MenuItem value="">
              <Typography sx={{ color: "text.disabled" }}>
                Topic to Explore
              </Typography>
            </MenuItem>
            <MenuItem value={1}>Drawing</MenuItem>
            <MenuItem value={2}>Play ball</MenuItem>
            <MenuItem value={3}>Count</MenuItem>
            <MenuItem value={4}>Introduce words</MenuItem>
            <MenuItem value={8}>Potty train</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="h6">in the next</Typography>

        <FormControl variant="standard">
          <Select
            value={weeksAhead}
            onChange={(e) => setWeeksAhead(Number(e.target.value))}
            label="Weeks"
          >
            {[...Array(8).keys()].map((num) => (
              <MenuItem key={num + 1} value={num + 1}>
                {num + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h6">week{weeksAhead > 1 ? "s" : ""}:</Typography>
      </Box>
    </>
  );
}
