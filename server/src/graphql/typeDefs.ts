import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    createdAt: String
    updatedAt: String
    token: String
  }
  type Msg {
    _id: ID!
    to: ID!
    from: ID!
    content: String!
    createdAt: String
    updatedAt: String
  }
  type Query {
    getAllUsers: [User!]
    login(username: String!, password: String!): User!
  }

  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      password2: String!
    ): User!

    sendMsg(to: ID!, content: String!): Msg!
  }
`;

export default typeDefs;
