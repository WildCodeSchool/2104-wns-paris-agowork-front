import styled from "styled-components";
import { Card, FormControl } from "@mui/material";
import { shapes, colors } from "./global";

export const Form = styled.form`
  border-radius: ${shapes.borderRadiusMed};
  text-decoration: none;
  display: flex;
  margin: auto;
  flex-direction: column;
  color: #aaa;
  @media only screen and (max-width: 1130px) {
    width: 100%;
  } ;
`;

export const GroupForm = styled(FormControl)`
  margin-top: 1rem !important;
  flex: auto;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CampusForm = styled(Card)`
  padding: 2rem;
  width: 40%;
  max-width: 80%;
  text-align: center;
  @media only screen and (max-width: 1130px) {
    width: 100%;
  } ;
`;

export const MoodForm = styled(Card)`
  padding: 2rem;
  width: 40%;
  max-width: 80%;
  text-align: center;
  @media only screen and (max-width: 1130px) {
    width: 100%;
  } ;
`;

export const UserForm = styled(Card)`
  padding: 2rem;
  width: 40%;
  margin-right: 11rem;
  margin-bottom: 1rem;
  max-width: 80%;
  text-align: center;
  @media only screen and (max-width: 1130px) {
    width: 100%;
  } ;
`;
