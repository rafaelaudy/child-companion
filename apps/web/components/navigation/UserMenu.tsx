"use client";

import { MouseEvent, useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { USER_MENU } from "./constants";

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="User Avatar" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{ mt: "45px" }}
      >
        {USER_MENU.map((menu) => (
          <MenuItem key={menu.href} onClick={handleCloseUserMenu}>
            <Link href={menu.href}>
              <Typography textAlign="center">{menu.label}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
