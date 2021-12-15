import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { moods } from "../../mood/mood.enum";
import {
  CardsBoard,
  ContentCard,
  MoodAvatar,
  MoodName,
} from "../../../assets/styles/dashboard/teamMood";
import { GET_STUDENTS_MOOD } from "../../../graphql/queries/user/user";
import { ProfileAvatar } from "../../../assets/styles/sidebar/sidebar";
import { IconMood } from "../../../assets/styles/dashboard/mood";
import TeamMood from "./teamMood";

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
  const [moodState, setMoodState] = useState("");
  return (
    <CardsBoard>
      {data?.getAllStudentsByMood.map((user: UserMoodType) => (
        <ContentCard key={user.id}>
          {user.picture ? (
            <MoodAvatar src={user.picture} />
          ) : (
            <ProfileAvatar src="/broken-image.jpg" />
          )}
          <MoodName>
            {user.firstname} {user.lastname}
          </MoodName>
          {user.mood ? <TeamMood userMood={user.mood} /> : <></>}
        </ContentCard>
      ))}
    </CardsBoard>
  );
}
