const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoDB_uri);
    console.log("mongoDB connection successfully");
  } catch (error) {
    console.log("this is error for mongoDB connection ", error);
  }
};

module.exports = connectDB;
