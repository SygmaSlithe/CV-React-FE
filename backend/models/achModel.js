const mongoose = require("mongoose");

const achSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    achName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    selfAttested: {
      type: Boolean,
      required: true,
    },
    points: {
      type: Number,
      // required: true,
      default: 0,
    },
    certificate: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ach = mongoose.model("Achievement", achSchema);
module.exports = Ach;
