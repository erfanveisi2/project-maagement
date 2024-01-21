import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation removeClient($id: ID!) {
    removeClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
export default DELETE_CLIENT;
