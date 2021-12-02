import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { Container } from "../assets/styles/Global";
import { ColoredContainer, LoginContainer } from "../assets/styles/login/Login";
import Page from "./Page";
import Sidebar from "../components/sidebar/Sidebar";

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
