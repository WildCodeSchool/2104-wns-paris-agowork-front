import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

export type CourseProps = {
  _id?: string;
  courseTitle: string;
  isValidated: string;
  comments: string;
  subCourse?: unknown;
};

const UPDATE_ISVALIDATED = gql`
  mutation updateIsValidated($isValidated: CourseInput) {
    updateIsValidated(isValidated: $isValidated) {
      isValidated
    }
  }
`;

function Course({ courseTitle, comments }: CourseProps): JSX.Element {
  const [isValidated, setIsValidated] = useState("");
  const [updateIsValidated, { data }] = useMutation(UPDATE_ISVALIDATED);
  console.log(data);
  return (
    <div>
      <h3>{courseTitle}</h3>
      <form
        onChange={async (e) => {
          e.preventDefault();
          updateIsValidated({
            variables: {
              input: {
                isValidated,
              },
            },
          });
        }}
      >
        {data && (
          <p>status {data.updateIsValidated.isValidated} a été modifié</p>
        )}
        <label htmlFor="isValidated-input-true"> Oui </label>
        <input
          id="isValidated-input-true"
          type="radio"
          value="TRUE"
          onChange={(e) => setIsValidated(e.target.value)}
        />

        <label htmlFor="isValidated-input-false"> Non </label>
        <input
          id="isValidated-input-false"
          type="radio"
          value="FALSE"
          onChange={(e) => setIsValidated(e.target.value)}
        />

        <label htmlFor="isValidated-input-inprogress"> En cours </label>
        <input
          id="isValidated-input-inprogress"
          type="radio"
          value="INPROGRESS"
          onChange={(e) => setIsValidated(e.target.value)}
        />
      </form>
      <div>{comments}</div>
    </div>
  );
}

export default Course;
