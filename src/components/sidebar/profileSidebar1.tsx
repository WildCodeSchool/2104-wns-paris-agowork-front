import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ListItem, List, ListItemIcon, ListItemText } from "@mui/material";
import { AuthContext } from "../../context/auth1";
import {
  Initial,
  ProfileAvatar,
  HomeIcon,
} from "../../assets/styles/sidebar1/sidebar1";

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
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </ListItem>
    </List>
  );
};

export default ProfileSidebar;
