import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(`${process.env.MONGO_URI}`);

  if (conn) {
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.bgGreen.underline.bold
    );
  } else {
    console.log("MongoDB Not Connected");
  }
};

module.exports = connectDB;
