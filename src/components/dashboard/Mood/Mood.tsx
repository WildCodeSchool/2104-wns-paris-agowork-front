import React, { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import MoodCard from "./MoodCard";

export default function Mood(): JSX.Element {
  const { user } = useContext(AuthContext);
  if (user) {
    console.log(user);
  }
  return <MoodCard />;
}
