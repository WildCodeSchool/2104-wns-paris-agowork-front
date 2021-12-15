import styled from "styled-components";
import { FormControl } from "@mui/material";
import { shapes } from "./global";

export const Form = styled.form`
  border-radius: ${shapes.borderRadiusMed};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: #aaa;
  @media only screen and (max-width: 710px) {
    margin-left: 1rem;
    margin-right: 1rem;
  } ;
`;

export const GroupForm = styled(FormControl)`
  margin-top: 1rem !important;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
