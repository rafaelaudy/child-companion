"use client";

import { TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import AgeDescription from "@/components/child/AgeDescription";
import useChildStore from "@/store/childStore";

export default function NameAndBirthday() {
  const { name, dateOfBirth, setName, setDateOfBirth } = useChildStore();
  const parsedDateOfBirth = dateOfBirth ? dayjs(dateOfBirth) : null;

  return (
    <>
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
      <Typography variant="h6">was born on </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={["year", "month", "day"]}
          format="DD/MM/YY"
          value={parsedDateOfBirth}
          onAccept={(newValue: Dayjs | null) =>
            setDateOfBirth(newValue?.toString() || null)
          }
          minDate={dayjs().subtract(18, "year")}
          disableFuture
          disableHighlightToday
          slotProps={{
            textField: {
              variant: "standard",
              placeholder: "Birth Date",
              sx: { width: "120px" },
            },
          }}
        />
      </LocalizationProvider>
      <Typography variant="h6">
        <AgeDescription date={parsedDateOfBirth} />.
      </Typography>
    </>
  );
}
