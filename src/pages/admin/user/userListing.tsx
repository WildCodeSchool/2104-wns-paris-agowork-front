import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Delete, ImageSearch } from "@mui/icons-material";
import { useQuery } from "@apollo/client";
import {
  CardsBoard,
  ContentCard,
} from "../../../assets/styles/dashboard/teamMood";
import { GET_ALL_USERS } from "../../../graphql/queries/user/user";
import { GetUsersType, UserType } from "../../../types/user";
import { BrokenImage } from "../../../assets/styles/list/userList";

export default function UserListing(): JSX.Element {
  const { loading, error, data } = useQuery<GetUsersType>(GET_ALL_USERS);
  return (
    <CardsBoard>
      {data?.getAllUsers.map((user: UserType) => (
        <Card sx={{ width: 145, margin: 2 }} key={user.id}>
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
            <Typography>
              {user.firstname} {user.lastname}
            </Typography>
            <Typography>{user.campus}</Typography>
            <Typography>{user.mood}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Delete />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </CardsBoard>
  );
}
