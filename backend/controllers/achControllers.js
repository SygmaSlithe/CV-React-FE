const Ach = require("../models/achModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const getPoints = require("../utils/getPoints");

const getAchs = asyncHandler(async (req, res) => {
  // use of middleware: to find, we need to pass id of User, but can't tell user to enter it manually, oalso, we gotta protect db from unauth access, so we create a middleware to achieve that
  const ach = await Ach.find({ user: req.user._id });
  res.json(ach);
});

const createAch = asyncHandler(async (req, res) => {
  const { achName, category, subCategory, desc, selfAttested } = req.body;

  if (!achName || !category || !subCategory || !desc || !selfAttested) {
    res.status(400);
    throw new Error("Please Fill All Details.");
  } else {
    const points = getPoints(category, subCategory);
    const ach = new Ach({
      user: req.user._id,
      achName,
      category,
      subCategory,
      desc,
      selfAttested,
      points,
    });
    const createdAch = await ach.save();
    const user = await User.findById(req.user._id);
    if (user) {
      let totalUserPoints = user.points;
      totalUserPoints = totalUserPoints + points;
      await User.findByIdAndUpdate(user._id, { points: totalUserPoints });
    } else {
      res.status(400);
      throw new Error("Error: User not found!!!");
    }
    res.status(201).json(createdAch);
  }
});

const getAchById = asyncHandler(async (req, res) => {
  const ach = await Ach.findById(req.params.id);

  if (ach) {
    res.json(ach);
  } else {
    res.status(404).json({ message: "Achievement Not Found." });
  }
});

const updateAch = asyncHandler(async (req, res) => {
  //new values
  const { achName, category, subCategory, desc, selfAttested } = req.body;

  const ach = await Ach.findById(req.params.id);
  if (ach.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this action.");
  }

  if (ach) {
    //update values
    let points = getPoints(category, subCategory);

    ach.achName = achName;
    ach.category = category;
    ach.subCategory = subCategory;
    ach.desc = desc;
    ach.selfAttested = selfAttested;
    let oldPoints = ach.points;
    ach.points = points;

    const updatedAch = await ach.save();

    const curr_user = await User.findById(req.user._id);
    if (curr_user) {
      let totalUserPoints = curr_user.points;
      totalUserPoints = totalUserPoints - oldPoints;
      totalUserPoints = totalUserPoints + points;
      await User.findByIdAndUpdate(curr_user._id, { points: totalUserPoints });
    } else {
      res.status(400);
      throw new Error("Error: User not found!!!");
    }
    res.json(updatedAch);
  } else {
    res.status(404);
    throw new Error("Achievement Not Found.");
  }
});

const deleteAch = asyncHandler(async (req, res) => {
  const ach = await Ach.findById(req.params.id);

  if (ach) {
    if (ach.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You cannot perform this action.");
    }
    let points = ach.points;
    await ach.remove();
    const user = await User.findById(req.user._id);
    if (user) {
      let totalUserPoints = user.points;
      totalUserPoints = totalUserPoints - points;
      await User.findByIdAndUpdate(user._id, { points: totalUserPoints });
    } else {
      res.status(400);
      throw new Error("Error: User not found!!!");
    }
    res.json({ message: "Note Removed." });
  } else {
    res.status(404);
    throw new Error("No Achievement found.");
  }
});

module.exports = { getAchs, createAch, getAchById, updateAch, deleteAch };
