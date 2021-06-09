import { Document } from "mongoose";
export interface UserProps extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  token?: string;
}
