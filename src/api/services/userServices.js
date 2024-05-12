import userModel from "../models/userModel.js";

export const registerUser = async (userData) => {
  try {
    await userModel.registerUser(userData);
    return { success: true, message: "User  registered successfully" };
  } catch (error) {
    console.log("Error in Register User : ", error);
    throw new Error("Failed to register user");
  }
};
export const loginUser = async (userData) => {
  try {
    await userModel.loginUser(userData);
    return { success: true, message: "User  logged in successfully" };
  } catch (error) {
    console.log("Error in logging User : ", error);
    throw new Error("Failed to log in user");
  }
};
