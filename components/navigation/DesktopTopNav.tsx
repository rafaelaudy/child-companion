import { Box, Button } from "@mui/material";
import { PAGES } from "./constants";
import Link from "next/link";

export default function DesktopTopNav() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {PAGES.map((page) => (
        <Link key={page.label} href={page.href} passHref>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            {page.label}
          </Button>
        </Link>
      ))}
    </Box>
  );
}
