import styled from "styled-components";
import { colors, fonts } from "../studentCourse/Globals";

export const News = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  div.card {
    display: flex;
    margin-top: 3%;
  }
  p {
    display: flex;
    padding-left: 3%;
    margin: 0;
    font-size: 30px;
    justify-content: space-between;
    flex-direction: column;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: light;
  }

  img {
    width: 288px;
    height: 203px;
  }
  hr {
    margin-top: 3%;
    width: 90%;
  }
`;

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
