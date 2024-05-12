import mongoose from 'mongoose';

const  User = new mongoose.Schema({
  name: {type: String, required: true},
  email: { type: String , unique : true ,required:true },
  password: {type:String,required:true},
  quote:{type:String}
},
{collection:'user-data'});

const model = mongoose.model('userData',User);

const userModel = {
    registerUser:async (userData) => {
      console.log('Received user data to sign up:', userData);
      try{
        const newUser = new model(userData);
        await newUser.save();
        console.log('User successfully saved to the database');
      }
      catch (error){
        console.error('Error registering user:', error);
        throw error;
      }
    },
    loginUser:async (userData) => {
      console.log('Received user data to log in:', userData);
    }
  };
  
  export default userModel;