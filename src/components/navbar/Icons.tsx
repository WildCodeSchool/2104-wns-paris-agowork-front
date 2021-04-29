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
        <a href="/" className="powerEffect">
          <FaPowerOff className="power" />
        </a>
        <a href="/" className="facebook">
          <TiSocialFacebook className="social" />
        </a>
        <a href="/" className="twitter">
          <TiSocialTwitter className="social" />
        </a>
        <a href="/" className="linkedin">
          <TiSocialLinkedin className="social" />
        </a>
        <a href="/" className="youtube">
          <TiSocialYoutube className="social" />
        </a>
      </div>
    </Social>
  );
};

export default icons;
