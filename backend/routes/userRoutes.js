const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
// import express from "express";
// import { registerUser } from "../controllers/userControllers";

const router = express.Router();

// router.route("/").get();
router.post("/", registerUser);
router.post("/login", authUser);
router.route("/:id").get();

module.exports = router;
