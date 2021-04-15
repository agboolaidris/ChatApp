import express from "express";
import { ApolloServer } from "apollo-server-express";
import { join } from "path";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./graphql/index.js";
import { DB_URL } from "./config/config.js";
import AuthMiddleware from "./middleware/auth.js";

//initialize express application
const app = express();

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {},
  playground: true,
});

//static files
app.use(express.static(join(__dirname, "./uploads")));

//authMiddleware
app.use(AuthMiddleware);

const startApp = async () => {
  try {
    //inject apollo server middleware into express application
    await server.applyMiddleware({ app });

    //config database
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
