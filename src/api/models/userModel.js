
const userModel = {
    registerUser:async (userData) => {
      console.log('Received user data to sign up:', userData);
    },
    loginUser:async (userData) => {
      console.log('Received user data to log in:', userData);
    }
  };
  
  export default userModel;