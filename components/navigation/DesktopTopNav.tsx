"use client";

import { Box, Button } from "@mui/material";
import { PAGES } from "./constants";

export default function DesktopTopNav() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {PAGES.map((page) => (
        <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
          {page}
        </Button>
      ))}
    </Box>
  );
}
