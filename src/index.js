const { ApolloServer, gql } = require("apollo-server");
const Post = require("./model/post");
const typeDefs = require("./graphql/typeDefs");
//db
require("./db/mongose");

const resolver = {
  Query: {
    getAllPost: async () => {
      try {
        const post = await Post.find();
        return post;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolver });

server.listen({ port: 5000 }).then((res) => {
  console.log(`server running on ${res.url}`);
});
