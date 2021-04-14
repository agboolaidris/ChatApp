import { gql } from "apollo-server-express";
export default gql`
  type Query {
    getAllUser: [User!]!
  }

  type Mutation {
    createUser(inputUser: InputUser!): User!
    fileUploader(file: Upload!): String!
  }

  input InputUser {
    username: String!
    email: String!
    password: String!
    avater: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    avater: String
    created_at: String
    update_at: String
  }
`;
