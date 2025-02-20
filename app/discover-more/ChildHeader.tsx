"use client";

import { useState } from "react";
import {
  TextField,
  MenuItem,
  Typography,
  Box,
  Select,
  FormControl,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import AgeDescription from "@/components/child/AgeDescription";

export default function BabyWeeksTracker() {
  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
  const [topic, setTopic] = useState<string>("");
  const [extraWeeks, setExtraWeeks] = useState<number>(1);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
        <TextField
          placeholder="Child's Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
          slotProps={{
            input: {
              style: {
                minWidth: "100px",
                width: `${name.length * 8.5}px`,
              },
            },
          }}
        />
        <Typography>was born on </Typography>
        <DatePicker
          views={["year", "month", "day"]}
          format="DD/MM/YY"
          value={birthDate}
          onChange={(newValue: Dayjs | null) => setBirthDate(newValue)}
          slotProps={{
            textField: {
              variant: "standard",
              placeholder: "Birth Date",
              sx: { width: "120px" },
            },
          }}
        />
        <Typography>
          <AgeDescription date={birthDate} />. Would you like to know more about
        </Typography>

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

        <Typography>in the next</Typography>

        <FormControl variant="standard">
          <Select
            value={extraWeeks}
            onChange={(e) => setExtraWeeks(Number(e.target.value))}
            label="Weeks"
          >
            {[...Array(8).keys()].map((num) => (
              <MenuItem key={num + 1} value={num + 1}>
                {num + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography>week{extraWeeks > 1 ? "s" : ""}:</Typography>
      </Box>
    </LocalizationProvider>
  );
}
