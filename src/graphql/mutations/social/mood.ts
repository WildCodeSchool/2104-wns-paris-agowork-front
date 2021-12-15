import { gql } from "@apollo/client";

export const DELETE_MOOD = gql`
  mutation deleteMood($id: ID!) {
    deleteMood(id: $id) {
      id
      name
      icon
    }
  }
`;
