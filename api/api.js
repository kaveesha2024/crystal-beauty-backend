import express from "express";
import {
    DeleteUserController,
    GetAllUsersController,
    UpdateUserController,
    UserSignInController,
    UserSignUpController,
} from "../controller/UserController.js";
import {  StoreOtp, VerifyEmailController } from "../controller/VerifyController.js";
import {
    CreateProductController,
    GetAllProductsController,
    UpdateProductController,
} from "../controller/ProductController.js";
const router = express.Router();

//Authentication
router.post("/signup", UserSignUpController);
router.post("/signin", UserSignInController);
router.post("/auth/verify", VerifyEmailController);
router.post("/auth/get-otp", StoreOtp);

//Users
router.put("/update-user", UpdateUserController);
router.get("/get_all_products", GetAllProductsController);
//admin
router.get("/get-all-users", GetAllUsersController);
router.delete("/delete-user", DeleteUserController);
router.post("/create_product", CreateProductController);
router.put("/update_product", UpdateProductController);

export default router;
