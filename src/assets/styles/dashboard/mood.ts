import styled from "styled-components";
import { Box, Button, Radio, Typography } from "@mui/material";
import { colors, shapes } from "../global";

export const Mood = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    width: 139px;
    height: 139px;
    margin-bottom: 5%;
  }
  .icone {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 50px;
      height: 50px;
    }
  } ;
`;

export const Question = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    text-align: start;
  } ;
`;

export const InputAchievment = styled(Radio)`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonValidation = styled(Button)`
  height: 35px;
  padding: 1.5%;
  font-size: 24px;
  font-weight: 500;
  text-transform: none;
  margin-top: 5%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const img = styled.img`
  width: 139px;
  height: 139px;
  margin-bottom: 5%;
`;

export const Card = styled(Box)`
  background: ${colors.trigradient};
  width: 256px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: ${shapes.borderRadius};
`;

export const ContentCard = styled(Box)`
  background: white;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  width: auto;
  border-radius: ${shapes.borderRadius};
`;

export const IconMood = styled.img`
  width: 0px;
  height: auto;
  flex: auto;
`;

export const TitleMood = styled(Typography)`
  font-size: 15px;
  margin-bottom: 2px;
`;

export const FormGroup = styled.div`
  flex:direction: row;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5%;
`;

export const MoodInput = styled(Radio)`
  height: 2em;
  flex: 1 1 auto;
  .Mui-checked {
    color: ${colors.darkBlue};
  }
  input[type="radio"]:focus {
    outline: none;
  }
`;
