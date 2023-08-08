var express = require("express");
const studentModel = require("../models/studentModel");
var router = express.Router();

//get: doc du lieu
router.get("/", async (req, res) => {
  var student = await studentModel.find();
  // res.send(student);
  res.render("student/studentList", { student });
});

router.get("/add", (req, res) => {
  res.render("student/studentAdd");
});

router.post("/add", async (req, res) => {
  await studentModel.create(req.body);
  res.redirect("/student");
});

router.get("/edit/:id", async (req, res) => {
  const student = await studentModel.findById(req.params.id);
  res.render("student/studentEdit", { student });
  // res.redirect("/student");
});

router.post("/edit/:id", async (req, res) => {
  await studentModel.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/student");
});

router.get("/delete/:id", async (req, res) => {
  await studentModel.findByIdAndDelete(req.params.id);
  res.redirect("/student");
});

module.exports = router;
