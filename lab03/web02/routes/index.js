var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var country = "VN";
  var sports = ["football", "basketball", "tennis"];
  res.render("index", {
    title: "Express",
    country: country,
    sports: sports,
  });
});

router.get("/hn", (req, res) => {
  res.render("hanoi");
});

module.exports = router;
