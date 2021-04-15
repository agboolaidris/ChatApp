import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    avater: {
      type: String,
      default:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
  },
  { timestamps: true }
);

//getPublicProfile
schema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = model("user", schema);
export default User;
