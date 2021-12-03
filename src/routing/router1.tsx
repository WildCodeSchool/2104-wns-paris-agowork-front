import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { Container } from "../assets/styles/global1";
import { ColoredContainer, LoginContainer } from "../assets/styles/login1/login1";
import Page from "./page1";
import Sidebar from "../components/sidebar/sidebar1";

const Router = (): JSX.Element => {
  return (
    <>
      {useLocation().pathname !== "/login" ? (
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Container component="main">
            <Page />
          </Container>
        </Box>
      ) : (
        <LoginContainer component="main">
          <ColoredContainer />
          <Page />
        </LoginContainer>
      )}
    </>
  );
};

export default Router;
