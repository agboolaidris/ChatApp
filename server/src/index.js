import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./graphql/index.js";
import mongoose from "mongoose";
import { DB_URL } from "./config/config.js";
const app = express();

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {},
  playground: true,
});

const startApp = async () => {
  try {
    await server.applyMiddleware({ app });
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
