import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  CardsBoard,
  ContentCard,
} from "../../../assets/styles/dashboard/teamMood";
import { GET_ALL_USERS } from "../../../graphql/queries/user/user";
import { GetUsersType, UserType } from "../../../types/user";

export default function UserListing(): JSX.Element {
  const { loading, error, data } = useQuery<GetUsersType>(GET_ALL_USERS);
  console.log(data);
  return (
    <CardsBoard>
      {data?.getAllUsers.map((user: UserType) => (
        <ContentCard key={user.id}>
          {user.firstname}
          {user.lastname}
          {user.campus}
          {user.mood}
        </ContentCard>
      ))}
    </CardsBoard>
  );
}
