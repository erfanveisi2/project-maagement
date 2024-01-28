import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      description
      name
      status
    }
  }
`;

export default GET_PROJECTS;
