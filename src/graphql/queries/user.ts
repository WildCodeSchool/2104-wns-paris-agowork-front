import { gql } from "@apollo/client";

export const Login = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      firstname
      lastname
      email
      town
      picture
      token
      role
    }
  }
`;

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