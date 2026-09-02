const express = require("express");
const { default: mongoose } = require("mongoose");
const notesModel = require("./models/note.model");
const notesCreaateController = require("./controllers/notes.controller");
const app = express();
app.use(express.json());

const notesRoutes = require("./routes/notes.routes");
const connectDB = require("./config/db");
connectDB();

app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("this server runnig successfully");
});

module.exports = app;
