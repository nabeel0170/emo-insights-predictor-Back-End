import mongoose from "mongoose";

export const dbCon = async () => {
  try {
    // MongoDB connection URL
    const uri = "mongodb://127.0.0.1:27017/emo-insights";
    await mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
