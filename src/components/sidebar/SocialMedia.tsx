import React from "react";
import { Facebook, Twitter, LinkedIn, YouTube } from "@mui/icons-material";
import { Social } from "../../assets/styles/sidebar/Sidebar";

const SocialMedia = (): JSX.Element => {
  return (
    <Social>
      <a href="/">
        <Facebook />
      </a>
      <a href="/">
        <Twitter />
      </a>
      <a href="/">
        <LinkedIn />
      </a>
      <a href="/">
        <YouTube />
      </a>
    </Social>
  );
};

export default SocialMedia;
