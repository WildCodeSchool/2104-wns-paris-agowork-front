import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { CardsBoard } from "../../../assets/styles/dashboard/teamMood";
import Loading from "../../../components/loading/loading";
import MoodCard from "../../../components/cards/moodCard";
import { GET_ALL_MOODS } from "../../../graphql/queries/social/mood";
import { GetMoodsType, MoodType } from "../../../types/moods";

export default function MoodListing(): JSX.Element {
  const { loading, error, data } = useQuery<GetMoodsType>(GET_ALL_MOODS);
  if (error) {
    return <Typography>ERROR</Typography>;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CardsBoard>
          {data?.getMoods.map((mood: MoodType) => (
            <MoodCard {...mood} key={mood.id} />
          ))}
        </CardsBoard>
      )}
    </>
  );
}
