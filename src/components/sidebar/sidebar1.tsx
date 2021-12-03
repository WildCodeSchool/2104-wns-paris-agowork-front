import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { CssBaseline, Divider, IconButton } from "@mui/material";
import { ChevronLeft, Menu, ChevronRight } from "@mui/icons-material";
import { DrawerHeader, AppBar } from "../../assets/styles/sidebar1/muiSidebar1";
import ProfileSidebar from "./profileSidebar1";
import Elements from "./elements1";
import SocialMedia from "./socialMedia1";
import Subnav from "./subnav1";
import {
  TopBar,
  SideNav,
  CompanyName,
  ColoredSvg,
  BurgerButton,
} from "../../assets/styles/sidebar1/sidebar1";

const Sidebar = (): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <TopBar>
          <BurgerButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </BurgerButton>
          <CompanyName>Company name</CompanyName>
          <SocialMedia />
        </TopBar>
      </AppBar>
      <SideNav variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <ColoredSvg>
          <Divider />
          <ProfileSidebar sidebarState={open} />
          <Subnav />
          <Elements />
        </ColoredSvg>
      </SideNav>
    </>
  );
};

export default Sidebar;
