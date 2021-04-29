import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../assets/pictures/logo.png";
import useStyles, {
  Logo,
  SocialOpen,
  SocialClose,
} from "../../assets/styles/sidebar/StyleSidebar";

export const Sidebar = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSubnav, setOpenSubnav] = React.useState(false);

  const handleClick = () => {
    setOpenSubnav(!openSubnav);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Jean Moulin", "Campus de Paris", "Dashboard"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.postimg.cc/RZX6Y3jH/avatar.png"
                      className="classes.small"
                    />
                  ) : null}
                  {index === 1 ? <GroupIcon /> : null}
                  {index === 2 ? <SettingsOutlinedIcon /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}

          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <MenuBookOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Cours" />
            {openSubnav ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubnav} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Modules de la journée" />
              </ListItem>
            </List>
          </Collapse>

          {["Ressources", "Favoris", "Bilan de compétences"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? <SchoolOutlinedIcon /> : null}
                  {index === 1 ? <StarHalfOutlinedIcon /> : null}
                  {index === 2 ? <DoneOutlineOutlinedIcon /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        {open ? (
          <SocialOpen>
            <div>
              <a href="/" className="powerEffect">
                <PowerSettingsNewOutlinedIcon className="power" />
              </a>
              <a href="/" className="facebook">
                <FacebookIcon className="social" />
              </a>
              <a href="/" className="twitter">
                <TwitterIcon className="social" />
              </a>
              <a href="/" className="linkedin">
                <LinkedInIcon className="social" />
              </a>
              <a href="/" className="youtube">
                <YouTubeIcon className="social" />
              </a>
            </div>
          </SocialOpen>
        ) : (
          <SocialClose>
            <div>
              <a href="/" className="facebook">
                <FacebookIcon className="social" />
              </a>
            </div>
            <div>
              <a href="/" className="twitter">
                <TwitterIcon className="social" />
              </a>
            </div>
            <div>
              <a href="/" className="linkedin">
                <LinkedInIcon className="social" />
              </a>
            </div>
            <div>
              <a href="/" className="youtube">
                <YouTubeIcon className="social" />
              </a>
            </div>
            <div>
              <a href="/" className="powerEffect">
                <PowerSettingsNewOutlinedIcon className="power" />
              </a>
            </div>
          </SocialClose>
        )}
        <Logo>
          <img className="esc" src={logo} alt="ECS" />
        </Logo>
        {open ? <p> 🔥 Powered by AgoWork</p> : null}
      </Drawer>
    </div>
  );
};

export default Sidebar;
