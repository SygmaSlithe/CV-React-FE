const express = require("express");
const achievements = require("./data/achievements");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("GET API is running...");
});

// fetch all
app.get("/api/achs", (req, res) => {
  res.json(achievements);
});

// fetch by id
app.get("/api/achs/:id", (req, res) => {
  //   console.log(req.params);
  const achievement = achievements.find(
    (ach) => ach._id.toString() === req.params.id
  );
  res.send(achievement);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
