import React, { useState, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { CssBaseline, Divider, IconButton, List, Drawer } from "@mui/material";
import { ChevronLeft, Menu, ChevronRight } from "@mui/icons-material";
import { DrawerHeader, AppBar } from "../../assets/styles/sidebar/Mui_sidebar";
import ProfileSidebar from "./ProfileSidebar";
import Elements from "./Elements";
import SocialMedia from "./SocialMedia";
import Subnav from "./Subnav";
import {
  TopBar,
  SideNav,
  CompanyName,
} from "../../assets/styles/sidebar/Sidebar";

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
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              background: "#dbdfea",
              color: "#000000",
              marginLeft: "-9px",
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <CompanyName variant="h6" color="black" noWrap>
            Company name
          </CompanyName>
          <SocialMedia />
        </TopBar>
      </AppBar>
      <SideNav variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ProfileSidebar sidebarState={open} />
        <Subnav />
        <Elements />
      </SideNav>
    </>
  );
};

export default Sidebar;
