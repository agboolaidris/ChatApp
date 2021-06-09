import { model, Schema } from "mongoose";
import { UserProps } from "../interfaces/user";

const schema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avater: { type: String },
  },
  { timestamps: true }
);

export const User = model<UserProps>("User", schema);
