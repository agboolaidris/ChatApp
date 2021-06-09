import expres from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import cors from "cors";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { ENV } from "./config";
import contextMiddleware from "./utils/contextMiddle";

const main = async () => {
  const app = expres();
  const PORT = process.env.PORT || 5000;
  app.use(cors());
  try {
    await mongoose.connect(
      ENV.NODE_ENV === "dev" ? "mongodb://localhost/chatapp" : ENV.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: contextMiddleware,
      playground: true,
    });
    await server.start();

    server.applyMiddleware({ app });

    app.listen(PORT, () => {
      console.log(`app is listen on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

main();
