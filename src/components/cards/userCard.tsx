import React from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Delete, ImageSearch, School } from "@mui/icons-material";
import {
  BoxIcon,
  BrokenImage,
  CardList,
} from "../../assets/styles/list/userList";
import { UserType } from "../../types/user";

const UserCard = ({ ...user }: UserType): JSX.Element => {
  console.log("card", user);
  return (
    <CardList sx={{ width: 165, margin: 1 }}>
      {user.picture ? (
        <CardMedia
          component="img"
          height="140"
          image={user.picture}
          alt="Paella dish"
        />
      ) : (
        <BrokenImage>
          <ImageSearch />
        </BrokenImage>
      )}
      <CardContent>
        <Typography>{user.role}</Typography>
        <Typography>
          {user.firstname} {user.lastname}
        </Typography>
        {user.campus ? (
          <BoxIcon>
            <School />
            <span>&nbsp;&nbsp;{user.campus}</span>
          </BoxIcon>
        ) : (
          <></>
        )}
        {user.mood ? <Typography>{user.mood}</Typography> : <></>}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Delete />
        </IconButton>
      </CardActions>
    </CardList>
  );
};

export default UserCard;
