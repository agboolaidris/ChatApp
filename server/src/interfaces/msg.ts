import { Document } from "mongoose";
export interface MsgProps extends Document {
  from: string;
  to: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
