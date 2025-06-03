import { isAdmin, isParamsNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import Order from "../../model/Order.js";

const DeleteOrderAction = async (request, response) => {
    if (!isAdmin(request.user?.role)||isUserNull(request.user)) {
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    if (isParamsNull(request.query?.orderId)){
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    try {
        const res = await Order.deleteOne({ orderId: request.query?.orderId });
        if (res){
            response.json({
                status:200,
                message: "Order deleted"
            });
        }
        else{
            response.json({
                status: 500,
                message: "Something went wrong. Please try again later.",
            });
        }
    }catch (error) {
        response.json({
            status: 500,
        })
    }
};
export default DeleteOrderAction;