const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: String,
  dob: String,
  gender: String,
  department: String,
  class: String,
  image: String,
  gpa: Number,
  studentYear: Number,
});

module.exports = mongoose.model("student", studentSchema, "student")