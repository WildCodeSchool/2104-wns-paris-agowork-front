import React from "react";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Router from "./routing/Router";
import { AuthProvider } from "./context/Auth";

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
