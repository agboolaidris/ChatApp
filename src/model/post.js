const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    body: { type: String },
    userID: { type: String },
    comments: [
      {
        comment: { type: String },
        userID: { type: String },
        create_at: { type: Date, default: Date.now() },
      },
    ],
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = Post = model("Post", schema);
