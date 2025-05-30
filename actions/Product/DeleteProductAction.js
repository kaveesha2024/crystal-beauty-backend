import { isAdmin, isParamsNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import Product from "../../model/Product.js";

const DeleteProductAction = async (request, response) => {
    if (isUserNull(request.user)||!isAdmin(request.user?.role)){
        response.json(
            {
                status: 401,
                message: "Unauthorized",
            }
        );
        return;
    }
    if (isParamsNull(request.query?.productId)){
        response.json(
            {
                status: 400,
                message: "Bad Request",
            }
        );
        return;
    }
    try {
        const res = await Product.deleteOne({productId: request.query?.productId});
        if (res){
            response.json(
                {
                    status: 200,
                    message: "Product deleted",
                }
            );
        }
        else{
            response.json(
                {
                    status: 500,
                    message: "Something went wrong. Please try again later.",
                }
            );
        }
    } catch (error) {
        response.json(
            {
                status: 500,
                message: "Internal Server Error",
            }
        );
    }
};
export default DeleteProductAction;