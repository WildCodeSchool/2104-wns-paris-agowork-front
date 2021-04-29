import styled from "styled-components";
import { colors, fonts } from "../globals";

export const GlobalNav = styled.div`
  background-color: ${colors.secondary};
  width: 20%;
  position: relative;
  font-family: ${fonts.ralewayRegular};
`;

export const AllNav = styled.nav`
  background-color: ${colors.secondary};
  height: 100%;
  width: 20%;
  position: fixed;
  border-color: none;
  p {
    margin-top: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    margin-left: 2rem;
    > img:first-child {
      border-radius: 7px 7px 0 0;
      margin-bottom: 20px;
      max-width: 20%;
      height: auto;
      background-color: white;
      margin-right: 2rem;
    }
  }
  .campus {
    color: ${colors.primary};
  }
  .dashboard {
    color: ${colors.primary};
  }
  .ressource {
    color: ${colors.primary};
  }
  .cours {
    color: ${colors.primary};
  }
  .favoris {
    color: ${colors.primary};
  }
  .bilan {
    color: ${colors.primary};
  }
`;

export const NavLink = styled.div`
  text-align: left;
  color.hover: ${colors.primary};
`;

export const Logo = styled.div`
  background-color: ${colors.primary};
  margin-bottom: 20px;
  padding: 1rem;
  border-radius: 10px;
  .esc {
    width: 100%;
    margin-right: 1rem;
  }
`;

export const Social = styled.div`
  background-color: ${colors.primary};
  margin-top: 35%;
  margin-bottom: 35%;
  padding: 5%;
  border-radius: 10px;
  div {
    color: white;
    display: flex;
    justify-content: space-around;
  }
  .social {
    pading-left: 20%;
    font-size: 150%;
  }
  .power {
    color: white;
    background-color: red;
    border-radius: 100%;
    padding: 10%;
    margin-right: 1rem;
  }
  a {
    color: white;
  }
  .facebook {
    background-color: none;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #1877f2;
    }
  }
  .twitter {
    background-color: none;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #38a1f2;
    }
  }
  .linkedin {
    background-color: none;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #2366c2;
    }
  }
  .youtube {
    background-color: none;
    &:hover {
      border-radius: 10px;
      padding: 5px;
      background-color: #f40106;
    }
  }
`;
