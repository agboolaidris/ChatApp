import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./graphql";
import { createConnection } from "typeorm";
const app = express();
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApp = async () => {
  try {
      
    await server.applyMiddleware({ app });

    await createConnection({
      host: "",
      database: "",
      username: "",
      password: "",
      type: "mysql",
    });

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
