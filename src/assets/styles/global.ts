import styled from "styled-components";
import { Button, Box } from "@mui/material";

export const colors = {
  primary: "#0845BC",
  focus: {
    h: 45,
    s: "100%",
    l: "42%",
  },
  secondary: "#e5e5e5",
  lightGrey: "#fafafa",
  linearGradient: "linear-gradient(to left, #004e92, #000428)",
  lightBlue: "#004e92",
  darkBlue: "#000428",
};

export const shapes = {
  borderRadius: "15px",
};

export const BoxShaddow = styled.div`
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const ColoredButton = styled(Button)`
  background: ${colors.linearGradient};
  color: "#ffffd";
  width: 100%;
`;

export const ContainerButton = styled.div`
  margin-top: 1rem;
`;

export const Container = styled(Box)`
  flex-grow: 1;
  padding: 6rem;
  min-height: 100vh;
  background-color: ${colors.lightGrey};
`;

export const Form = styled.form`
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  color: #aaa;
`;

export const FormElements = styled.div`
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-decoration: none;
  color: #aaa;
`;
