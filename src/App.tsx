import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route />
      </BrowserRouter>
      <p>Hello you !</p>
    </div>
  );
}

export default App;
