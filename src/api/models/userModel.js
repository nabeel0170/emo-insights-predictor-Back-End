import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const  User = new mongoose.Schema({
  name: {type: String, required: true},
  email: { type: String , unique : true ,required:true },
  password: {type:String,required:true},
  quote:{type:String}
},
{collection:'user-data'});

const userDataModel = mongoose.model('userData',User);

const userModel = {
    registerUser:async (userData) => {
      console.log('Received user data to sign up:', userData);
      try{
        const newUser = new userDataModel(userData);
        await newUser.save();
        console.log('User successfully saved to the database');
      }
      catch (error){
        console.error('Error registering user:', error);
        throw error;
      }
    },
    loginUser:async (userData) => {
      const email = userData.email;
      const password = userData.password;

      try {
        const user = await userDataModel.findOne({email});

        if(!user){
          throw new Error('User not found');
        }

        const passwordMatch = await bcrypt.compare(password,user.password);
        if (!passwordMatch){
          throw new Error('Invalid password');
        } 

          return true;
      } catch (error) {
        console.error('Error logging in user:', error);
      throw error;
      }
    }
  };
  
  export default userModel;