"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
const typeDefs = apollo_server_express_1.gql `
  type User {
    _id: ID!
    username: String!
    email: String!
    createdAt: String
    updatedAt: String
    token: String
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
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map