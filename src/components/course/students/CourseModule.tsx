import React from "react";
import Course, { CourseProps } from "./Course";

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
    <div>
      <h2>{moduleTitle}</h2>
      <div>
        {courses.map((course) => (
          <Course
            key={course._id}
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
