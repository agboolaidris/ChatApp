import { model, Schema } from "mongoose";
import { MsgProps } from "../interfaces/msg";

const schema: Schema = new Schema(
  {
    content: { type: String, required: true, unique: true },
    from: { type: String, required: true, unique: true },
    to: { type: String, required: true },
  },
  { timestamps: true }
);

export const Msg = model<MsgProps>("User", schema);
