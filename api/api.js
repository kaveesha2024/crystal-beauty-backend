import express from "express";
import { UserSignUpController } from "../controller/UserController.js";
import { GetOtpController, VerifyEmailController } from "../controller/VerifyController.js";
const router = express.Router();

//Authentication
router.post("/signup", UserSignUpController);
router.post("/auth/verify", VerifyEmailController);
router.get("/auth/get-otp", GetOtpController);
//Users

//admin

export default router;
