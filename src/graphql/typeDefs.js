const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    _id: ID!
    body: String!
    userID: String
  }
  type Query {
    getAllPosts: [Post]
  }
`;
