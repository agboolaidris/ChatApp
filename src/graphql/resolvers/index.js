const postResolver = require("./post");

module.exports = {
  Query: {
    ...postResolver.Query,
  },
};
