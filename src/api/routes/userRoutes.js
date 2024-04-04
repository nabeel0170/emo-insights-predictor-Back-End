import { Router } from 'express';
import * as userController from '../controller/userController.js';
const userRoute = Router();

userRoute.post('/registerUser', userController.postRegisterUser)
userRoute.post('/loginUser', userController.postLoginUser)

export default userRoute;