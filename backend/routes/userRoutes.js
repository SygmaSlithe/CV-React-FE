const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
// import express from "express";
// import { registerUser } from "../controllers/userControllers";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.get("/");

module.exports = router;
