const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var text = "Mobile evolution";
  var year = 2023;
  res.render("mobile/index", { text, year });
});

router.get("/list", (req, res) => {
  var number = [1, 2, 3];
  var name = ["phone1", "phone2", "phone3"];

  res.render("mobile/list", { number, name });
});

module.exports = router;
