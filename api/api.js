import express from "express";
import { GetAllUsersController, UserSignInController, UserSignUpController } from "../controller/UserController.js";
import { GetOtpController, VerifyEmailController } from "../controller/VerifyController.js";
const router = express.Router();

//Authentication
router.post("/signup", UserSignUpController);
router.post("/signin", UserSignInController);
router.post("/auth/verify", VerifyEmailController);
router.get("/auth/get-otp", GetOtpController);

//Users
router.get("/get-all-users", GetAllUsersController);
//admin

export default router;
