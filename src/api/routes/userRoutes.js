import { Router } from 'express';
import * as userController from '../controller/userController.js';
const userRoute = Router();

userRoute.post('/registerUser', userController.postRegisterUser)
userRoute.post('/loginUser', userController.postLoginUser)
userRoute.put('/resetPassword', userController.resetPassword)

export default userRoute;