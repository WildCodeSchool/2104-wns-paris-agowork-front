import React from "react";
import { useQuery, gql } from "@apollo/client";
import { CardRow, Container } from "../../../styles/elements";
import CourseModule, { CourseModuleProps } from "./CourseModule";

const ALL_MODULES = gql`
  query GetAllCourseModules {
    allCourseModules {
      id
      moduleTitle
      courses {
        id
        courseTitle
        comments
        isValidated
      }
    }
  }
`;

function ModuleList(): JSX.Element {
  const { loading, error, data } = useQuery(ALL_MODULES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <Container>
        <h2>Lundi 27 avril 2021</h2>
        <CardRow>
          {data.allCourseModules.map((module: CourseModuleProps) => (
            <CourseModule
              key={module._id}
              moduleTitle={module.moduleTitle}
              courses={module.courses}
            />
          ))}
        </CardRow>
      </Container>
    </div>
  );
}

export default ModuleList;
