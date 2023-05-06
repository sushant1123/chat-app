const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const { generateToken } = require("../utils/token");

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const u = { name, email, password };
  if (pic) u.pic = pic;

  const user = await User.create(u);

  if (user) {
    res.status(201).json({
      status: "success",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(500);
    throw new Error("Failed to create the user");
  }
});

exports.authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  } else if (user && (await user.comparePassword(password))) {
    return res.status(200).json({
      status: "success",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      },
    });
  } else {
    return res.status(401).json({
      status: "error",
      message: "Invalid Username or Password",
    });
  }
});
