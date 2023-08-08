var express = require("express");
const studentModel = require("../models/studentModel");
var router = express.Router();

//get: doc du lieu
router.get("/", async (req, res) => {
  var student = await studentModel.find();
  // res.send(student);
  res.render("student/studentList", { student });
});

module.exports = router;
