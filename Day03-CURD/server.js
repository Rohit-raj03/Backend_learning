const express = require("express");
const app = express();

const port = 3000;
app.use(express.json());
let students = [];

//create
app.post("/create", (req, res) => {
  let newStudent = req.body;
  students.push(newStudent);
  res.send(newStudent, "this student register successful");
});
//read
app.get("/", (req, res) => {
  res.send(students, "server runnig successfuly");
});

//delete
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const newArray = students.filter((student) => student.id !== id);
  students = newArray;
  res.send("student deleted successfully");
});

app.listen(port, () => {
  console.log(`this server running on port ${port}`);
});
