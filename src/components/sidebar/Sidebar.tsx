import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
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
import Avatar from "@material-ui/core/Avatar";
import logo from "../../assets/pictures/logo.png";
import useStyles, { Logo } from "../../assets/styles/sidebar/StyleSidebar";

export const Sidebar = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
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
        <Logo>
          <img className="esc" src={logo} alt="ECS" />
        </Logo>
        <List>
          {[
            "Jean Moulin",
            "Campus de Paris",
            "Dashboard",
            "Ressources",
            "Cours",
            "Favoris",
            "Bilan de compétences",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className="classes.small"
                  />
                ) : null}
                {index === 1 ? <GroupIcon /> : null}
                {index === 2 ? <SettingsOutlinedIcon /> : null}
                {index === 3 ? <MenuBookOutlinedIcon /> : null}
                {index === 4 ? <SchoolOutlinedIcon /> : null}
                {index === 5 ? <StarHalfOutlinedIcon /> : null}
                {index === 6 ? <DoneOutlineOutlinedIcon /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
