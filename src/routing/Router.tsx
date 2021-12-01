import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

import Page from "./Page";
import Sidebar from "../components/sidebar/Sidebar";

const Router = (): JSX.Element => {
  return (
    <>
      {useLocation().pathname !== "/login" ? (
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Page />
          </Box>
        </Box>
      ) : (
        <Page />
      )}
    </>
  );
};

export default Router;
