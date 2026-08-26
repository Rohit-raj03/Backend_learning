const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  isStudent: Boolean,
});

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
