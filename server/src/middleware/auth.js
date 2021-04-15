const AuthMiddleware = async (req, res, next) => {
  console.log(res.cookie);
  return next();
};

export default AuthMiddleware;
