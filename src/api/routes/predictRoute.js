import { Router } from 'express';
import * as  predictController  from './../controller/predictController.js';
const predictRoute = Router();

predictRoute.post('/predictText', predictController.predictText)

export default predictRoute;