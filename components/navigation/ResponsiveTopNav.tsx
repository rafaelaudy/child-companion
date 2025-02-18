import { AppBar, Toolbar, Container } from "@mui/material";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
import MobileTopNav from "./MobileTopNav";
import DesktopTopNav from "./DesktopTopNav";

export default function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileTopNav />

          <Logo isMobile={false} />

          <DesktopTopNav />

          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
