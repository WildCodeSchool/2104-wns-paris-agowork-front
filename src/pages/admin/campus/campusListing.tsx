import React, { useState } from "react";
import { CardContent, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { LocalPhone, Map } from "@mui/icons-material";
import { BoxIcon, CardList } from "../../../assets/styles/list/userList";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CardsBoard } from "../../../assets/styles/dashboard/teamMood";
import { CampusType, GetCampusType } from "../../../types/campus";
import Loading from "../../../components/loading/loading";

export default function CampusListing(): JSX.Element {
  const { loading, error, data } = useQuery<GetCampusType>(GET_ALL_CAMPUS);
  if (error) {
    return <Typography>ERROR</Typography>;
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CardsBoard>
          {data?.getCampus.map((campus: CampusType) => (
            <CardList sx={{ width: 250, margin: 0.2 }} key={campus.id}>
              <CardContent>
                <Typography>{campus.name}</Typography>
                {campus.address ? (
                  <BoxIcon>
                    <Map />
                    <span>&nbsp;&nbsp;{campus.address}</span>
                  </BoxIcon>
                ) : (
                  <></>
                )}
                {campus.phone ? (
                  <BoxIcon>
                    <LocalPhone />
                    <span>&nbsp;&nbsp;{campus.phone}</span>
                  </BoxIcon>
                ) : (
                  <></>
                )}
              </CardContent>
            </CardList>
          ))}
        </CardsBoard>
      )}
    </>
  );
}
