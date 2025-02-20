import { Typography } from "@mui/material";
import ChildcareIcon from "@mui/icons-material/ChildCare";

const APP_NAME = "CHILD COMPANION";

export default function Logo({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ChildcareIcon
        sx={{
          display: {
            xs: isMobile ? "flex" : "none",
            md: isMobile ? "none" : "flex",
          },
          mr: 1,
        }}
      />
      <Typography
        variant={isMobile ? "h5" : "h6"}
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: {
            xs: isMobile ? "flex" : "none",
            md: isMobile ? "none" : "flex",
          },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {APP_NAME}
      </Typography>
    </>
  );
}
