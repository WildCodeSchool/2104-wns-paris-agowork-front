import React, { useState } from "react";
import {
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { Delete, LocalPhone, Map } from "@mui/icons-material";
import { BoxIcon, CardList } from "../../../assets/styles/list/list";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CardsBoard } from "../../../assets/styles/dashboard/teamMood";
import { CampusType, GetCampusType } from "../../../types/campus";
import Loading from "../../../components/loading/loading";
import ConfirmationModal from "../../../components/modal/confirmationModal";
import CampusCard from "../../../components/cards/campusCard";

export default function CampusListing(): JSX.Element {
  const { loading, error, data } = useQuery<GetCampusType>(GET_ALL_CAMPUS);
  if (error) {
    return <Typography>ERROR</Typography>;
  }

  return (
    <>
      {loading ? (
        <CardsBoard>
          <Loading />
        </CardsBoard>
      ) : (
        <CardsBoard>
          {data?.getCampus.map((campus: CampusType) => (
            <CampusCard {...campus} key={campus.id} />
          ))}
        </CardsBoard>
      )}
    </>
  );
}
