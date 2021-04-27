import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  Card,
  Form,
  FormElements,
  RadioButtons,
  Label,
  Input,
} from "../../../styles/elements";

export type CourseProps = {
  _id?: string;
  courseTitle: string;
  isValidated: string;
  comments: string;
  subCourse?: unknown;
};

const UPDATE_ISVALIDATED = gql`
  mutation updateIsValidated($input: CourseInput) {
    updateIsValidated(input: $input) {
      isValidated
    }
  }
`;

function Course({
  courseTitle,
  comments,
  isValidated,
}: CourseProps): JSX.Element {
  const [achievment, setAchievment] = useState("");
  const [updateIsValidated, { data }] = useMutation(UPDATE_ISVALIDATED);
  // eslint-disable-next-line
  console.log(data);
  return (
    <Card>
      <h3>{courseTitle}</h3>
      <Form
        onChange={async (e) => {
          e.preventDefault();
          updateIsValidated({
            variables: {
              input: {
                achievment,
              },
            },
          });
        }}
      >
        {data && (
          <p>modification effectuée : {data.updateIsValidated.isValidated}</p>
        )}

        <FormElements>
          {isValidated === "TRUE" ? (
            <RadioButtons>Terminé & assimilé ✔️</RadioButtons>
          ) : (
            <RadioButtons>
              <Label htmlFor="isValidated-input"> Oui </Label>
              <Input
                id="isValidated-input"
                type="radio"
                value="TRUE"
                onChange={(e) => setAchievment("TRUE")}
              />
            </RadioButtons>
          )}

          {isValidated === "FALSE" ? (
            <RadioButtons> Pas acquis ❌ </RadioButtons>
          ) : (
            <RadioButtons>
              <Label htmlFor="isValidated-input"> Non </Label>
              <Input
                id="isValidated-input"
                type="radio"
                value="FALSE"
                onChange={(e) => setAchievment(e.target.value)}
              />
            </RadioButtons>
          )}

          {isValidated === "INPROGRESS" ? (
            <RadioButtons> In progress 🔄 </RadioButtons>
          ) : (
            <RadioButtons>
              <Label htmlFor="isValidated-input"> In progress </Label>
              <input
                id="isValidated-input"
                type="radio"
                value="INPROGRESS"
                onChange={(e) => setAchievment(e.target.value)}
              />
            </RadioButtons>
          )}
        </FormElements>
      </Form>
      <div>
        <p>{comments}</p>
      </div>
    </Card>
  );
}

export default Course;
