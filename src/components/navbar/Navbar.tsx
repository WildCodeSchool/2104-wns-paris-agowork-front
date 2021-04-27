import React from "react";
import { Link } from "react-router-dom";
import { AllNav } from "../../styles/navbar/Navbar";

function Navbar(): JSX.Element {
  return (
    <AllNav>
      <div>
        <h1>Wilders Book</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addWilder">Add Wilder</Link>
        </li>
      </div>
    </AllNav>
  );
}

export default Navbar;
