const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { sequelize } = require("./models");

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 5000 }).then((res) => {
  console.log(`server running on ${res.url}`);
});
