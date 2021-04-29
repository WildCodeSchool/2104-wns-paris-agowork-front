import React from "react";
import Course, { CourseProps } from "./Course";
import { ModuleWrapper } from "../../../assets/styles/elements";

export type CourseModuleProps = {
  id?: string;
  moduleTitle: string;
  courses: CourseProps[];
};

function CourseModule({
  id,
  moduleTitle,
  courses,
}: CourseModuleProps): JSX.Element {
  return (
    <ModuleWrapper>
      <h2>{moduleTitle}</h2>
      {courses.map((course) => (
        <Course
          id={course.id}
          key={course.id}
          courseTitle={course.courseTitle}
          isValidated={course.isValidated}
          comments={course.comments}
        />
      ))}
    </ModuleWrapper>
  );
}

export default CourseModule;
