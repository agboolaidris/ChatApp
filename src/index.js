const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolver = require("./graphql/resolvers");

//db
require("./db/mongose");

const server = new ApolloServer({ typeDefs, resolver });

server.listen({ port: 5000 }).then((res) => {
  console.log(`server running on ${res.url}`);
});
