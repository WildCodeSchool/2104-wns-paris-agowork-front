import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { useTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ChevronLeft,
  Menu,
  ChevronRight,
  SchoolOutlined,
  StarHalfOutlined,
  Logout,
  DoneOutlineOutlined,
  AdminPanelSettings,
} from "@mui/icons-material";
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
import { AuthContext } from "../../context/auth";

const Sidebar = (): JSX.Element => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = (event: any) => {
    localStorage.clear();
    history.push("/login");
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
          <ProfileSidebar sidebarState={open} />
          <Elements
            text="Ressources"
            icon={<SchoolOutlined />}
            path="/mes-ressources"
          />
          {context.user.role === "ADMIN" ||
          context.user.role === "SUPERADMIN" ? (
            <Elements
              text="Administration"
              icon={<AdminPanelSettings />}
              path="/general"
            />
          ) : (
            <></>
          )}
          <ListItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Déconnexion" />
          </ListItem>
        </ColoredSvg>
      </SideNav>
    </>
  );
};

export default Sidebar;
