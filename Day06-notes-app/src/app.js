const express = require("express");
const { default: mongoose } = require("mongoose");
const notesModel = require("./models/note.model");
const app = express();
app.use(express.json());

//create
app.post("/create", notesCreaateController);

app.get("/", (req, res) => {
  res.send("this server runnig successfully");
});

module.exports = app;
