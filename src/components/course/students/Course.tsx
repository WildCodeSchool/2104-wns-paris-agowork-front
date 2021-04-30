import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Accordion from "@material-ui/core/Accordion";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
  Card,
  Form,
  Achievment,
  InputAchievment,
  RadioButtons,
  FormElements,
  InputComments,
  StyledButton,
  AccordionComments,
  AchievmentStatus,
} from "../../../assets/styles/studentCourse/Elements";

export type CourseProps = {
  id?: string;
  courseTitle: string;
  isValidated: string;
  comments: string;
  subCourse?: unknown;
};

const UPDATE_ISVALIDATED = gql`
  mutation updateIsValidated($input: CourseInput) {
    updateIsValidated(input: $input) {
      id
      isValidated
      comments
    }
  }
`;

function Course({
  id,
  courseTitle,
  comments,
  isValidated,
}: CourseProps): JSX.Element {
  const [achievment, setAchievment] = useState("");
  const [newComments, setNewComments] = useState("");
  const [updateIsValidated, { data }] = useMutation(UPDATE_ISVALIDATED);
  let message = null;
  if (data && data.updateIsValidated) {
    message = data.updateIsValidated.isValidated;
  }
  return (
    <Card>
      <h3>{courseTitle}</h3>
      <AchievmentStatus>
        {isValidated === "TRUE" ? <p> Terminé & assimilé ✔️ </p> : null}
        {isValidated === "FALSE" ? <p> Pas acquis ❌ </p> : null}
        {isValidated === "INPROGRESS" ? <p> In progress 🔄 </p> : null}
      </AchievmentStatus>
      {message ? <p>New value: {message}</p> : null}
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          updateIsValidated({
            variables: {
              input: {
                id,
                isValidated: achievment,
                comments: newComments,
              },
            },
          });
        }}
      >
        <FormElements>
          <RadioButtons>
            <Achievment>Terminé & assimilé ✔️</Achievment>
            <InputAchievment
              name="achievment"
              value="TRUE"
              checked={achievment === "TRUE"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <RadioButtons>
            <Achievment>Pas acquis ❌ </Achievment>
            <InputAchievment
              name="achievment"
              value="FALSE"
              checked={achievment === "FALSE"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <RadioButtons>
            <Achievment>In progress 🔄</Achievment>
            <InputAchievment
              name="achievment"
              value="INPROGRESS"
              checked={achievment === "INPROGRESS"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
        </FormElements>
        <Accordion elevation={0}>
          <AccordionComments
            expandIcon={<EditIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {comments ? (
              <Typography>{comments}</Typography>
            ) : (
              <p>Ajoutez des notes sur ce cours</p>
            )}
          </AccordionComments>
          <AccordionDetails>
            <InputComments
              name="newComments"
              value={newComments}
              onChange={(e) => setNewComments(e.target.value)}
            />
          </AccordionDetails>
        </Accordion>
        <StyledButton type="submit">Mettre à jour</StyledButton>
      </Form>
    </Card>
  );
}

export default Course;
