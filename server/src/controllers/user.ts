import { AuthenticationError } from "apollo-server-errors";
import { User } from "../schema/user";

export const getAllUsers = async (_: any, args: any, { userID }: any) => {
  try {
    if (!userID) throw new AuthenticationError("unathorize");
    return User.find({ _id: { $ne: userID } });
  } catch (error) {
    throw error;
  }
};
