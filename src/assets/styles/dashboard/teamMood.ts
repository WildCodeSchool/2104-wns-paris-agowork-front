import styled from "styled-components";
import { Avatar, Box, Typography } from "@mui/material";
import { colors, shapes } from "../global";

export const CardsBoard = styled(Box)`
  display: flex;
  margin: 2rem 0 2rem 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const CampusMoods = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ContentCard = styled.div`
  background: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  text-align: center;
  text-align: center;
  margin: 0 1rem 2rem 0;
  padding: 1rem;
  width: auto;
  border-radius: ${shapes.borderRadiusMed};
`;

export const MoodAvatar = styled(Avatar)`
  position: relative;
  margin: auto;
  margin-top: -2rem;
  margin-bottom: 0.5rem;
`;

export const MoodName = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
`;

export const MoodProfile = styled(Typography)`
  font-size: 25px;
`;

export const IconTeamMood = styled.img`
  width: 30px;
`;
