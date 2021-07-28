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