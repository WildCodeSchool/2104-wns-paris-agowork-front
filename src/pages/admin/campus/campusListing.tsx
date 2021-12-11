import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import {
  CardsBoard,
  ContentCard,
} from "../../../assets/styles/dashboard/teamMood";
import { CampusType, GetCampusType } from "../../../types/campus";

export default function CampusListing(): JSX.Element {
  const { loading, error, data } = useQuery<GetCampusType>(GET_ALL_CAMPUS);
  return (
    <CardsBoard>
      {data?.getCampus.map((campus: CampusType) => (
        <ContentCard key={campus.id}>
          {campus.name}
          {campus.address}
          {campus.phone}
        </ContentCard>
      ))}
    </CardsBoard>
  );
}
