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
    CreateProductController, DeleteProductController,
    GetAllProductsController, GetProductByIdController,
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
router.get("/get_product/by_id", GetProductByIdController);
//admin
router.get("/get-all-users", GetAllUsersController);
router.delete("/delete-user", DeleteUserController);
router.post("/create_product", CreateProductController);
router.put("/update_product", UpdateProductController);
router.delete("/delete_product", DeleteProductController);

export default router;
