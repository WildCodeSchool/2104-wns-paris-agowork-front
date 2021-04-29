import styled from "styled-components";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import { colors, fonts } from "../globals";

export const AppBar = styled.nav`
  zindex: theme.zIndex.drawer + 1;
  transition: theme.transitions.create(
    [ "width",
    "margin" ],
    {easing: theme.transitions.easing.sharp; duration: theme.transitions.duration.leavingScreen;}
  );
`;
