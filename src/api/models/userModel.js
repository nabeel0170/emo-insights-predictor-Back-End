import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    quote: { type: String },
  },
  { collection: "user-data" }
);

const userDataModel = mongoose.model("userData", User);

const userModel = {
  registerUser: async (userData) => {
    console.log("Received user data to sign up:", userData);
    try {
      const newUser = new userDataModel(userData);
      await newUser.save();
      console.log("User successfully saved to the database");
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  },

  loginUser: async (userData) => {
    const email = userData.email.toLowerCase();
    const password = userData.password;

    try {
      const user = await userDataModel.findOne({ email });

      if (!user) {
        throw new Error("User not found");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error("Invalid password");
      }
const id = user._id;
const name = user.name;
      return{
        success:true,
        userName: name,
        userId: id

      };
    } catch (error) {
      throw error;
    }
  },
  resetPassword: async (userId,newPassword) => {
    try {
      await userDataModel.updateOne(
        { _id: userId }, 
        { $set: { password: newPassword } }
      );
      return{
        success:true,
        message:"password reset successful"
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  },
};

export default userModel;
