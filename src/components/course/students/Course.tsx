import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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
  const [achievment, setAchievment] = useState(isValidated);
  const [updateIsValidated, { data, error }] = useMutation(UPDATE_ISVALIDATED);
  let message = null;
  if (data && data.updateIsValidated) {
    message = data.updateIsValidated.isValidated;
  }
  return (
    <div>
      <h3>{courseTitle}</h3>
      {message ? <p>New value: {message}</p> : null}
      <form
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
        <span>Terminé</span>
        <input
          name="achievment"
          type="radio"
          value="TRUE"
          checked={achievment === "TRUE"}
          onChange={(e) => setAchievment(e.target.value)}
        />
        <br />
        <span>Pas acquis</span>
        <input
          name="achievment"
          type="radio"
          value="FALSE"
          checked={achievment === "FALSE"}
          onChange={(e) => setAchievment(e.target.value)}
        />
        <br />
        <span>In progress</span>
        <input
          name="achievment"
          type="radio"
          value="INPROGRESS"
          checked={achievment === "INPROGRESS"}
          onChange={(e) => setAchievment(e.target.value)}
        />
        <br />
        <button type="submit">Edit</button>
      </form>
      {error ? <p>{error}</p> : ""}
      <div>{comments}</div>
    </div>
  );
}

export default Course;
