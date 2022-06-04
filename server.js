const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

const simCharacters = {
  name: "bob pancakes",
  gender: "male",
  age: "young adult",
  career: "caterer",
  traits: ["slob", "gloomy", "loner", "essense of flavor"],
  world: "willow creek",
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.get("/api", (req, res) => {
  res.json(simCharacters);
});

app.listen(process.env.PORT || PORT, function () {
  console.log(`The server is running on port ${PORT}`);
});
