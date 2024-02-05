import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation addProject($name: String!, $description: String!, $status: String!) {
    addProject(name: $name, description: $description, status: $status) {
      id
      name
      description
      status
    }
  }
`;
export default ADD_PROJECT;
