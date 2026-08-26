const app = require("./src/app");
const Student = require("./src/model/student.model");
const port = 3000;

//create
app.post("/create", async (req, res) => {
  const newStudent = await Student.create(req.body);

  res.status(201).json({
    message: " Student create successfully",
    student: newStudent,
  });
});

//read
app.get("/students", async (req, res) => {
  let students = await Student.find();

  res.status(201).json({
    message: "Studets data fatch successfully",
    student: students,
  });
});

app.listen(port, () => {
  console.log(`this server is runnig on port ${port}`);
});
