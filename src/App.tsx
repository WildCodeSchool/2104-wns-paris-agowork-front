import React from "react";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Router from "./routing/Router";
import { AuthProvider } from "./context/Auth";

function App(): JSX.Element {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
