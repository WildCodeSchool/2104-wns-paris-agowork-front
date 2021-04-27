import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ModuleList from "./components/course/students/ModuleList";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route />
      </BrowserRouter>
      <p>Hello you !</p>
      <ModuleList />
    </div>
  );
}

export default App;
