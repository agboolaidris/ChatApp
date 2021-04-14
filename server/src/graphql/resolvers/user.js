import User from "../../model/user.js";
import { parse, join } from "path";
import { createWriteStream } from "fs";
export default {
  Query: {
    getAllUser: async () => {},
  },

  Mutation: {
    createUser: async (_, { inputUser }) => {
      try {
        const { username, email, password } = inputUser;
        const user = new User({ username, email, password });
        const res = await user.save();
        return res;
      } catch (error) {
        console.log(error);
      }
    },

    fileUploader: async (_, { file }) => {
      try {
        const { filename, createReadStream } = await file;

        let stream = createReadStream();

        let { ext, name } = parse(filename);

        name = name.replace(/([^a-z0-9 ]+)/gi, "-").replace(" ", "_");

        let serverFile = join(
          __dirname,
          `../../uploads/${name}-${Date.now()}${ext}`
        );

        serverFile = serverFile.replace(" ", "_");

        let writeStream = await createWriteStream(serverFile);

        await stream.pipe(writeStream);

        serverFile = `${serverFile.split("uploads")[1]}`;

        return serverFile;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
