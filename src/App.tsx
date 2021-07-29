import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Page from "./components/Page";

function App(): JSX.Element {
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </div>
  );
}

export default App;
