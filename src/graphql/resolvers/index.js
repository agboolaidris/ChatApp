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
};
