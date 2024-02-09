import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation removeClient($id: ID!) {
    removeClient(id: $id) {
      id
    }
  }
`;
export default DELETE_CLIENT;
