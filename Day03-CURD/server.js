const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let students = [];

//Create
app.post("/create", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.send(newStudent);
});

//read 
app.get("/", (req, res) => {
  res.send(students);
  res.send("This server runnig successfuly");
});

//Delete 
app.delete("/delete/:id",(req,res)=>{
    const id = 2 ;
})

app.listen(port, () => {
  console.log(`this server is running on port ${port}`);
});
