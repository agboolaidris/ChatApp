const Post = require("../../model/post");

module.exports = {
  Query: {
    getAllPost: async () => {
      try {
        const post = await Post.find();
        return post;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
