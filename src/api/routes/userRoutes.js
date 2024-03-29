import { Router } from 'express';
import * as userController from '../controller/userController.js';
const userRoute = Router();

userRoute.post('/registerUser', userController.postRegisterUser)

export default userRoute;