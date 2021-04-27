import React from "react";
import Course, { CourseProps } from "./Course";

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
    <div>
      <h2>{moduleTitle}</h2>
      <div>
        {courses.map((course) => (
          <Course
            id={id}
            key={course.id}
            courseTitle={course.courseTitle}
            isValidated={course.isValidated}
            comments={course.comments}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseModule;
