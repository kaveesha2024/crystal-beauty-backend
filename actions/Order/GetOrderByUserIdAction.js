import Order from "../../model/Order.js";
import { isParamsNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";

const GetOrderByUserIdAction = async (request, response) => {
    if (isUserNull(request.user)) {
        response.json({
            status: 403,
            message: "Forbidden: You do not have permission to access this resource.",
        });
        return;
    }
    if (isParamsNull(request.query.userId)) {
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    try {
        const orders = await Order.find({ userId: request.query.userId });
        if (orders.length === 0) {
            response.json({
                status: 404,
                message: "No orders found for this user.",
            });
            return;
        }
        response.json({
            status: 200,
            message: orders,
        });
    }catch (error) {
        response.json({
            status: 500,
            message: "Internal Server Error",
            error: error.message,
        });
        return;
    }
};
export default GetOrderByUserIdAction;