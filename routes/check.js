const router = require("express").Router();
const verify = require("./verify");
const verifyAdmin = require("./verifyAdmin");

router.get("/", verify, (req, res) => {
  res.status(200).send("Access Granted");
});

router.get("/admin", [verify, verifyAdmin], async (req, res) => {
});

module.exports = router;
