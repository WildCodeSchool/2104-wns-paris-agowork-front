import React, { useState, useContext } from "react";
import { moods } from "../mood/mood.enum";
import { IconTeamMood } from "../../../assets/styles/dashboard/teamMood";

export default function TeamMood({ userMood }: any): JSX.Element {
  let icon = "";
  console.log(userMood);
  switch (userMood) {
    case "OK":
      icon = "https://i.postimg.cc/WzbVD472/rain.png";
      break;
    case "GREAT":
      icon = "https://i.postimg.cc/prGHKt0K/sun.png";
      break;
    case "GOOD":
      icon = "https://i.postimg.cc/9MBVF9Z8/sun-1.png";
      break;
    case "NOTGOOD":
      icon = "https://i.postimg.cc/PxHTjypv/rain-1.png";
      break;
    default:
      console.log(`No mood`);
  }
  return (
    <>
      <IconTeamMood src={icon} alt="icon" />
    </>
  );
}
