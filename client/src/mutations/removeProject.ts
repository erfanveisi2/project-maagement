import { gql } from "@apollo/client";

const DELETE_PROJECT = gql`
  mutation removeProject($id: ID!) {
    removeProject(id: $id) {
      id
    }
  }
`;
export default DELETE_PROJECT;
