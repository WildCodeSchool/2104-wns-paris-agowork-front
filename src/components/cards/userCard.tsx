import React, { useState } from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Delete, ImageSearch, Report, School } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../graphql/mutations/user/user";
import {
  BoxIcon,
  BrokenImage,
  CardList,
} from "../../assets/styles/list/userList";
import { UserType } from "../../types/user";
import ConfirmationModal from "../modal/confirmationModal";

const UserCard = ({ ...user }: UserType): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: (data) => {
      console.log(data);
      setOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteUser({
      variables: {
        id: user.id,
      },
    });
  };
  return (
    <>
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
          {user.campus != null && user.campus.name != null ? (
            <BoxIcon>
              <School />
              <span>&nbsp;&nbsp;{user.campus.name}</span>
            </BoxIcon>
          ) : (
            <></>
          )}
          {user.mood ? <Typography>{user.mood}</Typography> : <></>}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleOpen}>
            <Delete />
          </IconButton>
        </CardActions>
      </CardList>
      <ConfirmationModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default UserCard;
