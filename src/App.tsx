import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Sidebar } from "./components/sidebar/Sidebar";
import ModuleList from "./components/course/students/ModuleList";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Sidebar />
        <ModuleList />
      </ThemeProvider>
    </div>
  );
}

export default App;
