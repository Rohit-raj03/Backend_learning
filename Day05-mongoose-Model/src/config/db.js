const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/students");
    console.log("mongoDB connect successfully");
  } catch (error) {
    console.log("this is mongoDB connection error", error);
  }
};

module.exports = dbConnect;
