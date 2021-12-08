import React, { useContext, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { AuthContext } from "../../context/auth";
import {
  Initial,
  ProfileAvatar,
  HomeIcon,
} from "../../assets/styles/sidebar/sidebar";

const ProfileSidebar = ({ sidebarState }: any): JSX.Element => {
  const { user } = useContext(AuthContext);
  const [checkedLogin, setCheckedLogin] = useState(true);
  const history = useHistory();
  const handleLogout = (event: any) => {
    setCheckedLogin(event.target.checked);
    localStorage.clear();
    history.push("/login");
  };

  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <ProfileAvatar src="/broken-image.jpg" />
        </ListItemIcon>
        <ListItemText>
          <h5>
            {user.firstname} {user.lastname}
          </h5>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Initial>{sidebarState ? null : <h3>J M</h3>}</Initial>
        </ListItemText>
      </ListItem>
      <NavLink
        to="/"
        exact
        className={({ isActive }: any) => (isActive ? "active" : "inactive")}
      >
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
      </NavLink>
      <Divider />
    </List>
  );
};

export default ProfileSidebar;
