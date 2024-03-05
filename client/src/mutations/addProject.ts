import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $status: String!
    $clientId: ID!
  ) {
    addProject(
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
export default ADD_PROJECT;
