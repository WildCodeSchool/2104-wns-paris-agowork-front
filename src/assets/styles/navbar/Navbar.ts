import styled from "styled-components";
import colors from "../globals";

export const AllNav = styled.nav`
  background-color: ${colors.secondary};
  background-color.hover: ${colors.secondary};
  width: 25%;
  height: 100%;
  border-color: none;
  > img:first-child {
    border-radius: 7px 7px 0 0;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
    background-color: ${colors.primary};
  }
  p {
    display: flex;
    text-align: center;
    align-items: center;
    margin-left: 2rem;
    > img:first-child {
      border-radius: 7px 7px 0 0;
      margin-bottom: 20px;
      margin-left: 1rem;
      max-width: 20%;
      height: auto;
      background-color: white;
    }
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
    border-radius: 50%;
    padding: 2%;
    margin-right: 1rem;
  }
`;
