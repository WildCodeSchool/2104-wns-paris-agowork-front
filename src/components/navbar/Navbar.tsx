import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Link } from "react-router-dom";
import { AllNav } from "../../assets/styles/navbar/Navbar";
import logo from "../../assets/pictures/logo.png";
import profile from "../../assets/pictures/profile.png";
import { BsFillGearFill } from "react-icons/fa";

export const Navbar = () => {
  return (
    <AllNav>
      <img src={logo} alt="ECS" />
      <p>
        Jane Doe
        <img src={profile} alt="profile" />
      </p>
      <Navigation
        activeItemId="/home"
        onSelect={({ itemId }) => {
          <Link to="/">Home</Link>;
        }}
        items={[
          {
            title: "Campus de Paris",
            itemId: "/Paris",
          },
          {
            elemBefore: () => <BsFillGearFill />,
            title: "Dashboard",
            itemId: "/Dashboard",
          },
          {
            title: "Ressources",
            itemId: "/Ressources",
          },
          {
            title: "Cours",
            itemId: "/Cours",
          },
        ]}
      />
    </AllNav>
  );
};

export default Navbar;
