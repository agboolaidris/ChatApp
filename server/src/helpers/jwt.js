import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

export const Sign = async (user) => {
  const token = await sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: 60 * 60 * 24 }
  );
  return token;
};
