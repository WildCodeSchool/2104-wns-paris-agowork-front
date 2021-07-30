// @ts-nocheck
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Router from "./components/Router";

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
