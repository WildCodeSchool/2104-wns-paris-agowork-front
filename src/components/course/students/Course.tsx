// ts-nocheck
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
  const [updateIsValidated, { data, error }] = useMutation(UPDATE_ISVALIDATED);
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
                achievment,
              },
            },
          });
        }}
      >
        {data && (
          <p>modification effectuée : {data.updateIsValidated.isValidated}</p>
        )}

        <div onChange={(e) => setAchievment(e.target.value)}>
          {isValidated === "TRUE" ? (
            <p> Terminé & assimilé ✔️ </p>
          ) : (
            <>
              <input name="isValidated-input" type="radio" value="TRUE" />
            </>
          )}

          {isValidated === "FALSE" ? (
            <p> Pas acquis ❌ </p>
          ) : (
            <>
              <input name="isValidated-input" type="radio" value="FALSE" />
            </>
          )}

          {isValidated === "INPROGRESS" ? (
            <p> In progress 🔄 </p>
          ) : (
            <>
              <input name="isValidated-input" type="radio" value="INPROGRESS" />
            </>
          )}
        </div>
      </form>
      {error ? <p>{error}</p> : ""}
      <div>{comments}</div>
    </div>
  );
}

export default Course;
