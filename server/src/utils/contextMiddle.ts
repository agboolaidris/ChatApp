import jwt from "jsonwebtoken";

export default (ctx: any) => {
  if (ctx.req && ctx.req.headers.authorization) {
    const token = ctx.req.headers.authorization.split(" ")[1];
    const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";

    jwt.verify(token, secret, (error: any, decoded: any) => {
      if (error) {
        //   throw new AuthenticationError("UnAuthorize");
      }
      ctx.userID = decoded._id;
    });
  }
};
