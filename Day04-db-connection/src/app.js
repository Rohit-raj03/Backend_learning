const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("this server is runnig successfully");
});

module.exports = app;
