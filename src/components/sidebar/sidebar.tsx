import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { CssBaseline, Divider, IconButton } from "@mui/material";
import { ChevronLeft, Menu, ChevronRight } from "@mui/icons-material";
import { DrawerHeader, AppBar } from "../../assets/styles/sidebar/muiSidebar";
import ProfileSidebar from "./profileSidebar";
import Elements from "./elements";
import SocialMedia from "./socialMedia";
import Subnav from "./subnav";
import {
  TopBar,
  SideNav,
  CompanyName,
  ColoredSvg,
  BurgerButton,
} from "../../assets/styles/sidebar/sidebar";

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
