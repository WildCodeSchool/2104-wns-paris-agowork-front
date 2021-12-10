import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import {
  CardsBoard,
  ContentCard,
  MoodAvatar,
  MoodName,
} from "../../../assets/styles/dashboard/teamMood";
import { GET_STUDENTS_MOOD } from "../../../graphql/queries/user/user";
import { ProfileAvatar } from "../../../assets/styles/sidebar/sidebar";

type UserMoodType = {
  id: string;
  firstname: string;
  lastname: string;
  picture: string;
  mood: string;
};

type GetUsersMoodType = {
  getAllStudentsByMood: UserMoodType[];
};

export default function MoodBoard(): JSX.Element {
  const { data } = useQuery<GetUsersMoodType>(GET_STUDENTS_MOOD);
  return (
    <CardsBoard>
      {data?.getAllStudentsByMood.map((user: UserMoodType) => (
        <ContentCard prop={user.mood} key={user.id}>
          <MoodAvatar src={user.picture ? user.picture : "/broken-image.jpg"} />
          <MoodName>
            {user.firstname} {user.lastname}
          </MoodName>
        </ContentCard>
      ))}
    </CardsBoard>
  );
}
