import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  Card,
  Form,
  Achievment,
  Input,
  RadioButtons,
  FormElements,
} from "../../../styles/elements";

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
            <Input
              name="achievment"
              type="radio"
              value="TRUE"
              checked={achievment === "TRUE"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <RadioButtons>
            <Achievment>Pas acquis</Achievment>
            <Input
              name="achievment"
              type="radio"
              value="FALSE"
              checked={achievment === "FALSE"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <RadioButtons>
            <Achievment>In progress</Achievment>
            <Input
              name="achievment"
              type="radio"
              value="INPROGRESS"
              checked={achievment === "INPROGRESS"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
        </FormElements>
        <button type="submit">Mettre à jour</button>
      </Form>
      <div>
        <p>{comments}</p>
      </div>
    </Card>
  );
}

export default Course;
