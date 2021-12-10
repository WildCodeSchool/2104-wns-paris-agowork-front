import styled from "styled-components";
import { Avatar, Box, Typography } from "@mui/material";
import { colors, shapes } from "../global";

export const CardsBoard = styled(Box)`
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
`;

export const ContentCard = styled(Box)`
  background: white;
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

