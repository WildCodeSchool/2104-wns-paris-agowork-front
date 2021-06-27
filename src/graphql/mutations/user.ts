import { gql } from "@apollo/client";

export const Login = gql`
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

export const CreateUser = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
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
