import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      firstname
      lastname
      picture
      mood {
        icon
        name
      }
      campus {
        name
      }
    }
  }
`;

export const GET_STUDENTS_MOOD = gql`
  query getAllStudentsByMood {
    getAllStudentsByMood {
      id
      firstname
      lastname
      picture
      mood {
        name
        icon
      }
    }
  }
`;

export const GetLoggedUserByEmail = gql`
  query loggedUser {
    loggedUser {
      firstname
      lastname
      email
      town
      picture
      role
    }
  }
`;
