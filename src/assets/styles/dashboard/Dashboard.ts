import styled from "styled-components";
import { colors, fonts } from "../studentCourse/Globals";

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: ${colors.primary};
  h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 500;
  }
`;

export const Hr = styled.hr`
  border: none;
  border-top: 0.5px double rgba(8, 69, 188, 0.5);
`;

export const Space = styled.div`
  margin-top: 5%;
`;
