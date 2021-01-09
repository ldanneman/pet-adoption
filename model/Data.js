const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types;
const DataSchema = new Mongoose.Schema(
  {
    adopted: {
      type: Boolean,
      default: null,
    },
  },
  { strict: false }
);
module.exports = Mongoose.model("Data", DataSchema);
