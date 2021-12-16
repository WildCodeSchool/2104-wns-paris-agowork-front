import React from "react";
import { useQuery } from "@apollo/client";
import { CardsBoard } from "../../../assets/styles/dashboard/teamMood";
import { GET_ALL_USERS } from "../../../graphql/queries/user/user";
import { GetUsersType, UserType } from "../../../types/user";
import UserCard from "../../../components/cards/userCard";

export default function UserListing(): JSX.Element {
  const { loading, error, data } = useQuery<GetUsersType>(GET_ALL_USERS);
  return (
    <CardsBoard>
      {data?.getAllUsers.map((user: UserType) => (
        <UserCard {...user} key={user.id} />
      ))}
    </CardsBoard>
  );
}
