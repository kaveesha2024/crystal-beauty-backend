import Order from "../../model/Order.js";
import { isAdmin, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";

const GetAllOrdersAction = async (request, response) => {
    if (isUserNull(request.user)||!isAdmin(request.user?.role)) {
        response.json({
            status: 403,
            message: "Forbidden: You do not have permission to access this resource.",
        });
        return;
    }
    try {
        const allOrders = await Order.find();
        if (allOrders.length > 0) {
            response.json({
                status: 200,
                message: allOrders
            });
            return;
        }
        else {
            response.json({
                status: 404,
                message: "No orders found",
            });
        }
    } catch (e) {
        response.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};
export default GetAllOrdersAction;