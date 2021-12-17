import React from "react";
import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { CardsBoard } from "../../../assets/styles/dashboard/teamMood";
import { GET_ALL_USERS } from "../../../graphql/queries/user/user";
import { GetUsersType, UserType } from "../../../types/user";
import UserCard from "../../../components/cards/userCard";
import Loading from "../../../components/loading/loading";

export default function UserListing(): JSX.Element {
  const { loading, error, data } = useQuery<GetUsersType>(GET_ALL_USERS);

  if (error) {
    return <Typography>ERROR</Typography>;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CardsBoard>
          {data?.getAllUsers.map((user: UserType) => (
            <UserCard {...user} key={user.id} />
          ))}
        </CardsBoard>
      )}
    </>
  );
}
