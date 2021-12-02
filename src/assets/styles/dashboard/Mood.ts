import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import styled from "styled-components";

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
