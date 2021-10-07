import styled from "styled-components";

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
