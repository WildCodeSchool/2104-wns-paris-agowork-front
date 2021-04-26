import React from "react";
import { Link } from "react-router-dom";

function Navbar(): JSX.Element {
  return (
    <div>
      <div>
        <h1>Wilders Book</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addWilder">Add Wilder</Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
