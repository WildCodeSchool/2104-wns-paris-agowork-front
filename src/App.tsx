import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import ModuleList from "./components/course/students/ModuleList";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Sidebar />
      <ModuleList />
    </div>
  );
}

export default App;
