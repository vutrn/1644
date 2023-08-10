var express = require("express");
const studentModel = require("../models/studentModel");
var router = express.Router();

//get: doc du lieu
router.get("/", async (req, res) => {
  var student = await studentModel.find();
  // res.send(student);
  res.render("student/studentList", { student });
});

//--------------------------------------------------------------------------------

router.get("/add", (req, res) => {
  res.render("student/studentAdd");
});

router.post("/add", async (req, res) => {
  await studentModel.create(req.body);
  res.redirect("/student");
});

//--------------------------------------------------------------------------------

router.get("/edit/:id", async (req, res) => {
  const student = await studentModel.findById(req.params.id);
  res.render("student/studentEdit", { student });
  // res.redirect("/student");
});

router.post("/edit/:id", async (req, res) => {
  await studentModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/student");
});

//--------------------------------------------------------------------------------

router.get("/delete/:id", async (req, res) => {
  await studentModel.findByIdAndDelete(req.params.id);
  res.redirect("/student");
});

//--------------------------------------------------------------------------------

router.post("/search", async (req, res) => {
  // const keyword = req.body.keyword;
  const student = await studentModel.find({
    name: new RegExp(req.body.keyword, "i"),
  });
  res.render("student/studentList", { student });
});

//--------------------------------------------------------------------------------

router.get("/sort/gpa/asc", async (req, res) => {
  // const students = await studentModel.find().sort({ gpa: 1 });
  // res.render("student/studentList", { students });
  var students = await studentModel.find().sort({ gpa: 1 });
   res.render('student/studentList', { students: students });
});

router.get("/sort/gpa/desc", async (req, res) => {
  const students = await studentModel.find().sort({ gpa: -1 });
  res.render("student/studentList", { students });
});

router.get("/sort/dob/asc", async (req, res) => {
  const students = await studentModel.find().sort({ dob: 1 });
  res.render("student/studentList", { students });
});

router.get("/sort/dob/desc", async (req, res) => {
  const students = await studentModel.find().sort({ dob: -1 });
  res.render("student/studentList", { students });
});

//--------------------------------------------------------------------------------

module.exports = router;
