"use client";

import { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import AgeDescription from "@/components/child/AgeDescription";

export default function BabyWeeksTracker() {
  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);

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
          <AgeDescription date={birthDate} />.
        </Typography>
      </Box>
    </LocalizationProvider>
  );
}
