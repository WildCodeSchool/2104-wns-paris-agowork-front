import styled from "styled-components";
import { Button } from "@mui/material";

export const linearGradient = "linear-gradient(to left, #004e92, #000428)";

export const ColoredButton = styled(Button)`
  background: ${linearGradient};
`;

export const colors = {
  primary: "#0845BC",
  focus: {
    h: 45,
    s: "100%",
    l: "42%",
  },
  secondary: "#e5e5e5",
};
