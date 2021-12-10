import { gql } from "@apollo/client";

export const CreateCampus = gql`
  mutation createCampus($input: CampusInput!) {
    createCampus(input: $input) {
      id
      name
    }
  }
`;
