import styled from "styled-components";
import { Toolbar, Avatar, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Drawer } from "./Mui_sidebar";
import { colors } from "../Global";

export const Initial = styled.div`
  margin-top: -2rem;
`;

export const TopBar = styled(Toolbar)`
  background-color: white;
`;

export const ProfileAvatar = styled(Avatar)`
  background: ${colors.lightBlue};
  background: -webkit-linear-gradient(
    to left,
    ${colors.lightBlue},
    ${colors.pink}
  );
  background: ${colors.blueLinearGradient};
`;

export const SideNav = styled(Drawer)`
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const CompanyName = styled(Typography)`
  margin-left: 3rem;
  color: black;
  font-size: 23px;
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

export const HomeIcon = styled(Home)`
  color: #004e92;
`;

export const nested = styled.li`
  padding-left: 3rem;
`;

export const Social = styled.div`
  margin-left: 58%;
  a {
    padding: 0 0.8rem 0 0.8rem;
    color: #004e92;
  }
  @media only screen and (min-width: 830px) and (max-width: 1250px) {
    margin-left: 38%;
  }
  @media only screen and (max-width: 830px) {
    margin-left: 5%;
  } ;
`;

export const hide = styled.div`
  display: none;
`;
