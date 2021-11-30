import styled from "styled-components";
import { Toolbar, Avatar, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Drawer } from "./Mui_sidebar";

export const Initial = styled.div`
  margin-top: -2rem;
`;

export const TopBar = styled(Toolbar)`
  background-color: white;
`;

export const ProfileAvatar = styled(Avatar)`
  background: #000428;
  background: -webkit-linear-gradient(to left, #004e92, #000428);
  background: linear-gradient(to left, #004e92, #000428);
`;

export const SideNav = styled(Drawer)`
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const CompanyName = styled(Typography)`
  margin-left: 3rem;
`;

export const HomeIcon = styled(Home)`
  color: #004e92;
`;

export const nested = styled.li`
  padding-left: 3rem;
`;

export const Social = styled.div`
  margin-left: 65%;
  a {
    padding: 0 0.8rem 0 0.8rem;
    color: #004e92;
  }
  @media only screen and (min-width: 810px) and (max-width: 1250px) {
    margin-left: 50%;
    a {
      padding: 0 0.5rem 0 0.5rem;
    }
  }
  @media only screen and (max-width: 810px) {
    margin-left: 6%;
    a {
      padding: 0 0.2rem 0 0.2rem;
    }
  } ;
`;
