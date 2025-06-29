import { isAdmin, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import Product from "../../model/Product.js";
import User from "../../model/User.js";
import Order from "../../model/Order.js";

const DashboardAction = async (request, response) => {
    if (!isAdmin(request.user.role)||isUserNull(request.user)){
        response.json({
            status: 401,
            message: "You are not authorized!"
        });
        return;
    }
    const numberOfProducts = await Product.countDocuments();
    const numberOfUsers = await User.countDocuments();
    const numberOfOrders = await Order.countDocuments();
    const latestProducts = await Product.find().sort({createdAt: -1}).limit(5);
    const latestUsers = await User.find().sort({createdAt: -1}).limit(6);
    const latestOrders = await Order.find().sort({createdAt: -1}).limit(6);
    response.json({
        status: 200,
        numberOfOrders,
        numberOfProducts,
        numberOfUsers,
        latestProducts,
        latestUsers,
        latestOrders
    });
    return;    
};
export default DashboardAction;