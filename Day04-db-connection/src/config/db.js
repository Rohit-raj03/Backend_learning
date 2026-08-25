const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rohitrajchy03_db_user:cohort12345@cohort3.mphlkiz.mongodb.net/",
    );
    console.log("mongoDB connected");
  } catch (error) {
    console.log("the error from mongosDB connection", error);
  }
};

module.exports = connectDB;