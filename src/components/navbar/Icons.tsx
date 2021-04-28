import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";
import { Social } from "../../assets/styles/navbar/Navbar";

export const icons = (): JSX.Element => {
  return (
    <Social>
      <div>
        <FaPowerOff className="power" />
        <TiSocialFacebook className="social" />
        <TiSocialTwitter className="social" />
        <TiSocialLinkedin className="social" />
        <TiSocialYoutube className="social" />
      </div>
    </Social>
  );
};

export default icons;
