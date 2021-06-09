import { login, register } from "../controllers/auth";
import { getAllUsers } from "../controllers/user";

const resolvers = {
  Query: {
    getAllUsers,
    login,
  },

  Mutation: {
    register,
  },
};

export default resolvers;
