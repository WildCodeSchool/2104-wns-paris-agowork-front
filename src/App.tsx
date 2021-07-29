// @ts-nocheck
import React, {useContext} from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Page from "./components/Page";
import { UserContext, UserContextProvider } from "./context/UserContext";

function App(): JSX.Element {
  const { currentUser } = useContext(UserContext)
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserContextProvider>
        <Page />
        </UserContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
