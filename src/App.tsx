// @ts-nocheck
import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Page from "./components/Page";
import { UserContext } from "./context/UserContext";

function App(): JSX.Element {
  const user = sessionStorage.getItem("user")
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserContext user={user}>
        <Page />
        </UserContext>
      </ThemeProvider>
    </div>
  );
}

export default App;
