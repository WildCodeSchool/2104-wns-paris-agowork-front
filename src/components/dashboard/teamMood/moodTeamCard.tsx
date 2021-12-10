import React, { useState, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { AuthContext } from "../../../context/auth";
import { ContentCard } from "../../../assets/styles/dashboard/mood";
import { GET_USERS } from "../../../graphql/queries/user/user";

export type UsersModuleProps = {
  id?: string;
  firstname: string;
  lastname: string;
  mood: string;
};

export default function MoodTeamCard(): JSX.Element {
  return <></>;
}
