import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import {
  SchoolOutlined,
  StarHalfOutlined,
  DoneOutlineOutlined,
} from "@mui/icons-material";

const Elements = (): JSX.Element => {
  return (
    <>
      <Divider />
      {["Ressources", "Favoris", "Bilan de compétences"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index === 0 ? <SchoolOutlined /> : null}
            {index === 1 ? <StarHalfOutlined /> : null}
            {index === 2 ? <DoneOutlineOutlined /> : null}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      <Divider />
    </>
  );
};

export default Elements;
