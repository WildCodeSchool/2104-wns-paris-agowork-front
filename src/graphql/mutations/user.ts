import { gql } from "@apollo/client";

export const CreateUser = gql`
  mutation createUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $town: String!
    $picture: String!
    $password: String!
    $role: Role!
  ) {
    createUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      town: $town
      picture: $picture
      password: $password
      role: $role
    ) {
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
