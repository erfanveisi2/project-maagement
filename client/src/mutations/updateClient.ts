import { gql } from "@apollo/client";

const UPDATE_CLIENT = gql`
  mutation UpdateClient(
    $id: ID!
    $phone: String
    $email: String
    $name: String
  ) {
    updateClient(id: $id, phone: $phone, email: $email, name: $name) {
      email
      id
      name
      phone
    }
  }
`;
export default UPDATE_CLIENT;
