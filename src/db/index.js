import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const conInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    )
    console.log(`mongodb connected Host ${conInstance.connection.host}`);
  } catch (error) {
    console.log("mongo connection failed", error);
    process.exit(1);
  }
};
export default connectDB;
