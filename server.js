const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

const simCharacters = {
  bob: {
    name: "bob pancakes",
    gender: "male",
    age: "young adult",
    career: "caterer",
    traits: ["slob", "gloomy", "loner", "essense of flavor"],
    world: "willow creek",
  },
  eliza: {
    name: "eliza pancakes",
    gender: "female",
    age: "young adult",
    career: "unemployed",
    traits: ["materialistic", "neat", "perfectionist", "business savvy"],
    world: "willow creek",
  },
  dina: {
    name: "dina caliente",
    gender: "female",
    age: "young adult",
    career: "assistant dishwasher",
    traits: ["active", "ambitious", "romantic", "essense of flavor"],
    world: "oasis springs",
  },
  nina: {
    name: "nina caliente",
    gender: "female",
    age: "young adult",
    career: "unemployed",
    traits: ["lazy", "hot headed", "romantic", "dastardly"],
    world: "willow creek",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.get("/api/:thesims", (req, res) => {
  const sims = req.params.thesims;
  res.json(simCharacters[sims]);

  if (simCharacters[sims]) {
    res.json(simCharacters[sims]);
  } else {
    console.log("error");
  }
});

app.listen(process.env.PORT || PORT, function () {
  console.log(`The server is running on port ${PORT}`);
});
