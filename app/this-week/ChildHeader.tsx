"use client";

import { TextField, Typography, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import AgeDescription from "@/components/child/AgeDescription";
import useChildStore from "@/store/childStore";

export default function BabyWeeksTracker() {
  const { name, dateOfBirth, setName, setDateOfBirth } = useChildStore();
  const parsedDateOfBirth = dateOfBirth ? dayjs(dateOfBirth) : null;

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
          value={parsedDateOfBirth}
          onChange={(newValue: Dayjs | null) =>
            setDateOfBirth(newValue?.toString() || null)
          }
          slotProps={{
            textField: {
              variant: "standard",
              placeholder: "Birth Date",
              sx: { width: "120px" },
            },
          }}
        />
        <Typography>
          <AgeDescription date={parsedDateOfBirth} />.
        </Typography>
      </Box>
    </LocalizationProvider>
  );
}
