import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import { TextareaAutosize } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { colors, fonts } from "./Globals";

export const Container = styled.div`
  width: 80%;
  margin-left: 13%;
  margin-right: 10%;
  padding-top: 7%;
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
  border-radius: 10px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 3rem;
  h3,
  h4 {
    color: ${colors.primary};
    font-size: 25px;
    text-align: left;
    padding-left: 20px;
  }
`;

export const ModuleWrapper = styled.div`
  h2 {
    font-size: 30px;
    text-align: left;
  }
`;

export const Form = styled.form`
  font-size: 20px;
  text-decoration: none;
  color: #aaa;
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

export const InputAchievment = styled(Radio)`
  display: flex;
  flex-wrap: wrap;
`;

export const InputComments = styled(TextareaAutosize)`
  width: 250%;
  height: 150px;
`;

export const StyledButton = styled(Button)`
  && {
    margin: 10px;
  }
`;

export const AccordionComments = styled(AccordionSummary)`
  MuiButtonBase-root
    MuiIconButton-root
    MuiAccordionSummary-expandIcon
    MuiIconButton-edgeEnd {
    margin-top: 100px;
  }
`;
