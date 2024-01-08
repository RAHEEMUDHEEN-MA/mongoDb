const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let Token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      Token = req.headers.authorization.split(" ")[1];
      jwt.verify(Token, process.env.JWT_SECRET_KEY);
      next();
    } catch (error) {
      res.status(401).send("no token");
    }
  }
  if (!Token) {
    res.status(401).send("no token");
  }
};

module.exports = protect;
