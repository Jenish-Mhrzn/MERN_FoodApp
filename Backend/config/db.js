import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "url",
    );
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error while connecting DB", error);
  }
};

export default connectDB;
