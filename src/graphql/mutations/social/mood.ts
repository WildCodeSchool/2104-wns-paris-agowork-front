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

export const CREATE_MOOD = gql`
  mutation createMood($input: MoodInput!) {
    createMood(input: $input) {
      id
      name
      icon
    }
  }
`;

export const UPDATE_MOOD = gql`
  mutation updateMood($input: MoodInput!) {
    updateMood(input: $input) {
      id
      email
      mood
    }
  }
`;
