import express from 'express';
import { SignUpController } from '../controller/UserController.js';
const router = express.Router();

router.post('/signup', SignUpController);

export default router;
