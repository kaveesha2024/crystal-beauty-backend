import { isAdmin, isBodyNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import Order from "../../model/Order.js";

const EditOrderStatusAction = async (request, response) => {
    if (!isAdmin(request.user)&&isBodyNull(request.body)&&isUserNull(request.user)){
        response.json({
            status: 401,
            message: "Unauthorized",
        })
    }
    if (request.body?.orderId&&request.body?.status){
        try {
            const res = await Order.updateOne({orderId: request.body?.orderId}, {status: request.body?.status});
            if (!res) response.json({
                status: 500,
                message: "Something went wrong. Please try again later.",
            })
            response.json({
                status: 200,
                message: "Order status updated"
            });
        }catch (error) {
            response.json({
                status: 500,
                message: "Internal Server Error",
            });
        }
    }else {
        response.json({
            status: 400,
            message: "Bad Request",
        });
    }
};
export default EditOrderStatusAction;