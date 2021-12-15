import styled from "styled-components";
import { Box, Card } from "@mui/material";
import { colors } from "../global";

export const BrokenImage = styled.div`
  background-color: ${colors.mediumGrey};
  text-align: center;
  padding-top: 34%;
  height: 140px;
`;

export const CardList = styled(Card)`
  @media only screen and (min-width: 460px) and (max-width: 760px) {
    width: 195px;
  }
  @media only screen and (max-width: 460px) {
    width: 250px;
  } ;
`;

export const BoxIcon = styled(Box)`
  display: inline-flex;
  vertical-align: middle;
`;
