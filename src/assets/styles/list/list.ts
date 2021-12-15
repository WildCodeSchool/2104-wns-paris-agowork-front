import styled from "styled-components";
import { Delete } from "@mui/icons-material";
import { Box, Card, CardActions, IconButton } from "@mui/material";
import { colors } from "../global";

export const BrokenImage = styled.div`
  background-color: ${colors.mediumGrey};
  text-align: center;
  padding-top: 34%;
  height: 140px;
`;

export const CardList = styled(Card)`
  display: flex;
  margin: 0 1rem 1rem 0;
  flex-direction: column;
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
  svg {
    width: 20px;
    color: ${colors.mediumBlue};
  }
`;

export const IconMood = styled.span`
  font-size: 30px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 2px 0 2px 0;
`;

export const FormTitle = styled.h2`
  font-size: 25px;
  margin: 1px 0 2px 0;
  font-weight: 600;
`;

export const BtnDelete = styled(IconButton)`
  background: ${colors.trigradient};
  svg {
    width: 22px;
    color: white;
  }
`;

export const ActionsCard = styled(CardActions)`
  justify-content: flex-end;
  margin-top: auto;
`;

export const MoodIcon = styled.span`
  font-size: 45px;
`;

export const IconParagraph = styled.span`
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: black;
`;
