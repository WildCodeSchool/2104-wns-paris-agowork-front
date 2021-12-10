import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { ContentCard } from "../../../assets/styles/dashboard/mood";
import { GET_STUDENTS_MOOD } from "../../../graphql/queries/user/user";

type UserMoodType = {
  id: string;
  firstname: string;
  lastname: string;
  mood: string;
};

type GetUsersMoodType = {
  getAllStudentsByMood: UserMoodType[];
};

export default function MoodBoard(): JSX.Element {
  const { loading, error, data } =
    useQuery<GetUsersMoodType>(GET_STUDENTS_MOOD);
  console.log(data?.getAllStudentsByMood);
  return (
    <>
      {data?.getAllStudentsByMood.map((user: UserMoodType) => (
        <ContentCard key={user.id}>
          <p>
            {user.firstname} {user.lastname}
          </p>
        </ContentCard>
      ))}
    </>
  );
}
