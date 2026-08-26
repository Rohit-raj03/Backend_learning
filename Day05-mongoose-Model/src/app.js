const express = require("express");
const dbConnect = require("./config/db");
const app = express();

dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("this server running successfully!");
});

module.exports = app;
