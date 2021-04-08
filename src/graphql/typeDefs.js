const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: String
    username: String!
    email: String
    password: String
  }
  type Query {
    getAllUsers: [User]
  }
`;
