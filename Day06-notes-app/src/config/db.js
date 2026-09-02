const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoDB_uri);
    console.log("mongoDB connected");
  } catch (error) {
    console.log("this error form mongoDB connection!", error);
  }
};

module.exports = connectDB;
