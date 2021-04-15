const AuthMiddleware = async (req, res, next) => {
  ///console.log(req);
  return next();
};

export default AuthMiddleware;
