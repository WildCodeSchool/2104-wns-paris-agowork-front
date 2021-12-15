import React, { useState } from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Delete,
  ImageSearch,
  LocalPhone,
  Map,
  School,
} from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { BoxIcon, CardList } from "../../assets/styles/list/userList";
import ConfirmationModal from "../modal/confirmationModal";
import { CampusType } from "../../types/campus";
import { DELETE_CAMPUS } from "../../graphql/mutations/infrastructures/campus";

const CampusCard = ({ ...campus }: CampusType): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteCampus] = useMutation(DELETE_CAMPUS, {
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
    deleteCampus({
      variables: {
        id: campus.id,
      },
    });
  };
  return (
    <>
      <CardList sx={{ width: 250, margin: 0.2 }} key={campus.id}>
        <CardContent>
          <Typography>{campus.name}</Typography>
          {campus.address ? (
            <BoxIcon>
              <Map />
              <span>&nbsp;&nbsp;{campus.address}</span>
            </BoxIcon>
          ) : (
            <></>
          )}
          {campus.phone ? (
            <BoxIcon>
              <LocalPhone />
              <span>&nbsp;&nbsp;{campus.phone}</span>
            </BoxIcon>
          ) : (
            <></>
          )}
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

export default CampusCard;
