import { gql } from "apollo-server-express";
export default gql`
  type Query {
    getAllUser: [User!]!
    login(username: String!, password: String!): AuthRes!
  }

  type Mutation {
    register(inputUser: InputUser!): AuthRes!
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
    avater: String
    created_at: String
    update_at: String
  }

  type AuthRes {
    token: String!
    user: User!
  }
`;
