import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserInputError } from "apollo-server-express";

import { ENV } from "../config";
import { User } from "../schema/user";
import { UserProps } from "../interfaces/user";

export const register = async (_: any, args: any) => {
  let { username, email, password, password2 } = args;
  const error: any = {};
  try {
    console.log("valiadat");
    //validate input field
    if (username.trim() === "") error.username = "field is required";
    if (email.trim() === "") error.email = "field is required";
    if (password.trim() === "") error.password = "field is required";
    if (password2.trim() === "") error.password2 = "field is required";

    if (Object.keys(error).length > 0) throw error;

    //check password length
    if (password.length < 6)
      error.password = "most be greater than 6 characters";

    //check password matches
    if (password !== password2) error.password2 = "password not match";

    //check if username or email already exist
    const userEmail = await User.findOne({ email });
    if (userEmail) error.email = "email already exist";

    const userUsername = await User.findOne({ username });
    if (userUsername) error.username = "username already exist";

    if (Object.keys(error).length > 0) throw error;

    //hash password
    password = await bcrypt.hash(password, 10);

    //create user
    const user = new User({ username, email, password });
    await user.save();

    return user;
  } catch (err) {
    throw new UserInputError("bad Input", { error: err });
  }
};

export const login = async (_: any, args: any) => {
  const { username, password } = args;
  const error: any = {};
  try {
    //validate input field
    if (username.trim() === "") error.username = "username field is required";
    if (password.trim() === "") error.password = "password field is required";

    if (Object.keys(error).length > 0)
      throw new UserInputError("input error", error);

    //check if username exist
    const user: UserProps | null = await User.findOne({ username });
    if (!user)
      throw new UserInputError("input error", {
        username: "user not found",
      });

    //compare password
    const compare = await bcrypt.compare(password, user.password); //await bcrypt.compare(password, user.password);
    console.log(compare);

    if (!compare)
      throw new UserInputError("input error", {
        password: "password not match",
      });
    console.log(compare);

    //generate a token
    const token = jwt.sign({ _id: user._id }, ENV.JWT_SECRET, {
      expiresIn: "24hr",
    });

    return {
      ...user.toJSON(),
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      token,
    };
  } catch (error) {
    throw new UserInputError("Invalid Input", { error: error });
  }
};
