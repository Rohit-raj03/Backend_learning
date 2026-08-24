const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3000;

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rohitrajchy03_db_user:cohort12345@cohort3.mphlkiz.mongodb.net/",
    );
  } catch (error) {
    console.log("the error from mongosDB connection", error);
  }
};

app.get("/", (req, res) => {
  res.send("this server is runnig successfully");
});

app.listen(port, () => {
  console.log(`this server is runnig port ${port}`);
});
