import { gql } from "@apollo/client";

export const CREATE_MOOD = gql`
  mutation createMood($input: MoodInput!) {
    createMood(input: $input) {
      name
      icon
    }
  }
`;
