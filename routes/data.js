const router = require("express").Router();
const Data = require("../model/Data");
const jwt = require("jsonwebtoken");
const verify = require("./verify");
const User = require("../model/User");

router.post("/add", verify, async (req, res, next) => {
  const pet = new Data(req.body);
  try {
    const savedPet = await pet.save();
    res.send("Pet Added Successfully");
  } catch (err) {
    res.status(400).send("there was an err");
  }
});

router.get("/", async (req, res) => {
  const petsData = await Data.find({ $nor: [{ adopted: true }] });
  res.send(petsData);
});

router.get("/mypet", verify, async (req, res) => {
  const token = req.header("auth-token");
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  const user = await User.findById(decoded._id);
  const userPetId = user.petId || user.adoptedPet;
  try {
    const userPetData = await Data.findById(userPetId);
    res.send(userPetData);
  } catch {
    res.send("NoPet");
  }
});

router.get("/users", async (req, res) => {
  const usersData = await User.find({});
  res.send(usersData);
});
module.exports = router;
