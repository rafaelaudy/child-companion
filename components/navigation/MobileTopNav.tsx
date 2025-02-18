"use client";

import { MouseEvent, useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { PAGES } from "./constants";
import Link from "next/link";

export default function MobileTopNav() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {PAGES.map((page) => (
          <MenuItem key={page.label} onClick={handleCloseNavMenu}>
            <Link href={page.href}>
              <Typography textAlign="center">{page.label}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
