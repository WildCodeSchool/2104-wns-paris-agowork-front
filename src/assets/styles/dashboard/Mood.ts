import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { colors, fonts } from "../studentCourse/Globals";

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
`;

export const Question = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
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
