import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { TiGroup } from "react-icons/ti";
import { ImBooks } from "react-icons/im";
import { MdSchool } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { AllNav, Logo, NavLink } from "../../assets/styles/navbar/Navbar";
import Icons from "./Icons";
import logo from "../../assets/pictures/logo.png";
import profile from "../../assets/pictures/profile.png";

export const Navbar = (): JSX.Element => {
  return (
    <AllNav>
      <Logo>
        <img className="esc" src={logo} alt="ECS" />
      </Logo>
      <p>
        <img src={profile} alt="profile" />
        Jane Doe
      </p>
      <NavLink>
        <Navigation
          activeItemId="/home"
          onSelect={({ itemId }) => {
            <Link to="/">Home</Link>;
          }}
          items={[
            {
              elemBefore: () => <TiGroup className="campus" />,
              title: "Campus de Paris",
              itemId: "/Paris",
            },
            {
              elemBefore: () => <BsFillGearFill className="dashboard" />,
              title: "Dashboard",
              itemId: "/Dashboard",
            },
            {
              elemBefore: () => <ImBooks className="ressource" />,
              title: "Ressources",
              itemId: "/Ressources",
            },
            {
              elemBefore: () => <MdSchool className="cours" />,
              title: "Cours",
              itemId: "/Cours",
              subNav: [
                {
                  title: "Mes cours",
                  itemId: "/cours",
                },
                {
                  title: "Module 1 : Découverte du monde professionnel",
                  itemId: "/management/teams",
                },
                {
                  title: "Module 2 : Les rouages de l’entreprise",
                  itemId: "/management/members",
                },
                {
                  title: "Module 3 : Histoire et panorama des média",
                  itemId: "/management/members",
                },
                {
                  title: "Module 4 : Panorama",
                  itemId: "/management/members",
                },
              ],
            },
            {
              elemBefore: () => <AiFillStar className="favoris" />,
              title: "Favoris",
              itemId: "/Favoris",
            },
            {
              elemBefore: () => <GoTasklist className="bilan" />,
              title: "Bilan compétences",
              itemId: "/Bilan",
            },
          ]}
        />
      </NavLink>
      <Icons />
      <p>Powered by AgoWork</p>
    </AllNav>
  );
};

export default Navbar;
