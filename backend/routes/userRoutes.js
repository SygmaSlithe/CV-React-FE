const express = require("express");
const {
  registerUser,
  authUser,
  getLeads,
  getUserById,
} = require("../controllers/userControllers");
// import express from "express";
// import { registerUser } from "../controllers/userControllers";

const router = express.Router();

// router.route("/").get();
router.post("/", registerUser);
router.post("/login", authUser);
router.route("/resume/:id").get(getUserById);
router.route("/leads").get(getLeads);

module.exports = router;
