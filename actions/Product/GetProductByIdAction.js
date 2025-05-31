import { isParamsNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import Product from "../../model/Product.js";

const GetProductByIdAction = async (request, response) => {
    if (isParamsNull(request.query.productId)) {
        response.json(
            {
                status: 400,
                message: "Bad Request",
            }
        );
        return;
    }
    const id = request.query.productId;
    try {
        const product = await Product.findOne({productId: id});
        if (product){
            response.json(
                {
                    status: 200,
                    message: product,
                }
            );
        }
        else{
            response.json(
                {
                    status: 404,
                    message: "Product not found",
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
export default GetProductByIdAction;