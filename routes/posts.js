const router = require("express").Router();
const verify = require("./verify");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const Data = require("../model/Data");

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/user-save-pet", verify, async (req, res) => {
  try {
    const token = req.header("auth-token");
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = await User.findById(decoded._id);
    const petId = req.body.params;
    User.findOneAndUpdate(
      { _id: userId },
      { petId: petId },
      function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/user-unsave-pet", verify, async (req, res) => {
  try {
    const token = req.header("auth-token");
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = await User.findById(decoded._id);
    const petId = req.body.petId;
    User.findOneAndUpdate(
      { _id: userId },
      { petId: null },
      function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/user-request-adoption", verify, async (req, res) => {
  try {
    const token = req.header("auth-token");
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = await User.findById(decoded._id);
    const petId = req.body.petId;
    User.findOneAndUpdate(
      { _id: userId },
      { adoptionRequest: petId },
      function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/user-adopted", verify, (req, res) => {
  const userId = req.body.userId;
  const petId = req.body.petId;
  User.updateOne(
    { _id: userId },
    { adoptedPet: petId, petId: null, adoptionRequest: null },
    function (err, result) {
      if (err) res.send(err);
      Data.updateOne({ _id: petId }, { adopted: true }, function (err, result) {
        if (err) res.send(err);
        else {
          // Redirect
        }
      });
    }
  );
});

module.exports = router;
