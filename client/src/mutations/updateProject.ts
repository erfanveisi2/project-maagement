import { gql } from "@apollo/client";

const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: String!
    $clientId: ID!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
export default UPDATE_PROJECT;
