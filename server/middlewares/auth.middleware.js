const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");

exports.authenticateUser = asyncHandler(async (req, res, next) => {
  let token = "";
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      let user = await User.findById(decoded.id).select("-password");

      if (!user._id) {
        res.status(401);
        throw new Error("Not authorized, wrong token");
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({
        status: "error",
        message: "Not authorized, token failed",
      });
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
