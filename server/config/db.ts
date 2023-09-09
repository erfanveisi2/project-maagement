import { cyan } from "colors";

const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  if (conn) {
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } else {
    console.log("MongoDB Not Connected");
  }
};

module.exports = connectDB;
