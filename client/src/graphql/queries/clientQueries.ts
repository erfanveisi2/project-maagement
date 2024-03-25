import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const GET_CLIENT = gql`
  query getClient($id: ID!) {
    client(id: $id) {
      id
      name
      phone
      email
    }
  }
`;

export { GET_CLIENTS, GET_CLIENT };
