import express from "express";
import { UserSignUpController } from "../controller/UserController.js";
const router = express.Router();

//Authentication
router.post("/signup", UserSignUpController);

//Users

//admin

export default router;
