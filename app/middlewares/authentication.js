const jwt = require("jsonwebtoken");
const User = require("../models/user");



const authenticateUser = (req, res, next) => {
  // verify token //note:try catch to handle run time error
  const token = req.header("x-auth").split(" ")[1];

  // try catch block
  try {
    const tokenData = jwt.verify(token, process.env["JWT_SECRET"]);
    req.userId = tokenData._id;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};

module.exports = {
  authenticateUser,
};
