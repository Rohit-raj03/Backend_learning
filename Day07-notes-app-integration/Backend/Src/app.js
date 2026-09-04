const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const notesRouter = require("./routes/router.note");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());

app.use("/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("this is server ");
});


module.exports = app;
