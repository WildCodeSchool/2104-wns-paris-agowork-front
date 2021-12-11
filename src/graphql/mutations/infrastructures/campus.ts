import { gql } from "@apollo/client";

export const CREATE_CAMPUS = gql`
  mutation createCampus($input: CampusInput!) {
    createCampus(input: $input) {
      id
      name
      address
      phone
    }
  }
`;
