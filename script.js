const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;
const dotenv = require("dotenv");
const verify = require("./routes/verify");
//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const dataRoute = require("./routes/data");
const checkRoute = require("./routes/check");
dotenv.config();

//Connect to DB
mongoose.set("useFindAndModify", false);
mongoose.connect(
  process.env.MONGODB_URI || process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to DB")
);
//middlewares
app.use(express.json());
app.use(cors());
// app.use(verify);

//Routes Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/data", dataRoute);
app.use("/api/check", checkRoute);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = 5000;
app.listen(process.env.PORT || port, () =>
  console.log(`Server is running on port ${port}`)
);
