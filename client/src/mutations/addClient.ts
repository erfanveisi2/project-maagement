import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $phone: String!, $email: String!) {
    addClient(name: $name, phone: $phone, email: $email) {
      id
      name
      email
      phone
    }
  }
`;

export default ADD_CLIENT;
