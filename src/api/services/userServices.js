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
  const result = await userModel.loginUser(userData);
    return(result);
  } catch (error) {
    console.error("Error in loginUser service:", error);
    throw error;
  }
};
export const resetUserPassword = async (userId,newPassword) => {
  try {
  const result = await userModel.resetPassword(userId,newPassword);
    return(result);
  } catch (error) {
    console.error("Error in loginUser service:", error);
    throw error;
  }
};
