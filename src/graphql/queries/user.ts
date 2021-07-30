import { gql } from "@apollo/client";

export const GetAllUsers = gql`
  query getAllUsers {
    getAllUsers{
      firstname
      lastname
      email
      town
      picture
      role
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