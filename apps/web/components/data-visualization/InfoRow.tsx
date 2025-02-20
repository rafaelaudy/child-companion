import React, { ReactNode } from "react";
import { Stack } from "@mui/material";

type InfoRowProps = {
  children: ReactNode;
};

const InfoRow: React.FC<InfoRowProps> = ({ children }) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      {children}
    </Stack>
  );
};

export default InfoRow;
