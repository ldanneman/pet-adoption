const jwt = require("jsonwebtoken");
const User = require("../model/User");

module.exports = async function (req, res, next) {
  const token = req.header("auth-token");

  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  const admin = await User.findById(decoded._id);
  if (admin.role == "admin") {
    res.status(200).send("Admin Privilege");
  } else {
    res.status(401).send("Not and Admin");
  }
};
