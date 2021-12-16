import React, { useState, useContext } from "react";
import { moods } from "../../mood/mood.enum";
import { IconTeamMood } from "../../../assets/styles/dashboard/teamMood";

export default function TeamMood({ userMood }: any): JSX.Element {
  return (
    <>
      <IconTeamMood src={userMood.icon} alt="icon" />
    </>
  );
}
