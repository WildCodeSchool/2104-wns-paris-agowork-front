import styled from "styled-components";
import colors from "../globals";

export const AllNav = styled.nav`
  background-color: ${colors.secondary};
  background-color.hover: ${colors.secondary};
  width: 25%;
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
