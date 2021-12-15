import React, { useState } from "react";
import {
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { CardList } from "../../assets/styles/list/userList";
import ConfirmationModal from "../modal/confirmationModal";
import { DELETE_MOOD } from "../../graphql/mutations/social/mood";

const MoodCard = ({ ...mood }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteMood] = useMutation(DELETE_MOOD, {
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
    deleteMood({
      variables: {
        id: mood.id,
      },
    });
  };
  return (
    <>
      <CardList sx={{ width: 250, margin: 0.2 }} key={mood.id}>
        <CardContent>
          {mood.icon}
          <Typography>{mood.name}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleOpen}>
            <Delete />
          </IconButton>
        </CardActions>
        <ConfirmationModal
          open={open}
          handleClose={handleClose}
          handleDelete={handleDelete}
        />
      </CardList>
    </>
  );
};

export default MoodCard;
