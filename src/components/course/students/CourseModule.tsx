import React from "react";
import Course, { CourseProps } from "./Course";
import { ModuleWrapper } from "../../../styles/elements";

export type CourseModuleProps = {
  _id?: string;
  moduleTitle: string;
  courses: CourseProps[];
};

function CourseModule({
  moduleTitle,
  courses,
}: CourseModuleProps): JSX.Element {
  return (
    <ModuleWrapper>
      <h2>{moduleTitle}</h2>
      {courses.map((course) => (
        <Course
          key={course._id}
          courseTitle={course.courseTitle}
          isValidated={course.isValidated}
          comments={course.comments}
        />
      ))}
    </ModuleWrapper>
  );
}

export default CourseModule;
