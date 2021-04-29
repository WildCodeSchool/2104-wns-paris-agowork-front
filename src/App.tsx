import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Navbar } from "./components/navbar/Navbar";
import theme from "./theme";
import ModuleList from "./components/course/students/ModuleList";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <ModuleList />
      </ThemeProvider>
    </div>
  );
}

export default App;
