import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  Card,
  Form,
  Achievment,
  InputAchievment,
  RadioButtons,
  FormElements,
  InputComments,
  Button,
} from "../../../assets/styles/elements";

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
  // eslint-disable-next-line
  console.log(data);
  return (
    <Card>
      <h3>{courseTitle}</h3>
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
        {isValidated === "TRUE" ? <p> Terminé & assimilé ✔️ </p> : null}
        {isValidated === "FALSE" ? <p> Pas acquis ❌ </p> : null}
        {isValidated === "INPROGRESS" ? <p> In progress 🔄 </p> : null}
        <FormElements>
          <RadioButtons>
            <Achievment>Terminé</Achievment>
            <InputAchievment
              name="achievment"
              type="radio"
              value="TRUE"
              checked={achievment === "TRUE"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <RadioButtons>
            <Achievment>Pas acquis</Achievment>
            <InputAchievment
              name="achievment"
              type="radio"
              value="FALSE"
              checked={achievment === "FALSE"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <RadioButtons>
            <Achievment>In progress</Achievment>
            <InputAchievment
              name="achievment"
              type="radio"
              value="INPROGRESS"
              checked={achievment === "INPROGRESS"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <InputComments
            name="newComments"
            type="text"
            placeholder={comments}
            value={newComments}
            onChange={(e) => setNewComments(e.target.value)}
          />
          <Button type="submit">Mettre à jour</Button>
        </FormElements>
      </Form>
    </Card>
  );
}

export default Course;
