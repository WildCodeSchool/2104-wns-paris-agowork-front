/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import colors from "./globals";

export const Container = styled.div`
  max-width: auto;
  margin-left: 15%;
  margin-right: 15%;
  padding-top: 15px;
  h1 {
    font-size: 35px;
    color: ${colors.primary};
  }
`;

export const CardRow = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.article`
  padding: 20px;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 1.5rem;
  h3,
  h4 {
    color: ${colors.primary};
    font-size: 25px;
    text-align: left;
    padding-left: 20px;
  }
  p,
  ul {
    color: #757575;
    line-height: 1.5;
  }
`;

export const Form = styled.form`
  font-size: 20px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
`;

export const FormElements = styled.div`
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-decoration: none;
  color: #aaa;
`;

export const RadioButtons = styled.div`
  font-size: 20px;
  color: black;
  padding-right: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Achievment = styled.label`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
`;

export const ModuleWrapper = styled.div`
  h2 {
    font-size: 30px;
    text-align: left;
  }
`;
