"use client";

import { TextField, MenuItem, Typography, Box } from "@mui/material";
import NameAndBirthday from "@/components/child/NameAndBirthday";
import useChildStore from "@/store/childStore";

export default function BabyWeeksTracker() {
  const { weeksAhead, setWeeksAhead } = useChildStore();

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
        <Typography variant="h6">In the next</Typography>
        <TextField
          select
          value={weeksAhead}
          onChange={(e) => setWeeksAhead(Number(e.target.value))}
          variant="standard"
        >
          {[...Array(8).keys()].map((num) => (
            <MenuItem key={num + 1} value={num + 1}>
              {num + 1}
            </MenuItem>
          ))}
        </TextField>
        <Typography variant="h6">
          week{weeksAhead > 1 ? "s" : ""} you can expect:
        </Typography>
      </Box>
    </>
  );
}
