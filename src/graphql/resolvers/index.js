const { User } = require("../../models");
module.exports = {
  Query: {
    getAllUsers: async () => {
      try {
        const user = await User.findAll();
        return user;
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    },
  },

  Mutation: {
    register: async (_, args) => {
      const { username, email, password, password2 } = args;
      try {
        //TODO-1: validate the input
        console.log(email, username);
        //TODO-2: check if username & email does not exist in database

        //TODO-3: save user into the data base
        const user = await User.create({
          username,
          email,
          password,
        });

        //TODO-4 : send user back to database
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
