import express from "express";
import {
    DeleteUserController,
    GetAllUsersController, GoogleSignInController, GoogleSignUpController,
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
import {
    DeleteOrder,
    EditOrderStatus,
    GetAllOrders,
    GetOrderByUserId,
    PlaceOrder,
} from "../controller/OrderController.js";
const router = express.Router();

//Authentication
router.post("/signup", UserSignUpController);
router.post("/signin", UserSignInController);
router.post("/auth/verify", VerifyEmailController);
router.post("/auth/get-otp", StoreOtp);
router.post("/auth/google", GoogleSignUpController);

//Users
router.put("/update-user", UpdateUserController);
router.get("/get_all_products", GetAllProductsController);
router.get("/get_product/by_id", GetProductByIdController);
router.post("/place_order", PlaceOrder);
router.get("/get_order_by_user_id", GetOrderByUserId);

//admin
router.get("/get-all-users", GetAllUsersController);
router.delete("/delete-user", DeleteUserController);
router.post("/create_product", CreateProductController);
router.put("/update_product", UpdateProductController);
router.delete("/delete_product", DeleteProductController);
router.get("/get_all_orders", GetAllOrders);
router.delete("/delete_order", DeleteOrder);
router.put("/edit_order_status", EditOrderStatus);

export default router;
