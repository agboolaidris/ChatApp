const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps }
);

module.exports = User = model("User", schema);
