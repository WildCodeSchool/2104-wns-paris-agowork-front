import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
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

export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      firstname
      lastname
      email
      town
      role
      campus {
        name
      }
    }
  }
`;

export const UPDATE_MOOD = gql`
  mutation updateMood($input: MoodInput!) {
    updateMood(input: $input) {
      email
      mood
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      firstname
      lastname
    }
  }
`;
