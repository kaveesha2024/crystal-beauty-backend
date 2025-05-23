import express from "express";
import { UserSignUpController, VerifiedEmailController } from "../controller/UserController.js";
const router = express.Router();

//Authentication
router.post("/signup", UserSignUpController);
router.post("/auth/verify", VerifiedEmailController);
//Users

//admin

export default router;
