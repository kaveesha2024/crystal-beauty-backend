import {isBodyNull, isUserNull} from "../../utility/reUsableFunctions/reUsableFunctions.js";
import random from "../../utility/random/random.js";
import Product from "../../model/Product.js";
import Order from "../../model/Order.js";

const PlaceOrderAction = async (request, response) => {
    if (isUserNull(request.user)||isBodyNull(request.body)) {
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    if (!request.body?.products||request.body?.address===''||request.body?.phoneNumber==='') {
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    //handle name
    const { body: orderDetails } = request;
    const products = [];
    let totalPrice = 0;
    for (let i=0; i<orderDetails.products.length; i++) {
        const res = await Product.findOne({ productId: request.body.products[i].productId});

        if ( res || res.stock > 0 ) {
            totalPrice = totalPrice + res.price * orderDetails.products[i].quantity;
            products.push({
                productId: res.productId,
                quantity: orderDetails.products[i].quantity,
                price: res.price,
                productName: res.productName,
            });
        }
    }
    const newOrder = new Order({
        userId: request.user.userId,
        products,
        totalPrice: totalPrice + 300,
        orderId: "CBCO" + random(10),
        address: orderDetails.address,
        phoneNumber: orderDetails.phoneNumber,
        customerName: orderDetails.customerName ? orderDetails.customerName : request.user.firstName,
    });
    try {
        const res = await newOrder.save();
        if (res){
            response.json({
                status: 200,
                message: "Order placed",
            });
            return;
        }
        response.json(
            {
                status: 500,
                message: "Something went wrong. Please try again later.",
            }
        )
    }catch (e){
        response.json(
            {
                status: 500,
                message: "Internal Server Error",
            }
        )
    }
};
export default PlaceOrderAction;