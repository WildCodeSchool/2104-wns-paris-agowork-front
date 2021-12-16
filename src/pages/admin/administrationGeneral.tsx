import React from "react";
import { Card, Box, CardContent } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BoxIcon, CardTitle } from "../../assets/styles/list/list";
import CampusCreation from "./campus/campusCreation";
import MoodCreation from "./mood/moodCreation";
import { CardsBoard } from "../../assets/styles/dashboard/teamMood";

export default function GeneralForm(): JSX.Element {
  return (
    <CardsBoard>
      <NavLink
        to="/campus"
        exact
        className={({ isActive }: any) => (isActive ? "active" : "")}
      >
        <Card>
          <CardContent>
            <CardTitle>Campus</CardTitle>
          </CardContent>
        </Card>
      </NavLink>
      <NavLink
        to="/mood"
        exact
        className={({ isActive }: any) => (isActive ? "active" : "")}
      >
        <Card>
          <CardContent>
            <CardTitle>Mood</CardTitle>
          </CardContent>
        </Card>
      </NavLink>
      <NavLink
        to="/utilisateur"
        exact
        className={({ isActive }: any) => (isActive ? "active" : "")}
      >
        <Card>
          <CardContent>
            <CardTitle>Utilisateur</CardTitle>
          </CardContent>
        </Card>
      </NavLink>
    </CardsBoard>
  );
}
