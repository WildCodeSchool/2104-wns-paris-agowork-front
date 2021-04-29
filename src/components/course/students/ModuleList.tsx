import React from "react";
import { useQuery, gql } from "@apollo/client";
import { CardRow, Container } from "../../../assets/styles/elements";
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
  if (loading)
    return (
      <Container>
        <CardRow>
          <p>Loading...</p>
        </CardRow>
      </Container>
    );
  if (error) return <p>Error :(</p>;
  return (
    <Container>
      <h1>Lundi 27 avril 2021</h1>
      <CardRow>
        {data.allCourseModules.map((module: CourseModuleProps) => (
          <CourseModule
            id={module.id}
            key={module.id}
            moduleTitle={module.moduleTitle}
            courses={module.courses}
          />
        ))}
      </CardRow>
    </Container>
  );
}

export default ModuleList;
