/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation addClient($name: String!, $phone: String!, $email: String!) {\n  addClient(name: $name, phone: $phone, email: $email) {\n    id\n    name\n    email\n    phone\n  }\n}": types.AddClientDocument,
    "mutation AddProject($name: String!, $description: String!, $status: String!, $clientId: ID!) {\n  addProject(\n    name: $name\n    description: $description\n    status: $status\n    clientId: $clientId\n  ) {\n    id\n    name\n    description\n    status\n    client {\n      id\n      name\n      email\n      phone\n    }\n  }\n}": types.AddProjectDocument,
    "mutation removeClient($id: ID!) {\n  removeClient(id: $id) {\n    id\n  }\n}": types.RemoveClientDocument,
    "mutation removeProject($id: ID!) {\n  removeProject(id: $id) {\n    id\n  }\n}": types.RemoveProjectDocument,
    "mutation UpdateClient($id: ID!, $phone: String, $email: String, $name: String) {\n  updateClient(id: $id, phone: $phone, email: $email, name: $name) {\n    email\n    id\n    name\n    phone\n  }\n}": types.UpdateClientDocument,
    "mutation UpdateProject($id: ID!, $name: String!, $description: String!, $status: String!, $clientId: ID!) {\n  updateProject(\n    id: $id\n    name: $name\n    description: $description\n    status: $status\n    clientId: $clientId\n  ) {\n    id\n    name\n    description\n    status\n    client {\n      id\n      name\n      email\n      phone\n    }\n  }\n}": types.UpdateProjectDocument,
    "query getClient($id: ID!) {\n  client(id: $id) {\n    id\n    name\n    phone\n    email\n  }\n}": types.GetClientDocument,
    "query getClients {\n  clients {\n    id\n    name\n    email\n    phone\n  }\n}": types.GetClientsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation addClient($name: String!, $phone: String!, $email: String!) {\n  addClient(name: $name, phone: $phone, email: $email) {\n    id\n    name\n    email\n    phone\n  }\n}"): (typeof documents)["mutation addClient($name: String!, $phone: String!, $email: String!) {\n  addClient(name: $name, phone: $phone, email: $email) {\n    id\n    name\n    email\n    phone\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddProject($name: String!, $description: String!, $status: String!, $clientId: ID!) {\n  addProject(\n    name: $name\n    description: $description\n    status: $status\n    clientId: $clientId\n  ) {\n    id\n    name\n    description\n    status\n    client {\n      id\n      name\n      email\n      phone\n    }\n  }\n}"): (typeof documents)["mutation AddProject($name: String!, $description: String!, $status: String!, $clientId: ID!) {\n  addProject(\n    name: $name\n    description: $description\n    status: $status\n    clientId: $clientId\n  ) {\n    id\n    name\n    description\n    status\n    client {\n      id\n      name\n      email\n      phone\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation removeClient($id: ID!) {\n  removeClient(id: $id) {\n    id\n  }\n}"): (typeof documents)["mutation removeClient($id: ID!) {\n  removeClient(id: $id) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation removeProject($id: ID!) {\n  removeProject(id: $id) {\n    id\n  }\n}"): (typeof documents)["mutation removeProject($id: ID!) {\n  removeProject(id: $id) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateClient($id: ID!, $phone: String, $email: String, $name: String) {\n  updateClient(id: $id, phone: $phone, email: $email, name: $name) {\n    email\n    id\n    name\n    phone\n  }\n}"): (typeof documents)["mutation UpdateClient($id: ID!, $phone: String, $email: String, $name: String) {\n  updateClient(id: $id, phone: $phone, email: $email, name: $name) {\n    email\n    id\n    name\n    phone\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateProject($id: ID!, $name: String!, $description: String!, $status: String!, $clientId: ID!) {\n  updateProject(\n    id: $id\n    name: $name\n    description: $description\n    status: $status\n    clientId: $clientId\n  ) {\n    id\n    name\n    description\n    status\n    client {\n      id\n      name\n      email\n      phone\n    }\n  }\n}"): (typeof documents)["mutation UpdateProject($id: ID!, $name: String!, $description: String!, $status: String!, $clientId: ID!) {\n  updateProject(\n    id: $id\n    name: $name\n    description: $description\n    status: $status\n    clientId: $clientId\n  ) {\n    id\n    name\n    description\n    status\n    client {\n      id\n      name\n      email\n      phone\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getClient($id: ID!) {\n  client(id: $id) {\n    id\n    name\n    phone\n    email\n  }\n}"): (typeof documents)["query getClient($id: ID!) {\n  client(id: $id) {\n    id\n    name\n    phone\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getClients {\n  clients {\n    id\n    name\n    email\n    phone\n  }\n}"): (typeof documents)["query getClients {\n  clients {\n    id\n    name\n    email\n    phone\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;