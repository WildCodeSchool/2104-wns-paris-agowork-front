import { gql } from "@apollo/client";

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
