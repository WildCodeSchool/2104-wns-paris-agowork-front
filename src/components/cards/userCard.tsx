import React, { useState } from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Delete, ImageSearch, Report, School } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../graphql/mutations/user/user";
import {
  ActionsCard,
  BoxIcon,
  BrokenImage,
  BtnDelete,
  CardList,
  CardTitle,
  IconParagraph,
  Paragraph,
} from "../../assets/styles/list/list";
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
      <CardList sx={{ width: 200, margin: 1 }}>
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
          <CardTitle>
            {user.firstname} {user.lastname}
          </CardTitle>
          {user.mood != null && user.mood.icon != null ? (
            <Typography>
              <IconParagraph>{user.mood.icon}</IconParagraph>
            </Typography>
          ) : (
            <></>
          )}
          <Paragraph>{user.email}</Paragraph>
          {user.campus != null && user.campus.name != null ? (
            <BoxIcon>
              <School />
              <span>&nbsp;&nbsp;{user.campus.name}</span>
            </BoxIcon>
          ) : (
            <></>
          )}
        </CardContent>
        <ActionsCard disableSpacing>
          <BtnDelete onClick={handleOpen}>
            <Delete />
          </BtnDelete>
        </ActionsCard>
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
