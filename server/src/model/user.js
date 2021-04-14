import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    avater: { type: String },
  },
  { timestamps: true }
);

const User = model("user", schema);
export default User;
