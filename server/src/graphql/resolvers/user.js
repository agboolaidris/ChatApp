import User from "../../model/user.js";
import { parse, join } from "path";
import { hash, compare } from "bcrypt";
import { createWriteStream } from "fs";
import { ApolloError } from "apollo-server-errors";
import { Sign } from "../../helpers/jwt";

export default {
  Query: {
    login: async (_, { username, password }, context) => {
      console.log(context);
      try {
        //check if username is exist
        const user = await User.findOne({ username });
        if (!user) throw new Error("user does not exist");

        //compare password
        const comparePassword = await compare(password, user.password);
        if (!comparePassword) throw new Error("credentials doesn't match");

        //generate token
        const token = await Sign(user);

        return {
          token: `Bearer ${token}`,
          user,
        };
      } catch (error) {
        throw new ApolloError(error.message, 400);
      }
    },
  },

  Mutation: {
    register: async (_, { inputUser }) => {
      try {
        let { username, email, password } = inputUser;

        //check if email address is be taken
        const userByEmail = await User.findOne({ email });
        if (userByEmail) throw new Error("Email address has been taken");

        //check if email address is be taken
        const userByUsername = await User.findOne({ username });
        if (userByUsername) throw new Error("Username already exist");

        //hash password
        password = await hash(password, 10);

        //save user
        const user = new User({ username, email, password });
        const res = await user.save();

        //generate token
        const token = await Sign(res);

        return {
          token: `Bearer ${token}`,
          user: res,
        };
      } catch (error) {
        throw new ApolloError(error.message, 400);
      }
    },

    fileUploader: async (_, { file }) => {
      try {
        let { createReadStream, filename } = await file;
        const stream = createReadStream();

        let { name, ext } = parse(filename);

        name = name.replace(/([^a-z0-9]+)/gi, "_").replace(" ", "_");
        let path = join(__dirname, `../../uploads/${name}${Date.now()}-${ext}`);

        await new Promise((resolve, reject) => {
          const writeStream = createWriteStream(path);

          writeStream.on("finish", resolve);

          writeStream.on("error", (error) => {
            unlink(path, () => {
              reject(error);
            });
          });

          stream.on("error", (error) => writeStream.destroy(error));
          stream.pipe(writeStream);
        });

        path = `http://localhost:5000${path.split("uploads")[1]}`;

        return path;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
