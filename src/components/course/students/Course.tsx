import React from "react";
import { Card } from "../../../styles/elements";

export type CourseProps = {
  _id?: string;
  courseTitle: string;
  isValidated: boolean;
  comments: string;
  subCourse?: unknown;
};

function Course({
  courseTitle,
  isValidated,
  comments,
}: CourseProps): JSX.Element {
  return (
    <Card>
      <div>
        <h3>{courseTitle}</h3>

        <li>
          {isValidated ? (
            <div>
              <p>Oui ✔️</p>
            </div>
          ) : (
            <div>
              <p>Non</p>
            </div>
          )}
        </li>
      </div>
      <div>{comments}</div>
    </Card>
  );
}

export default Course;
