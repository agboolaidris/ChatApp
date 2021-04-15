import express from "express";
import { ApolloServer } from "apollo-server-express";
import { join } from "path";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./graphql/index.js";
import { DB_URL } from "./config/config.js";
import AuthMiddleware from "./middleware/auth.js";
import { default as cookieParser } from "cookie-parser";
import { default as cors } from "cors";

//initialize express application
const app = express();

const PORT = process.env.PORT || 5000;

//static files
app.use(express.static(join(__dirname, "./uploads")));

app.use(
  cors({
    credentials: true,
    exposedHeaders: ["access-token"],
  })
);

//set cookie
app.use(cookieParser());

//authMiddleware
app.use(AuthMiddleware);

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  formatError: (error) => {
    const message = error.message
      .replace("SequelizeValidationError: ", "")
      .replace("Validation error: ", "");

    return {
      ...error,
      message,
    };
  },

  context: ({ req, res }) => {
    return { req, res };
  },
  playground: true,
});

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
