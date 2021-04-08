const { UserInputError } = require("apollo-server");
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
      const errors = {};
      try {
        //TODO-1: validate the input
        if (username.trim() === "")
          errors.username = "Username must not be empty";

        if (email.trim() === "") errors.email = "Email must not be empty";

        if (password.trim() === "")
          errors.password = "Password must not be empty";

        if (password2.trim() === "")
          errors.password2 = "Confirm password must not be empty";
        if (password !== password2)
          errors.password2 = "password does not match";
        //TODO-2: check if username & email does not exist in database
        // const userByUsername = await User.findOne({ where: { username } });
        // const userByEmail = await User.findOne({ where: { email } });

        // if (userByUsername) errors.username = "Username already exist";
        // if (userByEmail) errors.email = "Email already exist";

        if (Object.keys(errors).length > 0) throw errors;
        //TOD-3: hash password

        //TODO-4: save user into the data base
        const user = await User.create({
          username,
          email,
          password,
        });

        //TODO-5 : send user back to database
        return user;
      } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError") {
          err.errors.forEach(
            (e) =>
              (errors[e.path.split(".")[1]] = `${
                e.path.split(".")[1]
              } has been taken`)
          );
        } else if (err.name === "SequelizeValidationError") {
          err.errors.forEach((e) => (errors[e.path] = e.message));
        }
        throw new UserInputError("bad response", { errors });
      }
    },
  },
};
