import express from 'express';
import { UserSignUpController } from '../controller/UserController.js';
const router = express.Router();

router.post('/signup', UserSignUpController);

export default router;
