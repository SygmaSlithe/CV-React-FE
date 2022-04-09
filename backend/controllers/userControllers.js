const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const {
    fname,
    lname,
    userId,
    password,
    contact,
    eduDetail,
    address,
    additionalDetail,
    pic,
  } = req.body;

  const UserAlreadyExists = await User.findOne({ userId });

  if (UserAlreadyExists) {
    res.status(400); //error code 400
    throw new Error("User " + userId + " Already Exists.");
  }

  const user = await User.create({
    fname,
    lname,
    address,
    additionalDetail,
    userId,
    password,
    contact,
    eduDetail,
    pic,
  });

  if (user) {
    //success code
    res.status(201).json({
      _id: user._id,
      fname: user.fname,
      userId: user.userId,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error: User Creation Failed!!!");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { userId, password } = req.body;

  const user = await User.findOne({ userId });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      fname: user.fname,
      userId: user.userId,
      isAdmin: user.isAdmin,
      pic: user.pic,
      points: user.points,
      token: generateToken(user._id),
    });
    // res.json({ ...user });
  } else {
    res.status(400);
    throw new Error("Error: Invalid User ID or Password!!!");
  }
});

const getLeads = asyncHandler(async (req, res) => {
  const leadList = await User.find({}, ["userId", "fname", "lname", "points"])
    .sort({ points: "descending" })
    .limit(10);
  res.json(leadList);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User Data Not Found." });
  }
});

module.exports = { registerUser, authUser, getLeads, getUserById };
