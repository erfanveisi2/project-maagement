import { gql } from "@apollo/client";

const UPDATE_CLIENT = gql`
mutation UpdateClient(
    $id:ID!
    $name: String!
    $email: String!
    $phone:: String!

){
    updateClient(
        id:$id
        name:$name
        email:$email
        phone:$phone
    ){
        id
        name
        email
        phone
    }
}
`;
export default UPDATE_CLIENT;
