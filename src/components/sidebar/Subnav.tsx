import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Divider,
} from "@mui/material";
import {
  MenuBookOutlined,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";
import { nested } from "../../assets/styles/sidebar/Sidebar";

const Subnav = (): JSX.Element => {
  const [openSubnav, setOpenSubnav] = useState(false);
  const handleClick = () => {
    setOpenSubnav(!openSubnav);
  };
  return (
    <>
      <Divider />
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <MenuBookOutlined />
        </ListItemIcon>
        <ListItemText primary="Cours" />
        {openSubnav ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSubnav} timeout="auto" unmountOnExit>
        <List>
          <ListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Modules de la journée" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </>
  );
};

export default Subnav;
