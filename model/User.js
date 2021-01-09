const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  email: {
    type: String,
    required: true,
    min: 10,
    max: 40,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1000,
  },
  role: {
    type: String,
    default: "user",
  },
  petId: {
    type: String,
    default: null,
  },
  adoptionRequest: {
    type: String,
    default: null,
  },
  adoptedPet: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
