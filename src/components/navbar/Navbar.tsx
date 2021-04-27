import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Link } from "react-router-dom";
import { AllNav } from "../../styles/navbar/Navbar";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <AllNav>
      <Navigation
        activeItemId="/home"
        onSelect={({ itemId }) => {
          <Link to="/">Home</Link>;
        }}
        items={[
          {
            title: "Home",
            itemId: "/home",
          },
          {
            title: "About",
            itemId: "/about",
            subNav: [
              {
                title: "Projects",
                itemId: "/about/projects",
              },
              {
                title: "Members",
                itemId: "/about/members",
              },
            ],
          },
          {
            title: "Another Tab",
            itemId: "/another",
            subNav: [
              {
                title: "Teams",
                itemId: "/another/teams",
              },
            ],
          },
        ]}
      />
    </AllNav>
  );
};

export default Navbar;
